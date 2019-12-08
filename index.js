function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function () {
      this.complete = true
    },
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`); // got to keep dat ternary inside. Cool AF!
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// <<<<<<<<<< we made it into a task method >>>>>>>
// function completeTask(task) {
//   task.complete = true;
// }

// Print the state of a task to the console in a nice readable way
// <<<<<<<<< we made it into a task method >>>>>>>>>>>
// function logTaskState(task) { // check out below dat ternary operator INSIDE the string literal!
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`); // COOL AF
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Go panning for cat turds.");
const task2 = newTask("Do laundry", "Ugh");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();



