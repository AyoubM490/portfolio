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
const seeProjectBtnDesks = document.querySelectorAll('.see-modal-desktop');
const modalDesk = document.querySelector('.modal-desktop');
const leftBlockModal = document.querySelector('.left-block-modal');
const closeBtnDesk = document.querySelector('.close-btn-desktop');
const form = document.getElementById('contact-form');
const nameDesk = form.elements['name-desktop'];
const emailDesk = form.elements['email-desktop'];
const messageDesk = form.elements['message-desktop'];

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

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  const nameDeskValid = hasValue(nameDesk, NAME_REQUIRED);
  const emailDeskValid = validateEmail(
    emailDesk,
    EMAIL_REQUIRED,
    EMAIL_INVALID,
  );
  const user = {
    name: nameDesk.value,
    email: emailDesk.value,
    message: messageDesk.value,
  };
  const userStr = JSON.stringify(user);
  sessionStorage.setItem('user', userStr);
  // if valid, submit the form.
  if (nameDeskValid && emailDeskValid) {
    form.submit();
  }
});

function setReload() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  nameDesk.value = user.name || nameDesk.value;
  emailDesk.value = user.email || emailDesk.value;
  messageDesk.value = user.message || messageDesk.value;
}

function setForm() {
  const user = {
    name: nameDesk.value,
    email: emailDesk.value,
    message: messageDesk.value,
  };
  const userStr = JSON.stringify(user);
  if (user.name || user.email || user.message) {
    sessionStorage.setItem('user', userStr);
  }
}

form.addEventListener('keyup', setForm);
window.addEventListener('load', setReload);

setForm();
