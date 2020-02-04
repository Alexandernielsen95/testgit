window.addEventListener("load", start)

function start() {
    const bubbles = document.querySelectorAll("#wrapper");
    console.log(bubbles)
    bubbles.forEach(bubbles => {
        const x = Math.random() * 100
         const y = Math.random() * 100
         bubbles.style.transform = "translate(" + x + "vw, 50vh)"

    })
}
