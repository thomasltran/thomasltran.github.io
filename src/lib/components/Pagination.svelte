<script>
    /**
     * Pagination component
     * @prop {Object} pagination - Pagination data from paginatePosts
     * @prop {string} baseUrl - Base URL for pagination links (e.g., '/tech' or '/gym')
     */
    let { pagination, baseUrl } = $props();
    
    // Generate array of page numbers to display
    function getPageNumbers(currentPage, totalPages) {
        const delta = 2; // Number of pages to show on each side of current page
        const range = [];
        const rangeWithDots = [];
        
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                range.push(i);
            }
        }
        
        let prev = 0;
        for (const i of range) {
            if (i - prev === 2) {
                rangeWithDots.push(prev + 1);
            } else if (i - prev !== 1) {
                rangeWithDots.push('...');
            }
            rangeWithDots.push(i);
            prev = i;
        }
        
        return rangeWithDots;
    }
    
    let pageNumbers = $derived(getPageNumbers(pagination.currentPage, pagination.totalPages));
</script>

{#if pagination.totalPages > 1}
    <nav class="flex justify-center items-center gap-2 mt-8" aria-label="Pagination">
        <!-- Previous button -->
        {#if pagination.hasPrevPage}
            <a
                href="{baseUrl}?page={pagination.currentPage - 1}"
                class="px-4 py-2 rounded border border-surface-500/20 hover:border-primary-500/40 hover:bg-surface-50/10 transition-all"
                data-sveltekit-preload-data="hover"
            >
                ←
            </a>
        {:else}
            <span class="px-4 py-2 rounded border border-surface-500/10 opacity-30 cursor-not-allowed">
                ←
            </span>
        {/if}
        
        <!-- Page numbers -->
        <div class="flex gap-1">
            {#each pageNumbers as pageNum}
                {#if pageNum === '...'}
                    <span class="px-3 py-2 opacity-50">...</span>
                {:else if pageNum === pagination.currentPage}
                    <span class="px-3 py-2 rounded bg-primary-500 text-white font-semibold">
                        {pageNum}
                    </span>
                {:else}
                    <a
                        href="{baseUrl}?page={pageNum}"
                        class="px-3 py-2 rounded hover:bg-surface-50/10 border border-transparent hover:border-surface-500/20 transition-all"
                        data-sveltekit-preload-data="hover"
                    >
                        {pageNum}
                    </a>
                {/if}
            {/each}
        </div>
        
        <!-- Next button -->
        {#if pagination.hasNextPage}
            <a
                href="{baseUrl}?page={pagination.currentPage + 1}"
                class="px-4 py-2 rounded border border-surface-500/20 hover:border-primary-500/40 hover:bg-surface-50/10 transition-all"
                data-sveltekit-preload-data="hover"
            >
                →
            </a>
        {:else}
            <span class="px-4 py-2 rounded border border-surface-500/10 opacity-30 cursor-not-allowed">
                →
            </span>
        {/if}
    </nav>
{/if}
