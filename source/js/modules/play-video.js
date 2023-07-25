const videos = document.querySelectorAll('[data-video]');
const mainHeaderElement = document.querySelector('[data-main-header]');

function playVideo() {
  if (videos) {
    videos.forEach(function (video) {
      video.addEventListener('click', function () {

        if (video.classList.contains('is-active')) {
          return;
        }

        video.classList.add('is-active');
        const src = video.dataset.src;
        video.insertAdjacentHTML('afterbegin', '<iframe src= "' + src + '"  title="YouTube video player" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
        mainHeaderElement.style.zIndex = '0';
      });
    });
  }
}


export {playVideo};
