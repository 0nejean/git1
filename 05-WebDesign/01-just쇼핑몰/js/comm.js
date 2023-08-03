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

  // 3초 마다 실행 - ~초마다 실행 = setInterval(1s = 1,000)
  setInterval(function () {
    slide();
  }, 3000);

  function slide() {
    // .lst-slide를 애니메이션(top: -300px)
    // 3초 후에 -100% 6초 후에 -200%
    $(".lst-slide").animate({
      top: 100 * now * -1 + "%",
    });
  }
});
