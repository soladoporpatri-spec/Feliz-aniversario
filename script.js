// Função para criar confetes mais bonitos
function createConfetti() {
  const confettiCount = 50; // Reduzido para performance
  const colors = ['#ff69b4', '#ffd700', '#00ff00', '#ff4500', '#1e90ff', '#ff1493'];
  const shapes = ['circle', 'star', 'heart'];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    confetti.className = `confetti ${shape}`;
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = (Math.random() * 10 + 5) + 'px';
    confetti.style.height = confetti.style.width;
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Adicionar estrelas piscando
function createStars() {
  const starCount = 20;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(star);
  }
}

// Função para tocar som de surpresa
function playSurpriseSound() {
  const audio = document.getElementById('surpriseAudio');
  if (audio) {
    audio.currentTime = 0; // Reiniciar do começo
    audio.play().catch(e => console.log('Erro ao tocar áudio:', e));
  }
}

// Função para shake da tela vertical
function shakeScreen() {
  playSurpriseSound(); // Tocar som quando balança
  document.body.classList.add('shake-vertical');
  setTimeout(() => {
    document.body.classList.remove('shake-vertical');
  }, 500);
}


// Função para magia extra (glitter)
function activateMagic() {
  const glitterCount = 50;
  for (let i = 0; i < glitterCount; i++) {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.style.left = Math.random() * 100 + 'vw';
    glitter.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(glitter);

    setTimeout(() => {
      glitter.remove();
    }, 3000);
  }
  // Mostrar mensagem pop-up
  showPopupMessage("Feliz aniversario te amo muito! 🎉❤️❤️❤️❤️❤️");
}

// Função para pop-up
function showPopupMessage(message) {
  const popup = document.createElement('div');
  popup.textContent = message;
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.background = 'rgba(255, 215, 0, 0.9)';
  popup.style.color = '#000';
  popup.style.padding = '20px';
  popup.style.borderRadius = '10px';
  popup.style.fontSize = '1.5em';
  popup.style.zIndex = '1000';
  popup.style.animation = 'fadeIn 0.5s';
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}

// Adicionar eventos
window.addEventListener('load', () => {
  createStars();
  createConfetti();
  setInterval(createConfetti, 120000); // Repetir a cada 2 minutos
});

// Botão shake
document.getElementById('shakeButton').addEventListener('click', shakeScreen);

// Adicionar botão magia
const magicButton = document.createElement('button');
magicButton.textContent = '✉️ BILHETE';
magicButton.className = 'shake-btn';
magicButton.style.marginTop = '10px';
magicButton.addEventListener('click', activateMagic);
document.querySelector('header').appendChild(magicButton);

// Hover(mouse em cima) effects
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});