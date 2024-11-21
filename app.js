// html elements
let bookId = 0;
const bookContainer = document.getElementById("all-books");
let book = document.createElement("li");
const title = document.getElementById("title");
const author = document.getElementById("author");
const primaryReadCheckbox = document.getElementById("primary-read");
const inputForm = document.getElementById("form");
// light/dark mode
let ModeToggleElement = document.querySelector("#toggle");
let lightModeToggle = false; // light mode by default, false returns dark mode
let darkModeToggle = true;
ModeToggleElement.addEventListener("click", () => {
    if (darkModeToggle == true) {
        lightModeToggle = true;
        darkModeToggle = false;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else if (lightModeToggle == true) {
        darkModeToggle = true;
        lightModeToggle = false;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});
// books code
const books = [];
function newBook() {
    // created dom elements
    let book = document.createElement("li");
    let removeBtn = document.createElement("button");
    let titleElement = document.createElement("span");
    let authorElement = document.createElement("span");
    let secondaryCheckBoxLabel = document.createElement("label");
    let secondaryCheckBox = document.createElement("input");
    // set created elements' properties
    bookId++;
    removeBtn.textContent = `Remove: ${title.value}, By: ${author.value}`;
    titleElement.textContent = title.value;
    authorElement.textContent = `By: ${author.value}`;
    secondaryCheckBoxLabel.textContent = "Read:";
    secondaryCheckBoxLabel.for = "Secondary-Read";
    secondaryCheckBox.type = "checkbox";
    secondaryCheckBox.name = "Secondary-Read";
    secondaryCheckBox.classList.add("Secondary");
    // append items creating book li
    bookContainer.append(book);
    book.append(removeBtn);
    book.append(titleElement);
    book.append(authorElement);
    book.append(secondaryCheckBoxLabel);
    book.append(secondaryCheckBox);
    books.push({
        title: title.value,
        author: author.value,
        readValue: "no",
        // new book properties below if needed
    });
    console.log(books); // log books when added
    let newBookId = bookId - 1;
    console.log(books)
    if (primaryReadCheckbox.checked === true) {
        secondaryCheckBox.disabled = true;
        secondaryCheckBox.checked = true;
        books[newBookId].readValue = "yes";
    }
    secondaryCheckBox.addEventListener("click", () => {
        secondaryCheckBox.disabled = true;
        books[newBookId].readValue = "yes";
        console.log(books); // update books when read value changed
    });
    removeBtn.addEventListener("click", () => {
        book.remove(); // removes book from dom
        books.splice(bookId); // removes from book object
    })
};
inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newBook();
    // clean up
    title.value = "";
    author.value = "";
    primaryReadCheckbox.checked = false;
    // log books after cleanup
});

