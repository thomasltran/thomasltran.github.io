<script>
    import PostCard from '$lib/components/PostCard.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
    
    let { data } = $props();
</script>

<svelte:head>
    <title>Tech Posts - Thomas Tran</title>
    <meta name="description" content="Technical writing and tutorials on software engineering, systems programming, and more." />
</svelte:head>

<div class="space-y-8">
    <header class="space-y-2">
        <p class="text-lg opacity-80">
            Summaries and discussions of papers.
        </p>
    </header>
    
    {#if data.posts.length > 0}
        <div class="space-y-4">
            {#each data.posts as post}
                <PostCard {...post} />
            {/each}
        </div>
        
        <Pagination pagination={data.pagination} baseUrl="/tech" />
    {:else}
        <div class="text-center py-12 opacity-60">
            <p class="text-lg">No posts yet. Check back soon!</p>
        </div>
    {/if}
</div>
