# cadillac

캐딜락 리뉴얼 사이드 프로젝트(개인)
(디자인, 반응형 웹 퍼블리싱 및 자바스크립트 연습 및 SEO 테스트 사이트)

## 사용 언어

- HTML
- CSS
- Javascript (vanilla)

## 구현 기술

- 상단 navigation suv메뉴 활성화
  <details>
    <summary>열기 / 닫기</summary>

  1. 상단 navigation의 각 메뉴로 focus를 이동하여 선택하거나 클릭하면 sub navigation을 볼 수 있는 메뉴창이 활성화 되어 펼쳐진다.
  2. 활성화된 sub navigation외의 다른 영역을 클릭하면 이미 활성화된 sub navigation은 비활성화 된다.
  </details>

- 검색창 활성화
  <details>
    <summary>열기 / 닫기</summary>
    
    1. 검색창을 의미하는 돋보기 icon을 클릭하거나 focus를 이동하여 선택하면 검색어를 입력할 수 있는 input창이 보여진다.
    2. 활성화된 검색 input창 이외의 곳을 클릭하면 input창은 비활성화 된다. 
    </details>

- 무한 캐러셀
  <details>
    <summary>열기 / 닫기</summary>
    무한 캐러셀을 구현하기 위해서 첫번째 배너에서 앞으로 가기 버튼을 클릭하면 마지막 배너로 이동하고, 마지막 배너에서 뒤로 가기 버튼을 클릭하면 첫번째 배너로 이동해야 한다.

  1. 각각의 배너를 이동할때는 transition을 이용하열 부드럽게 이동한다.
  2. 첫번째 배너와 마지막 배너는 복사하여 가상의 배너를 만들어야 하고, 이는 각각 마지막 배너의 뒤와 첫번째 배너의 앞에 위치한다.
  3. 가상의 배너로 이동한 뒤에는 실제의 배너로 바로 이동하되, 이 때의 이동에는 transition 효과가 적용되지 않도록 하여, 실제의 배너로 이동되는 것을 사용자가 알 수 없도록 한다.
  4. 슬라이드가 이동중일 때에는 앞으로 가는 버튼과 뒤로 가는 버튼을 중복하여 클릭할 수 없다.
  5. 버튼을 클릭하지 않아도 배너는 일정 시간이 되면 자동으로 이동한다.
  6. 버튼을 클릭하여 다른 배너로 이동했을 경우 자동으로 돌아가는 시간은 초기화되어야 한다.
  </details>

- Indicator
  <details>
    <summary>열기 / 닫기</summary>
    indicator는 무한 캐러셀로 돌아가는 배너와 연결되어 있다.
    
    
    1. indicator의 버튼을 클릭하면 각각 해당하는 배너로 이동한다.
    2. indicator의 버튼은 배너의 순서에 따라서 활성화 또는 비활성화 되어야 한다.
  </details>
- 지도 API 사용 및 검색
  <details>
    <summary>열기 / 닫기</summary>
    지도 표시, 전시장 리스트에서 확인하고 싶은 전시장의 버튼을 클릭하면 해당 전시장의 지도가 보인다.
  </details>
  <!-- - 인스타그램 API 사용
    <details>
      <summary>열기 / 닫기</summary>
      인스타그램 API 사용시 계정 문제로 인하여 개인 인스타그램으로 테스트 하고, 기본 디스플레이 API 사용함
    </details>
  -->

# SEO

시맨틱, meta tag, 이미지 최적화..
