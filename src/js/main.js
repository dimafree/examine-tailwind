document.addEventListener('DOMContentLoaded', function () {
  const password = document.getElementsByClassName('password')[0];

  password.addEventListener('click', function (e) {
    const input = e.target.parentElement.querySelector('input');
    if (input.getAttribute('type') === 'text') {
      input.setAttribute('type', 'password');
    } else {
      input.setAttribute('type', 'text');
    }
  });
});