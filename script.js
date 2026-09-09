const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'Menu';
}));
document.querySelector('.theme-button').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('portfolio-theme') === 'dark') document.body.classList.add('dark');
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-message').textContent = 'Thanks — your note is ready to send. I’ll be in touch soon.';
  event.currentTarget.reset();
});
