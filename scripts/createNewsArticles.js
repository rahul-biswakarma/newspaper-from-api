// let headingStyles = ["small-heading", "medium-heading", "big-heading"];

function createNewsArticle(
	headingStyleNo,
	pageNo,
	headline,
	paragraphs,
	hasImage = false,
	imageUrl = ""
) {
	return `
		<article>
			<h1 class="big-heading">${headline}</h1>
			<div>
			${hasImage === true ? `<img src="${imageUrl}" alt="" >` : ""}
			${paragraphs.reduce((acc, paragraph) => {
				acc += `<p>${paragraph}</p>`;
				return acc;
			}, "")}
			</div>
		</article>
	`;
}
