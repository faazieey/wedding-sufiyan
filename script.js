// ==========================================
// WEDDING DATE
// ==========================================

const weddingDate = new Date(
    "October 11, 2026 11:00:00 AM"
).getTime();


// ==========================================
// COUNTDOWN
// ==========================================

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    // Calculate time

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    // Display countdown

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");


    // When wedding date arrives

    if (distance < 0) {

        clearInterval(countdown);


        document.querySelector(".countdown").innerHTML = `

            <div style="
                grid-column: 1 / -1;
                text-align: center;
            ">

                <h2 style="
                    color: #e2bd7b;
                    font-size: 32px;
                    font-weight: 500;
                ">
                    Our Special Day Has Arrived
                </h2>

                <p style="
                    margin-top: 10px;
                    color: #eadfd0;
                    font-size: 18px;
                ">
                    Sufiyan & Irfana
                </p>

            </div>

        `;

    }

}, 1000);