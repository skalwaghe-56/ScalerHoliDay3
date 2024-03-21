document.addEventListener("DOMContentLoaded", function() {
  const colors = ['#FF2400', '#0EBFE9', '#FFD700', '#228B22', '#FF1493', '#800080', '#FF7F50'];
  const container = document.getElementById('container');
  const greeting = document.getElementById('greeting');

  let colorIndex = 0;
  setInterval(() => {
    greeting.style.transition = 'color 1s ease';
    greeting.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 2000);

  function createPowder() {
    const powder = document.createElement('div');
    powder.classList.add('powder');
    powder.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(powder);

    const size = Math.random() * 60 + 10;
    powder.style.width = size + 'px';
    powder.style.height = size + 'px';

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    powder.style.left = x + 'px';
    powder.style.top = y + 'px';

    setTimeout(() => {
      powder.remove();
    }, 2000);
  }

  setInterval(createPowder, 200);

  container.addEventListener('mousemove', function(e) {
    const powder = document.createElement('div');
    powder.classList.add('powder');
    powder.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(powder);

    powder.style.left = e.clientX + 'px';
    powder.style.top = e.clientY + 'px';

    const size = Math.random() * 60 + 10;
    powder.style.width = size + 'px';
    powder.style.height = size + 'px';

    setTimeout(() => {
      powder.remove();
    }, 1000);
  });
});
