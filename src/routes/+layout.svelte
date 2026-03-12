<script>
    import './layout.css';
    import '$lib/styles/markdown.css';
    
	import favicon from '$lib/assets/favicon.ico';
    
    import githubIcon from '$lib/assets/github-mark.svg';
    import linkedinIcon from '$lib/assets/linkedin.svg';
    import LightSwitch from '$lib/components/LightSwitch.svelte';

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="container mx-auto px-5 sm:px-6 max-w-4xl min-h-screen flex flex-col">
    
    <header class="sticky top-0 z-50 py-4 sm:py-6 mb-6 sm:mb-8 backdrop-blur-md bg-surface-50/70 dark:bg-surface-900/70 border-b border-surface-500/20 -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 transition-all duration-300">
        <div class="flex justify-between items-center w-full">
            <nav class="flex gap-5 sm:gap-8 text-base sm:text-lg">
                <a href="/" class="hover:text-primary-500 transition-colors font-semibold tracking-wide">Home</a>
                <a href="/tech" class="hover:text-primary-500 transition-colors font-semibold tracking-wide">Tech</a>
                <a href="/gym" class="hover:text-primary-500 transition-colors font-semibold tracking-wide">Gym</a>
            </nav>
            <LightSwitch />
        </div>
    </header>

    <main class="flex-grow pt-4 pb-12">
        {@render children()}
    </main>

    <footer class="mt-auto py-8 border-t border-surface-500/20 flex justify-between items-center text-surface-600 dark:text-surface-400">
        
        <p class="text-sm">Last Updated: 25/12/2025</p>

        <div class="flex items-center gap-6">
            <a href="https://github.com/thomasltran" target="_blank" class="hover:text-primary-500 hover:scale-110 transition-all duration-200">
                <img src={githubIcon} alt="GitHub" class="w-6 h-6 dark:invert opacity-80 hover:opacity-100" />
            </a>
            <a href="https://www.linkedin.com/in/thomasltran/" target="_blank" class="hover:text-primary-500 hover:scale-110 transition-all duration-200">
                <img src={linkedinIcon} alt="LinkedIn" class="w-6 h-6 dark:invert opacity-80 hover:opacity-100" />
            </a>
        </div>

    </footer>

</div>