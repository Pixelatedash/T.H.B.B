function loadWebsite() {
    const urlInput = document.getElementById('urlInput').value.trim();
    const browserFrame = document.getElementById('browserFrame');

    if (urlInput) {
        browserFrame.src = urlInput.startsWith('http') ? urlInput : 'https://' + urlInput;
    }
}
