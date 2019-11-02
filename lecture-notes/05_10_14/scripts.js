// const requestForSpookyThings = window.fetch(input, "localhost:3000/spooky-things");
// console.log(requestForSpookyThings)

// with promises

const requestForSpookyThings = window.fetch(input, "localhost:3000/spooky-things")
.then(data => {
    return data.text();
})
.then(text => {
    console.log('TEXT: ', text)
})
.catch(e => {
    console.log('Error: ', e) // .catch will find an error that happens at any time in a promise chain
})
console.log(requestForSpookyThings)