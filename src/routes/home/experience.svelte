<body>
    <div class="main">
        <h1 class="header">Timeline</h1>
        <div class="container">
            
            <ul>
                <li>
                    <p class="heading">Commonwealth Cyber Initiative</p>
                    <p>Cybersecurity Intern</p>
                    <span class="date">June-July 2021</span>
                    <span class="circle"></span>
                </li>
                <li>
                    <p class="heading">ManTech International Corporation</p>
                    <p>Software Engineer Intern</p>
                    <span class="date">July-Aug. 2021</span>
                    <span class="circle"></span>
                </li>
                <li>
                    <p class="heading">W.T. Woodson High School</p>
                    <p>Graduated</p>
                    <span class="date">May 2022</span>
                    <span class="circle"></span>
                </li>
                <li>
                    <p class="heading">ManTech International Corporation</p>
                    <p>Technical Intern</p>
                    <span class="date">June-Aug. 2022</span>
                    <span class="circle"></span>
                </li>

                <li>
                    <p class="heading">Virginia Tech</p>
                    <p>Undergraduate Student</p>
                    <span class="date">Sept. 2022</span>
                    <span class="circle"></span>
                </li>

                <li>
                    <p class="heading">Parsons Corporation</p>
                    <p>Software Engineer Intern</p>
                    <span class="date">June 2023</span>
                    <span class="circle"></span>
                </li>
            </ul>
        </div>
    </div>
</body>

<style>

    .header {
        font-size: 2em;
        text-align: center;
        padding-bottom: 3em;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .main {
        width: 100%;
        height: auto;
        display: grid;
        place-items: center;
        padding: 50px 0;
    }

    /* Container Css Start  */

    .container {
        width: 23%;
        height: auto;
        margin: auto 0;
        position: relative;
        transform: translateX(20px);
    }
    .container ul {
        list-style: none;
    }
    .container ul::after {
        content: " ";
        position: absolute;
        width: 2px;
        height: 100%;
        left: -20px;
        top: 0;
        transform: translateX(-50%);
        background-image: linear-gradient(to bottom, #faf9f6, #faf9f6);
    }
    .container ul li {
        width: 100%;

        float: none;
        clear: none;
        margin-bottom: 80px;
        height: auto;
        padding: 15px 20px;
        background-color: #faf9f6;
        border-radius: 8px;
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.218);
        position: relative;
        z-index: 99;
    }
    .container ul li:nth-child(6) {
        margin-bottom: 0;
    }
    .container ul li .circle {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #dedede;
        top: 0;
        display: grid;
        place-items: center;
        left: -20px;
        transform: translate(-50%, -50%);
    }
    .circle::after {
        content: " ";
        width: 12px;
        height: 12px;
        background-color: #faf9f6;
        border-radius: 50%;
    }
    .container ul li .circle {
        left: -20px;
        transform: translate(-50%, -50%);
    }
    ul li .date {
        position: absolute;
        width: 130px;
        height: 33px;
        background-image: linear-gradient(to right, #cdcbcb, #cdcbcb);
        border-radius: 15px;
        top: -45px;
        left: 0;
        display: grid;
        place-items: center;
        color: #0e1111;
        font-size: 0.85em;
        box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.318);
        font-weight: 500;
    }
    .container ul li:nth-child(odd) {
        float: right;
        clear: left;
        transform: translateX(0px);
        text-align: left;
    }
    ul li:nth-child(odd) .date {
        left: 0;
    }
    .container ul li:nth-child(even) {
        float: right;
        clear: left;
        transform: translateX(0px);
    }
    ul li .heading {
        font-size: 1.2em;
        width: 100%;
        color: #0e1111;
    }
    ul li p {
        font-size: 1em;
        color: #666;
        line-height: 18px;
        margin: 6px 0 4px 0;
    }

    @media only screen and (min-width: 798px) and (max-width: 1100px) {
        .container {
            width: 80%;
        }
    }

    @media only screen and (max-width: 798px) {
        .container {
            width: 70%;
            transform: translateX(20px);
        }
        .container ul::after {
            left: -40px;
        }
        .container ul li {
            width: 100%;
            float: none;
            clear: none;
            margin-bottom: 80px;
        }
        .container ul li .circle {
            left: -40px;
            transform: translate(-50%, -50%);
        }
        .container ul li .date {
            left: 0;
        }
        .container ul li:nth-child(odd) {
            transform: translateX(0px);
            text-align: left;
        }
        .container ul li:nth-child(even) {
            transform: translateX(0px);
        }
    }

    @media only screen and (max-width: 550px) {
        .container {
            width: 80%;
            transform: translateX(20px);
        }
        .container ul li {
            width: 100%;
            float: none;
            clear: none;
            margin-bottom: 80px;
        }
        .container ul::after {
            left: -20px;
        }
        .container ul li .circle {
            left: -20px;
            transform: translate(-50%, -50%);
        }
        .container ul li .date {
            left: 0;
        }
        .container ul li:nth-child(odd) {
            transform: translateX(0px);
            text-align: left;
        }
        .container ul li:nth-child(even) {
            transform: translateX(0px);
        }
    }
</style>
