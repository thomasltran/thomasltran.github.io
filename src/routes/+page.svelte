<script>
    import TextGenerateEffect from '$lib/components/TextGenerateEffect.svelte';
    import DumbbellCanvas from '$lib/components/DumbbellCanvas.svelte';
    
    let bookCover = "https://m.media-amazon.com/images/I/91TXmi4Y4UL._AC_UF1000,1000_QL80_.jpg"; 
    let bookTitle = "The City and Its Uncertain Walls"; 
    let bookAuthor = "Haruki Murakami";

    // Single source of truth for bench press weight
    const BENCH_WEIGHT = 275;
</script>

<svelte:head>
    <title>Thomas Tran — Software Engineer</title>
    <meta name="description" content="Personal portfolio of Thomas Tran, Software Engineer at Capital One." />
</svelte:head>

<header class="space-y-4 mb-8 mt-4 sm:mt-8">
    <h1 class="h1 tracking-tight text-3xl sm:text-5xl lg:text-6xl text-surface-900 dark:text-surface-50">
        <TextGenerateEffect words="Hello, I'm Thomas Tran." className="font-bold" />
    </h1>
</header>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
    
    <div class="lg:col-span-7 space-y-10">
        <article class="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-surface-800 dark:text-surface-200 font-light">
            <p>
                I work as a Software Engineer at <strong>Capital One</strong> for 
                <a class="text-primary-600 dark:text-primary-400 font-medium hover:underline decoration-2 underline-offset-4 transition-all" href="https://www.capitalone.com/software/products/databolt/" target="_blank">Databolt</a>.
            </p>
            <p>
                Following my undergrad at <strong>Virginia Tech</strong> in May '25, I began pursuing a Master's at <strong>Georgia Tech</strong> to further my studies in OS.
            </p>
            <p>
                My favorite memories in Blacksburg include benching 225 at McComas, TAing for 
                <em>CS 3214: Computer Systems</em> in Fall '24/Spring '25, 
                and completing the <a class="text-primary-600 dark:text-primary-400 font-medium hover:underline decoration-2 underline-offset-4 transition-all" target="_blank" href="https://courses.cs.vt.edu/cs4284/spring2025/pintos">PintOS projects</a> + <a class="text-primary-600 dark:text-primary-400 font-medium hover:underline decoration-2 underline-offset-4 transition-all" target="_blank" href="https://drive.google.com/file/d/1X15dgRbBwQAMscN9mra2Mpt3C22FzzQ6/view?usp=sharing">implementing multithreading in the kernel</a>.
            </p>
            <p>
                Outside of work and school, I spend most of my time in the gym. Right now, I'm working towards hitting a 315 bench in 2026.
            </p>
        </article>
    </div>

    <!-- Statement Piece: Weightlifting / Tech Fusion -->
    <aside class="lg:col-span-5 self-center w-full max-w-md mx-auto flex flex-col gap-6">
        
        <!-- Currently Reading Widget -->
        <div class="relative group rounded-2xl bg-surface-50/40 dark:bg-surface-900/40 backdrop-blur-xl border border-surface-500/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex items-center p-5">
            
            <div class="relative z-10 flex gap-5 w-full items-center">
                <!-- Book Cover -->
                <div class="w-16 sm:w-20 aspect-[2/3] shrink-0 rounded-md overflow-hidden bg-surface-300 dark:bg-surface-700 shadow-md transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500 border border-surface-500/20">
                    <img 
                        src={bookCover} 
                        alt={bookTitle} 
                        class="w-full h-full object-cover"
                    />
                </div>
                
                <!-- Book Info -->
                <div class="flex flex-col justify-center flex-grow">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-surface-500 dark:text-surface-400 mb-1">
                        Currently Reading
                    </span>
                    <h3 class="font-heading font-bold text-lg tracking-tight text-surface-900 dark:text-surface-50 leading-tight">
                        {bookTitle}
                    </h3>
                    <p class="text-sm font-medium text-surface-600 dark:text-surface-300 italic mt-1.5">
                        {bookAuthor}
                    </p>
                </div>
            </div>
        </div>

        <!-- Gym Statement Widget (3D) -->
        <div class="relative group rounded-2xl bg-surface-50/40 dark:bg-surface-900/40 backdrop-blur-xl border border-surface-500/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center h-56 sm:h-80">
            
            <div class="absolute inset-0 z-10 p-4 pt-10 pb-16">
                <!-- 3D Canvas goes here -->
                <DumbbellCanvas weight={BENCH_WEIGHT} />
            </div>

            <div class="absolute inset-x-0 bottom-0 p-4 text-center z-20 pointer-events-none bg-gradient-to-t from-surface-100 dark:from-surface-900 to-transparent pt-8">
                <h3 class="font-heading font-bold text-2xl tracking-tight text-surface-900 dark:text-surface-50 flex items-center justify-center gap-2">
                    {BENCH_WEIGHT} <span class="text-base text-surface-500 dark:text-surface-400 font-medium">LBS</span>
                </h3>
                <p class="text-[10px] font-medium text-surface-600 dark:text-surface-300 uppercase tracking-widest mt-1">Current Bench</p>
            </div>
        </div>
    </aside>
</div>

<!-- Full-Width Image Gallery Section with Captions -->
<div class="mt-12 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 w-full">
    <!-- Image 1 -->
    <figure class="flex flex-col gap-3 group">
        <div class="rounded-2xl overflow-hidden shadow-lg border border-surface-500/20 relative aspect-square">
            <div class="absolute inset-0 bg-surface-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img src="/images/225-flat.webp" alt="225 Flat Bench" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <figcaption class="text-sm font-medium text-surface-600 dark:text-surface-400 flex flex-col justify-between items-start">
            <span class="text-surface-900 dark:text-surface-50 font-semibold tracking-wide">225 Flat Bench</span>
            <span class="text-xs uppercase tracking-wider opacity-70 mt-0.5">Oct 23, 2023</span>
        </figcaption>
    </figure>

    <!-- Image 2 -->
    <figure class="flex flex-col gap-3 group">
        <div class="rounded-2xl overflow-hidden shadow-lg border border-surface-500/20 relative aspect-square">
            <div class="absolute inset-0 bg-surface-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img src="/images/225-incline.webp" alt="225 Incline Bench" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <figcaption class="text-sm font-medium text-surface-600 dark:text-surface-400 flex flex-col justify-between items-start">
            <span class="text-surface-900 dark:text-surface-50 font-semibold tracking-wide">225 Incline Bench</span>
            <span class="text-xs uppercase tracking-wider opacity-70 mt-0.5">Oct 30, 2025</span>
        </figcaption>
    </figure>
</div>