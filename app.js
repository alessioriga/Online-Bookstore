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

