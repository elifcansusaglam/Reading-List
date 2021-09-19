class UI {

    static addbookToUI(newbook){


       const bookList = document.getElementById("books");

       bookList.innerHTML += `

             <tr>
                 <td><img src="${newbook.url}" class="img-fluid img-thumbnail"></td>
                 <td>${newbook.title}</td>
                 <td>${newbook.author}</td>
                 <td><a href="#" id = "delete-book" class = "btn btn-info">Delete Novel</a></td>
             </tr>
       `;


     }
     static clearInputs(element1,element2,element3){
         element1.value = "";
         element2.value = "";
         element3.value = "";

     }
    static displayMessages(message,type){
         const cardBody = document.querySelector(".card-body");
         // Alert divini oluşturma

         const div = document.createElement("div");


         div.className = `alert alert-${type}`;
         div.textContent = message;

         cardBody.appendChild(div);


         setTimeout(function(){
             div.remove();

         },1000);



     }
     static loadAllbooks(books){

         const bookList = document.getElementById("books");

         books.forEach(function(book){
             bookList.innerHTML += `<tr>
             <td><img src="${book.url}" class="img-fluid img-thumbnail"></td>
             <td>${book.title}</td>
             <td>${book.author}</td>
             <td><a href="#" id = "delete-book" class = "btn btn-info">Delete Novel</a></td>
         </tr>`;
         });

     }
     static deletebookFromUI(element) {

         element.parentElement.parentElement.remove();
     }
     static clearAllbooksFromUI(){

         const bookList = document.getElementById("books");

         // bookList.innerHTML = "";

         while(bookList.firstElementChild !== null) { // Child Olduğu Sürece
             bookList.firstElementChild.remove();
         }
     }

}
