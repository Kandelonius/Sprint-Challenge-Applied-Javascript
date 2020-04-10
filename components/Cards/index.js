// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector(".cards-container");
function Card(article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(authorName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    headline.textContent = article.headline;
    image.src = article.authorPhoto;
    authorName.textContent = "By ";
    authorName.textContent += article.authorName;
    // console.log(header);

    return card;
}
// console.log(Card({}))
// headerContainer.appendChild(Header());
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        for(language in response.data.articles){
            const articles = response.data.articles[language];
            // console.log(aritcles)
            articles.forEach(item => {
                cardContainer.appendChild(Card(item));
                // Card(item);
            })
        }
        // debugger
        // console.log(response.data);
        // const shortHand = Object.keys(response.data.articles);//getting keys
        // shortHand.forEach(item =>{//attatch the key to the response
        //     // response.data.articles.item
        //     // shortHand.item
        //     console.log(item);
        //     // item.forEach(innerItem =>{
        //     //     console.log(innerItem.headline);
        //     // })
        // })
        // deal with the response data in here
        // console.log(shortHand);
    })
    .catch( err => {
        console.log("Error:", err);
    })