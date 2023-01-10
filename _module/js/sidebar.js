window.addEventListener('load', function () {
    let sideBar = document.getElementById('sidebar');
    let sideOepnBtn = document.getElementById('side_open_btn');
    let sideTopBtn = document.getElementById('side_top_btn');
    let sideDownBtn = document.getElementById('side_down_btn');

    sideOepnBtn.addEventListener('click', () => sideBar.classList.toggle('open'));
    sideTopBtn.addEventListener('click', () => window.scrollTo(0, 0));
    sideDownBtn.addEventListener('click', () => window.scrollTo(0, document.body.scrollHeight));
})