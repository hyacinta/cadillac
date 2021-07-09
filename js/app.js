// DOMS
const $body = document.querySelector("body");
const $menu = document.querySelector(".menu");
const $search = document.querySelector(".search");
const $searchInput = document.querySelector(".searchInput");
const $visual = document.querySelector(".visual");
const $carousel = document.querySelector(".carousel");
const $indicator = document.querySelector(".indicator");
const $lineUp = document.querySelector(".lineUp ul.row");

// data
// carousel banner
const carouselBanner = [
  {
    bannerLink: "https://www.cadillac.co.kr/board/event_view.php?idx=61",
    title: "1 2020 Kadillac XT5",
    subTitle: "CROSSOVER STANDAR",
    description: "WHY NOT A CROSSOVER THAT BREAKS ALL RULES?",
    btnDescription: "XT5 SUV",
    imgUrl: "./images/mainBanner1.jpg",
    imgAlt: "메인 이벤트1 배경",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/board/event_view.php?idx=61",
    title: "2 2020 Kadillac XT5",
    subTitle: "CROSSOVER STANDAR",
    description: "WHY NOT A CROSSOVER THAT BREAKS ALL RULES?",
    btnDescription: "XT5 SUV",
    imgUrl: "./images/mainBanner2.jpg",
    imgAlt: "메인 이벤트2 배경",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/board/event_view.php?idx=61",
    title: "3 2020 Kadillac XT5",
    subTitle: "CROSSOVER STANDAR",
    description: "WHY NOT A CROSSOVER THAT BREAKS ALL RULES?",
    btnDescription: "XT5 SUV",
    imgUrl: "./images/mainBanner3.jpg",
    imgAlt: "메인 이벤트3 배경",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/board/event_view.php?idx=61",
    title: "4 2020 Kadillac XT5",
    subTitle: "CROSSOVER STANDAR",
    description: "WHY NOT A CROSSOVER THAT BREAKS ALL RULES?",
    btnDescription: "XT5 SUV",
    imgUrl: "./images/mainBanner4.jpg",
    imgAlt: "메인 이벤트4 배경",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/board/event_view.php?idx=61",
    title: "5 2020 Kadillac XT5",
    subTitle: "CROSSOVER STANDAR",
    description: "WHY NOT A CROSSOVER THAT BREAKS ALL RULES?",
    btnDescription: "XT5 SUV",
    imgUrl: "./images/mainBanner5.jpg",
    imgAlt: "메인 이벤트5 배경",
  },
];
// lineUp
const lineUpBanner = [
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    carType: "CROSSOVERS & SUVS",
    imgUrl: "./images/lineup1.png",
    imgAlt: "CROSSOVERS & SUVS 대표 차종",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    carType: "SEDANS",
    imgUrl: "./images/lineup2.png",
    imgAlt: "SEDANS 대표 차종",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    carType: "COUPES",
    imgUrl: "./images/lineup1.png",
    imgAlt: "COUPES 대표 차종",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    carType: "V-SERIES",
    imgUrl: "./images/lineup2.png",
    imgAlt: "V-SERIES 대표 차종",
  },
];

const carouselRender = ($carousel, carouselBanner) => {
  $carousel.innerHTML = `${[
    carouselBanner[carouselBanner.length - 1],
    ...carouselBanner,
    carouselBanner[0],
  ]
    .map(
      ({
        bannerLink,
        title,
        subTitle,
        description,
        btnDescription,
        imgUrl,
        imgAlt,
      }) => `<li>
      <a href="${bannerLink}">
        <div class="container">
          <h3 class="h1">${title}</h3>
          <p class="h5">${subTitle}</p>
          <p class="description subTitle">${description}</p>
          <button type="button" class="btn xLarge outline white btnMore">${btnDescription} 자세히보기</button>
        </div>
        <img src="${imgUrl}" alt="${imgAlt}">
      </a>
    </li>`
    )
    .join("")}`;
};
const lineUpRender = ($lineUp, lineUpBanner) => {
  $lineUp.innerHTML = `${lineUpBanner
    .map(
      ({
        bannerLink,
        carType,
        imgUrl,
        imgAlt,
      }) => `<li class="col-3 m-col-4 s-col-2 xs-col-2">
  <a href="${bannerLink}">
    <img src="${imgUrl}" alt="${imgAlt}">
    <h3 class="carName">${carType}</h3>
  </a>
</li>`
    )
    .join("")}`;
};

// 무한 캐러셀 구현
// 첫번째 배너에서 앞으로 가는 버튼을 클릭하면 가상으로 복사한 마지막 배너로 이동한 뒤에 곧 바로 실제의 마지막 배너로 이동한다.
// 마지막 배너에서 뒤로 가는 버튼을 클릭하면 가상으로 복사한 첫번째 배너로 이동한 뒤에 곧 바로 실제의 첫번째 배너로 이동한다.
// 해야 할 것!
// 1. 첫번째 슬라이드가 마지막 슬라이드는 클론해야 한다.
// 2. 현재 슬라이드가 어떤 슬라이드인지를 확인 할 수 있어야 한다.
// 3. 현재 슬라이드가 가상으로 복사한 슬라이드 인 경우 듀레이션(이동 효과가 적용되는 시간)이 없어야 한다. (그래야 가상의 슬라이드에서 실제의 슬라이드로 이동하는 모습이 보이지 않는다.)
// 4. 현재 슬라이드가 변경중이라면 버튼은 클릭되지 않아야 한다.
// 5. 버튼을 클릭하지 않아도 자동으로 슬라이드가 돌아가고 있어야 한다.

let currentBanner = 0;
let isMoving = false;
const duration = 600;
let autoPlay = null;

const move = (currentBanner, duration = 0) => {
  if (duration) isMoving = true;
  $carousel.style.setProperty("--duration", duration);
  $carousel.style.setProperty("--currentBanner", currentBanner);
};

window.onload = () => {
  lineUpRender($lineUp, lineUpBanner);
  carouselRender($carousel, carouselBanner);
  move(++currentBanner);

  autoPlay = setInterval(() => move(++currentBanner, duration), 3000);
};

// event binding

// nav open
$menu.onclick = ({ target }) => {
  if (!target.matches(".menu > li > button")) return;
  [...$menu.children].forEach((item) =>
    item.classList.toggle("active", target.parentNode === item)
  );
};

// searchbar open
$search.onclick = ({ target }) => {
  if (!target.matches(".btnSearchOn")) return;
  target.parentNode.classList.add("on");
  $searchInput.placeholder = "검색어를 입력하세요";
  $searchInput.value = "";
  $searchInput.focus();
};

// nav & search bar closed
$body.onclick = ({ target }) => {
  if (!target.matches(".menu > li *")) {
    [...$menu.children].forEach((item) => item.classList.remove("active"));
  }
  if (!(target === $searchInput || target.matches(".btnSearchOn"))) {
    $search.classList.remove("on");
  }
};

$visual.onclick = ({ target }) => {
  if (!target.classList.contains("moveBtn") || isMoving) return;
  clearInterval(autoPlay);
  const directionCheck = target.classList.contains("btnPrev") ? -1 : 1;
  currentBanner += 1 * directionCheck;
  move(currentBanner, duration);
  autoPlay = setInterval(() => move(++currentBanner, duration), 3000);
};

$carousel.ontransitionend = () => {
  isMoving = false;
  const directionCheck =
    currentBanner === 0
      ? 1
      : currentBanner === carouselBanner.length + 1
      ? -1
      : 0;
  if (!directionCheck) return;
  currentBanner += carouselBanner.length * directionCheck;
  move(currentBanner);
};
