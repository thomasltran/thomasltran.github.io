<script>
    import LayoutGrid, { Cell } from "@smui/layout-grid";

    const loaded = new Map();

    function lazy(node, data) {
        if (loaded.has(data.src)) {
            node.setAttribute("src", data.src);
        }
    }
</script>

<h1><a href="/blog" target="_blank">Blog</a></h1>

<LayoutGrid>
    <div class="cells">
        <Cell>
            <div class="text">
                <p>
                    Outside of my academics and career, I'm also an avid lifter.
                </p>
                <p>
                    I enjoy chatting with others, moving heavy weight, and
                    seeing my progress.
                </p>
                <p>
                    Plus, I get to catch up on my favorite <a
                        href="https://podcasts.apple.com/us/podcast/behind-the-baller-podcast-with-ben-baller/id1475680946"
                        target="_blank">podcasts</a
                    >
                    and
                    <a
                        href="https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
                        target="blank">artists</a
                    > during this time.
                </p>
                <p>
                    Feel free to check out my <a
                        class="blog"
                        href="/blog"
                        target="_blank">blog</a
                    > where I detail my journey.
                </p>
            </div>
        </Cell>
        <Cell>
            <div class="content">
                <figure>
                    <img
                        src="./bench.jpg"
                        alt="current book"
                        use:lazy={{ src: "./bench.jpg" }}
                    />
                    <figcaption class="caption">
                        10/23/2023—225 Bench
                    </figcaption>
                </figure>
            </div>
        </Cell>
    </div>
</LayoutGrid>

<style>
    * {
        color: #0e1111;
        overflow: hidden;
    }

    h1 {
        text-align: center;
        padding: 50px 0;
    }

    p {
        font-size: 1.2em;
    }

    .cells {
        display: flex;
        align-items: center; /* Add this line */
        justify-content: center;
    }

    .text {
        width: 60vw;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .content {
        width: 40vw;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        width: auto;
        height: auto;
        min-width: 100%;
        min-height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 2%;
    }

    .caption {
        font-size: 1em;
        font-weight: 300;
        font-style: italic;
        color: #0e1111; /* Adjust the color to your preference */
        text-align: center;
    }

    figure {
        padding: 0 2em;
    }

    :link {
        color: #0000ee;
    }
    :visited {
        color: #551a8b;
    }

    h1 > a {
        color: #0e1111 !important; /* Adjust the color to your preference */

        text-decoration: none !important;
    }

    @media only screen and (max-width: 1100px){

        figure {
            display: none;
        }

        .cells {
            display: flex;
            flex-direction:column;
            align-items: center;
            text-align: center;
        }
    }
</style>
