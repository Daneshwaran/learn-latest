document.addEventListener('click', (event) => {
  console.log('clicked', event.clientX, event.clientY);
  const div = document.createElement('div');
  const radius = Math.random() * 100 + 100;
  div.style.width = radius + 'px';
  div.style.height = radius + 'px';
  div.style.left = event.clientX + 'px';
  div.style.top = event.clientY + 'px';
  div.style.transform = 'translate(-50%, -50%)';
  div.classList.add('container');
  document.body.appendChild(div);
});

const proxy = new Proxy(
  {},
  {
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
  }
);
