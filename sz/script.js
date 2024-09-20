function showLetter() {
    const mainImage = document.getElementById('mainImage');
    const letterImage = document.getElementById('letterImage');
    const overlay = document.querySelector('.overlay');
  
    // Oculta a imagem do envelope e mostra a imagem da carta
    mainImage.classList.add('hidden');
    letterImage.classList.remove('hidden');
    overlay.classList.add('hidden'); // Oculta a sobreposição
  }