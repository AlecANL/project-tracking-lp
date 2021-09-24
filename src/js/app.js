// @ts-check

const $icon = document.getElementById('icon');
const $nav = document.getElementById('nav');
const $layer = document.getElementById('layer');

function handleShowNav() {
  $nav.classList.toggle('is-active');
  $layer.classList.toggle('is-active');
}

$icon.addEventListener('click', handleShowNav);
