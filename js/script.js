
const searchInput = document.querySelector('.searchInput');
const search = document.querySelector('.search');
const searchIcon = document.querySelector('.searchIcon');
const langChange = document.querySelector('.lang-change');
const sign = document.querySelector('.sign');
const navItems = document.querySelector('.nav-items');
const navTop = document.querySelector('.nav-top');
const navBottom = document.querySelector('.nav-bottom');
const navTopRight = document.querySelector('.nav-top__right');
const navTopLeft = document.querySelector('.nav-top__left');
const hamburgerIcon = document.querySelector('.hamburgerIcon');
const footerNavLinks = document.querySelectorAll('.footer-nav__link');

if (window.screen.availWidth < 1100){
    search.addEventListener('click', () => {
        searchInput.style.width = '235px'
        searchInput.focus()
        langChange.style.display = 'none'
        sign.style.display = 'none'
    })
    
    searchInput.addEventListener('blur', () => {
        searchInput.style.width = '50px'
        langChange.style.display = 'flex'
        sign.style.display = 'flex'
    })
}

searchInput.addEventListener('input', () => {
    searchIcon.style.display = 'none'
    if(searchInput.value == ''){
        searchIcon.style.display = 'block'
    }
})

function changeIcon(x) {
    x.classList.toggle("change");
    navItems.classList.toggle('active')
}

window.addEventListener('resize', () => {
    if(window.screen.availWidth < 590){
        navBottom.appendChild(navTopRight)
        navTopRight.style.justifyContent = 'center'
        navTopRight.style.paddingTop = '20px'
        
    }
    else if (window.screen.availWidth > 590){
        navTop.appendChild(navTopRight)
        navTop.appendChild(hamburgerIcon)
    }
    
})

if(window.screen.availWidth < 590){
    navBottom.appendChild(navTopRight)
    navTopRight.style.justifyContent = 'center'
    navTopRight.style.paddingTop = '20px'  
}


let activeButton = footerNavLinks[0]
footerNavLinks.forEach(footerNavLink => {
    footerNavLink.addEventListener('click', (e) => {
        e.preventDefault()
        activeButton.classList.remove('active-link')
        activeButton = footerNavLink
        activeButton.classList.add('active-link')
    })
})




