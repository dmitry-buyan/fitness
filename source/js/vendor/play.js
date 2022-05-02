export const initVideo = () => {
  const player = document.querySelector('.info__player');
  const playButton = player.querySelector('.info__button');
  const iframe = player.querySelector('.info__frame');

  playButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    player.classList.toggle('is-active');
    const src = iframe.dataset.src;
    iframe.setAttribute('src', src);
  });
};
