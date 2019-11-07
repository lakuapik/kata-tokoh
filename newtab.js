const url = 'https://raw.githubusercontent.com/lakuapik/quotes-indonesia/master/raw/quotes.min.json';

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