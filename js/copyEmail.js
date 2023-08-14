function copyText () {
    const textToCopy = "jemina.c.sy@gmail.com";
    copyTextToClipboard(textToCopy);
    displayCopyMessage();
}

function copyTextToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function displayCopyMessage() {
    copyMessage.classList.remove("hidden");
    setTimeout(function () {
        copyMessage.classList.add("hidden");
    }, 1500);
}