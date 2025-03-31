function task1() {
    let fruits = ["apple", "cherry", "melon", "orange"];
    fruits.pop();
    console.log("1.1:", fruits);
    fruits.unshift("pineapple");
    console.log("1.2:", fruits);
    fruits.sort().reverse();
    console.log("1.3:", fruits);
    console.log("1.4: apple:", fruits.indexOf("apple"));
}

function task2() {
    let colors = ["red", "blue", "yellow", "green-blue", "brown"];
    let longest = colors.reduce((a, b) => (a.length > b.length ? a : b));
    let shortest = colors.reduce((a, b) => (a.length < b.length ? a : b));
    console.log("2.1: longest:", longest, "shortest:", shortest);
    colors = colors.filter(color => color.includes("blue"));
    console.log("2.2:", colors.join(", "));
}

function task3() {
    let employees = [
        { name: "Петро", age: 30, position: "розробник" },
        { name: "Марія", age: 25, position: "дизайнер" },
        { name: "Іван", age: 35, position: "розробник" }
    ];
    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("3.1:", employees);
    console.log("3.2:", employees.filter(e => e.position === "розробник"));
    employees = employees.filter(e => e.age !== 30);
    console.log("3.3:", employees);
    employees.push({ name: "Катерина", age: 28, position: "тестувальник" });
    console.log("3.4:", employees);
}

function task4() {
    let students = [
        { name: "Олексій", age: 20, course: 2 },
        { name: "Анна", age: 22, course: 3 },
        { name: "Максим", age: 19, course: 1 }
    ];
    students = students.filter(student => student.name !== "Олексій");
    console.log("4.1:", students);
    students.push({ name: "Ірина", age: 21, course: 2 });
    console.log("4.2:", students);
    students.sort((a, b) => b.age - a.age);
    console.log("4.3:", students);
    console.log("4.4:", students.find(student => student.course === 3));
}

function task5() {
    let numbers = [2, 5, 8, 10, 15];
    console.log("5.1:", numbers.map(n => n ** 2));
    console.log("5.2:", numbers.filter(n => n % 2 === 0));
    console.log("5.3: Сума:", numbers.reduce((sum, n) => sum + n, 0));
    numbers = [...numbers, 12, 14, 16, 18, 20];
    console.log("5.4:", numbers);
    numbers.splice(0, 3);
    console.log("5.5:", numbers);
}

function libraryManagement() {
    let books = [
        { title: "Жага до життя", author: "Джек Лондон", genre: "Драма", pages: 200, isAvailable: true },
        { title: "Гаррі Поттер та філосовський камінь", author: "Джоан Роулінг", genre: "Фантастика", pages: 350, isAvailable: false }
    ];
    
    function addBook(title, author, genre, pages) {
        books.push({ title, author, genre, pages, isAvailable: true });
    }
    function removeBook(title) {
        books = books.filter(book => book.title !== title);
    }
    function findBooksByAuthor(author) {
        return books.filter(book => book.author === author);
    }
    function toggleBookAvailability(title, isBorrowed) {
        let book = books.find(book => book.title === title);
        if (book) book.isAvailable = !isBorrowed;
    }
    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
    }
    function getBooksStatistics() {
        let total = books.length;
        let available = books.filter(book => book.isAvailable).length;
        let borrowed = total - available;
        let avgPages = books.reduce((sum, book) => sum + book.pages, 0) / total;
        return { total, available, borrowed, avgPages };
    }

    console.log("6:", getBooksStatistics());
}

function task7() {
    let student = { name: "Дмитро", age: 21, course: 3 };
    student.subjects = ["Math", "Programing", "Physics"];
    delete student.age;
    console.log("7:", student);
}

task1();
task2();
task3();
task4();
task5();
libraryManagement();
task7();
