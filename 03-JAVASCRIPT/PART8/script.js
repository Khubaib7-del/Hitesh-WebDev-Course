//example 1
document.getElementById('changeTextButton').
    addEventListener('click', () => {
        let paragraph = document.getElementById
            ('myparagraph');
        paragraph.textContent = "The paragraph is changed!";
    })

//example 2
document.getElementById('highlightFirstCity').
    addEventListener('click', function () {
        let firstcity = document.getElementById('citiesList');
        firstcity.firstElementChild.classList.add('highlight');
        // firstcity.firstElementChild.classList.toggle('highlight');
        // //Switches B/W Highlight and No Highlight 
    })

//example 3

document.getElementById('changeOrder').
    addEventListener('click', function () {
        let coffeeType = document.getElementById('coffeeType');
        coffeeType.textContent = "Espresso";
        coffeeType.style.background = "brown";
        coffeeType.style.padding = "2px";
        coffeeType.style.borderRadius = "5px";
    })

//example 4

document.getElementById('addNewItem').
    addEventListener('click', function () {
        let newItem = document.createElement('Li');
        newItem.textContent = "Eggs";
        document.getElementById("ShoppingList").appendChild(newItem);
    });

//example 5
document.getElementById('removeLastTask').
    addEventListener('click', function () {
        let taskList = document.getElementById('taskList');
        let lastTask = taskList.lastElementChild;
        if (lastTask) {
            taskList.removeChild(lastTask);
        }
    });

//example 6

document.getElementById("ClickMeButton").
    addEventListener('dblclick', function () {
        alert("chai code is great");
    });


// example 7

document.getElementById("teaList").
    addEventListener('click', function (event) {
        if (event.target && event.target.matches('.teaItem')) {
            alert("You clicked on " + event.target.textContent);
        }
    });

//example 8

document.getElementById("feedbackForm").
    addEventListener('submit', function (event) {
        event.preventDefault();
        event.defaultPrevented;
        let feedback = document.getElementById("feedbackInput").value;
        alert(feedback);
        document.getElementById("feedbackDisplay").textContent = feedback;
    });

//example 9

document.addEventListener('DOMContentLoaded',
    function (event) {
        document.getElementById("domStatus").textContent = "DOM is fully loaded and parsed!";
    });

//example 10

document.getElementById("toggleHighlight").
    addEventListener('click', function () {
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.toggle('highlight');
    });