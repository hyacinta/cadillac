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