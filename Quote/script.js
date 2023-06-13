const quote = document.querySelector('.quote')
const btn = document.querySelector('.btn')
const paragraph = document.querySelector('.author')

btn.addEventListener('click', (Event) => {

    let randomNumber = Math.floor(Math.random() * (1642 - 0 + 1) + 0)
    console.log(randomNumber);


    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('.container').style.backgroundColor = 'rgba(185, 191, 207, 1)'
            document.querySelector('.btn').innerText = 'Get Another Quote'
            quote.innerText = data[randomNumber].text
            paragraph.innerText = data[randomNumber].author
        });
})