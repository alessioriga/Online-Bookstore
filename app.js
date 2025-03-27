const books = [
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        genre: "Thriller",
        price: 7.17,
        language: "English",
        format: "Paperback",
        year: 2016,
        description: "A psychological thriller about memory, obsession, and deception.",
        popularity: 8.5
    },
    {
        title: "Il nome della rosa",
        author: "Umberto Eco",
        genre: "Mystery",
        price: 12.63,
        language: "Italian",
        format: "Hardcover",
        year: 1980,
        description: "Mistero medievale con indagini e riflessioni filosofiche.",
        popularity: 9.5
    },
    {
        title: "The Boy in the Striped Pyjamas",
        author: "John Boyne",
        genre: "Fiction",
        price: 5.99,
        language: "English",
        format: "eBook",
        year: 2008,
        description: "A story of innocence amid Holocaust tragedy.",
        popularity: 8.5
    },
    {
        title: "Il giorno della civetta",
        author: "Leonardo Sciascia",
        genre: "Fiction",
        price: 12.18,
        language: "Italian",
        format: "Paperback",
        year: 2002,
        description: "Mistero poliziesco sulla mafia siciliana e corruzione.",
        popularity: 8.0
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        genre: "Fantasy",
        price: 12.55,
        language: "English",
        format: "Hardcover",
        year: 1997,
        description: "A young wizard discovers magic, friendship, and adventure.",
        popularity: 10.0
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J. R. R. Tolkien",
        genre: "Fantasy",
        price: 7.99,
        language: "English",
        format: "Paperback",
        year: 1954,
        description: "A group embarks on a quest to destroy evil.",
        popularity: 9.5
    },
    {
        title: "The Girl With the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Mystery",
        price: 7.99,
        language: "English",
        format: "eBook",
        year: 2015,
        description: "A journalist and hacker investigate a wealthy family's mystery.",
        popularity: 8.5
    },
];

let userName = [];

document.getElementById('addName').addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;

    if (nameValue !== "") {
        if (userName.length === 0) {
            userName.push(nameValue);
        } else {
            userName[0] = nameValue;
        }

        nameInput.disabled = true;

        const output = document.getElementById('output');
        output.innerHTML = "";

        const nameCard = document.createElement("div");
        nameCard.className = "book-card";
        nameCard.innerHTML = "<h3 style='text-align: center;'>Hi " + userName[0] + ", here's your Reading Vault </h3>";
        output.appendChild(nameCard);
    }
});

document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const authorValue = document.getElementById("author").value.toLowerCase();
    const genreInput = document.querySelector('input[name="genre"]:checked').value;
    const priceRaw = document.getElementById("price").value;
    let priceInput = null;
    if (priceRaw !== "") {
        priceInput = parseFloat(priceRaw);
    }

    const languageInput = document.getElementById("language").value;
    const formatInput = document.querySelector('input[name="format"]:checked').value;

    const yearRaw = document.getElementById("year").value;
    let yearInput = null;
    if (yearRaw !== "") {
        yearInput = parseInt(yearRaw);
    }

    const filteredBooks = [];

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        let matches = true;

        if (authorValue !== "") {
            if (book.author.toLowerCase().indexOf(authorValue) === -1) {
                matches = false;
            }
        }

        if (genreInput !== "") {
            if (book.genre !== genreInput) {
                matches = false;
            }
        }

        if (priceInput !== null) {
            if (book.price > priceInput) {
                matches = false;
            }
        }

        if (languageInput !== "") {
            if (book.language !== languageInput) {
                matches = false;
            }
        }

        if (formatInput !== "") {
            if (book.format !== formatInput) {
                matches = false;
            }
        }

        if (yearInput !== null) {
            if (book.year <= yearInput) {
                matches = false;
            }
        }

        if (matches) {
            filteredBooks.push(book);
        }
    }

    const proposals = document.getElementById("proposals");
    proposals.innerHTML = "";

    if (filteredBooks.length > 0) {
        for (let i = 0; i < filteredBooks.length; i++) {
            const b = filteredBooks[i];
            const bookCard = document.createElement("div");
            bookCard.className = "book-card";

            const title = document.createElement("h3");
            title.textContent = b.title;
            title.style.textAlign = "center";

            const details = document.createElement("div");
            details.innerHTML = "<p><strong>Author:</strong> " + b.author + "</p>" +
                "<p><strong>Genre:</strong> " + b.genre + "</p>" +
                "<p><strong>Price:</strong> £" + b.price.toFixed(2) + "</p>" +
                "<p><strong>Language:</strong> " + b.language + "</p>" +
                "<p><strong>Format:</strong> " + b.format + "</p>" +
                "<p><strong>Year:</strong> " + b.year + "</p>" +
                "<p><strong>Description:</strong> " + b.description + "</p>" +
                "<p><strong>Popularity:</strong> " + b.popularity + "/10</p>";

            const addButton = document.createElement("button");
            addButton.textContent = "Add to Reading Vault";
            addButton.style.marginTop = "10px";

            addButton.addEventListener("click", function () {
                addToVault(b);
            });

            bookCard.appendChild(title);
            bookCard.appendChild(details);
            bookCard.appendChild(addButton);

            proposals.appendChild(bookCard);
        }
    } else {
        proposals.innerHTML = "<p>No books matched your preferences. Try adjusting the filters!</p>";
    }
});