<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/shop.tail.php');
    return;
}
?>


</div>
</div>

<!-- <div class="help-txt">
    온누리국악예술인협동조합의 공연 및 체험에 대해서 문의 내용이 있으신가요? <br>
그렇다면, 위 문의 내용을 작성해 주세요. 작성해 주신 정보로 최대한 빨리 답변드리겠습니다.
    </div>     -->
    <div class="help-etc">
        <div class="container">            
            <h3 class="tit">다른 문의 창구를 원하신다면 아래 내용을 참고하세요.</h3>
            <dl class="info">
                <dt>전화번호</dt>
                <dd> <a href="tel:054-371-1533">054-371-1533</a></dd>
            </dl>
            <dl class="info">
                <dt>이메일</dt>
                <dd> <a href="mailto:onnuri1533@naver.com">onnuri1533@naver.com</a></dd>
            </dl>
            <dl class="info">
                <dt>카카오톡 채널</dt>
                <dd>온누리국악예술인협동조합</dd>
            </dl>
        </div>
    </div>
      
    

</div>
<!-- 콘텐츠 끝 -->

<hr>

<!-- 하단 시작 -->
<div id="ft">

    <div id="ft_wr">
        <div id="ft_link" class="ft_cnt">
            <a href="<?php echo get_pretty_url('content', 'about'); ?>">단체소개</a>
            <a href="<?php echo get_pretty_url('content', 'facility'); ?>">단체활동</a>
            <a href="<?php echo get_pretty_url('content', 'provision'); ?>">서비스이용약관</a>
            <a href="<?php echo get_pretty_url('content', 'privacy'); ?>">개인정보처리방침</a>
            <!-- <a href="<?php echo get_device_change_url(); ?>">모바일버전</a> -->
        </div>
        <address id="ft_company" class="ft_cnt">
        	<h2 class="blind">사이트 정보</h2>
	        <ul class="ft_info">
                <li class="company">온누리국악예술인협동조합</li>
                <li>Tel. 054-371-1533 </li>
                <li>E-mail. <a href="mailto:onnuri1533@naver.com">onnuri1533@naver.com</a> </li>
                <li class="add">Address. 경상북도 청도군 화양읍 연지로 152</li>
			</ul>
	    </address>

        <div id="ft_copy">Copyright &copy; <b> ⓒ 2021 온누리국악예술인협동조합</b> All rights reserved.</div>
        <div id="ft_sns">
            <h2 class="blind">SNS 바로가기</h2>
            <ul class="lst_sns">
                <li class="youtube"><a href="https://www.youtube.com/channel/UCsLc1f8gzpyQZbYGKAJD4GQ" title="새창열림" target="_blank">유튜브</a></li>
                <li class="instagram"><a href="https://www.instagram.com/onnuri1533/" title="새창열림" target="_blank">인스타그램</a></li>
                <li class="facebook"><a href="https://www.facebook.com/onnuri1533/?hc_ref=ARSgKzdKCmD5eQCEPxNZByOpxmYRkc36fnwjFzFlaWnKXTJ2foY-6LIjIEwAcmFFCIg&fref=nf&__tn__=kC-R" title="새창열림" target="_blank">페이스북</a></li>
                <li class="blog"><a href="https://blog.naver.com/onnuri1533" title="새창열림" target="_blank">블로그</a></li>
                <li class="kakao"><a href="https://pf.kakao.com/_XxeiST" title="새창열림" target="_blank">카카오톡</a></li>
            </ul>
        </div>
	</div>      
        <!-- <div id="ft_catch"><img src="<?php echo G5_IMG_URL; ?>/ft_logo.png" alt="<?php echo G5_VERSION ?>"></div> -->
        
    
    
    <button type="button" id="top_btn">
    	<i class="fa fa-arrow-up" aria-hidden="true"></i><span class="sound_only">상단으로</span>
    </button>
    <script>
    $(function() {
        $("#top_btn").on("click", function() {
            $("html, body").animate({scrollTop:0}, '500');
            return false;
        });
    });
    </script>
</div>

<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");