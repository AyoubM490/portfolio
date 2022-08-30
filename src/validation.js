export const email = document.querySelector('.contact__email');
export const form = document.querySelector('#form');
export const error = document.querySelector('.error');

export function isItUppercase(value) {
  if (value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}
