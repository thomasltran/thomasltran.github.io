<script>
    let { data } = $props();
    
    // Format date if available using derived state, treating input as UTC
    let formattedDate = $derived(
        data.metadata.date 
            ? (() => {
                const d = new Date(data.metadata.date + 'T00:00:00Z'); // Force UTC interpretation
                return d.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC' // Display in UTC to match input
                });
            })()
            : null
    );
</script>

<svelte:head>
    <title>{data.metadata.title || data.slug} - Thomas Tran</title>
    {#if data.metadata.summary}
        <meta name="description" content={data.metadata.summary} />
    {/if}
</svelte:head>

<div class="space-y-6">
    <!-- Back button
    <a 
        href="/gym"
        class="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity hover:text-primary-500"
    >
        ← Back to Gym
    </a> -->
    
    <!-- Post header -->
    <header class="space-y-3 pb-6 border-b border-surface-500/20">
        <h1 class="h1 font-bold tracking-tight">
            {data.metadata.title || data.slug}
        </h1>
        
        <div class="flex flex-wrap items-center gap-4 text-sm opacity-70">
            {#if formattedDate}
                <time>{formattedDate}</time>
            {/if}
            
            {#if data.metadata.tags && data.metadata.tags.length > 0}
                <div class="flex flex-wrap gap-2">
                    {#each data.metadata.tags as tag}
                        <span class="px-2 py-1 rounded bg-surface-500/10 text-xs">
                            {tag}
                        </span>
                    {/each}
                </div>
            {/if}
        </div>
        
        {#if data.metadata.summary}
            <p class="text-lg opacity-80 italic">
                {data.metadata.summary}
            </p>
        {/if}
    </header>
    
    <!-- Post content -->
    <article class="markdown-content">
        {#if data.content}
            {@const Content = data.content}
            <Content />
        {/if}
    </article>
    
    <!-- Navigation footer -->
    <footer class="pt-8 mt-12 border-t border-surface-500/20">
        <a 
            href="/gym"
            class="inline-flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity hover:text-primary-500"
        >
            ← Back to Gym
        </a>
    </footer>
</div>