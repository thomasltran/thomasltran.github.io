<script>
    export let data;
</script>

<body>
    <div>
        <h1>Blog</h1>
        <p class="description">
            Written during daily cardio session. Content updating on a weekly basis.
        </p>
        <div>
            <ul>
                {#each data.posts as post}
                    <li>
                        <p>
                            <a href={post.path} target="_blank">
                                {post.meta.date}
                            </a>
                        </p>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</body>

<style>
    * {
        color: #0e1111;
    }

    h1 {
        text-align: center;
        padding: 50px 0 25px 0;
    }

    p {
        font-size: 1.2em;
        text-align: center;
    }

    p, .description {
        padding-bottom: 1em;
    }

    ul {
        list-style: none;
        padding: 0;
    }
    ul > li > p {
        padding: 0.1em 0;
        margin: 0.3em 0;
        font-size: 1em;
    }

    body {
        font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif;
        background: #faf9f6;
    }

    :link {
        color: #0000ee;
    }
    :visited {
        color: #551a8b;
    }
</style>
