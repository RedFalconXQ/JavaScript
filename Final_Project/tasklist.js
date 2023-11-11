let taskList = [];

//Constructor
function Task(taskNumber, title, description, status) {
    this.taskNumber = taskNumber;
    this.title = title;
    this.description = description;
    this.status = status;
}

function addTask() {
    let taskNumber = document.getElementById("inputTaskNumber").value;
    let title = document.getElementById("inputTitle").value;
    let description = document.getElementById("inputDescription").value;

    if (taskNumber > 0) {
        let task = new Task(taskNumber, title, description, false);

        taskList.push(task);
        alert("Task registered");
    }
    else {
        alert("INPUT NOT ALLOWED");
    }
}

function displayTask() {
    let displayT = '';
    let checkBox = document.getElementById("completed").checked;
    console.log("Check", checkBox);
    for (let i = 0; i < taskList.length; i++) {
        displayT += '<li>' + "Position: " + [i + 1] + ". " + "Task: " + taskList[i].taskNumber + ". "
            + "Title: " + taskList[i].title + ". "
            + "Description: " + taskList[i].description + ". "
            + "Status: " + checkBox + ". " + '</li>';
        console.log("Check inside", checkBox);
    }

    document.getElementById("listOfTasks").innerHTML = displayT;
}

/*function completed() {
    let checkBoxCompleted = document.getElementById("completed");
    let textCompleted = document.getElementById("text");
    if (checkBoxCompleted.checked == true){
        textCompleted.style.display = "block";
    } else {
        textCompleted.style.display = "none";
    }
}*/

function showTaskToEdit() {
    document.getElementById("editTasks").style.display = "block";

    /*let inputN = document.getElementById("inputTaskNumber");
    inputN.disabled = true;

    let inputT = document.getElementById("inputTitle");
    inputT.disabled = true;

    let inputD = document.getElementById("inputDescription");
    inputD.disabled = true;*/

    let taskToEdit = document.getElementById("inputTaskToEdit").value;

    let displayTE = '';

    //Display the task to be edited according to the input
    positionToEdit = taskToEdit - 1;
    if (positionToEdit >= 0 && positionToEdit <= taskList.length - 1) {
        //console.log("Position", positionToEdit);
        displayTE += "Position: " + [positionToEdit + 1] + '<li>' + "Task: " + taskList[positionToEdit].taskNumber + ". "
            + "Title: " + taskList[positionToEdit].title + ". "
            + "Description: " + taskList[positionToEdit].description + '</li>';

        document.getElementById("taskToEdit").innerHTML = displayTE;
    }
    else {
        alert("INPUT NOT ALLOWED");
    }
}

function updateTask() {
    document.getElementById("editTasks").style.display = "block";

    let inputN = document.getElementById("updateTaskNumber").value;
    inputN.disabled = false;

    let inputT = document.getElementById("updateTitle").value;
    inputT.disabled = false;

    let inputD = document.getElementById("updateDescription").value;
    inputD.disabled = false;

    //Update the task according to the input
    let positionToEdit = +inputN - 1;
    console.log(positionToEdit);

    for (let i = 0; i < taskList.length; i++) {
        if (i == positionToEdit) {
            taskList[i].title = inputT;
            taskList[i].description = inputD;
        } else {
            alert("INPUT NOT ALLOWED");
        }
    }
}

function deleteTask() {
    let taskToDelete = document.getElementById("inputTaskToDelete").value;

    //Delete the task according to the input. The next task replaces the position of the deleted task
    positionToDelete = taskToDelete - 1;
    if (positionToDelete >= 0 && positionToDelete <= taskList.length - 1) {

        taskList.splice(positionToDelete, 1);
        alert("Task deleted");
    }
    else {
        alert("INPUT NOT ALLOWED");
    }
}
