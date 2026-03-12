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
    <header class="space-y-6 pb-8 mb-8 border-b border-surface-500/20">
        <h1 class="h1 font-heading font-bold tracking-tight text-4xl sm:text-5xl text-surface-900 dark:text-surface-50">
            {data.metadata.title || data.slug}
        </h1>
        
        <div class="flex flex-wrap items-center gap-4 text-sm text-surface-600 dark:text-surface-400 font-medium">
            {#if formattedDate}
                <time class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {formattedDate}
                </time>
            {/if}
            
            {#if data.metadata.tags && data.metadata.tags.length > 0}
                <div class="flex flex-wrap gap-2">
                    {#each data.metadata.tags as tag}
                        <span class="px-2.5 py-1 rounded-full bg-surface-200 dark:bg-surface-800 border border-surface-500/20 text-xs font-medium shadow-sm">
                            {tag}
                        </span>
                    {/each}
                </div>
            {/if}
        </div>
        
        {#if data.metadata.summary}
            <p class="text-xl text-surface-700 dark:text-surface-300 font-light leading-relaxed pt-2">
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