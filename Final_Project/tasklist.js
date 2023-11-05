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

    let task = new Task(taskNumber, title, description);

    taskList.push(task);
    alert("Task registered");
}

function displayTask() {
    let displayT = document.getElementById("ListOfTasks");
    displayT.innerHTML = '';

    for (const task of taskList) {
        //Create paragraph/label <p>
        let labelParagraph = document.createElement("p");
        labelParagraph.innerText = task;

        displayT.appendChild(labelParagraph)
    }

    return '<li>' + displayTask.taskNumber + ' ' + displayTask.title + ' ' + displayTask.description + '</li>'
}