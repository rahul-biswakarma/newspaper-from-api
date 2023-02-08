function updateDomWithNews() {
	let bodyElement = document.getElementById("body");
	document.querySelector(".loading-screen-container").style.display = "none";
	bodyElement.innerHTML += newsPaper.pages.reduce((acc, page, index) => {
		let currentPageNumber = index + 1;
		let header =
			currentPageNumber === 1
				? createHomeHeader(
						currentPageNumber,
						newsPaper.info.price,
						newsPaper.info.newsDate,
						page.info.hasSpecialMessage,
						page.info.specialMessage
				  )
				: createHeader(
						currentPageNumber,
						page.info.newsCategory,
						newsPaper.info.newsDate,
						page.info.hasSpecialMessage,
						page.info.specialMessage
				  );
		let footer = createFooter(
			newsPaper.info.totalPageNumbers,
			currentPageNumber
		);

		let main = `${page.news.reduce((acc, currentNews) => {
			acc += createNewsArticle(
				currentNews.headingStyle,
				currentPageNumber,
				currentNews.headline,
				currentNews.paragraphs,
				currentNews.hasImage,
				currentNews.imageUrl
			);
			return acc;
		}, "")}`;

		acc += `<section id="page-${currentPageNumber}" class="page">${header} <main>${main}</main> ${footer}</section>`;

		return acc;
	}, "");
}
