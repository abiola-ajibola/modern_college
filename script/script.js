window.onload = () => {
    const toggler = document.querySelector('#nav-toggle');
    const list = document.querySelector('#list');
    toggler.addEventListener('click', ()=> {
        list.classList.toggle('nav-list-show')
    })
}