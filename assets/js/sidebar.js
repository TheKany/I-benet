window.addEventListener('DOMContentLoaded', function () {
    let sideBar = document.getElementById('sidebar');
    let sideOepnBtn = document.getElementById('side_open_btn');


    sideOepnBtn.addEventListener('click', () => {
        sideBar.classList.toggle('open')
    })
})