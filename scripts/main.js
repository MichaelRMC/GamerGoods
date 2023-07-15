const BASE_URL = "https://www.gamerpower.com/api/giveaways"
const main = document.getElementById("game-giveaway-list")

document.addEventListener("load", (event) => {
	event.preventDefault()
	fetch(BASE_URL)
	.then(response => console.log(response))
	.then(response => gameList(response))
	.catch(error => displayError(error))
})


const gameList = (response) => {
	main.innerHTML = `<article>
	<img src="${json.image}">
	<br>
	<h3>${json.title}</h3>
	<br>
	<span class="description">${json.description}</span>
	<br>
	<span class="type">${json.type}</span>
	<br>
	<span class="platforms">${json.platforms}</span>
	<br>
	<span class="open-giveaway-url">${json.open_giveaway_url}</span>
	 </article>`
}

const displayError = (error) => {
	alert("Our Apologies. There seem to be an error")
}





