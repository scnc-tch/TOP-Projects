//Variables
const library = [];

//DOM Manipulation
const addBookBtn = document.getElementById("addBtn");
const seeLib = document.getElementById("seeLibBtn");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const radioInput = document.querySelectorAll(".radio");

const librarySection = document.getElementById("library")

//Constructor
function makeBook(){
    this.title = title,
    this.author = author
};

makeBook.prototype.currentStatus = function(){
    this.current = current;

}

//Functions

addBookBtn.addEventListener("click", () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const current = radioInput.value
    if(title ===""){
        alert("What about the title?")
    } else if (author === ''){
        alert("Who wrote this book?")
    } else {
    const book = Object.create(makeBook, { title: {value: title}, author: {value: author}, current: {value:current}})
    addBookToLibrary(book)
    clearInputs()
    }
});

let clearInputs = () => {
    titleInput.value ="";
    authorInput.value='';
}

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
    const currentBtn = document.createElement("button")
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
        currentBtn.type = "button"
        currentBtn.id = "current"
        currentBtn.innerHTML = "Read or Not"
    };
        div.appendChild(titleP);
        div.appendChild(authorP);
        div.appendChild(deleteB)
        div.appendChild(currentBtn)
        librarySection.appendChild(div);

        //Delete Btn functionality
        deleteB.addEventListener("click", () => {
           let i = deleteB.dataset;
                library.splice(i,1)
                div.remove()
        });
        //Toggle Btn Functionality
        currentBtn.addEventListener("click", () =>{
            if(book.current === "yes"){
                currentBtn.className = "red"
            } else if (book.current === "no"){
                currentBtn.className = "green"
            }
        })
};