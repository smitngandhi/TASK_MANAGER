
    function getall()
    {
    let user = document.getElementById('opselect').value;
    let tasknumber = document.getElementById('numbers').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let statuss = document.getElementById('statusselect').value;
        localStorage.setItem(`${user}title${tasknumber}`,title);
        localStorage.setItem(`${user}description${tasknumber}`,description);
        localStorage.setItem(`${user}deadline${tasknumber}`,date);
        localStorage.setItem(`${user}status${tasknumber}`,statuss);
    }


