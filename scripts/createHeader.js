function createHomeHeader(
	pageNo,
	priceInRupees,
	newsDate,
	hasSpecialMessage = false,
	specialMessage = ""
) {
	return `
	<header class="front-page-header">
	<div>
		<h1 id="front-page-header-text">Morning Times</h1>
	</div>
	</header>
	<div class="front-page-header-info-container">
		<span>Page No. ${pageNo}</span>
		<span>Morning Times, ${newsDate}</span>
		<span>Rs. ${priceInRupees}</span>
	</div>
	<div class="news-types-header">
		<span>National</span>
		<span>Design</span>
		<span>Travel</span>
		<span>Sports</span>
		<span>Business</span>
		<span>Weather</span>
	</div>
	${
		hasSpecialMessage === true
			? `<div class="headline">${specialMessage}</div >`
			: "<div></div>"
	}
	`;
}

function createHeader(
	pageNo,
	newsCategory,
	newsDate,
	hasSpecialMessage = false,
	specialMessage = ""
) {
	return `
	<div class="front-page-header-info-container not-home-header">
		<span><h3 class="news-category-h3">${newsCategory}</h3></span>
		<span>Page No. ${pageNo}</span>
	</div>
	${
		hasSpecialMessage === true
			? `<div class="headline">${specialMessage}</div >`
			: "<div></div>"
	}
	`;
}
