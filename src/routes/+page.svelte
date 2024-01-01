<script>
    // import TopAppBar from '@smui/top-app-bar';
    import IntroText from "./home/intro.svelte";
    import Timeline from "./home/experience.svelte";
</script>

<body>
    <div class="header black">Header</div>
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
        <div class="card white">Card 3</div>
    </div>
    <div class="footer black">Footer</div>
</body>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .white {
        background: #FAF9F6;
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

    .header,
    .footer {
        color: white;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        width: 100%;
        height: 100vh;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top: 0;
    }

    .card-timeline {
        width: 100%;
        height: 244vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top: 0;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
