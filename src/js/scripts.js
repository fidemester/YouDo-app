//can be deleted
console.log("Console log works!");

//create js element

let InputElement = document.getElementById("todo-text");
let CreateButton = document.getElementById("create-btn");


// create and remove list items, due date

CreateButton.addEventListener("click", event => {
    event.preventDefault();
    let liElement = document.createElement("li");
    document.body.append(liElement);
    liElement.innerText = InputElement.value;

    let ResetElement = document.createElement("button");
    ResetElement.textContent = "Delete"
    ResetElement.style.cursor = "pointer";

    let dateElement = document.getElementById("time-spec");

    // Refresh
    let myLocalStorage =window.localStorage.setItem("ToDo", liElement.innerText);
    let SessionArray= [""];
        SessionArray.push(liElement.innerText);

    //list todos
    liElement.append(dateElement.value, ResetElement);


    //priority

    let PriorityForm = document.getElementById("priority-form");

    PriorityForm.addEventListener("click", event => {

        switch (event.target.value) {
            case "1":
                let LowElement = document.createElement("h6").innerText = "Low";
                liElement.append(LowElement);
                break;
            case "2":
                let MediumElement = document.createElement("h5").innerText = "Medium";
                liElement.append(MediumElement);
                break;

            case "3":
                let HeighElement = document.createElement("h4").innerText = "Heigh";
                liElement.append(HeighElement);
                break;
            default:
                console.log("nem jó");
        }
    })
    ResetElement.addEventListener("click", function () {
        liElement.remove();
    })
})


//keyup event + Createbutton available

InputElement.addEventListener("keydown", event => {
    if (event.target.value.length < 6) {
        InputElement.style.border = "2px solid red"
    } else {
        InputElement.style.border = "2px solid green";
        CreateButton.removeAttribute("disabled");
    }
})
