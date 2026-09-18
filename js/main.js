document.getElementById('year').textContent = new Date().getFullYear();

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => {
  const open = mobileNav.style.display === 'flex';
  mobileNav.style.display = open ? 'none' : 'flex';
  burger.setAttribute('aria-expanded', String(!open));
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => { mobileNav.style.display = 'none'; });
});
