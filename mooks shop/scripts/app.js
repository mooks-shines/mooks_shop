//app.js
//The main file for the shop
//Loads JSON data and initializes the UI

// the arrow means take the response run the response,json() on it and return the result
document.addEventListener("DOMContentLoaded", ()=>{
    //loads the shop items
    fetch("data/products.json")
    .then(response => response.json()) //take the response from the server and convert it into a JavaScript object/array
    .then(products=> {console.log("Shop Items:", products);

    });
    //Loads the tasks
    fetch("data/tasks.json")
    .then(repsonse=> response.json())
    .then(tasks=> {console.log("Tasks:", tasks);

    });
    //calling the functions to display them
    fetch("data/tasks.json")
    .then(response => response.json())
    .then(tasks => {displayTasks(tasks);

    });
    fetch("data/products.json")
    .then(response => response.json())
    .then(products =>{displayShop(products);
    });

    //functions
    function displayTasks(tasks)
    {
        const container = document.getElementById("task-list");
        container.innerHTML = ""; //THIS CLEARS THE OLD CONTENT

        tasks.forEach(task => 
        {const section = document.createElement("section");
            section.classList.add("task-item");
            section.textContent = '${tasks.taskName} - ${tasks.points} pts';
            container.appendChild(section)
        }
        );
    }

})