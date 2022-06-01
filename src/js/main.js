document.addEventListener('DOMContentLoaded', function () {
  const password = document.getElementsByClassName('password')[0];

  // show password
  if (password) {
    password.addEventListener('click', function (e) {
      const input = e.target.parentElement.querySelector('input');
      if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
      } else {
        input.setAttribute('type', 'text');
      }
    });
  }

  // open header menu
  const menu = document.getElementsByClassName('menu')[0];
  const burger = document.getElementsByClassName('burger-js')[0];
  const closeBtn = document.getElementsByClassName('close-js')[0];
  const mobileMenu = document.getElementsByClassName('mobile-menu-js')[0];
  const burgerMobile = document.getElementsByClassName('burger-mobile-js')[0];

  burger.addEventListener('click', function () {
    menu.classList.toggle('show')
    burger.classList.toggle('show')
  });
  burgerMobile.addEventListener('click', function () {
    mobileMenu.classList.toggle('show');
    document.body.classList.add('no-scroll');
  });

  // close mobile menu
  closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('show');
    burger.classList.remove('show');
    menu.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });

  // remove mobile menu on resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1280) {
      mobileMenu.classList.remove('show');
      burger.classList.remove('show');
      menu.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }
  });

  // submenu expand/collapse
  const submenuTitle = document.getElementsByClassName('submenu-title');
  const moreBtn = document.getElementsByClassName('more-btn')[0];
  const moreTitle = document.getElementsByClassName('more-title')[0];

  for (let i = 0; i < submenuTitle.length; i++) {
    submenuTitle[i].addEventListener('click', function (e) {
      e.target.parentElement.classList.toggle('active');
    })
  }
  moreBtn.addEventListener('click', function (e) {
    e.target.parentElement.classList.toggle('show-submenu');
    if (moreTitle.innerHTML === 'Less') {
      moreTitle.innerHTML = 'More';
    } else {
      moreTitle.innerHTML = 'Less';
    }
  })
});