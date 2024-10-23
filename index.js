function enterPage() {
    document.querySelector('.welcome').style.display = 'none';
    document.querySelector('.poem-section').style.display = 'block';
  }
  
  function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
  }
  