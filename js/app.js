// DOMS
const $body = document.querySelector('body');
const $menu = document.querySelector('.menu');
const $search = document.querySelector('.search');
const $searchInput = document.querySelector('.searchInput');
const $btnPrev = document.querySelector('.btnPrev');
const $btnNext = document.querySelector('.btnNext');
const $carousel = document.querySelector('.carousel');

$menu.onclick = ({target}) => {
  if (!target.matches('.menu > li > a')) return;
  [...$menu.children].forEach(item => item.classList.toggle('active', target.parentNode === item));
}

$search.onclick = ({target}) => {
  if (!target.matches('.btnSearchOn')) return;
  target.parentNode.classList.add('on');
  $searchInput.placeholder = '검색어를 입력하세요';
  $searchInput.value = '';
  $searchInput.focus();
}

// 취소 이벤트
$body.onclick = ({target}) => {
  if (!target.matches('.menu > li *')) {
    [...$menu.children].forEach(item => item.classList.remove('active'));
  }
  if (!(target === $searchInput || target.matches('.btnSearchOn'))) {
    $search.classList.remove('on');
  };
}


// 캐러셀

const carousel = (() => {
  let carouselPosition = 0;

  return {
    nextCarousel() {
      $carousel.style.transition = carouselPosition === -400 ? 'none' : 'all 200ms ease';
      carouselPosition = carouselPosition === -400 ? 0 : carouselPosition - 100;
      $carousel.style.transform = `translateX(${carouselPosition}vw)`;
    },
    prevCarousel() {
      $carousel.style.transition = carouselPosition === 0 ? 'none' : 'all 200ms ease';
      carouselPosition = carouselPosition === 0 ? -400 : carouselPosition + 100;
      $carousel.style.transform = `translateX(${carouselPosition}vw)`;
    }
  };
})();

$btnNext.onclick = carousel.nextCarousel;
$btnPrev.onclick = carousel.prevCarousel;