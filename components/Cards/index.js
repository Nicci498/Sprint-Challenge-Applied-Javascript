// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardHome = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const bootstrap = response.data.articles.bootstrap;
        const javascript = response.data.articles.javascript;
        const jquery = response.data.articles.jquery;
        const node = response.data.articles.node;
        const technology = response.data.articles.technology;

        bootstrap.forEach((obj) => {
            const cards = cardMaker(obj);
            cardHome.appendChild(cards);        
        });
        javascript.forEach((obj) => {
            const cards = cardMaker(obj);
            cardHome.appendChild(cards);        
        });
        jquery.forEach((obj) => {
            const cards = cardMaker(obj);
            cardHome.appendChild(cards);        
        });
        node.forEach((obj) => {
            const cards = cardMaker(obj);
            cardHome.appendChild(cards);        
        });
        technology.forEach((obj) => {
            const cards = cardMaker(obj);
            cardHome.appendChild(cards);        
        });      
    })
    .catch(error => {
        console.log(error)
    })

function cardMaker(obj){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgBox = document.createElement('div');
    const pic = document.createElement('img');
    const by = document.createElement('span');

    
    card.appendChild(headline);
    card.appendChild(author);
    card.appendChild(imgBox);
    imgBox.appendChild(pic);
    card.appendChild(by);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgBox.classList.add("img-container");

    pic.src = obj.authorPhoto;
    pic.style.width = "10%";
    by.textContent = "By " + obj.authorName;
    headline.textContent = obj.headline;
    
    return card
}