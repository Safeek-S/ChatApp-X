document.getElementById("createRoom").addEventListener('click', (e) => {
    e.preventDefault();
    username = document.getElementById("username").value;
    if (username !== '') {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i=0; i<30; i++)
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        let p = prompt("\nDear " + username + "\n\nShare this code with friends to join the same room: ", result);
        if (p)
            window.location.href = window.location.protocol + "//" + window.location.host + "/chatroom.html?room=" + result + "&username=" + username + " (admin)";
    }
    else {
        alert("Please enter username");
    }
});

document.getElementById("joinRoom").addEventListener('click', (e) => {
    e.preventDefault();
    username = document.getElementById("username").value;
    random = document.getElementById("room").value;
    if (random !== '') {
        window.location.href = window.location.protocol + "//" + window.location.host + "/chatroom.html?room=" + random + "&username=" + username;
    }
    else {
        alert("Please ask you friend to share a code with you");
    }
})