export function removeNoscript(target) {
  let container = document.querySelector(`.${target}--noscript`);
  if (container) {
    container.classList.remove(`${target}--noscript`);
  }
}
