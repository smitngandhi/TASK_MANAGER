let titlebox = document.querySelectorAll('#title');
let descriptionbox = document.querySelectorAll('#description');
let createdbox = document.querySelectorAll('#created');
let deadlinebox = document.querySelectorAll('#deadline');
let statusbox = document.querySelectorAll('#status');

function show()
{
    let user = document.getElementById('opselect').value;
   console.log("HELLO");
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
        statusbox[i].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
        }
    }

}

function showdefault()
{

    for(let i = 0;i<titlebox.length;i++)
    {
            titlebox[i].innerHTML = "-";
            descriptionbox[i].innerHTML = "-";
            createdbox[i].innerHTML = "-";
            deadlinebox[i].innerHTML = "-";
            statusbox[i].innerHTML = "-";
        }
    let user = document.getElementById('opselect').value;
    let z = 0;

    for(let i = 0;i<titlebox.length;i++)
    {
        
        if(localStorage.getItem(`${user}status${i+1}`)=="to-do"||localStorage.getItem(`${user}status${i+1}`)=="todo")
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
        }
        for(let i = 0;i<titlebox.length;i++)
    {
        if(localStorage.getItem(`${user}status${i+1}`)=="in-progress"||localStorage.getItem(`${user}status${i+1}`)=="inprogress")
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
            
        }
    }
    for(let i = 0 ;i<titlebox.length;i++)
    {
        
        if(localStorage.getItem(`${user}status${i+1}`)=="Completed"||localStorage.getItem(`${user}status${i+1}`)=="COMPLETED"||localStorage.getItem(`${user}status${i+1}`)=="completed")
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
    }

    }
    function filterprogress()
{
    let user = document.getElementById('opselect').value;
    let z = 0;
    for(let i = 0 ;i<titlebox.length;i++)
    {
        if(localStorage.getItem(`${user}status${i+1}`)=="In-Progress")
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
    }
    for(let i = 0;i<titlebox.length;i++)
    {
        if(localStorage.getItem(`${user}status${i+1}`)=="To-Do")
       
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
    }
    for(let i = 0;i<titlebox.length;i++)
    {
        
        if(localStorage.getItem(`${user}status${i+1}`)==""||localStorage.getItem(`${user}status${i+1}`)=="COMPLETED")
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
        }
    }
    function filterdefault()
{
    let user = document.getElementById('opselect').value;
    let z = 0;
    for(let i = 0 ;i<titlebox.length;i++)
    {
        if(localStorage.getItem(`${user}status${i+1}`)=="To-Do")
        
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
    }
    for(let i = 0;i<titlebox.length;i++)
    {
        
        if(localStorage.getItem(`${user}status${i+1}`)=="In-Progress")
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
    }
    for(let i = 0;i<titlebox.length;i++)
    {
        
        if(localStorage.getItem(`${user}status${i+1}`)==""||localStorage.getItem(`${user}status${i+1}`)=="COMPLETED")
        {
            titlebox[z].innerHTML = localStorage.getItem(`${user}title${i+1}`)
            descriptionbox[z].innerHTML = localStorage.getItem(`${user}description${i+1}`)
            createdbox[z].innerHTML = localStorage.getItem(`${user}created${i+1}`)
            deadlinebox[z].innerHTML = localStorage.getItem(`${user}deadline${i+1}`)
            statusbox[z].innerHTML = localStorage.getItem(`${user}status${i+1}`).toUpperCase();
            z++;
        }
        }
    }


        
    
