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
    class="block group outline-none"
    data-sveltekit-preload-data="hover"
>
    <article class="relative p-7 rounded-2xl border border-surface-500/20 bg-surface-50/40 dark:bg-surface-900/40 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-surface-500/50 hover:-translate-y-1.5 overflow-hidden">
        
        <div class="relative z-10 space-y-4">
            <div>
                <h2 class="text-2xl font-heading font-bold text-surface-900 dark:text-surface-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {title}
                </h2>
                <time class="text-sm font-medium text-surface-500 dark:text-surface-400 mt-2 block">
                    {formattedDate}
                </time>
            </div>
            
            {#if summary}
                <p class="text-base text-surface-700 dark:text-surface-300 leading-relaxed font-light line-clamp-3">
                    {summary}
                </p>
            {/if}
            
            {#if tags && tags.length > 0}
                <div class="flex flex-wrap gap-2 pt-3">
                    {#each tags as tag}
                        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-200 dark:bg-surface-800 text-surface-700 dark:text-surface-300 border border-surface-500/20 shadow-sm">
                            {tag}
                        </span>
                    {/each}
                </div>
            {/if}
        </div>
    </article>
</a>