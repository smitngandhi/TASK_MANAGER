
function viewall() {
  let user = document.getElementById("opselect").value;
  let task = document.getElementById("tasknumber").value;
  let titletext = document.getElementById("titletext");
  let descriptiontext = document.getElementById("descriptiontext");
  let createdtext = document.getElementById("createdtext");
  let deadlinetext = document.getElementById("deadlinetext");
  let statustext = document.getElementById("statustext");
  if (
    localStorage.getItem(`${user}title${task}`) ==
      "Your Title will be shown here" ||
    localStorage.getItem(`${user}title${task}`) == "null" ||
    localStorage.getItem(`${user}title${task}`) == null
  ) {
    localStorage.setItem(
      `${user}title${task}`,
      "Your Title will be shown here"
    );
    localStorage.setItem(
      `${user}description${task}`,
      "Your Description will be shown here"
    );
    localStorage.setItem(
      `${user}deadline${task}`,
      "Your Deadline will be shown here"
    );
    localStorage.setItem(
      `${user}status${task}`,
      "Your Status will be shown here"
    );
    localStorage.setItem(
      `${user}created${task}`,
      "Your Date of creating the task will be shown here"
    );
    titletext.innerHTML = localStorage.getItem(`${user}title${task}`);
    descriptiontext.innerHTML = localStorage.getItem(
      `${user}description${task}`
    );
    createdtext.innerHTML = localStorage.getItem(`${user}created${task}`);
    deadlinetext.innerText = localStorage.getItem(`${user}deadline${task}`);
    statustext.innerText = localStorage.getItem(`${user}status${task}`);
  }
  titletext.innerHTML = localStorage.getItem(`${user}title${task}`);
  descriptiontext.innerHTML = localStorage.getItem(`${user}description${task}`);
  createdtext.innerHTML = localStorage.getItem(`${user}created${task}`);
  deadlinetext.innerText = localStorage.getItem(`${user}deadline${task}`);
  statustext.innerText = localStorage.getItem(`${user}status${task}`);
}

function edittask() {
  let user = document.getElementById("opselect").value;
  let task = document.getElementById("tasknumber").value;
  if (
    localStorage.getItem(`${user}title${task}`) ==
      "Your Title will be shown here" ||
    localStorage.getItem(`${user}title${task}`) == "null" ||
    localStorage.getItem(`${user}title${task}`) == null
  ) {
    alert("Add Your Task First");
  } else {
    let title = prompt("Re enter your title");

    let description = prompt("Re enter your description");
    let date = prompt("Re enter your deadline", "Format:Year-Month-Day");
    let status = prompt("Re enter your status");
    status = status.toLowerCase();
    localStorage.setItem(`${user}title${task}`, title);
    localStorage.setItem(`${user}description${task}`, description);
    localStorage.setItem(`${user}deadline${task}`, date);
    localStorage.setItem(`${user}status${task}`, status);
  }
}

function removetask() {
  let user = document.getElementById("opselect").value;
  let task = document.getElementById("tasknumber").value;
  if (
    localStorage.getItem(`${user}title${task}`) ==
      "Your Title will be shown here" ||
    localStorage.getItem(`${user}title${task}`) == "null" ||
    localStorage.getItem(`${user}title${task}`) == null
  ) {
    alert("Add Your Task First");
  }
  localStorage.setItem(`${user}title${task}`, "Your Title will be shown here");
  localStorage.setItem(
    `${user}description${task}`,
    "Your Description will be shown here"
  );
  localStorage.setItem(
    `${user}deadline${task}`,
    "Your Deadline will be shown here"
  );
  localStorage.setItem(
    `${user}status${task}`,
    "Your Status will be shown here"
  );
  localStorage.setItem(
    `${user}created${task}`,
    "Your Date of creating the task will be shown here"
  );
}
function change_status() {
  let user = document.getElementById("opselect").value;
  let task = document.getElementById("tasknumber").value;
  if (
    localStorage.getItem(`${user}status${task}`) ==
      "Your Status will be shown here" ||
    localStorage.getItem(`${user}status${task}`) == "null" ||
    localStorage.getItem(`${user}status${task}`) == null
  ) {
    alert("Enter Task First");
  } else {
    let status = prompt("Re enter your status", "InProgress/TODO/Completed");
    status = status.toLowerCase();
    localStorage.setItem(`${user}status${task}`, status);
  }
}
