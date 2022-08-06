shownotes();
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener('click', function (e) {
	let title = document.getElementById('title');
	let text = document.getElementById('addTxt');
	let notes = localStorage.getItem('notes');
	if (notes == null) {
		notesArr = [];
	}
	else {
		notesArr = JSON.parse(notes);
	}
	let notesObj = {
		addTitle: title.value,
		addText: text.value
	}
	notesArr.push(notesObj);
	localStorage.setItem('notes', JSON.stringify(notesArr));
	shownotes();
	text.value = '';
	title.value = '';

})
function shownotes() {
	let notes = localStorage.getItem('notes');
	if (notes == null) {
		notesArr = [];
	}
	else {
		notesArr = JSON.parse(notes);
	}

	let html = ``;
	notesArr.forEach(function (element, index) {
		console.log(element.title);
		html += `
		<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
		<div class="card-body">
			<h5 class="card-title">${element.addTitle}</h5>
			<p class="card-text"> ${element.addText}</p>
			<button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
		</div>
	</div>`;
	});
	let notesElem = document.getElementById('notes');
	if (notesArr.length != 0) {
		notesElem.innerHTML = html;
	}
	else {
		notesElem.innerHTML = `Use Add notes section to add notes`
	}
}
function deleteNote(element, index) {
	alert('Are you sure you want to delete this note?');
	let notes = localStorage.getItem('notes');
	if (notes == null) {
		notesArr = [];
	}
	else {
		notesArr = JSON.parse(notes);
	}
	notesArr.splice(index, 1);
	localStorage.setItem('notes', JSON.stringify(notesArr));
	shownotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

	let inputVal = search.value.toLowerCase();
	// console.log('Input event fired!', inputVal);
	let noteCards = document.getElementsByClassName('noteCard');
	Array.from(noteCards).forEach(function (element) {
		let cardTxt = element.getElementsByTagName("p")[0].innerText;
		if (cardTxt.includes(inputVal)) {
			element.style.display = "block";
		}
		else {
			element.style.display = "none";
		}
		// console.log(cardTxt);
	})
})