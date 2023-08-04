$(function () {
  // *************************
  // ********* modal *********
  // *************************
  const modalWrap = $("#modal");
  // $("#modal").find(".modal-btm")
  const modalBtn = modalWrap.find(".modal-btm");
  const listbbsEl = $(".lst-bbs li:first-child");

  modalWrap.removeClass("active");
  // modal 열기
  // .lst-bbs li:first-child 를 클릭했을 때
  listbbsEl.on("click", function () {
    // #modal에 클래스 active를 추가
    modalWrap.addClass("active");
  });
  // modal 닫기
  // #modal button을 클릭했을 때
  modalBtn.on("click", function () {
    modalWrap.removeClass("active");
  });

  // ************************
  // ********* tabs *********
  // ************************
  const tabEl = $(".tab-item");
  const tabTit = tabEl.find(".tit");

  tabEl.removeClass("on");
  tabEl.first().addClass("on");
  // .tab-item .tit 을 클릭했을 때
  tabTit.on("click", function () {
    // .tab-item에 붙어 있는 .on 삭제
    tabEl.removeClass("on");
    //  방금 클릭한 나(this)에서 .on 추가
    $(this).parent().addClass("on");
  });

  // *************************
  // ********* slide *********
  // *************************
  let now = 1;
  const slideEls = $(".lst-slide");
  let height = 100;

  // 3초 마다 실행 1000=1초
  setInterval(function () {
    slide();
  }, 3000);

  // 슬라이드 기능 만들기
  function slide() {
    console.log("dd");
    // .lst-slide를 애니메이션(top:-300px)
    // "300px"은 txt로 인식하기때문에 "문자"로 넣어야한다
    // $(".lst-slide").animate({ top: "-300px" });
    // 3초 후에 -300px 3초 후에 -600px이 되어야한다

    // 조건문
    // now: 0 - 1번째 슬라이드
    // now: 1 - 2번째 슬라이드
    // now: 2 - 3번째 슬라이드
    // 참: 만약 1,2번째 슬라이드일 경우
    // 거짓: 3번째 슬라이드일 경우
    if (now < 3) {
      // 참 일 경우
      // 다음 슬라이드로 이동
      // $(".lst-slide").animate({ top: "-100%" });
      // slide-wrap 조부모의 값의 h300을 인식 100%로 넣어도 된다.

      slideEls.animate({
        top: height * now * -1 + "%",
      });
      // 변수 재선언
      now = now + 1;
    } else {
      // 거짓 일 경우
      // 첫번째 슬라이드로 이동
      slideEls.animate({
        top: 0,
      });
      now = 1;
    }
  }
});
