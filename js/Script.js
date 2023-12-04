var closebtn = document.getElementById('Cross-Button');

closebtn.addEventListener('click', () => {
    document.querySelector('.top-msg').style.display = "none";
});


const Burger = document.getElementsByClassName('burger')[0];
const Nav = document.getElementsByClassName('nav-bar')[0];

Burger.addEventListener('click', () => {
    Nav.classList.toggle('Active');
});