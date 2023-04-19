document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const f = document.querySelector(`#create-task-form`)
  f.addEventListener("submit", (e) => {
    e.preventDefault()
    let answer = e.target.querySelector(`#new-task-description`).value
    document.querySelector(`#tasks`).innerHTML = answer
    e.target.reset()
  })
});
