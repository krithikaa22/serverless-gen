const event = () => {

    window.onload = (e) => {
        var headL:HTMLElement = document.getElementById("show-head-l")!
        // var headR: HTMLElement = document.getElementById("show-head-r")!
        headL.style.animation = "left 1.5s linear";
        // headR.style.animation = "left 2s ease"
    }
}

export default event