import 'binary-effect';

document.addEventListener('DOMContentLoaded', async () => {
  await new Promise(requestAnimationFrame);
  document.body.classList.add('document-ready');
}, false);
