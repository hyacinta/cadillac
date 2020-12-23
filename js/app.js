// DOMS
const $body = document.querySelector('body');
const $menu = document.querySelector('.menu');
const $search = document.querySelector('.search');
const $searchInput = document.querySelector('.searchInput');
const $btnPrev = document.querySelector('.btnPrev');
const $btnNext = document.querySelector('.btnNext');
const $carousel = document.querySelector('.carousel');
const $indicator = document.querySelector('.indicator');

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
    },
    banner1() {
      carouselPosition = 0;
      $carousel.style.transform = `translateX(${carouselPosition}vw)`;
    },
    banner2() {
      carouselPosition = -100;
      $carousel.style.transform = `translateX(${carouselPosition}vw)`;
    },
    banner3() {
      carouselPosition = -200;
      $carousel.style.transform = `translateX(${carouselPosition}vw)`;
    },
    banner4() {
      carouselPosition = -300;
      $carousel.style.transform = `translateX(${carouselPosition}vw)`;
    },
    banner5() {
      carouselPosition = -400;
      $carousel.style.transform = `translateX(${carouselPosition}vw)`;
    }
  };
})();

$btnNext.onclick = carousel.nextCarousel;
$btnPrev.onclick = carousel.prevCarousel;

$indicator.onclick = ({target}) => {
  if (!target.matches('button')) return;
  [...$indicator.children].forEach(item => item.classList.toggle('active', target.parentNode === item));
  const checkClass = target.parentNode.classList[0];
  switch (checkClass) {
    case '1st':
      $carousel.style.transition = 'none';
      carousel.banner1();
      break;
    case '2nd':
      $carousel.style.transition = 'none';
      carousel.banner2();
      break;
    case '3rd':
      $carousel.style.transition = 'none';
      carousel.banner3();
      break;
    case '4th':
      $carousel.style.transition = 'none';
      carousel.banner4();
      break;
    case '5th':
      $carousel.style.transition = 'none';
      carousel.banner5();
      break;
    default:
      console.log('test');
  }
};