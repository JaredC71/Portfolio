
//Drop Down menu, changing the display from none to block when down-arrow menu button is clicked
function myFunction() {
    const dropDown = document.getElementById('drop-down');
    if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
}