<?php
/* www/sub/new.php */
include_once('./common.php');

// 페이지 제목
$g5['title'] = "갤러리";

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.G5_CSS_URL.'/sub.css">', 0);

include_once(G5_PATH.'/head.php');
?>

<!-- 여기 아래부터 모든 HTML 요소 구성 시작 -->
<link rel="stylesheet" href="./theme/basic/css/magnific-popup.css" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="./theme/basic/js/jquery.magnific-popup.min.js"></script>

<div class="sec-g bg-gray">
                <div class="container">
                    <div class="sec-tit">
                        <h2 class="tit">공연 갤러리 <em>Performance Gallery</em></h2>
                    </div>
                    <div class="sec-cont sec-gallery">
                        <div class="lst-thumb2 zoom-gallery">
                            <a href="./images/gallery/thumb-gallery-per1.jpg" title="공연사진1 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per1.jpg" alt="공연사진1" />
                                <p class="desc">
                                    <span>공연사진1</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-per2.jpg" title="공연사진2 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per2.jpg" alt="공연사진2" />
                                <p class="desc">
                                    <span>공연사진2</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-per3.jpg" title="공연사진3 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per3.jpg" alt="공연사진3" />
                                <p class="desc">
                                    <span>공연사진3</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-per4.jpg" title="공연사진4 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per4.jpg" alt="공연사진4" />
                                <p class="desc">
                                    <span>공연사진4</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-per5.jpg" title="공연사진5 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per5.jpg" alt="공연사진5" />
                                <p class="desc">
                                    <span>공연사진5</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-per6.jpg" title="공연사진6 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per6.jpg" alt="공연사진6" />
                                <p class="desc">
                                    <span>공연사진6</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-per7.jpg" title="공연사진7 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per7.jpg" alt="공연사진7" />
                                <p class="desc">
                                    <span>공연사진7</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-per8.jpg" title="공연사진8 온누리국악예술인협동조합의 공연 사진입니다.">
                                <img src="./images/gallery-per8.jpg" alt="공연사진8" />
                                <p class="desc">
                                    <span>공연사진8</span>
                                    온누리국악예술인협동조합의 공연 사진입니다.
                                </p>
                            </a>
                        </div>
                        <button class="btn-more">더보기</button>
                    </div>
                </div>
            </div>
            <div class="sec-g">
                <div class="container">
                    <div class="sec-tit">
                        <h2 class="tit">교육 갤러리 <em>Education Gallery</em></h2>
                    </div>
                    <div class="sec-cont sec-gallery">
                        <div class="lst-thumb2 zoom-gallery">
                            <a
                                href="./images/gallery/thumb-gallery-edu1.jpg"
                                title="교육사진1 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu1.jpg" alt="전통국악" />
                                <p class="desc">
                                    <span>교육사진1</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-edu2.jpg"
                                title="교육사진2 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu2.jpg" alt="교육사진2" />
                                <p class="desc">
                                    <span>교육사진2</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-edu3.jpg"
                                title="교육사진3 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu3.jpg" alt="교육사진3" />
                                <p class="desc">
                                    <span>교육사진3</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-edu4.jpg"
                                title="교육사진4 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu4.jpg" alt="교육사진4" />
                                <p class="desc">
                                    <span>교육사진4</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-edu5.jpg"
                                title="교육사진5 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu5.jpg" alt="교육사진5" />
                                <p class="desc">
                                    <span>교육사진5</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-edu6.jpg"
                                title="교육사진6 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu6.jpg" alt="교육사진6" />
                                <p class="desc">
                                    <span>교육사진6</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-edu7.jpg"
                                title="교육사진7 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu7.jpg" alt="교육사진7" />
                                <p class="desc">
                                    <span>교육사진7</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-edu8.jpg"
                                title="교육사진8 온누리국악예술인협동조합의 교육 활동 사진입니다."
                            >
                                <img src="./images/gallery-edu8.jpg" alt="교육사진8" />
                                <p class="desc">
                                    <span>교육사진8</span>
                                    온누리국악예술인협동조합의 교육 활동 사진입니다.
                                </p>
                            </a>
                        </div>
                        <button class="btn-more">더보기</button>
                    </div>
                </div>
            </div>
            <div class="sec-g bg-gray">
                <div class="container">
                    <div class="sec-tit">
                        <h2 class="tit">체험 갤러리 <em>Experience Gallery</em></h2>
                    </div>
                    <div class="sec-cont sec-gallery">
                        <div class="lst-thumb2 zoom-gallery">
                            <a
                                href="./images/gallery/thumb-gallery-ex1.jpg"
                                title="체험사진1 온누리국악예술인협동조합의 체험 활동 사진입니다."
                            >
                                <img src="./images/gallery-ex1.jpg" alt="체험사진1" />
                                <p class="desc">
                                    <span>체험사진1</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-ex2.jpg" title="체험사진2 온누리국악예술인협동조합의 체험 사진입니다.">
                                <img src="./images/gallery-ex2.jpg" alt="체험사진2" />
                                <p class="desc">
                                    <span>체험사진2</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-ex3.jpg" title="체험사진3 온누리국악예술인협동조합의 체험 사진입니다.">
                                <img src="./images/gallery-ex3.jpg" alt="체험사진3" />
                                <p class="desc">
                                    <span>체험사진3</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-ex4.jpg" title="체험사진4 온누리국악예술인협동조합의 체험 사진입니다.">
                                <img src="./images/gallery-ex4.jpg" alt="체험사진4" />
                                <p class="desc">
                                    <span>체험사진4</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-ex5.jpg" title="체험사진5 온누리국악예술인협동조합의 체험 사진입니다.">
                                <img src="./images/gallery-ex5.jpg" alt="체험사진5" />
                                <p class="desc">
                                    <span>체험사진5</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-ex6.jpg" title="체험사진6 온누리국악예술인협동조합의 체험 사진입니다.">
                                <img src="./images/gallery-ex6.jpg" alt="체험사진6" />
                                <p class="desc">
                                    <span>체험사진6</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-ex7.jpg" title="체험사진7 온누리국악예술인협동조합의 체험 사진입니다.">
                                <img src="./images/gallery-ex7.jpg" alt="체험사진7" />
                                <p class="desc">
                                    <span>체험사진7</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                            <a href="./images/gallery/thumb-gallery-ex8.jpg" title="체험사진8 온누리국악예술인협동조합의 체험 사진입니다.">
                                <img src="./images/gallery-ex8.jpg" alt="체험사진8" />
                                <p class="desc">
                                    <span>체험사진8</span>
                                    온누리국악예술인협동조합의 체험 활동 사진입니다.
                                </p>
                            </a>
                        </div>
                        <button class="btn-more">더보기</button>
                    </div>
                </div>
            </div>
            <div class="sec-g">
                <div class="container">
                    <div class="sec-tit">
                        <h2 class="tit">지역 사회 공헌 갤러리 <em>Community Gallery</em></h2>
                    </div>
                    <div class="sec-cont sec-gallery">
                        <div class="lst-thumb2 zoom-gallery">
                            <a
                                href="./images/gallery/thumb-gallery-com1.jpg"
                                title="지역 사회 공헌사진1 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com1.jpg" alt="지역 사회 공헌사진1" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진1</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-com2.jpg"
                                title="지역 사회 공헌사진2 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com2.jpg" alt="지역 사회 공헌사진2" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진2</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-com3.jpg"
                                title="지역 사회 공헌사진3 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com3.jpg" alt="지역 사회 공헌사진3" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진3</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-com4.jpg"
                                title="지역 사회 공헌사진4 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com4.jpg" alt="지역 사회 공헌사진4" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진4</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-com5.jpg"
                                title="지역 사회 공헌사진5 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com5.jpg" alt="지역 사회 공헌사진5" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진5</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-com6.jpg"
                                title="지역 사회 공헌사진6 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com6.jpg" alt="지역 사회 공헌사진6" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진6</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-com7.jpg"
                                title="지역 사회 공헌사진7 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com7.jpg" alt="지역 사회 공헌사진7" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진7</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                            <a
                                href="./images/gallery/thumb-gallery-com8.jpg"
                                title="지역 사회 공헌사진8 온누리국악예술인협동조합의 지역 사회 공헌 사진입니다."
                            >
                                <img src="./images/gallery-com8.jpg" alt="지역 사회 공헌사진8" />
                                <p class="desc">
                                    <span>지역 사회 공헌사진8</span>
                                    온누리국악예술인협동조합의 지역 사회 공헌 사진입니다.
                                </p>
                            </a>
                        </div>
                        <button class="btn-more">더보기</button>
                    </div>
                </div>
            </div>

        <script>
            $(document).ready(function () {
                $(".zoom-gallery").magnificPopup({
                    delegate: "a",
                    type: "image",
                    closeOnContentClick: false,
                    closeBtnInside: false,
                    mainClass: "mfp-with-zoom mfp-img-mobile",
                    image: {
                        verticalFit: true,
                        titleSrc: function (item) {
                            return (
                                item.el.attr("title") +
                                ' &middot; <a class="image-source-link" href="' +
                                item.el.attr("data-source") +
                                '" target="_blank">image source</a>'
                            );
                        },
                    },
                    gallery: {
                        enabled: true,
                    },
                    zoom: {
                        enabled: true,
                        duration: 300, // don't foget to change the duration also in CSS
                        opener: function (element) {
                            return element.find("img");
                        },
                    },
                });
            });
        </script>

        <script>
            $(function () {
                $(".sec-gallery").each(function () {
                    let $this = $(this),
                        $galleryBtn = $this.find(".btn-more");

                    $galleryBtn.click(function () {
                        $this.addClass("active");
                    });
                });
            });
        </script>
<!-- 여기 아래부터 모든 HTML 요소 구성 끝 -->
<?php
include_once(G5_PATH.'/tail.php');
?>