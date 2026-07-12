const fs=require('fs');
const filePath="./tasks.json";
const loadTasks=()=>{
    try{
        const dataBuffer=fs.readFileSync(filePath);
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(error){
        return [];
    }
};

const saveTasks=(tasks)=>{
    const dataJSON=JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJSON);
}

const addTask=(task)=>{
    const tasks=loadTasks();
    tasks.push(task);
    console.log(`Task "${task}" added.`);
    saveTasks(tasks);
}

const listTasks=()=>{   
    const tasks=loadTasks();
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

const command=process.argv[2];
const argument=process.argv[3];

if (command === "add") {
    addTask(argument);
}else if(command === "list") {
    listTasks();
}else if(command === "remove") {
    removeTask(argument);
}
else{
    console.log("Invalid command. Please use 'add', 'list', or 'remove'.");
}
