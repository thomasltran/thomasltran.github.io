<script>
    import { onMount } from 'svelte';
    
    let { 
        words = "", 
        className = "",
        children = undefined
    } = $props();
    
    // Split the text into individual words
    let wordsArray = $derived(words.split(" "));
    
    let container;
    let isVisible = $state(false);
    
    onMount(() => {
        isVisible = true;
    });
</script>

<div class="font-bold {className}" bind:this={container}>
    <div class="leading-snug tracking-tight">
        {#each wordsArray as word, idx}
            <span 
                class="inline-block opacity-0 translate-y-2 dark:text-surface-50 text-surface-900"
                style="
                    animation: {isVisible ? 'textGenerate 0.5s ease forwards' : 'none'};
                    animation-delay: {idx * 0.15}s;
                "
            >
                {word}&nbsp;
            </span>
        {/each}
        
        <!-- Optional cursor/emoji slot at the end -->
        {#if children}
            <span 
                class="inline-block opacity-0 translate-y-2"
                style="
                    animation: {isVisible ? 'textGenerate 0.5s ease forwards' : 'none'};
                    animation-delay: {wordsArray.length * 0.15}s;
                "
            >
                {@render children()}
            </span>
        {/if}
    </div>
</div>
