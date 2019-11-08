const isFirefox = window.navigator.userAgent.includes('Firefox');
const isChrome = window.navigator.userAgent.includes('Chrome');

const save = () => {
    const selected = document.querySelector('input[name="theme"]:checked').value;
    if (isFirefox) window.browser.storage.sync.set({theme: selected});
    if (isChrome) window.chrome.storage.sync.set({theme: selected});
}

const restore = () => {
    if (isChrome) {
        window.chrome.storage.sync.get('theme', (items) => {
            document.querySelector('input[value="'+items.theme+'"]').checked = true;
        });
    }
    if (isFirefox) {
        window.browser.storage.sync.get('theme', (items) => {
            document.querySelector('input[value="'+items.theme+'"]').checked = true;
        });
    }
}

document.addEventListener('DOMContentLoaded', restore);
document.querySelectorAll('input[name="theme"]').forEach(
    el => el.addEventListener('change', save)
);