function generateLink() {
    const senderName = document.getElementById("senderName").value.trim();
    const wishText = document.getElementById("wishText").value.trim();
    if (!senderName || !wishText) {
        alert('Please fill in both fields');
        return;
    }

    document.getElementById("senderNameDisplay").innerText = `Sent by: ${senderName}`;
    document.getElementById("senderNameDisplay").classList.remove("hidden");

    const receiverLink = window.location.href.split('?')[0] + `?sender=${encodeURIComponent(senderName)}&wish=${encodeURIComponent(wishText)}`;
    document.getElementById("linkOutput").innerHTML = `<p>Share this link: <a href="${receiverLink}" target="_blank">${receiverLink}</a></p>`;
    document.getElementById("linkOutput").classList.remove("hidden");

    // Open WhatsApp with the generated link
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(receiverLink)}`;
    window.location.href = whatsappLink;
}

// Check if there are parameters in the URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const senderName = urlParams.get('sender');
    const wishText = urlParams.get('wish');
    if (senderName && wishText) {
        document.getElementById("senderNameDisplay").innerText = `Sent by: ${senderName}`;
        document.getElementById("senderNameDisplay").classList.remove("hidden");
    }
};
