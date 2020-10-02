$(document).ready(function () {

    $('#nav li').hover(
        function () {
            //show its submenu
            $('ul', this).slideDown(100);

        },
        function () {
            //hide its submenu
            $('ul', this).slideUp(100);
        }
    );

});
$(document).ready(function () {
    var imgItems =$('.slide li').length;
    var imgPos=1;
//برای دایره های اسلایدر--
    for(i=1;i<=imgItems; i++){
$('.page').append('<li><span class="fa fa-circle"></span></li>')
    }
//-------------
    $('.slide li').hide();
    $('.slide li:first').show();
    $('.page li:first').css({'color':'#CD6E2E'});

    $('.page li').click(page);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);
    setInterval(function () {
    nextSlider();
    }, 5000);
    function page() {
        var pagepos= $(this).index()+ 1;

        $('.slide li').hide();
        $('.slide li:nth-child('+ pagepos +')').fadeIn();

        $('.page li').css({'color':'#858585'});
        $(this).css({'color':'#CD6E2E'});

        imgPos=pagepos;
    }

        function nextSlider(){
            if (imgPos >= imgItems){imgPos= 1;}
            else {imgPos++;}
            $('.page li').css({'color':'#858585'});
            $('.page li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});

            $('.slide li').hide();
            $('.slide li:nth-child('+ imgPos +')').fadeIn();

        }
    function prevSlider(){
        if (imgPos <= 1){imgPos= imgItems;}
        else {imgPos--;}
        $('.page li').css({'color':'#858585'});
        $('.page li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});

        $('.slide li').hide();
        $('.slide li:nth-child('+ imgPos +')').fadeIn();

    }

});



