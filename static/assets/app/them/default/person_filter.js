/**
 * Created by Thinkpad on 2017/5/17.
 */
$('.navSide_toggle2').click(function () {
    $('.warp_content dt').toggle();
    $('.navSide_toggle2').toggleClass('icon-triangle-right')
    if ($('.warp_content dt').is(":hidden")) {
        $(".warp_content dl dd").css({'padding-left': '0px'})
        $(".sidebar_nav").css({'padding-left': '30px'})
        $(this).css({'left': '0px'})
        $(".sidebar_left2").css({'left': '0'});
        $(".realtion_tab").css({'width': '100%'});
        $(".heade_T").css({'width': '100%'});
    } else {
        $(".warp_content dl dd").css({'padding-left': '80px'})
        $(".sidebar_nav").css({'padding-left': '10px'})
        $(this).css({'left': '72px'})
        $(".sidebar_left2").css({'left': '80px'});
        $(".realtion_tab").css({'width': 'calc( 100% - 80px)'});
        $(".heade_T").css({'width': 'calc( 100% - 80px)'});
    }

})
$(document).ready(function() {

    $(".toggle_block .icon-fullscreen_exit").click(function () {
        $('.toggle_block').hide();
        $('.filter_icon').show();
       /* $('.filter_icon').css({"display":'inline'})*/
    })
    $('.filter_icon').click(function (){
        $('.toggle_block').fadeIn();
        $(this).hide()
    } )
    $('.left_caption  .icon-cog').click(function (){
            $('.setup_list').show();
        $(".left").show();
        $(".right").css({"display":"none"});
        $(".filter_peron_list").show();

    })
    $('.setup_list  .icon-icon_cancel').click(function (){
        $('.setup_list').hide();
        $(".filter_peron_list").hide();
    })

    $('.exp_text').click(function (){
        if ( $(this).hasClass("add_exp") )
        {
            $(this).text('删除具体筛选条件')
            $(this).removeClass('add_exp')
        }else{
            $(this).text('添加具体筛选条件');
            $(this).addClass('add_exp')
        }
       $(this).next('.sele_bj').toggle()


    })
        $('.right_shop_infor .icon-icon_zoom-in').click(function (){
            $(".filter_peron_list").show(300)
        })
    $('.right_shop_exit .right_shop_infor .right_shop_progress .icon-icon_cancel').click(function (){
        $(this).parents('li').remove()
    })
    $('.right_shop_infor .right_shop_progress input[type="checkbox"]').click(function (){
       if( $('.right_shop_infor input:checked').length>1){
           $('.jiaobing').show(100);
       }
    })
    $('.right_shop .right_shop_block .modu_list .icon-icon_cancel').click(function (){
        $(this).parents('li').remove()
    })
    $('.filter_peron_list .right .title .icon-icon_cancel').click(function (){
        $(".filter_peron_list").hide(100);
    })
    $('.filter_peron_list .left .chart_icon').click(function (){
            $(".filter_peron_list .right .chart").show()
            $('.input_list').hide()
    })
    $('.filter_peron_list .left .chart_text').click(function (){
        $(".filter_peron_list .right .chart").hide()
        $('.input_list').show()
        $(".form_1").show();
    });
    $("#l_1").click(function(){
        $(".form_2").show();
    });
    $("#l_2").click(function(){
        $(".form_3").show();

    })
    $("#l_3").click(function(){
        $(".form_4").show();
    })
    $("#l_4").click(function(){
        $(".form_5").show();
    })
    $("#l_5").click(function(){
        $(".form_6").show();
    })
    $("#l_6").click(function(){
        $(".form_7").show();
    })
  /*  $("#l_7").click(function(){
        $(".form_8").show();
    })*/
    $("#l_8").click(function(){
        $(".form_9").show();
    })
    $("#l_9").click(function(){
        $(".form_10").show();
    })
    $("#l_10").click(function(){
        $(".form_11").show();
    })
    $("#l_11").click(function(){
        $(".form_12").show();
    })
    $('.minus').click(function (){
        alert("请保留一个");
        $(this).parents('.form-group').remove();
    })

    $('.add_j').click(function (){
       var inputNum= $(this).parents('.form-group li:last')
       var text= $(this).parents('.form-group ul li')
        $(this).parents('.form-group ul').append(inputNum.clone(true))
        if(text>length>1){
            $(this).parents('.form-group ul li label').hmtl('')
        }
    })

    $('.minus_j').bind('click',function(){
        var rowCount= $(this).parents('.c_f').find('.cf_u li').length;
        if(rowCount>0){
          $(this).parents('.cf_u li').remove();
        }else{
            alert("请至少保留一行")
        }
    })
    $(".modu_list_block .modal input").attr('readOnly',true)
    $(".modu_list_block .modal select").attr('disabled','disabled')
})