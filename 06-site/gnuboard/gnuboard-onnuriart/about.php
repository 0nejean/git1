<?php
/* www/sub/new.php */
include_once('./common.php');

// 페이지 제목
$g5['title'] = "단체소개";

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.G5_CSS_URL.'/sub.css">', 0);

include_once(G5_PATH.'/head.php');
?>

<!-- 여기 아래부터 모든 HTML 요소 구성 시작 -->
<div class="visual-sub about">
                <p class="txt">Onnuri Traditional <br class="m"> Music Artists Cooperative</p>
            </div>
            <div class="sec-vision">
                <h2 class="blind">미션 & 비전</h2>
                <div class="sec-cont">
                    <div class="txt">
                        <dl>
                            <dt>Our Mission</dt>
                            <dd>자주적, 자립적, 자치적인 예술문화 조합 활동을 통하여 조합원들의 태생적 가치를 지닌 국악예술단의 발전</dd>
                        </dl>
                        <dl>
                            <dt>Our Vision</dt>
                            <dd>국악공연과 교육사업을 통한 일자리 창출과 전통예술에 대한 대중들의 관심 증대</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="sec-g bg-red sec-history">
                <div class="container">
                    <h2 class="sec-tit">단체 영역</h2>
                    <div class="sec-cont">
                        <ul class="lst-history dot">
                            <li>1995년 온누리국안예술단 창단</li>
                            <li>2016년 온누리국악예술인협동조합 설립</li>
                            <li>창단 이후 매년 정기공연 및 기획공연 다수 수행</li>
                            <li>2017년 경상북도 고향사랑 크라우드펀딩대회 우수상 수상</li>
                            <li>현대차 정몽구재단 주최 H온드림오디션 최종선발</li>
                            <li>2019년 인증 사회적기업 지정</li>
                            <li>
                                지역문화진흥원, 한국문화원연합회, 경북문화재단, 경상북도, 청도군 등 다수 공공기관 주관 문화예술공모사업 수행
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sec-g sec-member">
                <div class="container">
                    <h2 class="sec-tit">단원 소개 <em>Members of Onnuri Traditional Music Artists Cooperative</em></h2>
                    <div class="sec-cont">
                        <ul class="lst-member">
                            <li>
                                <img src="./images/about-member1.jpg" alt="" />
                                <strong class="name">단장 구승희(아쟁)</strong>
                                <ul class="lst-career dot">
                                    <li>온누리국악예술인협동조합 대표이사</li>
                                    <li>K-String AHHA 국악현악 4중주 대표</li>
                                    <li>경북대학교 국악학과 졸업</li>
                                    <li>남원춘향제 전국 사물놀이 경연대회 대상</li>
                                    <li>러시아 블라디보스토크 대한민국 총영사 표창</li>
                                    <li>대구시립국악단, 경북도립국악단 아쟁 객원 연주</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member2.jpg" alt="" />
                                <strong class="name">음악감독 김정식(피아노)</strong>
                                <ul class="lst-career dot">
                                    <li>김정식 퀸텟 대표</li>
                                    <li>Again dixieland 활동 중</li>
                                    <li>계명문화대학 실용음악과 졸업</li>
                                    <li>전국 CCM 컴페티션 대상수상</li>
                                    <li>국제 인터렉티브 뮤직 컴페티션 대상수상</li>
                                    <li>fun’s jazz ensemble 창단</li>
                                    <li>JY실용음악아카데미 원장역임</li>
                                    <li>그랜드심포니 오케스트라 단원역임</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member3.jpg" alt="" />
                                <strong class="name">악장 임형석(피리, 태평소)</strong>
                                <ul class="lst-career dot">
                                    <li>대구시립국악단 차석 단원</li>
                                    <li>경북대학교 국악학과 졸업</li>
                                    <li>경북대학교 예술대학원 국악학과 석사 과정</li>
                                    <li>오스트리아 그라츠 ‘월드 콰이어 게임’ 초청연주</li>
                                    <li>중국 사천성 성도시 한/중 교류 축하연주</li>
                                    <li>글로벌뮤직앙상블 ‘풍류21’ 단원</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member4.jpg" alt="" />
                                <strong class="name">단무장 임정아(가야금)</strong>
                                <ul class="lst-career dot">
                                    <li>가야금앙살블 ‘아랑’대표</li>
                                    <li>경북대학교 국악학과 졸업</li>
                                    <li>오스트리아 세계 합창대회 참가</li>
                                    <li>일본 세계 민요경연대회 참가</li>
                                    <li class="lts">뉴질랜드 크라이스트 처치 대성당 K-청소년교류음악회 연주</li>
                                    <li>여수진남전국국악경연대회 기악명인부 최우수상</li>
                                    <li>김천시립국악단 단원역임</li>
                                    <li>사단법인 한국국악협회 국악강사</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member5.jpg" alt="" />
                                <strong class="name">수석단원 박현진(대금)</strong>
                                <ul class="lst-career dot">
                                    <li>온누리프렌즈 대표</li>
                                    <li>경북대학교 국악학과 졸업</li>
                                    <li>일본 야스기시장 표창</li>
                                    <li>달구벌 전국국악경연대회 대학부종합대상</li>
                                    <li>한밭국악전국대회 일반부 최우수상</li>
                                    <li>대구광역시 동구교육지원청 <br />문화/예술 100인 멘토 감사패</li>
                                    <li>중국 평화호특 청도대표 연주</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member6.jpg" alt="" />
                                <strong class="name">단원 구다영(판소리)</strong>
                                <ul class="lst-career dot">
                                    <li>경북대학교 국악학과 졸업</li>
                                    <li class="lts">대구가톨릭대학교 예술대학 통합예술치료학과 박사과정</li>
                                    <li>인당 박동진 서거 추모 음악회 출연</li>
                                    <li>국악뮤지컬 ‘강은 강을 만나 바다로 간다’ 출연</li>
                                    <li>‘판소리, 시대의 옷을입다’ 협연</li>
                                    <li>힐스콰이어 정기연주회 협연</li>
                                    <li>제7회 낙동강 세계평화 문화대축전</li>
                                    <li>경남 뉴아트창작공연지원사업 ‘연기의 마인’ 출연</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member7.jpg" alt="" />
                                <strong class="name">단원 신석현(타악)</strong>
                                <ul class="lst-career dot">
                                    <li>도령컴퍼니 대표</li>
                                    <li>경북대학교 국악학과 졸업</li>
                                    <li>‘구음회 실내악단’ 미국 3개 도시 초청공연</li>
                                    <li>황산벌 전국국악경연대회 고법부문 입상</li>
                                    <li>대구 경북 국악관현악단 타악 단원</li>
                                    <li>대구 시립 국악단 젊은명인전 협연</li>
                                    <li>대구시립국악단 인턴단원 역임</li>
                                    <li>한국문화예술교육진흥원 국악강사</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member8.jpg" alt="" />
                                <strong class="name">단원 오채은(해금)</strong>
                                <ul class="lst-career dot">
                                    <li>경북대학교 국악학과 졸업</li>
                                    <li>달구벌 전국 청소년 국악 경연대회 우수상</li>
                                    <li>대구 국악제 전국 국악 경연대회 우수상</li>
                                    <li>부산국립국악원 청소년 예술단 단원역임</li>
                                    <li>해금 실내악단 ‘이현의 농’단원</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member9.jpg" alt="" />
                                <strong class="name">단원 박수민(가야금)</strong>
                                <ul class="lst-career dot">
                                    <li>영남대학교 국악학과 재학중</li>
                                    <li>김천시립국악단 ‘제4회 청소년 협주곡의 밤’ 협연</li>
                                    <li>온누리국악예술단 추석맞이 기획공연 秋月滿庭 연주</li>
                                    <li class="lts">
                                        온누리국악예술단 정기연주회 청춘들이 노래하는 <br />
                                        ‘젊은국악’ 연주
                                    </li>
                                    <li>온누리국악예술단 정기연주회 <span>同苦同樂</span> 연주</li>
                                </ul>
                            </li>
                            <li>
                                <img src="./images/about-member10.jpg" alt="" />
                                <strong class="name">단원 한아름(가야금)</strong>
                                <ul class="lst-career dot">
                                    <li>영남대학교 국악학과 재학중</li>
                                    <li>호찌민-경주세계문화엑스포 2017 초청공연 연주</li>
                                    <li>온누리국악예술단 추석맞이 기획공연 秋月滿庭 연주</li>
                                    <li class="lts">
                                        온누리국악예술단 정기연주회 청춘들이 노래하는 <br />
                                        '젊은국악' 연주
                                    </li>
                                    <li>온누리국악예술단 정기연주회 <span>同苦同樂</span> 연주</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sec-g bg-gray sec-map">
                <div class="container">
                    <h2 class="sec-tit">찾아오시는길 <em>Get Direction</em></h2>
                    <div class="sec-cont">
                        <!-- * 카카오맵 - 지도퍼가기 -->
                        <!-- 1. 지도 노드 -->
                        <div id="daumRoughmapContainer1645063550906" class="root_daum_roughmap root_daum_roughmap_landing"></div>

                        <!--
                            2. 설치 스크립트
                            * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
                        -->
                        <script
                            charset="UTF-8"
                            class="daum_roughmap_loader_script"
                            src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
                        ></script>

                        <!-- 3. 실행 스크립트 -->
                        <script charset="UTF-8">
                            new daum.roughmap.Lander({
                                timestamp: "1645063550906",
                                key: "296o4",
                                // mapWidth: "1260",
                                mapHeight: "400",
                            }).render();
                        </script>
                        <p class="txt">내비게이션에서 온누리국악예술단을 검색하시면 됩니다. <br class="m"> 검색이 안될 시 아래 주소를 입력해주세요.</p>
                        <ul class="ul_txt" id="map-info1">
                            <li><em>주소</em> : 경북 청도군 화양읍 연지로 152</li>
                            <li><em>문의전화</em> : 054-371-1533</li>
                        </ul>
                    </div>
                </div>
            </div>
<!-- 여기 아래부터 모든 HTML 요소 구성 끝 -->
<?php
include_once(G5_PATH.'/tail.php');
?>