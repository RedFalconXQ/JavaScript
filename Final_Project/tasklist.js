let taskList = [];

//Constructor
function Task(taskNumber, title, description) {
    this.taskNumber = taskNumber;
    this.title = title;
    this.description = description;
}

function addTask() {
    let taskNumber = document.getElementById("inputTaskNumber").value;
    let title = document.getElementById("inputTitle").value;
    let description = document.getElementById("inputDescription").value;

    if (taskNumber > 0) {
        let task = new Task(taskNumber, title, description);

        taskList.push(task);
        alert("Task registered");
    }
    else {
        alert("INPUT NOT ALLOWED");
    }
}

function displayTask() {
    let displayT = '';

    for (let i = 0; i < taskList.length; i++) {
        displayT += '<li>' + "Task: " + taskList[i].taskNumber + ". "
            + "Title: " + taskList[i].title + ". "
            + "Description: " + taskList[i].description + '</li>';
    }

    document.getElementById("ListOfTasks").innerHTML = displayT;
}

function showEditTask() {
    document.getElementById("EditTasks").style.display = "block";

    /*let inputN = document.getElementById("inputTaskNumber");
    inputN.disabled = true;

    let inputT = document.getElementById("inputTitle");
    inputT.disabled = true;

    let inputD = document.getElementById("inputDescription");
    inputD.disabled = true;*/

    let taskToEdit = +document.getElementById("inputTaskToEdit").value;

    /*let position = taskList.find((task, index) => findTaskNumber(task, index));
   function findTaskNumber(task, index) {
       return index === taskToEdit - 1;
   }*/

    let displayTE = '';

    //Display the task to be edited according to the input
    positionToEdit = taskToEdit - 1;
    if (positionToEdit >= 0 && positionToEdit <= taskList.length - 1) {
        //console.log("Position", positionToEdit);
        displayTE += '<ol>' + '<li>' + "Task Number: " + taskList[positionToEdit].taskNumber + ". "
            + "Title: " + taskList[positionToEdit].title + ". "
            + "Description: " + taskList[positionToEdit].description + '</li>' + '</ol>';

        document.getElementById("taskToEdit").innerHTML = displayTE;
    }
    else {
        alert("INPUT NOT ALLOWED");
    }
}

function hideEditTask() {
    document.getElementById("EditTasks").style.display = "none";

    let inputN = document.getElementById("inputTaskNumber");
    inputN.disabled = false;

    let inputT = document.getElementById("inputTitle");
    inputT.disabled = false;

    let inputD = document.getElementById("inputDescription");
    inputD.disabled = false;

    for (let i = 0; i < taskList.length; i++) {
        displayT += '<ol>' + '<li>' + "Task Number: " + taskList[i].taskNumber + ". "
            + "Title: " + taskList[i].title + ". "
            + "Description: " + taskList[i].description + '</li>' + '</ol>';
    }
    /*let taskNumber = document.getElementById("inputTaskToEdit").value;
    let title = document.getElementById("inputTitle").value;
    let description = document.getElementById("inputDescription").value;

    if (taskNumber > 0) {
        let task = new Task(taskNumber, title, description);

        taskList.push(task);
        alert("Task edited successfully!");
    }
    else {
        alert("INPUT NOT ALLOWED");
    }*/
}
function deleteTask() {
    let taskToDelete = document.getElementById("inputTaskToDelete").value;

    //Delete the task according to the input. Another task replaces the position of the deleted task
    positionToDelete = taskToDelete - 1;
    if (positionToDelete > 0) {

        taskList.splice(positionToDelete, 1);
        alert("Task deleted");
    }
    else {
        alert("INPUT NOT ALLOWED");
    }
}
