const form = document.getElementById("book-form");
const titleElement = document.querySelector("#title");
const authorElement = document.querySelector("#author");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-books");


// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addbook);
    document.addEventListener("DOMContentLoaded",function(){
        let books = Storage.getbooksFromStorage();
        UI.loadAllbooks(books);

    });

    cardbody.addEventListener("click",deletebook);
    clear.addEventListener("click",clearAllbooks);

}
function addbook(e){
    const title = titleElement.value;
    const author = authorElement.value;
    const url = urlElement.value;

    if (title === "" || author === "" || url === ""){
        // Hata
        UI.displayMessages("Fill in all blanks, please!","danger");

    }
    else {
        // Yeni book
        const newbook = new book(title,author,url);

        UI.addbookToUI(newbook); // Arayüze book ekleme
        Storage.addbookToStorage(newbook); // Storage'a book Ekleme

        UI.displayMessages("Novel successfully added.","success");


    }


    UI.clearInputs(titleElement,urlElement,authorElement);

    e.preventDefault();
}

function deletebook(e){

    if (e.target.id === "delete-book") {
        UI.deletebookFromUI(e.target);
        Storage.deletebookFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Novel successfully deleted","success");

    }

}
function clearAllbooks(){

    if (confirm("Are you sure want to delete all list?")) {
        UI.clearAllbooksFromUI();
        Storage.clearAllbooksFromStorage();

    }


}
