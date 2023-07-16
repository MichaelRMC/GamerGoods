const api =
  "https://newsapi.org/v2/everything?q=gaming&apiKey=8f1e6a243d7b47da88ee3c9589d37437";

const main = document.querySelector(".main");
const link = document.querySelector(".button");

window.addEventListener("load", (event) => {
  fetch(api)
    .then((data) => data.json())
    .then((json) => gamingNews(json))
    .catch((error) => displayError(error));
});

const gamingNews = (json) => {
  const articles = json.articles;
  articles.forEach((article) => {
    console.log(article);
    const section = document.createElement("section");

    section.innerHTML = `<div class="card">
  <img src=${article.urlToImage}  style="width:100%">
  <h1>${article.title}</h1>
  <p class="author">${article.author}</p>
  <p>${article.description}</p>
  <p><a href=${article.url}><button>${article.source.name}</button></a></p>
</div>`;
    main.append(section);
  });
};

const displayError = (error) => {
  section.innerHTML = `<article id="error">
	<span>We're Sorry. There seem to be" an error</span>
	<span class="error-message>${error}/span>
	</article>`;
};
