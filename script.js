function generateLink() {
    const senderName = document.getElementById("senderName").value.trim();
    const wishText = document.getElementById("wishText").value.trim();
    if (!senderName || !wishText) {
        alert('Please fill in both fields');
        return;
    }

    const receiverLink = window.location.href.split('?')[0] + `?sender=${encodeURIComponent(senderName)}&wish=${encodeURIComponent(wishText)}`;
    document.getElementById("linkOutput").innerHTML = `<p>Share this link: <a href="${receiverLink}" target="_blank">${receiverLink}</a></p>`;
    document.getElementById("linkOutput").classList.remove("hidden");
}

// Check if there are parameters in the URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const senderName = urlParams.get('sender');
    const wishText = urlParams.get('wish');
    if (senderName && wishText) {
        document.getElementById("senderName").value = senderName;
        document.getElementById("wishText").value = wishText;
        generateLink();
    }
};
