const NEWS_CATEGORIES = [
	"top",
	"business",
	"entertainment",
	"environment",
	"food",
	"health",
	"politics",
	"science",
	"sports",
	"technology",
	"world",
];

let newsPaper = {
	info: {
		totalPageNumbers: NEWS_CATEGORIES.length,
		price: 34.3,
		newsDate: "08 Feb, 2023",
	},
	pages: [],
};

// const API_KEY = "pub_16803587a0d6bbf5c2309adac6f3a62413bda";
const API_KEY = "pub_1682821ed6c8f14ff7787ad6940934a5178a3";

Promise.all(
	NEWS_CATEGORIES.map(async (new_category, index) => {
		let pageNo = index + 1;
		return await fetch(
			`https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${new_category}&language=en`
		)
			.then((res) => res.json())
			.then((data) => {
				newsPaper.pages.push({
					info: {
						newsCategory: NEWS_CATEGORIES[index],
						hasSpecialMessage: false,
						specialMessage: "",
					},
					news: data.results.map((result) => {
						return {
							headingStyle: 1,
							pageNo: pageNo,
							headline: result.title,
							paragraphs: [
								result.description !== null ? result.description : "",
								result.content !== null ? result.content : "",
							],
							hasImage:
								result.image_url !== "" || result.image_url !== null
									? true
									: false,
							imageUrl: result.image_url,
						};
					}),
				});
			});
	})
)
	.then((pages) => {
		updateDomWithNews();
	})
	.catch((error) => {
		console.error(error);
	});
