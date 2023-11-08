let titlebox = document.querySelectorAll('#title');
let descriptionbox = document.querySelectorAll('#description');
let createdbox = document.querySelectorAll('#created');
let deadlinebox = document.querySelectorAll('#deadline');
let statusbox = document.querySelectorAll('#status');

function show()
{
    let user = document.getElementById('opselect').value;

    for(let i = 0;i<titlebox.length;i++)
    {
        if(localStorage.getItem(`${user}title${i+1}`)==null||localStorage.getItem(`${user}title${i+1}`)=="null"||localStorage.getItem(`${user}title${i+1}`)=="Your Title will be shown here")
        {
            
            
            titlebox[i].innerHTML = "-";
            descriptionbox[i].innerHTML = "-";
            createdbox[i].innerHTML = "-";
            deadlinebox[i].innerHTML = "-";
            statusbox[i].innerHTML = "-";
        }
        else
        {
        titlebox[i].innerHTML = localStorage.getItem(`${user}title${i+1}`)
        descriptionbox[i].innerHTML = localStorage.getItem(`${user}description${i+1}`)
        createdbox[i].innerHTML = localStorage.getItem(`${user}created${i+1}`)
        deadlinebox[i].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
        statusbox[i].innerHTML = localStorage.getItem(`${user}status${i+1}`)
        }
    }

}