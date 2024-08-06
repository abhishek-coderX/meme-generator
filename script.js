var btn = document.querySelector(".btn");
var memeTitle = document.querySelector(".meme-title");
var img = document.querySelector(".meme-image");
var authorOutput = document.querySelector(".author");


function memeGenerator(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then ((res) => res.json())
    .then ((data) => {

        const{author, title, url}=data
        memeTitle.textContent = title;
        img.src=url;
        authorOutput.textContent = author;
    })


}

memeGenerator();
btn.addEventListener('click', function (){
    memeGenerator();
})