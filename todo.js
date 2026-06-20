let tasks=
JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

const list=
document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML+=
`
<li>
${task}
<button onclick="deleteTask(${index})">
Delete
</button>
</li>
`;

});

}

function addTask(){

const input=
document.getElementById("taskInput");

tasks.push(input.value);

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

renderTasks();

input.value="";

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

renderTasks();

}

window.onload=renderTasks;