// back to top

let backToTopBtn = document.querySelector('.back-to-top');
window.onscroll = () => {
    if (document.body.scrollTop > 200  || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

//TOP NAV

let menuItems = document.getElementsByClassName('menu-item');
Array.from(menuItems).forEach((items, index) => {
    items.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active');
        currMenu.classList.remove('active');
        items.classList.add('active');
    }
})