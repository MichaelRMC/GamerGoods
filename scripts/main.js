const api =
  "https://newsapi.org/v2/everything?q=gaming&apiKey=8f1e6a243d7b47da88ee3c9589d37437";

const main = document.querySelector("section");

window.addEventListener("load", (event) => {
  fetch(api)
    .then((data) => data.json())
    .then((json) => gamingNews(json));
});

const gamingNews = (json) => {
  const articles = json.articles;
 for (const article of articles) {
    main.innerHTML = `<div class="wrapper">
    <div class="card">
      <div class="card-banner">
        <p class="articles-source">${article.source.name}</p>
        <img class="banner-img" src=${article.urlToImage} alt=''>
      </div>
      <div class="card-body">
        <h2 class="articles-title">${article.title}</h2>
        <p class="articles-description">${article.description}</p>

        <div class="card-author">
          <div class="card-author-info">
            <h3 class="author-name">${article.author}</h3>
            <p class="articles-url">${article.url}</p>
          </div>
        </div>
      </div>
    </div>`;
 }
};

// const displayError = (error) => {
// 	main.innerHTML = `<article id="error">
// 	<span>We're Sorry. There seem to be an error</span>
// 	<span class="error-message>${error}</span>
// 	</article>`
// }
