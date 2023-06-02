const checkBoxList = document.querySelectorAll(".custom-checkBox");
const inputFields = document.querySelectorAll(".goals");
const errorLabel = document.querySelector(".error-label");
const progressLevel = document.querySelector(".progress-level");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const allQuotes = [
  'Raise the bar by completing your goals!',
  ' Well begun is half done!',
  'Just a step away, keep going!',
  'Wow! You just completed all the goals, time for chill 😊'
]


const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}

let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.Completed).length
progressValue.style.width = `${(completedGoalsCount / inputFields.length) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFields.length} Completed`
progressLevel.innerText = allQuotes[completedGoalsCount]


checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (Event) => {
    const allGoalAdded = [...inputFields].every((input) => {
      return input.value;
    });

    if (allGoalAdded) {
      checkBox.parentElement.classList.toggle("completed");
      const inputId = checkBox.nextElementSibling.id
      allGoals[inputId].Completed = !allGoals[inputId].Completed
      completedGoalsCount = Object.values(allGoals).filter((goal) => goal.Completed).length
      progressValue.style.width = `${(completedGoalsCount / inputFields.length) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFields.length} Completed`
      progressLevel.innerText = allQuotes[completedGoalsCount]


      localStorage.setItem('allGoals', JSON.stringify(allGoals))

    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name

    if (allGoals[input.id].Completed) {
      input.parentElement.classList.add('completed')
    }
  }

  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener('input', (Event) => {
    if (allGoals[input.id] && allGoals[input.id].Completed) {
      input.value = allGoals[input.id].name
      return
    }

    if (allGoals[input.id]) {
      allGoals[input.id].name = input.value
    }
    else {
      allGoals[input.id] = {
        name: input.value,
        Completed: false
      }
    }

    localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })
});
