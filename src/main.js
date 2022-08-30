// Mobile menu functionality
import {
  menuIconMobile, menuLinks, openMenu, closeMenu,
} from './menu.js';

// Popup window functionality
import { createModal, projects } from './popup.js';

//  Validation
import {
  isItUppercase, email, form, error,
} from './validation.js';

// Preserve data
import {
  storageAvailable,
} from './localstorage.js';

// Start Mobile menu functionality ------------------------------------->
menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});
// FInish Mobile menu functionality ------------------------------------->

// Start Popup window functionality ------------------------------------->
document.addEventListener('DOMContentLoaded', () => {
  createModal();

  const buttonsProject = document.querySelectorAll('.works__card button');
  const closeIcon = document.querySelector('.closeModal');
  const modal = document.querySelector('.modal');
  const backgroundModal = document.querySelector('.overlay');
  const projectName = document.querySelector('.project-name');
  const projectFeature = document.querySelector('.project-feature');
  const projectBack = document.querySelector('.project-background');
  const projectYear = document.querySelector('.project-year');
  const projectImage = document.querySelector('.project-image');
  const projectDescription = document.querySelector('.project-description');
  const projectTool1 = document.querySelector('.project-tool1');
  const projectTool2 = document.querySelector('.project-tool2');
  const projectTool3 = document.querySelector('.project-tool3');
  const projectLinkLive = document.querySelector('.project-linkLive');
  const projectLinkSource = document.querySelector('.project-linkSource');

  const closeModal = () => {
    modal.classList.remove('active');
    backgroundModal.classList.remove('active');
  };

  buttonsProject.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id === '0') {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute('src', `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      } else if (button.id === '1') {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute('src', `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      } else if (button.id === '2') {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute('src', `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      } else if (button.id === '3') {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute('src', `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
        modal.classList.add('active');
        backgroundModal.classList.add('active');
      }
    });
  });

  closeIcon.addEventListener('click', closeModal);
});
// Finish Popup window functionality ------------------------------------->

// Start validation functionality ------------------------------------->
form.addEventListener('submit', (e) => {
  if (isItUppercase(email.value)) {
    error.textContent = '';
    email.style.border = '1px solid #cfd8dc';
  } else {
    e.preventDefault();
    email.style.border = '3px solid red';
    error.textContent = 'X   Email should be in lowerCase';
  }
});
// Finish validation functionality ------------------------------------->

// Start LocalStorage functionality ------------------------------------->
if (storageAvailable('localStorage')) {
  const setFormValues = () => {
    const formData = {
      name: form.contact_name.value,
      email: form.contact_email.value,
      message: form.contact_message.value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  form.contact_name.addEventListener('change', setFormValues);
  form.contact_email.addEventListener('change', setFormValues);
  form.contact_message.addEventListener('change', setFormValues);

  const checkLocal = () => {
    let name = '';
    let email = '';
    let message = '';

    if (JSON.parse(localStorage.getItem('formData')) === null) {
      name = '';
      email = '';
      message = '';
    } else {
      ({ name, email, message } = JSON.parse(localStorage.getItem('formData')));
    }

    if (name !== 'empty' || email !== 'empty' || message !== 'empty') {
      form.contact_name.value = name;
      form.contact_email.value = email;
      form.contact_message.value = message;
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    checkLocal();
  });
}
// Finish LocalStorage functionality ------------------------------------->
