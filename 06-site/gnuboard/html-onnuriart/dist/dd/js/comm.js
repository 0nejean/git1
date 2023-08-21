$(function () {
    let $arrLeft = $(".mfp-arrow-left");

    $(".mfp-arrow-left").append("이전 사진");
    $(".desc").html("이전 사진");

    $(".mfp-wrap").each(function () {
        let $arrLeft = $(".mfp-arrow-left");

        $arrLeft.text("이전 사진");
    });
});
