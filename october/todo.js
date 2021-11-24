//4. Random recipe generator
// * adding a new task
// * completing a given number of existing task
// * displaying the task list

var todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];
function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }

}

function completeTasks(n) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {

    console.log(`${todos[0]} complete!`);
    
    todos.shift(); 
     tasksComplete++;
  }
  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}
function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');
  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}


// Utilizing our task manager
addTask('oil change');
addTask('dentist');
addTask('homework');
completeTasks(3);
displayTaskList();

//output
/*
wash car complete!
exercise complete!
buy groceries complete!
3 tasks completed; 8 remaining.
ToDo list (8 tasks):
---------------------
-- balance budget
-- call plumber
-- feed fido
-- get gas
-- organize closet
-- oil change
-- dentist
-- homework
*/