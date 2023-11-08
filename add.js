
    function getall()
    {
        let date = new Date();
        let month  = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();

        let fulldate = `${year}-${month}-${day}`;

    let user = document.getElementById('opselect').value;
    let tasknumber = document.getElementById('numbers').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let deadline = document.getElementById('date').value;
    let statuss = document.getElementById('statusselect').value;
    if(localStorage.getItem(`${user}title${tasknumber}`)=="Your Title will be shown here"||localStorage.getItem(`${user}title${tasknumber}`)==null)
    {
        localStorage.setItem(`${user}title${tasknumber}`,title);
        localStorage.setItem(`${user}description${tasknumber}`,description);
        localStorage.setItem(`${user}deadline${tasknumber}`,deadline);
        localStorage.setItem(`${user}status${tasknumber}`,statuss);
        localStorage.setItem(`${user}created${tasknumber}`,fulldate);
    }
    else
    {
        alert("Task Already Exists")
    }
    }


