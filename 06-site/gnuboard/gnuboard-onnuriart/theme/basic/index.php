<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>


<div class="mVisual">
    <p class="txt">Onnuri Traditional Music Artists <br class="m"> Cooperative</p>
</div>
<!-- 단체소개 -->
<div class="sec-g bg-red sec-about">
    <div class="container">
        <h2 class="sec-tit">단체소개 <em>About us</em> </h2>
        <div class="sec-cont">
            <p class="txt-intro">
            온누리국악예술인협동조합은 경상북도 청도에 자리 잡고 있는 가족공동체로 구성된 전문 국악 연주 단체입니다.  <br class="pc">
            협동조합 단원들은 다양한 레퍼토리 작품과 고도의 예술적 기능을 가진 연주자들로 국내외에서 수많은 기획, 초청공연을 하고 있습니다. <br class="pc">
            강력한 응집력과 자유분방한 앙상블로 이루어지는 크로스 오브 연주는 전통과 동시대성의 조화를 절묘하게 표현하며 미래의 한국 문화를 창조해 가고 있습니다.
            </p>
            <a href="#" class="btn-w">자세히 보기</a>
        </div>
    </div>
</div>
<!-- 단체활동 -->
<div class="sec-g sec-facility bg-gray">
    <div class="container">
        <h2 class="sec-tit">단체활동 <em>What We Do</em> </h2>
        <div class="sec-cont">
            <img src="images/img-doing.jpg" alt="">
            <p class="txt-intro">
            온누리 국악예술인 협동조합은 공연활동, 교육 활동(어린이 국악 클래스, 어르신 평생교육), 체험활동(국악기 체험, 미니어처 제작 체험, <br class="pc">
            전통 놀이) 및 다양한 지역 사회 공헌 활동 등 다양한 사업들을 통하여 일자리 창출과 전통예술에 대한 대중들이 관심 증대를 위해 <br class="pc">
            노력하고 있습니다.
            </p>
            <a href="#" class="btn-w">자세히 보기</a>
        </div>
    </div>
</div>

<h2 class="sound_only">최신글</h2>


<div class="sec-g latest_wr">
    <div class="container">
        <div>
            <?php echo latest("basic", "contact", 5, 25); ?>
        </div>        
    </div>
</div>

<?php
include_once(G5_THEME_PATH.'/tail.php');