<script>
    /**
     * PostCard component for displaying blog post previews
     * @prop {string} slug - Post slug for URL
     * @prop {string} title - Post title
     * @prop {string} summary - Post summary/excerpt
     * @prop {string} date - Post date (will be formatted)
     * @prop {string} category - Post category (tech or gym)
     * @prop {Array<string>} tags - Optional array of tags
     */
    let { slug, title, summary, date, category, tags = [] } = $props();
    
    // Format date using derived state, treating input as UTC to avoid timezone shifts
    let formattedDate = $derived(
        (() => {
            const d = new Date(date + 'T00:00:00Z'); // Force UTC interpretation
            return d.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC' // Display in UTC to match input
            });
        })()
    );
</script>

<a 
    href="/{category}/{slug}"
    class="block group"
    data-sveltekit-preload-data="hover"
>
    <article class="p-6 rounded-lg border border-surface-500/20 hover:border-primary-500/40 transition-all duration-200 hover:shadow-lg bg-surface-50/5 hover:bg-surface-50/10">
        <div class="space-y-3">
            <div>
                <h2 class="text-xl font-bold">
                    {title}
                </h2>
                <time class="text-sm opacity-60 mt-1 block">
                    {formattedDate}
                </time>
            </div>
            
            {#if summary}
                <p class="text-base opacity-80 leading-relaxed">
                    {summary}
                </p>
            {/if}
            
            {#if tags && tags.length > 0}
                <div class="flex flex-wrap gap-2 pt-2">
                    {#each tags as tag}
                        <span class="text-xs px-2 py-1 rounded bg-surface-500/10 opacity-70">
                            {tag}
                        </span>
                    {/each}
                </div>
            {/if}
        </div>
    </article>
</a>