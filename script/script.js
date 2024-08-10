const gameDart = document.querySelector('.game-dart');

gameDart.addEventListener('click', ()=> {
    gameDart.classList.add('win');
    gameDart.classList.remove('dart-hint');
    setTimeout(()=>window.location.href = './game-win.html', 1000);
});

