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
    document.getElementById("linkOutput").innerHTML = `<p>Share this link: <a href="${receiverLink}" id="shareLink" target="_blank">${receiverLink}</a></p>`;
    document.getElementById("linkOutput").classList.remove("hidden");

    shareLink(receiverLink);
}

function shareLink(link) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this wish!',
            text: 'Someone sent you a wish!',
            url: link
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        alert('Your browser does not support sharing.');
    }
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
