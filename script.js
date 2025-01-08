let menu = document.querySelector('#menu-bars');
let header= document.querySelector('header');

 menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
    window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    }
function gotowhatsapp(){
    var name = document.getElementById("name").Value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    alert(name);

    var url = "http://wa.me/+917096449355?text="
    + "Name: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Message: " + msg;
    window.open(url).focus();
}