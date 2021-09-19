class Storage {

    static addbookToStorage(newbook){
        let books = this.getbooksFromStorage();

        books.push(newbook);
        localStorage.setItem("books",JSON.stringify(books));

    }
    static getbooksFromStorage(){
        let books;

        if (localStorage.getItem("books") === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem("books"));

        }

        return books;
    }
    static deletebookFromStorage(bookTitle){
        let books = this.getbooksFromStorage();
        // splice
        books.forEach(function(book,index){
            if(book.title === bookTitle) {
                books.splice(index,1);
            }
        });

        localStorage.setItem("books",JSON.stringify(books));




    }
    static clearAllbooksFromStorage(){

        localStorage.removeItem("books");

    }

}
