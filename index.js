const input = document.querySelector('#email');
const submit = document.querySelector('#submit');
const value = input.value;

input.addEventListener('click', () => {
    input.classList.add('red');
});

input.addEventListener('blur', () => {
    input.classList.remove('red')
});

submit.addEventListener('click', () => {
    if(input.value.match(regex)) {
        console.log("OK")
    } else {
        addAlert();
    }
});

const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
// const emailValidation = () => {
//     if(this.value.match) {
//         console.log("OK")
//     } else {
//         console.log("NO")
//     }
// }

const imgSection = document.querySelector('#img-section');
const form = document.querySelector('#form');
function addAlert() {
    const newDiv = document.createElement('p');
    // const alert = document.createTextNode("Whoops! It looks like you forgot to add your email");

    newDiv.innerText = "Whoops! It looks like you forgot to add your email";
    // document.body.insertBefore(newDiv, imgSection);
    console.log(newDiv)
    form.appendChild(newDiv)
}
console.log(imgSection)