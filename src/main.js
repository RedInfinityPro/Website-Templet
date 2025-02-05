function updateTime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const day = date.toLocaleDateString(undefined, options);
    const time = date.toLocaleTimeString();
    document.getElementById('clock').innerHTML = `${day}`;
}
setInterval(updateTime, 1000);
updateTime();

function shortenString(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.substring(0, str.lastIndexOf(' ', maxLength)) + "...";
}

function formatTitle(title) {
    return title
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function update_WebsiteTitle() {
    let title = 'Welcome';
    let formattedTitle = formatTitle(title);
    document.getElementById('website-title').innerHTML = formattedTitle;
}
update_WebsiteTitle();

function search_elements() {
    let input = document.getElementById('searchbar').value
    let buttons = document.getElementsByClassName('responsive-button');
    input.toLowerCase();

    for (let button of buttons) {
        let title = button.querySelector('.button-title').innerText.toLowerCase();
        let description = button.querySelector('.button-summary').innerText.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }
    }
}
document.getElementById('searchbar').addEventListener('keyup', search_elements);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.querySelectorAll('.responsive-button').forEach(button => {
    button.addEventListener('click', function () {
        article_openForm();
        document.getElementById('popup-articleTitle').innerHTML = `${this.querySelector('.button-title').innerText}`;
        document.getElementById('popup-articleContents').innerHTML = `${this.querySelector('.button-summary').innerText}`;
    });
});

document.getElementById('createFormContent').addEventListener('submit', function (e) {
    e.preventDefault();
});

document.getElementById('articleFormContent').addEventListener('submit', function (e) {
    e.preventDefault();
});

function showForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function create_openForm() {
    showForm('createForm');
}

function article_openForm() {
    showForm('articleForm');
}

function addResponsiveButton() {
    // Create button container
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("post-content");

    // Create button
    let button = document.createElement("button");
    button.classList.add("responsive-button");

    // Create image
    let img = document.createElement("img");
    img.src = "assets/add-button.png"; // Use correct path
    img.alt = "Button image";
    img.classList.add("button-image");

    // Create button content container
    let buttonContent = document.createElement("div");
    buttonContent.classList.add("button-content");

    // Create clock span
    let clockSpan = document.createElement("span");
    clockSpan.id = "button-clock";

    // Create title
    let title = document.createElement("h3");
    title.classList.add("button-title");
    title.innerText = "Add new post";

    // Create description
    let description = document.createElement("p");
    description.classList.add("button-summary");
    description.innerText = "This is a sample description that explains what this button does. The text will wrap to multiple lines if it gets too long, and the button will expand vertically to accommodate it.";

    // Append elements
    buttonContent.appendChild(clockSpan);
    buttonContent.appendChild(title);
    buttonContent.appendChild(description);
    button.appendChild(img);
    button.appendChild(buttonContent);
    buttonContainer.appendChild(button);

    // Append new button to a container in the document
    document.querySelector(".content").appendChild(buttonContainer);
}

function updateSummary() {
    let longText = document.getElementById('enter-text').value;
    let summary = shortenString(longText, 200);
    document.getElementById("summary").innerHTML = summary;
}

document.getElementById("post").addEventListener("click", addResponsiveButton);