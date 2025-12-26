<script>
    import './layout.css';
    import '$lib/styles/markdown.css';
    
	import favicon from '$lib/assets/favicon.ico';
    
    import githubIcon from '$lib/assets/github-mark.svg';
    import linkedinIcon from '$lib/assets/linkedin.svg';

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="container mx-auto px-4 py-8 md:py-12 max-w-[693px]">
    
    <nav class="flex gap-6 mb-8 text-lg border-b border-surface-500/60 pb-4">
        <a href="/" class="hover:text-primary-500 transition-colors font-semibold">Home</a>
        <a href="/tech" class="hover:text-primary-500 transition-colors font-semibold">Tech</a>
        <a href="/gym" class="hover:text-primary-500 transition-colors font-semibold">Gym</a>
    </nav>

    <main>
        {@render children()}
    </main>

    <footer class="mt-10 pt-6 border-t border-surface-500/60 flex justify-between items-center">
        
        <p class="text-sm opacity-50">Last Updated: 25/12/2025</p>

        <div class="flex items-center gap-5">
            <a href="https://github.com/thomasltran" target="_blank" class="opacity-60 hover:opacity-100 transition-opacity hover:text-primary-500">
                <img src={githubIcon} alt="GitHub" class="w-6 h-6 dark:invert" />
            </a>
            <a href="https://www.linkedin.com/in/thomasltran/" target="_blank" class="opacity-60 hover:opacity-100 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" class="w-6 h-6 dark:invert" />
            </a>
        </div>

    </footer>

</div>