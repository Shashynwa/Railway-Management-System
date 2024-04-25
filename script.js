var numOfPassengers = 1;
const PassengersVar = document.getElementById("numOfPassengers");

const removebtn = document.getElementById("remove-passenger");

function addPassenger() {
    const div = document.createElement("div");
    numOfPassengers++;
    const form = document.getElementById("other-passengers");
    const input = document.createElement("input");
    input.name = `passenger${numOfPassengers}`;
    input.placeholder = "Passenger name";
    input.required = true;
    input.type = "text";
    input.classList.add("input");
    // Also take phone, email and age
    const phone = document.createElement("input");
    phone.name = `phone${numOfPassengers}`
    phone.placeholder = "Phone";
    phone.required = true;
    phone.type="tel";
    phone.classList.add("input");
    const email = document.createElement("input");
    email.name = `email${numOfPassengers}`
    email.placeholder = "Email";
    email.required = true;
    email.type="email";
    email.classList.add("input");
    const age = document.createElement("input");
    age.name = `age${numOfPassengers}`
    age.placeholder = "Age";
    age.required = true;
    age.type="number";
    age.classList.add("input");

    const heading = document.createElement("h3");
    heading.textContent = "Passenger " + numOfPassengers;
    div.appendChild(heading);
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    div.appendChild(email);
    div.appendChild(document.createElement("br"));
    div.appendChild(phone);
    div.appendChild(document.createElement("br"));
    div.appendChild(age);
    div.appendChild(document.createElement("br"));
    form.appendChild(div);
    button.disabled = div.querySelectorAll("input").length === 1;

    PassengersVar.value = numOfPassengers;
    
}

function removePassenger() {
    const form = document.getElementById("other-passengers");

    // remove the latest div from this form
    form.removeChild(form.lastChild);
    numOfPassengers--;
    PassengersVar.value = numOfPassengers;
}