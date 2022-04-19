//Variables
const library = [];

//DOM Manipulation
const addBookBtn = document.getElementById("addBtn");
const seeLib = document.getElementById("seeLibBtn");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const radioYes = document.getElementById("radioYes");
const radioNo = document.getElementById("radioNo");

const librarySection = document.getElementById("library")

//Constructor
function makeBook(){
    this.title = title,
    this.author = author
};

//Functions

addBookBtn.addEventListener("click", () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const book = Object.create(makeBook, { title: {value: title}, author: {value: author}})
    addBookToLibrary(book)

});

let  addBookToLibrary = (book) => {
    library.push(book)
    addVisual(book)
};

//Visual Library and Functionality
const addVisual = (book) => {
    const div = document.createElement('div');
    const titleP = document.createElement("p");
    const authorP = document.createElement('p');
    const deleteB = document.createElement("button")
    for(i = 0; i < library.length; i++){
        div.id = "container";
        div.className = "container";
        titleP.className = "title-p";
        titleP.innerHTML = `${book.title}`;
        authorP.className = "author-p";
        authorP.innerHTML = `${book.author}`;
        deleteB.type = "button";
        deleteB.id = "deleteBtn"
        deleteB.dataset.key  = `${i}`
        deleteB.className = "deleteBtn"
        deleteB.innerHTML = "Delete";
    }
        div.appendChild(titleP);
        div.appendChild(authorP);
        div.appendChild(deleteB)
        librarySection.appendChild(div);

        //Delete Btn functionality
        deleteB.addEventListener("click", () => {
           let i = deleteB.dataset;
                library.splice(i,1)
                div.remove()
                console.log(library)
        })
}
