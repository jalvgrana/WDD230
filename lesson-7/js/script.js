//To hide-uhide toggle button

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


//To display current date 

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);


//To display message depending on the day of the week

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme")
} else {
    element.classList.add("hideme")
}
