var image1 = document.createElement('img')
image1.src = 'images/novemberRain.png'
var image2 = document.createElement('img')
image2.src = 'images/arcadeFire.jpg'

var image3 = document.createElement('img')
image3.src = 'images/queenBohemianRhapsody.png'

var quote1 = 'Cause nothin lasts forever, <br> and we both know hearts can change,<br> and its hard to hold a candle,<br> in the cold November rain';

var quote2 = 'My body is a cage that keeps me from dancing with the one I love,<br> but my mind holds the key';

var quote3 = 'Nothing really matters, anyone can see,<br> nothing really matters,<br> nothing really matters to me.<br><br> Anyway the wind blows';

const POSTS = [
    {title: "Guns N' Roses - November Rain", img: image1, content: "Uma das minhas músicas favoritas, <br> escutava toda viagem de volta para casa quando eu estudava no IFSC", quote: quote1},
    {title: "Arcade Fire - My body is a cage", img: image2, content: "Representa bem o clima atual, <br> também me faz pensar em como estou atualmente", quote: quote2},
    {title: "Queen - Bohemian Rhapsody", img: image3, content: "Um clássico, eu amo essa música com todas as minhas forças, <br> porém a minha mãe odeia", quote: quote3},    
];

window.onload = contentArea;
function contentArea() {
    const contentDiv = document.querySelector("#content");
    for (post of POSTS) {
        const postDiv = document.createElement("DIV");
        const postDiv2 = document.createElement("DIV");
        const postDiv3 = document.createElement("DIV");
        const postDiv4 = document.createElement("DIV")

        const postStr = `${post.title}`;
        postDiv.className = "post";
        postDiv.innerHTML = postStr;
        contentDiv.appendChild(postDiv);

        const postStr2 = `<img src = ${post.img.src} alt="" id=img>`;
        postDiv2.className = "img";
        postDiv2.innerHTML = postStr2;
        contentDiv.appendChild(postDiv2); 

        const postStr4 = `${post.quote}`;
        postDiv4.className = "quote";
        postDiv4.innerHTML = postStr4;
        contentDiv.appendChild(postDiv4);
        
        const postStr3 = `${post.content}`;
        postDiv3.className = "texto";
        postDiv3.innerHTML = postStr3;
        contentDiv.appendChild(postDiv3);

    }
}