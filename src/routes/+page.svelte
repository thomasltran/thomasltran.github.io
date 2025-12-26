<script>
    let bookCover = "https://images.penguinrandomhouse.com/cover/9780593622452"; 
    let bookTitle = "Pride and Prejudice"; 
    let bookAuthor = "Jane Austen";
</script>

<div class="space-y-10">
    
    <header class="space-y-4">
        <h1 class="h2 font-bold tracking-tight">
            Hello, I'm Thomas Tran 👍
        </h1>
    </header>

    <article class="space-y-6 text-lg leading-relaxed">
        <p>
            I work as a Software Engineer at <strong>Capital One</strong> for 
            <a class="anchor" href="https://www.capitalone.com/software/products/databolt/" target="_blank">Databolt</a>.
        </p>
        <p>
            Following my undergrad at <strong>Virginia Tech</strong> in May '25, I began pursuing a Master's at <strong>Georgia Tech</strong> to further my studies in OS.
        </p>
        <p>
            My favorite memories in Blacksburg include benching 225 at McComas, TAing for 
            <em>CS 3214: Computer Systems</em> in Fall '24/Spring '25, 
            and completing the <a class="anchor" target="_blank" href="https://courses.cs.vt.edu/cs4284/spring2025/pintos">PintOS projects</a> + <a class="anchor" target="_blank" href="https://drive.google.com/file/d/1X15dgRbBwQAMscN9mra2Mpt3C22FzzQ6/view?usp=sharing">implementing multithreading in the kernel</a>.
        </p>
        <p>
            Outside of work and school, I spend most of my time in the gym. Right now, I'm working towards hitting a 315 bench in 2026.
        </p>
    </article>

    <div class="mt-12 flex flex-col items-center gap-4 text-center opacity-90">
        <div class="hover:scale-101 transition-transform duration-300">
            <img 
                src={bookCover} 
                alt={bookTitle} 
                class="w-36 aspect-[2/3] object-cover rounded shadow-md border border-surface-500/20 bg-surface-500/10"
            />
        </div>

        <div class="flex flex-col">
            <span class="uppercase tracking-widest text-[10px] font-bold opacity-40">Currently Reading...</span>
            <p>{bookTitle}</p>
            <span class="text-xs opacity-60 italic">by {bookAuthor}</span>
        </div>
    </div>
</div>