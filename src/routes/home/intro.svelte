<script>
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import { Icon } from "@smui/button";
</script>

<LayoutGrid>
    <div class="cells">
        <Cell>
            <div class="cell intro">
                <h1>Hi! My name is Thomas Tran.</h1>
                <p>
                    I'm an aspiring software engineer majoring in Computer
                    Science with a minor in Math at Virginia Tech.
                </p>
                <p>
                    My interests revolve around software development, cloud
                    computing, and big data analytics.
                </p>
            </div>
        </Cell>

        <Cell>
            <div class="cell content">
                <figure>
                    <img src="./current_book.jpg" alt="current book" />
                    <figcaption class="caption">
                        Currently reading...
                    </figcaption>
                </figure>

                <div class="icons">
                    <a href="https://github.com/thomasltran" target="_blank">
                        <img src="./github-mark.svg" alt="github" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/thomasltran/"
                        target="_blank"
                    >
                        <img src="./linkedin.svg" alt="linkedin" />
                    </a>

                    <a href="mailto:thomastran@vt.edu" target="_blank">
                        <img src="./email.svg" alt="email" />
                    </a>
                </div>

                <div>
                    <a
                        href="https://drive.google.com/file/d/1BlE2xPbcVrCTl6M3phRIVXGm-BDNKQ93/view?usp=sharing"
                        target="_blank"
                    >
                        <button>
                            <div class="button-content">
                                <span
                                    class="material-symbols-outlined material-icons"
                                >
                                    link
                                </span>
                                <h2>Resume</h2>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </Cell>
    </div>
</LayoutGrid>

<style>
    * {
        text-align: center;
        color: #0e1111;
        overflow: hidden;
    }

    p {
        font-size: 1.2em;
    }

    img {
        width: auto;
        height: auto;
        max-width: 50%;
        max-height: 30%;
        margin-top: 10%;
        border-radius: 2%;
    }

    .icons,a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10em;
        margin-bottom: -1em;
    }

    .icons img {
        margin: 0 1em;
    }

    .cell.intro {
        width: 60vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cell.content {
        width: 40vw;
        height: 100vh;
    }

    .cells {
        display: flex;
    }

    .caption {
        font-size: 1em;
        font-weight: 300;
        font-style: italic;
        color: #0e1111; /* Adjust the color to your preference */

    }

    figure {
        margin-top: 2em;
    }

    button {
        background: #0e1111;
        border: #0e1111;
        color: #faf9f6;
        border-radius: 10%;
        padding: 0 2em /* Adjust padding as needed */;
        margin: -7em 0 0 0.4em;
        cursor: pointer;
    }

    button h2 {
        color: #faf9f6;
        letter-spacing: 0.15em;
    }

    .button-content {
        display: flex;
        align-items: center; /* Center vertically */
        justify-content: center;
    }

    .material-symbols-outlined {
        font-variation-settings:
            "FILL" 0,
            "wght" 400,
            "GRAD" 0,
            "opsz" 24;
        margin-right: 1em; /* Adjust spacing between icon and text */
    }

    .material-icons {
        color: #faf9f6;
    }

    .material-icons:hover {
        cursor: pointer;
    }


</style>
