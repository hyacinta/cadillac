// DOMS
const $body = document.querySelector("body");
const $nav = document.querySelector("nav");
const $menu = document.querySelector(".menu");
const $search = document.querySelector(".search");
const $searchInput = document.querySelector(".searchInput");
const $visual = document.querySelector(".visual");
const $carousel = document.querySelector(".carousel");
const $indicator = document.querySelectorAll(".indicator > li");
const $lineUp = document.querySelector(".lineUp ul.row");
const $promotion = document.querySelector(".promotion ul");
const $mapView = document.querySelector(".mapView");
const $locationList = document.querySelector(".locationList");

// data

// carousel
const carousel = [
  {
    carouselId: 1,
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt4/vehicle.php",
    title: "2021 XT4",
    subTitle: "THE UNMISTAKABLE",
    description: "",
    imgUrl: "./images/mainBanner1.jpg",
  },
  {
    carouselId: 2,
    bannerLink: "https://www.cadillac.co.kr/vehicle/ct5_2021/vehicle.php",
    title: "2021 CT5",
    subTitle: "UNRIVALED DRIVING PLEASURE",
    description: "",
    imgUrl: "./images/mainBanner2.jpg",
  },
  {
    carouselId: 3,
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    title: "2020 XT5",
    subTitle: "THE UNDENIABLE",
    description: "",
    imgUrl: "./images/mainBanner3.jpg",
  },
  {
    carouselId: 4,
    bannerLink: "https://www.cadillac.co.kr/vehicle/escalade_2021/vehicle.php",
    title: "2021 ESCALADE",
    subTitle: "NEVER STOP ARRIVING",
    description: "THE NEXT GENERATION 2021 ESCALADE & ESCALADE ESV",
    imgUrl: "./images/mainBanner4.jpg",
  },
  {
    carouselId: 5,
    bannerLink: "https://www.cadillac.co.kr/vehicle/ct4/vehicle.php",
    title: "2020 CT4",
    subTitle: "THE AGILE",
    description: "",
    imgUrl: "./images/mainBanner5.jpg",
  },
];
// lineUp
const lineUp = [
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
// promotion
const promotion = [
  {
    promotionId: 1,
    bannerType: "PROMOTION",
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    imgUrl: "./images/promotion1.png",
    imgDescription: "",
  },
  {
    promotionId: 2,
    bannerType: "EVENT",
    bannerLink: "https://www.cadillac.co.kr/vehicle/xt5/vehicle.php",
    imgUrl: "./images/promotion2.png",
    imgDescription: "",
  },
];
// showroom
const showroom = [
  {
    location: "서울/경기",
    showroomList: [
      {
        showroomId: 0,
        shopName: "서초 전시장",
        address: "서울시 서초구 반포대로 59",
        tel: "02-516-0560",
        latitude: 37.51912,
        longitude: 127.03461,
      },
      {
        showroomId: 1,
        shopName: "용산 전시장",
        address: "서울시 용산구 이촌로 166, 1층",
        tel: "02-6951-4200",
        latitude: 37.521634,
        longitude: 126.965401,
      },
      {
        showroomId: 2,
        shopName: "분당판교 전시장",
        address: "경기도 성남시 분당구 대왕판교로 196",
        tel: "031-715-6201",
        latitude: 37.36116,
        longitude: 127.10217,
      },
      {
        showroomId: 3,
        shopName: "수원 전시장",
        address: "경기도 수원시 영통구 중부대로 316, 1층",
        tel: "031-8067-6200",
        latitude: 37.27321,
        longitude: 127.05024,
      },
    ],
  },
  {
    location: "충청",
    showroomList: [
      {
        showroomId: 4,
        shopName: "대전 전시장",
        address: "대전광역시 중구 중앙로 124 1층",
        tel: "042-222-2270",
        latitude: 36.32773,
        longitude: 127.42382,
      },
      {
        showroomId: 5,
        shopName: "천안 전시장",
        address: "충남 천안시 동남구 구성동 50-4",
        tel: "041-572-0007",
        latitude: 36.79912,
        longitude: 127.16496,
      },
    ],
  },
  {
    location: "경상",
    showroomList: [
      {
        showroomId: 6,
        shopName: "대구 전시장",
        address: "대구광역시 수성구 달구벌대로 2327",
        tel: "053-765-7070",
        latitude: 35.86059,
        longitude: 128.617,
      },
    ],
  },
  {
    location: "호남",
    showroomList: [
      {
        showroomId: 7,
        shopName: "광주 전시장",
        address: "광주시 서구 죽봉대로 37",
        tel: "062-363-4434",
        latitude: 35.15671,
        longitude: 126.88273,
      },
      {
        showroomId: 8,
        shopName: "전주 전시장",
        address: "전라북도 전주시 덕진구 온고을로 458",
        tel: "053-765-7070",
        latitude: 35.85212,
        longitude: 127.07943,
      },
    ],
  },
  {
    location: "제주",
    showroomList: [
      {
        showroomId: 9,
        shopName: "제주 전시장",
        address: "제주시 연삼로 145 가동 1층",
        tel: "064-749-8850",
        latitude: 33.49347,
        longitude: 126.50796,
      },
    ],
  },
];
const makeShowroomData = (showroom) => {
  let arr = [];

  showroom.forEach(({ showroomList }) =>
    showroomList.forEach((store) => (arr = [...arr, store]))
  );
  return arr;
};
const showroomList = makeShowroomData(showroom);
// render funciton
const carouselRender = ($carousel, carousel) => {
  $carousel.innerHTML = `${[
    carousel[carousel.length - 1],
    ...carousel,
    carousel[0],
  ]
    .map(
      ({ carouselId, bannerLink, title, subTitle, description, imgUrl }) => `
      <li id="carouselBanner${carouselId}" style="background-image: url(${imgUrl});">
        <a class ="col-12 m-col-8 s-col-4 xs-col-4" href="${bannerLink}">
          <div class="container">
            <h3 class="h1">${title}</h3>
            ${subTitle ? `<p class="h3">${subTitle}</p>` : ""}
            ${
              description
                ? `<p class="description subTitle">${description}</p>`
                : ""
            }
            <button type="button" class="btn xLarge outline white btnMore">${title} 자세히보기</button>
          </div>
        </a>
      </li>
      `
    )
    .join("")}`;
};
const lineUpRender = ($lineUp, lineUp) => {
  $lineUp.innerHTML = `${lineUp
    .map(
      ({
        bannerLink,
        carType,
        imgUrl,
        imgAlt,
      }) => `<li class="col-3 m-col-4 s-col-2 xs-col-2">
      <a href="${bannerLink}">
        <img src="${imgUrl}" alt="${imgAlt}">
        <h3 class="carName h6">${carType}</h3>
      </a>
    </li>`
    )
    .join("")}`;
};
const promotionRender = ($promotion, promotion) => {
  $promotion.innerHTML = `${promotion
    .map(
      ({
        promotionId,
        bannerType,
        bannerLink,
        imgUrl,
        imgDescription,
      }) => `<li class="promotion${promotionId} col-6 m-col-4 s-col-4 xs-col-4">
      <a href="${bannerLink}">
        <h2 class="sectionTitle h6">${bannerType}</h2>
        <img src="${imgUrl}" alt="${imgDescription}">
      </a>
    </li>`
    )
    .join("")}`;
};
const showroomRender = ($locationList, showroom) => {
  $locationList.innerHTML = `${showroom
    .map(
      ({
        location,
        showroomList,
      }) => `<h3 class="locationTitle subTitle1">${location}</h3>
      <ul class="showroomList">
        ${showroomList
          .map(
            ({ showroomId, shopName, address, tel }) => `<li id="${showroomId}">
            <h4 class="showroomName subTitle2">${shopName}</h4>
            <p class="address"><span>주소 :</span> ${address}</p>
            <p class="tel"><span>전화 :</span> ${tel}</p>
            <button type="button" title="${shopName}"" class="btn small btnMapView">지도 보기</button>
          </li>`
          )
          .join("")}
      </ul>
    `
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

// map API
let options = {
  center: new kakao.maps.LatLng(37.519122, 127.034615), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};
let markerPosition = new kakao.maps.LatLng(37.519122, 127.034615);
let map = null;
let marker = new kakao.maps.Marker({
  position: markerPosition,
});

window.onload = () => {
  carouselRender($carousel, carousel);
  lineUpRender($lineUp, lineUp);
  promotionRender($promotion, promotion);
  showroomRender($locationList, showroom);
  move(++currentBanner);

  autoPlay = setInterval(() => move(++currentBanner, duration), 3000);

  map = new kakao.maps.Map($mapView, options);
  marker.setMap(map);
};

// event binding

// nav open
$nav.onclick = ({ target }) => {
  if (
    target.classList.contains("btnSubMenuOpen") ||
    target.classList.contains("navIconBar")
  ) {
    const $navMenuBox = target.classList.contains("btnSubMenuOpen")
      ? target.parentElement
      : target.parentElement.parentElement;
    $navMenuBox.classList.toggle("active");
    // 스크롤 중지 이벤트 만들 것!
  }
  if (!target.matches(".menu > li > button")) return;
  [...$menu.children].forEach((item) =>
    item.classList.toggle("active", target.parentNode === item)
  );
};

// searchBar open
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
    currentBanner === 0 ? 1 : currentBanner === carousel.length + 1 ? -1 : 0;
  if (!directionCheck) return;
  currentBanner += carousel.length * directionCheck;
  move(currentBanner);
};

$locationList.onclick = ({ target }) => {
  let showroom = showroomList.filter(
    (showroom) => showroom.showroomId === target.parentNode.id * 1
  );
  showroom = showroom[0];
  options.center = new kakao.maps.LatLng(showroom.latitude, showroom.longitude);
  markerPosition = new kakao.maps.LatLng(showroom.latitude, showroom.longitude);
  marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  map = new kakao.maps.Map($mapView, options);
  marker.setMap(map);
};
