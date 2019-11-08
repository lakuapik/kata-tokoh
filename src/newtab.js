const url = 'https://raw.githubusercontent.com/lakuapik/quotes-indonesia/master/raw/quotes.min.json';

const isFirefox = window.navigator.userAgent.includes('Firefox');
const isChrome = window.navigator.userAgent.includes('Chrome');

const elQ = document.querySelector('#quote');
const elB = document.querySelector('#by');

fetch(url)
    .then(res => res.json())
    .then(quotes => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        elQ.innerHTML = random.quote;
        elB.innerHTML = '--'+random.by;
    })
    .catch(err => {
        elQ.innerHTML = 'Manusia akan bahagia selama ia memilih untuk bahagia.';
        elB.innerHTML = '--Alexander Solzhenitsyn';
    });

if (isFirefox) window.browser.storage.sync.get('theme', (items) => setTheme(items.theme));
if (isChrome) window.chrome.storage.sync.get('theme', (items) => setTheme(items.theme));

const setTheme = (theme) => {
    if (theme == 'dark') {
        elQ.style.color = 'rgb(207, 204, 197)';
        elB.style.color = 'rgba(255, 255, 255, 0.5)';
        document.querySelector('body').style.backgroundColor = 'rgb(38, 51, 59)';
    }
};