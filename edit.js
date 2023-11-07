//console.log(localStorage.getItem(`User1deadline1`));

  function setall()
{
    
 let user = document.getElementById('opselect').value;
 let task = document.getElementById('tasknumber').value;
let titletext = document.getElementById('titletext');
    let descriptiontext = document.getElementById('descriptiontext');
    let deadlinetext = document.getElementById('deadlinetext');
    let statustext = document.getElementById('statustext');
    titletext.innerHTML = localStorage.getItem(`${user}title${task}`);    
    descriptiontext.innerHTML = localStorage.getItem(`${user}description${task}`);
    deadlinetext.innerText = localStorage.getItem(`${user}deadline${task}`);
    statustext.innerText = localStorage.getItem(`${user}status${task}`);
}

function edittask()
{
    let user = document.getElementById('opselect').value;
 let task = document.getElementById('tasknumber').value;
    let title = prompt("Re enter your title");
    let description = prompt("Re enter your description");
    let date = prompt("Re enter your deadline");
    let status = prompt("Re enter your status");
    localStorage.setItem(`${user}title${task}`,title);
        localStorage.setItem(`${user}description${task}`,description);
        localStorage.setItem(`${user}deadline${task}`,date);
        localStorage.setItem(`${user}status${task}`,status);
}

function removetask()
{
    let user = document.getElementById('opselect').value;
 let task = document.getElementById('tasknumber').value;
 localStorage.setItem(`${user}title${task}`,"Your Title will be shown here");
 localStorage.setItem(`${user}description${task}`,"Your Description will be shown here");
 localStorage.setItem(`${user}deadline${task}`,"Your Deadline will be shown here");
 localStorage.setItem(`${user}status${task}`,"Your Status will be shown here");
}




