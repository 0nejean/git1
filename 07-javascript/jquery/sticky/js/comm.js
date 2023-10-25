$(function(){

    $('.page-header').each(function(){

        let 헤더 = $(this),
            헤더위치 = 헤더.offset().top
            

        // 윈도우의 스크롤 값 : $(window).scrollTop()
        // 헤더의 top 위치 값 : $('.page-header').offset().top

        $(window).on('scroll', function(){

            console.log('윈도우의 스크롤 값 : ' + $(window).scrollTop())
            console.log('헤더의 top 위치 값 : ' + 헤더위치)

            // 만약 윈도우의 스크롤 값이 헤더의 top 위치값보다 커지면
            // .page-header에서 sticky 클래스를 추가해주고
            // 아닐 경우
            // .page-header에서 sticky 클래스를 삭제
            if($(window).scrollTop() > 헤더위치){
                헤더.addClass('sticky')
            }else{
                헤더.removeClass('sticky')
            }

            // 윈도우의 스크롤 이벤트를 발생시키는
            // (헤더의 초기 위치를 조정하기 위해)
            $(window).trigger('scroll');

        })
        





    })


})