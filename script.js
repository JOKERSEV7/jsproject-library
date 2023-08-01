let myLibrary = [];

            function Book(title, author, pages) {
                this.title = title;
                this.author = author;
                this.pages = pages;
                this.isRead = false;

                this.toggleReadStatus = function () {
                    this.isRead = !this.isRead;
                }
            }


            function addBookToLibrary(event) {
                event.preventDefault();


                let title = document.getElementById("title").value;
                let author = document.getElementById("author").value;
                let pages = document.getElementById("pages").value;

                if (!title || !author || !pages) {
                    alert("Please fill in all fields");
                    return;
                }

                let newBook = new Book(title, author, pages);

                myLibrary.push(newBook);

                document.getElementById("bookForm").reset();

                displayBooks();
            }

            function toggleFormDisplay() {
                var formDiv = document.getElementById("bookForm");
                if (formDiv.style.display === "none") {
                    formDiv.style.display = "block";
                } else {
                    formDiv.style.display = "none";
                }
            }

            function displayBooks() {
                const bookContainer = document.getElementById("bookContainer");
                bookContainer.innerHTML = "";

                myLibrary.forEach((book, index) => {
                    const bookCard = document.createElement("div");
                    bookCard.classList.add("book-card");

                    const titleElement = document.createElement("h2");
                    titleElement.textContent = book.title;

                    const authorElement = document.createElement("p");
                    authorElement.textContent = `Author : ${book.author}`;

                    const pagesElement = document.createElement("p");
                    pagesElement.textContent = `Pages : ${book.pages}`;

                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Delete";

                    deleteBtn.addEventListener("click", function() {
                        myLibrary.splice(index, 1);
                        displayBooks();
                    });

                    const readStatusBtn = document.createElement("button");
                    readStatusBtn.textContent = book.isRead ? "Mark as Unread": "Mark as Read";
                    
                    readStatusBtn.addEventListener("click", function() {
                        book.toggleReadStatus();
                        displayBooks();
                    })



                    bookCard.appendChild(titleElement);
                    bookCard.appendChild(authorElement);
                    bookCard.appendChild(pagesElement);
                    bookCard.appendChild(deleteBtn);
                    bookCard.appendChild(readStatusBtn);

                    bookContainer.appendChild(bookCard);
                })

                
            }
            let btn = document.getElementById("btn");
btn.addEventListener("click", toggleFormDisplay);
document.getElementById("bookForm").addEventListener("submit", addBookToLibrary);

displayBooks();


