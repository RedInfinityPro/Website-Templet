function getSecureRandomInt(min, max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return min + (array[0] % (max - min + 1));
}

function addHistory(button_numbers) {
    let button = document.createElement("button");
    button.classList.add("history-track");
    button.innerText = button_numbers

    document.querySelector(".content").appendChild(button);
}

function update_buttonText() {
    for (let x = 1; x < 6; x++) {
        const number = getSecureRandomInt(1, 99);
        let button = document.getElementById(`num-button-${x}`);
        
        if (button) {
            button.classList.add("fade-out"); // Apply fade-out effect
            
            setTimeout(() => {
                button.innerHTML = `${number}`;
                button.classList.remove("fade-out");
                button.classList.add("fade-in"); // Apply fade-in effect
            }, 300); // Wait for fade-out before updating text
            
            setTimeout(() => {
                button.classList.remove("fade-in"); // Remove fade-in for smooth loop
            }, 600);
        }
    }
}
update_buttonText();

function spin_WheelEvent() {
    // add history
    let numbers = `Numbers: `
    for (let x = 1; x < 6; x++) {
        let button = document.getElementById(`num-button-${x}`).innerHTML;
        if (x < 5) {
            numbers += `${button}` + '-'; 
        } else {
            numbers += `${button}`;
        }
    }
    addHistory(numbers);

    // change numbers
    for (let x = 1; x < 6; x++) {
        const number = getSecureRandomInt(1, 99);
        let button = document.getElementById(`num-button-${x}`);
        
        if (button) {
            button.classList.add("fade-out"); // Apply fade-out effect
            
            setTimeout(() => {
                button.innerHTML = `${number}`;
                button.classList.remove("fade-out");
                button.classList.add("fade-in"); // Apply fade-in effect
            }, 300); // Wait for fade-out before updating text
            
            setTimeout(() => {
                button.classList.remove("fade-in"); // Remove fade-in for smooth loop
            }, 600);
        }
    }
}

function search_elements() {
    let input = document.getElementById('searchbar').value.toLowerCase().trim();
    let buttons = document.querySelectorAll('.history-track');
    
    buttons.forEach(button => {
        let text = button.innerText.toLowerCase();
        if (text.includes(input)) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
}

document.getElementById('searchbar').addEventListener('keyup', search_elements);
search_elements();

document.querySelectorAll('.button-style').forEach(button => {
    let color = "black";
    for (let x = 1; x < 6; x++) {
        let num = document.getElementById(`num-button-${x}`).innerHTML;
        color = num < 24 ? 'red' :
            num >= 24 && num < 48 ? 'green' :
            num >= 48 && num < 72 ? 'blue' :
            num >= 72 && num <= 96 ? 'purple' :
            'black';
    }
    button.style.border = `1px solid ${color}`;
    button.style.animation = "pulse 1s infinite alternate";
});

