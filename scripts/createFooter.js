function createFooter(totalPageNumber, currentPageNumber) {
	let footerBoxs = `
	<div class="footer-box-container">
		<span class="red-box"></span>
		<span class="green-box"></span>
		<span class="blue-box"></span>
	</div>`;

	return `
	<footer>
		<div class="footer-box-container">
			${
				currentPageNumber !== 1
					? `<button class="previous-button" onclick="flipPageBackward(${
							currentPageNumber - 1
					  })">Previous</button>`
					: footerBoxs
			}
		</div>

		<div class="footer-seperator"></div>
		<div class="footer-box-container">
			<span class="red-box"></span>
			<span class="green-box"></span>
			<span class="blue-box"></span>
		</div>
		<div class="footer-seperator"></div>

		<div class="footer-box-container">
		${
			currentPageNumber === totalPageNumber
				? footerBoxs
				: `<button class="next-button" onclick="flipPageForward(${
						currentPageNumber + 1
				  })">Next</button> `
		}
			
		</div>
	</footer>`;
}
