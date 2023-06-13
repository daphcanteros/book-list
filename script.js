document.addEventListener('DOMContentLoaded', function() {
    // selecting elements
    const book = document.querySelector("#book-title");
    const author = document.querySelector("#author-name");
    const year = document.querySelector("#published-year");
    const submit = document.querySelector("button");
    const list = document.querySelector(".book-list");

    // event listener
    submit.addEventListener('click', function(e) {
        e.preventDefault(); // changes retained

        // form validation
        if (book.value == '' && author.value == '' && year.value == '') {

            // warning if all empty field
            book.classList.add('warning');
            author.classList.add('warning');
            year.classList.add('warning');

            // warning placeholder changed
            book.setAttribute("placeholder", "Please enter a book title")
            author.setAttribute("placeholder", "Please enter an author name")
            year.setAttribute("placeholder", "Please input year published")

            // warning removed
            function removeWarning() {
                // warning removed to all empty fields
                book.classList.remove('warning');
                author.classList.remove('warning');
                year.classList.remove('warning');

                // warning placeholder removed
                book.setAttribute("placeholder", "")
                author.setAttribute("placeholder", "")
                year.setAttribute("placeholder", "")
            }

            setTimeout(removeWarning, 1024)

        } else if (book.value == '') {
            // book title warning
            book.classList.add('warning');
            book.setAttribute("placeholder", "Please enter a book title")

            function removeTitleWarning() {
                book.classList.remove('warning');
                book.setAttribute("placeholder", "")
            }
            setTimeout(removeTitleWarning, 1024);

        } else if (author.value == '') {
            // author name warning
            author.classList.add('warning');
            author.setAttribute("placeholder", "Please enter an author name")
            
            function removeAuthorWarning() {
                author.classList.remove('warning');
                author.setAttribute("placeholder", "")
            }
            setTimeout(removeAuthorWarning, 1024);

        } else if (year.value == '') {
            // author name warning
            year.classList.add('warning');
            year.setAttribute("placeholder", "Please input year published")
            
            function removeYearWarning() {
                year.classList.remove('warning');
                year.setAttribute("placeholder", "")
            }
            setTimeout(removeYearWarning, 1024);

        } else {

            // selecting elements
            const newRow = document.createElement('tr');
            const bookTitleCell = document.createElement('td');
            const authorNameCell = document.createElement('td');
            const yearPublishedCell = document.createElement('td');

            // a newly appended row with 3 cells will appear after clicking submit
            bookTitleCell.textContent = book.value;
            authorNameCell.textContent = author.value;
            yearPublishedCell.textContent = year.value;

            newRow.appendChild(bookTitleCell);
            newRow.appendChild(authorNameCell);
            newRow.appendChild(yearPublishedCell);

            list.appendChild(newRow);
        }

        // text will be blank after putting content
        book.value = '';
        author.value = '';
        year.value = '';
    });
});