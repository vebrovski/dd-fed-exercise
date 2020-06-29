requirejs.config({
  paths: {
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
  }
});

requirejs(['debug']);

//let ticking = false;
let isMobileDisplay = window.innerWidth < 768;
let blocks = document.querySelectorAll('.trifecta');
let timeout;

function handleResize() {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  // Setup the new requestAnimationFrame()
  timeout = window.requestAnimationFrame(function () {

    if (window.innerWidth < 768) {
      handleMobile();
    } else {
      handleDesktop();
    }

  });

};

function handleClick(e) {
  e.target.closest('.trifecta').classList.toggle('hide');
}

function handleMobile() {

  blocks.forEach(block => {
    if (!block.classList.contains('hide')) {
      block.classList.add('hide');
    }

    block.querySelector('.block-title').addEventListener('click', handleClick);

  });
}

function handleDesktop() {
  blocks.forEach( block => {
    if (block.classList.contains('hide')) {
      block.classList.remove('hide');
    }

    block.querySelector('.block-title').removeEventListener('click', handleClick);

  });
}

window.addEventListener('resize', handleResize, false);

handleResize();