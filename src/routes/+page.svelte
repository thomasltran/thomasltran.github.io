<script>
    // import TopAppBar from '@smui/top-app-bar';
    import IntroText from "./home/intro.svelte";
    import Timeline from "./home/experience.svelte";
    import Interests from "./home/interests.svelte";
</script>

<body>
    <!-- <div class="header black">Header</div> -->
    <div>
        <div class="card white">
            <div class="content">
                <IntroText></IntroText>
            </div>
        </div>
        <div class="card-timeline black">
            <div class="content-timeline">
                <Timeline></Timeline>
            </div>
        </div>
        <div class="card white">
            <div class="content">
                <Interests></Interests>
            </div>
        </div>
    </div>
    <!-- <div class="footer white">
        <Footer></Footer>
    </div> -->
</body>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .white {
        background: #faf9f6;
    }

    .black {
        background: #0e1111;
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
    }

    /* .header,
    .footer {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0e1111;
    } */

    .card {
        width: 100%;
        height: 100vh;
        color: black;
        position: sticky;
        top: 0;
    }

    .card-timeline {
        width: 100%;
        height: 247vh;
        color: white;
        position: sticky;
        top: 0;
        overflow: hidden;
    }

    .content-timeline {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 25px 0;
        object-fit: cover;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: start;
    }

    .content {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }

    @media only screen and (max-width: 1100px){
        .card-timeline {
            height: 265vh;
        }

        .content {
            padding: 0 1em;
        }
    }
</style>
