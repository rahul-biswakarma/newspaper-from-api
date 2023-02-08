function flipPageForward(pageNo) {
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo - 1}`).style.display = "none";
	// removeOrphanHeading();
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function flipPageBackward(pageNo) {
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo + 1}`).style.display = "none";
	// removeOrphanHeading();
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
}
