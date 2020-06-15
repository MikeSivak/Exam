document.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault();
    let sendForm = document.forms['sendForm'];
    let fname = sendForm.elements['fname'].value;
    let lname = sendForm.elements['lname'].value;

    let user = JSON.stringify({fname: fname, lname: lname});
    let req = new XMLHttpRequest();

    req.open("POST", "/send", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener('load', ()=>{
        let receivedUser = JSON.parse(req.response);
        console.log(receivedUser.fname, '-', receivedUser.lname);
    });

    req.send(user);
})