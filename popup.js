document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showPopup, 70000);

    function showPopup() {
        const popup = document.createElement("div");
        popup.id = "popup";
        popup.innerHTML = `
            <div id="popup-content">
                <span id="close-popup" onclick="closePopup()">X</span>
                <p>This is a pop-up notification!</p>
            </div>
        `;
        document.body.appendChild(popup);
    }

    function closePopup() {
        document.getElementById("popup").remove();
    }
});
