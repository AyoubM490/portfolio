const menuHamb = document.querySelector("[alt *= 'menu']");
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');
const headline = document.querySelector('#headline');
const header = document.querySelector('header');
const portfolioSection = document.querySelector('#portfolio');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');
const portfolioNav = document.querySelector('.portfolio');
const aboutNav = document.querySelector('.about');
const contactNav = document.querySelector('.contact');
const seeProjectBtns = document.querySelectorAll('.see-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const modalDesk = document.querySelector('.modal-desktop');
const seeProjectBtnDesks = document.querySelectorAll('.see-modal-desktop');
const leftBlockModal = document.querySelector('.left-block-modal');
const closeBtnDesk = document.querySelector('.close-btn-desktop');

function styleMenu(elem) {
  elem.style.color = '#fff';
  elem.style.fontWeight = '600';
  elem.style.fontStyle = 'normal';
  elem.style.fontSize = '32px';
  elem.style.lineHeight = '44px';
  elem.style.textDecoration = 'none';
  elem.style.marginBottom = '40px';
}

const menuClose = document.createElement('img');
menuClose.style.zIndex = 998;
menuClose.style.position = 'absolute';
menuClose.style.top = '34px';
menuClose.style.left = '325px';
menuClose.src = './img/Close-Button.svg';

menuHamb.addEventListener('click', () => {
  headline.style.display = 'none';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  header.style.backgroundColor = '#6070FF';
  nav.appendChild(menuClose);
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'start';
  nav.style.marginTop = '115px';
  portfolioNav.classList.remove('desktop');
  aboutNav.classList.remove('desktop');
  contactNav.classList.remove('desktop');
  styleMenu(portfolioNav);
  styleMenu(aboutNav);
  styleMenu(contactNav);
});

menuClose.addEventListener('click', () => {
  headline.style.display = 'block';
  portfolioSection.style.display = 'block';
  aboutSection.style.display = 'block';
  contactSection.style.display = 'block';
  logo.style.display = 'flex';
  nav.style.flexDirection = 'row';
  header.style.backgroundColor = '#fff';
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.marginTop = '0px';
  portfolioNav.classList.add('desktop');
  aboutNav.classList.add('desktop');
  contactNav.classList.add('desktop');
  header.style.overflowY = 'hidden';
});

portfolioNav.addEventListener('click', () => {
  headline.style.display = 'block';
  portfolioSection.style.display = 'block';
  aboutSection.style.display = 'block';
  contactSection.style.display = 'block';
  logo.style.display = 'flex';
  nav.style.flexDirection = 'row';
  header.style.backgroundColor = '#fff';
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.marginTop = '0px';
  portfolioNav.classList.add('desktop');
  aboutNav.classList.add('desktop');
  contactNav.classList.add('desktop');
});

aboutNav.addEventListener('click', () => {
  headline.style.display = 'block';
  portfolioSection.style.display = 'block';
  aboutSection.style.display = 'block';
  contactSection.style.display = 'block';
  logo.style.display = 'flex';
  nav.style.flexDirection = 'row';
  header.style.backgroundColor = '#fff';
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.marginTop = '0px';
  portfolioNav.classList.add('desktop');
  aboutNav.classList.add('desktop');
  contactNav.classList.add('desktop');
});

contactNav.addEventListener('click', () => {
  headline.style.display = 'block';
  portfolioSection.style.display = 'block';
  aboutSection.style.display = 'block';
  contactSection.style.display = 'block';
  logo.style.display = 'flex';
  nav.style.flexDirection = 'row';
  header.style.backgroundColor = '#fff';
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.marginTop = '0px';
  portfolioNav.classList.add('desktop');
  aboutNav.classList.add('desktop');
  contactNav.classList.add('desktop');
});

seeProjectBtns[0].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modal.style.display = 'block';
  modal.style.position = 'absolute';
  modal.style.top = '-107px';
  header.style.height = '800px';
  headline.style.height = '800px';
});

seeProjectBtns[1].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modal.style.display = 'block';
  modal.style.position = 'absolute';
  modal.style.top = '-107px';
  header.style.height = '800px';
  headline.style.height = '800px';
});

seeProjectBtns[2].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modal.style.display = 'block';
  modal.style.position = 'absolute';
  modal.style.top = '-107px';
  header.style.height = '800px';
  headline.style.height = '800px';
});

seeProjectBtns[3].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modal.style.display = 'block';
  modal.style.position = 'absolute';
  modal.style.top = '-107px';
  header.style.height = '800px';
  headline.style.height = '800px';
});

closeBtn.addEventListener('click', () => {
  headline.style.opacity = '1';
  headline.style.backgroundColor = '#fff';
  portfolioSection.style.display = 'block';
  aboutSection.style.display = 'block';
  contactSection.style.display = 'block';
  logo.style.display = 'block';
  nav.style.display = 'flex';
  modal.style.display = 'none';
  headline.style.height = '543.15px';
});

seeProjectBtnDesks[0].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modalDesk.style.display = 'block';
  modalDesk.style.position = 'absolute';
  modalDesk.style.zIndex = '10000';
  modalDesk.style.marginLeft = '24px';
  modalDesk.style.height = '100.3%';
  modalDesk.style.top = '-130px';
  leftBlockModal.style.marginTop = '1%';
  leftBlockModal.style.marginLeft = '5%';
  leftBlockModal.style.top = '-20px';
  header.style.height = '103vh';
  headline.style.height = '100vh';
});

seeProjectBtnDesks[1].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modalDesk.style.display = 'block';
  modalDesk.style.position = 'absolute';
  modalDesk.style.zIndex = '10000';
  modalDesk.style.marginLeft = '24px';
  modalDesk.style.height = '100.3%';
  modalDesk.style.top = '-130px';
  leftBlockModal.style.marginTop = '1%';
  leftBlockModal.style.marginLeft = '5%';
  leftBlockModal.style.top = '-20px';
  header.style.height = '103vh';
  headline.style.height = '100vh';
});

seeProjectBtnDesks[2].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modalDesk.style.display = 'block';
  modalDesk.style.position = 'absolute';
  modalDesk.style.zIndex = '10000';
  modalDesk.style.marginLeft = '24px';
  modalDesk.style.height = '100.3%';
  modalDesk.style.top = '-130px';
  leftBlockModal.style.marginTop = '1%';
  leftBlockModal.style.marginLeft = '5%';
  leftBlockModal.style.top = '-20px';
  header.style.height = '103vh';
  headline.style.height = '100vh';
});

seeProjectBtnDesks[3].addEventListener('click', () => {
  headline.style.opacity = '0.4';
  headline.style.backgroundColor = '#C1C7D0';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  logo.style.display = 'none';
  nav.style.display = 'none';
  modalDesk.style.display = 'block';
  modalDesk.style.position = 'absolute';
  modalDesk.style.zIndex = '10000';
  modalDesk.style.marginLeft = '24px';
  modalDesk.style.height = '100.3%';
  modalDesk.style.top = '-130px';
  leftBlockModal.style.marginTop = '1%';
  leftBlockModal.style.marginLeft = '5%';
  leftBlockModal.style.top = '-20px';
  header.style.height = '103vh';
  headline.style.height = '100vh';
});

closeBtnDesk.addEventListener('click', () => {
  headline.style.opacity = '1';
  headline.style.backgroundColor = '#fff';
  portfolioSection.style.display = 'block';
  aboutSection.style.display = 'grid';
  contactSection.style.display = 'block';
  logo.style.display = 'block';
  nav.style.display = 'flex';
  modalDesk.style.display = 'none';
});
