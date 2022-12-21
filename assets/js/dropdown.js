window.addEventListener('DOMContentLoaded', function () {
    // 웹 네브바
    let navBigMenus = document.querySelectorAll('.big_menu');
    let navTotlaMenuLists = document.querySelectorAll('.gnb_itemList.total');
    let navBigMenuButtons = document.querySelectorAll('.big_menu.big');
    let navBigTotalBox = document.querySelector('.big_menu.total');
    let navBigTotalButton = document.querySelector('.gnb_item.toggle_btn');
    let gnbBox = document.querySelector('.gnb_main');

    function initNavBigMenu() {
        for (let i = 0; i < navBigMenuButtons.length; i++) {
            navBigMenuButtons[i].classList.remove('active')
        }
        showNavBigMenuList(this)
    }

    function initTotalMenuList() {
        for (let i = 0; i < navTotlaMenuLists.length; i++) {
            navTotlaMenuLists[i].style.width = `${navBigMenus[i].getBoundingClientRect().width}px`;
        }
    }

    function showNavBigMenuList(element) {
        closeTotalMenuBox()
        element.classList.add('active');
    }

    function showTotalMenuBox(e) {
        closeNavBigMenu()
        if (navBigTotalBox.classList.contains('active')) {
            closeTotalMenuBox()
        } else {
            navBigTotalBox.classList.add('active')
        }
        console.log(this)
        // console.log(e.currentTarget)
    }

    function closeTotalMenuBox() {
        navBigTotalBox.classList.remove('active')
    }

    function closeNavBigMenu() {
        for (let i = 0; i < navBigMenuButtons.length; i++) {
            navBigMenuButtons[i].classList.remove('active')
        }
    }

    function init() {
        for (let i = 0; i < navBigMenuButtons.length; i++) {
            navBigMenuButtons[i].addEventListener('mouseenter', initNavBigMenu)
        }
        navBigTotalButton.addEventListener('click', showTotalMenuBox)
        window.addEventListener('resize', initTotalMenuList)
        gnbBox.addEventListener('mouseleave', closeNavBigMenu)
        initTotalMenuList()
    }
    init()


    // 모바일 네브바
    let sideMobileMenuButtons = document.querySelectorAll('.m-side .meun__box .m_side_menu');
    let mobileMenuButton = document.querySelector('.mobile.total-menu');
    let mobileXButton = document.querySelector('.m-side .close__button__box .button');
    let mobileMenuBox = document.querySelector('.m-side');


    function clickSideMobileMenu() {
        for (let i = 0; i < sideMobileMenuButtons.length; i++) {
            sideMobileMenuButtons[i].classList.remove('active')
        }
        this.classList.toggle('active')
    }
    function showMobileSideMenu() {
        mobileMenuBox.classList.add('show');
    }
    function closeMobileSideMenu() {
        mobileMenuBox.classList.remove('show');
    }

    function mobileInit() {
        mobileMenuButton.addEventListener('click', showMobileSideMenu)
        mobileXButton.addEventListener('click', closeMobileSideMenu)
        for (let i = 0; i < sideMobileMenuButtons.length; i++) {
            sideMobileMenuButtons[i].addEventListener('click', clickSideMobileMenu)
        }
    }
    mobileInit()

    //푸터 사업자정보
    let footerInfoButton = document.querySelector('.ci-tr');
    let footerInfoBox = document.querySelector('.footer_main');

    function showMoreFooterInfo() {
        footerInfoBox.classList.toggle('show')
    }

    function footerInit() {
        footerInfoButton.addEventListener('click', showMoreFooterInfo)
    }
    footerInit()
})