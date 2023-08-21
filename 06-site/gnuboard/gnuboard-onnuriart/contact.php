<?php
/* www/sub/new.php */
include_once('./common.php');

// 페이지 제목
$g5['title'] = "공연 및 체험문의";

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.G5_CSS_URL.'/sub.css">', 0);

include_once(G5_PATH.'/head.php');
?>

<!-- 여기 아래부터 모든 HTML 요소 구성 시작 -->
<div class="area-subtit">
    <h2 id="container_title">
        <span title="<?php echo get_text($g5['title']); ?>">
        <?php echo get_head_title($g5['title']); ?>
        <em>Ask about Performances and Experiences</em>
    </span> 
    </h2>
</div>

<div class="container contact-wrap">
    <div class="img">
        <img src="./images/contact-img.jpg" alt="">
    </div>
    <div id="contacts" class="contacts">
        <form action="">
            <fieldset>
                <legend>공연 및 체험 문의하기</legend>
                <p class="essential-txt"> <span>*</span> 표시는 필수 입력 사항입니다.</p>
                <ul>
                    <li>
                        <label for="name">이름 <span class="essen">필수입력</span></label>
                        <input type="text" name="name" id="name" />
                    </li>
                    <li>
                        <label for="email">이메일</label>
                        <input type="email" name="email" id="email" />
                    </li>
                    <li>
                        <label for="phone">연락처 <span class="essen">필수입력</span></label>
                        <input type="tel" name="phone" id="phone" maxlength="16" />
                    </li>
                    <li>
                        <label for="content">문의내용 <span class="essen">필수입력</span></label>
                        <textarea name="content" id="content" cols="30" rows="10"></textarea>
                    </li>
                </ul>
                <input type="submit" class="btn-write" value="작성" />
            </fieldset>
        </form>
    </div>
</div>


<div class="help-txt">
    온누리국악예술인협동조합의 공연 및 체험에 대해서 문의 내용이 있으신가요? <br>
그렇다면, 위 문의 내용을 작성해 주세요. 작성해 주신 정보로 최대한 빨리 답변드리겠습니다.
</div>
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
<!-- 여기 아래부터 모든 HTML 요소 구성 끝 -->
<?php
include_once(G5_PATH.'/tail.php');
?>