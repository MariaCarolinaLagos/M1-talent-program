addEventListener('DOMContentLoaded', () => {
    const btn_menuIcon = document.querySelector('.header_mainmenu_icon')
    if (btn_menuIcon) {
        btn_menuIcon.addEventListener('click', () => {
            const menu_items = document.querySelector('.header_mainmenu__menu-items')
            menu_items.classList.toggle('show')
        })
    }
})