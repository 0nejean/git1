<?php
/* www/sub/new.php */
include_once('./common.php');

// 페이지 제목
$g5['title'] = "단체활동";

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.G5_CSS_URL.'/sub.css">', 0);

include_once(G5_PATH.'/head.php');
?>

<!-- 여기 아래부터 모든 HTML 요소 구성 시작 -->
<link
      rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

            <div class="sec-g bg-red sec-performance">
                <div class="container">
                    <div class="sec-tit tit-type2">
                        <h2 class="tit">공연활동 <em>Performance Activities</em></h2>
                        <p class="txt">
                            강력한 응집력과 자유분방한 앙상블로 이루어지는 크로스오버 연주는 전통과 동시대성의 조화를 절묘하게 표현하며
                            미래의 한국문화를 창조해 가고 있다.
                        </p>
                    </div>
                    <div class="sec-cont">
                        <!-- pc -->
                        <ul class="pc lst-thumb">
                            <li>
                                <img src="./images/facility-thu-head1.jpg" alt="전통국악" />
                                <span class="txt-cover">전통국악</span>
                            </li>
                            <li>
                                <img src="./images/facility-thu-head2.jpg" alt="퓨전국악" />
                                <span class="txt-cover">퓨전국악</span>
                            </li>
                            <li>
                                <img src="./images/facility-thu-head3.jpg" alt="풍물놀이" />
                                <span class="txt-cover">풍물놀이</span>
                            </li>
                        </ul>
                        <!-- mobile -->
                        <div id="perform" class="m swiper slide-act">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="./images/facility-head1.jpg" alt="전통국악" /></div>
                                <div class="swiper-slide"><img src="./images/facility-head2.jpg" alt="퓨전국악" /></div>
                                <div class="swiper-slide"><img src="./images/facility-head3.jpg" alt="풍물놀이" /></div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-pagination"></div>
                            <div class="wrap-autoplay-control play-control1">
                                <button aria-pressed="false" aria-label="자동 재생 일시 정지"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                var swiper = new Swiper("#perform", {
                    loop: true,
                        autoplay: {
                        delay: 3000,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    a11y: {
                        prevSlideMessage: '이전 슬라이드',
                        nextSlideMessage: '다음 슬라이드',
                        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
                    },
                    on: {
                        init: function () {
                            thisSlide1 = this;
                            autoPlayBtn1 = document.querySelector('#perform .wrap-autoplay-control > button');
                            autoPlayBtn1.addEventListener('click', (e) => {
                                autoPlayState1 = autoPlayBtn1.getAttribute('aria-pressed');
                                if (autoPlayState1 === 'false') {
                                    autoPlayBtn1.setAttribute('aria-pressed', 'true');
                                    thisSlide1.autoplay.stop();
                                } else if (autoPlayState1 === 'true') {
                                    autoPlayBtn1.setAttribute('aria-pressed', 'false');
                                    thisSlide1.autoplay.start();
                                };
                            });
                        },
                    },
                });
                </script>

            <div class="sec-g sec-vision sec-edu bg-gray">
                <div class="sec-tit tit-type2 container">
                    <h2 class="tit">교육활동 <em>Educational Activities</em></h2>
                </div>
                <div class="sec-cont">
                    <div class="txt">
                        <dl>
                            <dt>어린이 국악 클래스</dt>
                            <dd>
                                국악의 발전과 계승을 위하여 인근 지역 어린이들을 대상으로 국악의 악, 가, 무 3요소를 골고루 교육하고 있다.
                            </dd>
                        </dl>
                        <dl>
                            <dt>어르신 평생교육</dt>
                            <dd>지역 어르신들의 문화예술 향유 기회 증대 및 삶의 질 향상을 위해 다양한 국악 교육을 수행하고 있다.</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="sec-g sec-performance">
                <div class="container">
                    <div class="sec-tit">
                        <h2 class="tit">체험활동 <em>Experience Activities</em></h2>
                    </div>
                    <div class="sec-cont">
                        <!-- pc -->
                        <ul class="pc lst-thumb">
                            <li>
                                <img src="./images/facility-thu-experience1.jpg" alt="미니어쳐 제작 체험" />
                                <span class="txt-cover">"미니어쳐 제작 체험</span>
                            </li>
                            <li>
                                <img src="./images/facility-thu-experience2.jpg" alt="국악기 체험" />
                                <span class="txt-cover">국악기 체험</span>
                            </li>
                            <li>
                                <img src="./images/facility-thu-experience3.jpg" alt="전통놀이 체험" />
                                <span class="txt-cover">전통놀이 체험</span>
                            </li>
                        </ul>
                        <!-- mobile -->
                        <div id="experi"  class="m swiper slide-act">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="./images/facility-experience1.jpg" alt="미니어쳐 제작 체험" /></div>
                                <div class="swiper-slide"><img src="./images/facility-experience2.jpg" alt="국악기 체험" /></div>
                                <div class="swiper-slide"><img src="./images/facility-experience3.jpg" alt="전통놀이 체험" /></div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-pagination"></div>
                            <div class="wrap-autoplay-control play-control2">
                                <button aria-pressed="false" aria-label="자동 재생 일시 정지"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                var swiper = new Swiper("#experi", {
                    loop: true,
                        autoplay: {
                        delay: 3000,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    a11y: {
                        prevSlideMessage: '이전 슬라이드',
                        nextSlideMessage: '다음 슬라이드',
                        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
                    },
                    on: {
                        init: function () {
                            thisSlide2 = this;
                            autoPlayBtn2 = document.querySelector('#experi .wrap-autoplay-control > button');
                            autoPlayBtn2.addEventListener('click', (e) => {
                                autoPlayState2 = autoPlayBtn2.getAttribute('aria-pressed');
                                if (autoPlayState2 === 'false') {
                                    autoPlayBtn2.setAttribute('aria-pressed', 'true');
                                    thisSlide2.autoplay.stop();
                                } else if (autoPlayState2 === 'true') {
                                    autoPlayBtn2.setAttribute('aria-pressed', 'false');
                                    thisSlide2.autoplay.start();
                                };
                            });
                        },
                    },
                });
                </script>

            <div class="sec-g bg-gray sec-performance">
                <div class="container">
                    <div class="sec-tit">
                        <h2 class="tit">지역 사회 공헌 활동 <em>Community Activities</em></h2>
                    </div>
                    <div class="sec-cont">
                        <ul class="pc lst-thumb lst-commu">
                            <li><img src="./images/facility-community1.jpg" alt="" /></li>
                            <li><img src="./images/facility-community2.jpg" alt="" /></li>
                            <li><img src="./images/facility-community3.jpg" alt="" /></li>
                            <li><img src="./images/facility-community4.jpg" alt="" /></li>
                        </ul>
                        <div id="commu"  class="m swiper slide-act">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="./images/facility-community1.jpg" alt="지역 사회 공헌 활동" /></div>
                                <div class="swiper-slide"><img src="./images/facility-community2.jpg" alt="지역 사회 공헌 활동" /></div>
                                <div class="swiper-slide"><img src="./images/facility-community3.jpg" alt="지역 사회 공헌 활동" /></div>
                                <div class="swiper-slide"><img src="./images/facility-community4.jpg" alt="지역 사회 공헌 활동" /></div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-pagination"></div>
                            <div class="wrap-autoplay-control">
                                <button aria-pressed="false" aria-label="자동 재생 일시 정지"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                var swiper = new Swiper("#commu", {
                    loop: true,
                        autoplay: {
                        delay: 3000,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    a11y: {
                        prevSlideMessage: '이전 슬라이드',
                        nextSlideMessage: '다음 슬라이드',
                        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
                    },
                    on: {
                        init: function () {
                            thisSlide3 = this;
                            autoPlayBtn3 = document.querySelector('#commu .wrap-autoplay-control > button');
                            autoPlayBtn3.addEventListener('click', (e) => {
                                autoPlayState3 = autoPlayBtn3.getAttribute('aria-pressed');
                                if (autoPlayState3 === 'false') {
                                    autoPlayBtn3.setAttribute('aria-pressed', 'true');
                                    thisSlide3.autoplay.stop();
                                } else if (autoPlayState3 === 'true') {
                                    autoPlayBtn3.setAttribute('aria-pressed', 'false');
                                    thisSlide3.autoplay.start();
                                };
                            });
                        },
                    },
                });
                </script>





<!-- 여기 아래부터 모든 HTML 요소 구성 끝 -->
<?php
include_once(G5_PATH.'/tail.php');
?>