function openInvite() {
    const screen = document.getElementById("screen");

    screen.classList.add("open");

    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000);
}