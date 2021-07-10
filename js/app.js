// DOMS
const $body = document.querySelector("body");
const $menu = document.querySelector(".menu");
const $search = document.querySelector(".search");
const $searchInput = document.querySelector(".searchInput");
const $visual = document.querySelector(".visual");
const $carousel = document.querySelector(".carousel");
const $indicator = document.querySelectorAll(".indicator > li");
const $lineUp = document.querySelector(".lineUp ul.row");

// data
// carousel banner
const carouselBanner = [
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt4/vehicle.php",
    title: "2021 XT4",
    subTitle: "THE UNMISTAKABLE",
    description: "",
    btnDescription: "XT4 SUV",
    imgUrl: "./images/mainBanner1.jpg",
    imgAlt: "XT4 대표 이미지",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/ct5_2021/vehicle.php",
    title: "2021 CT5",
    subTitle: "UNRIVALED DRIVING PLEASURE",
    description: "",
    btnDescription: "CT5 SEDANS",
    imgUrl: "./images/mainBanner2.jpg",
    imgAlt: "CT5 대표 이미지",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    title: "2020 XT5",
    subTitle: "THE UNDENIABLE",
    description: "",
    btnDescription: "XT5 SUVS",
    imgUrl: "./images/mainBanner3.jpg",
    imgAlt: "XT5 대표 이미지",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/escalade_2021/vehicle.php",
    title: "2021 ESCALADE",
    subTitle: "NEVER STOP ARRIVING",
    description: "THE NEXT GENERATION 2021 ESCALADE & ESCALADE ESV",
    btnDescription: "ESCALADE SUVS",
    imgUrl: "./images/mainBanner4.jpg",
    imgAlt: "ESCALADE 대표 이미지",
  },
  {
    bannerLink: "https://www.cadillac.co.kr/vehicle/ct4/vehicle.php",
    title: "2020 CT4",
    subTitle: "THE AGILE",
    description: "",
    btnDescription: "CT4 SEDANS",
    imgUrl: "./images/mainBanner5.jpg",
    imgAlt: "CT4 대표 이미지",
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
          ${subTitle ? `<p class="h5">${subTitle}</p>` : ""}
          ${
            description
              ? `<p class="description subTitle">${description}</p>`
              : ""
          }
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

let currentBanner = 0;
let isMoving = false;
const duration = 600;
let autoPlay = null;

const indicatorMove = (currentBanner) => {
  $indicator.forEach((item) =>
    item.classList.contains(`${currentBanner}`)
      ? item.classList.add("active")
      : item.classList.remove("active")
  );
};

const move = (currentBanner, duration = 0) => {
  if (duration) isMoving = true;
  $carousel.style.setProperty("--duration", duration);
  $carousel.style.setProperty("--currentBanner", currentBanner);
  indicatorMove(currentBanner);
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
  if (target.classList.contains("indicatorBtn")) {
    clearInterval(autoPlay);
    currentBanner = target.parentNode.classList[0] * 1;
    move(currentBanner, duration);
    autoPlay = setInterval(() => move(++currentBanner, duration), 6000);
  }
  if (!target.classList.contains("moveBtn") || isMoving) return;
  clearInterval(autoPlay);
  const directionCheck = target.classList.contains("btnPrev") ? -1 : 1;
  currentBanner += 1 * directionCheck;

  move(currentBanner, duration);
  autoPlay = setInterval(() => move(++currentBanner, duration), 6000);
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
