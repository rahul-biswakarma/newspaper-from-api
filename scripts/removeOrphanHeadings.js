function removeOrphanHeading(pageNo) {
	setTimeout(() => {
		let allMainContainers = document.querySelectorAll("main");
		Array.from(allMainContainers).map((mainContainer) => {
			let allArticleContainers = mainContainer.querySelectorAll("article");
			let parentHeight = mainContainer.scrollHeight;
			Array.from(allArticleContainers).reduce(
				(previousHeight, articleContainer) => {
					let articleContainerHeight = articleContainer.offsetHeight;
					let headline = articleContainer.querySelector("h1");
					let headlineHeight = headline.offsetHeight;

					if (articleContainerHeight > parentHeight) {
						if (articleContainerHeight - headlineHeight < parentHeight) {
							articleContainer.style.breakInside = "avoid-column";
						} else {
							articleContainer.style.breakInside = "auto";
						}
					} else if (previousHeight !== 0 && previousHeight < parentHeight) {
						console.log(articleContainer, previousHeight + headlineHeight);
						if (previousHeight + headlineHeight <= parentHeight)
							articleContainer.style.breakInside = "avoid-column";
						else articleContainer.style.breakInside = "auto";
					}
					return articleContainerHeight;
				},
				0
			);
		});
	}, 300);
}

window.addEventListener("DOMContentLoaded", removeOrphanHeading());
