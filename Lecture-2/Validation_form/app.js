const naam = document.querySelector("#naam");
const span1 = document.querySelector("#nameErr");
const btn = document.querySelector('button');
const age = document.querySelector('#umar');
const span2 = document.querySelector("#ageERR");

document.addEventListener('keyup', () => {
    let nameLength = naam.value.length;
    let ageValue = age.value;

    let nameIsValid = nameLength >= 3;
    let ageIsValid = ageValue >= 18;

    if (!nameIsValid) {
        span1.innerHTML = "** Name is too short ...";
    } else {
        span1.innerHTML = "";
    }

    console.log(span2)
    if (!ageIsValid) {
        span2.innerHTML = "** You are not eligible to vote";
    } else {
        span2.innerHTML = "";
    }

    btn.disabled = !(nameIsValid && ageIsValid);
});
