
(function($){
    $(document).ready(function(){

        $(".change_bj_color li:even").css("background-color","#181952");
        $(".change_bj_color li:even").attr("background","#181952");
        $(".change_bj_color li:odd").css("background-color","#0f114a");
        $(".change_bj_color li:odd").attr("background","#0f114a");
       $(".speak_toop").hide();
        $(".demoLeft").focus(function () {
            $(".speak_toop").show();
            $(".mouse_show").show('fast');
        })

        $(".tips_panle").click(function () {
            $(".speak_toop").hide()
            $(".mouse_show").hide();
        })
        $(".demoLeft").blur(function () {
            var strExp=new RegExp(/^[\u4E00-\u9FA5]+$/);
            if($(this).val()==''|| strExp.test($(this).val())){
                // $(".speak_toop").hide()
                // $(".mouse_show").hide();
            }else{
                $(".require_button").click(function(){
                    $(".speak_toop").hide()
                    $(".mouse_show").hide()
                    $(".demoLeft").val("")
                })
            }
        })
        /*  $(".require_button").click(function(){
         $(".mouse_show").hide()
         })*/
        $(".current_button").click( function(){
            $(this).parents(".search_buttou_more").hide()
        })

        /* $(".suer_button02").click(function(){
         //$('#tree').hide();
         //$(this).parents(".filter").hide();
         })*/

        $(".more_click").mousemove(function(){
            //$j(".one_showo_more").show();
        })
        $(".more_click").mouseleave(function(){
            //$j(".one_showo_more").hide();
        })

        $(".if_see span ").click(function(){
            $(this).toggleClass("add_color_a")
        })
        $(".if_see span ").click(function(){
            $(this).toggleClass("add_color_a")
        })
        $(".right_object_list span").click(function(){
            $(".right_object_list span").removeClass("aclick")
            $(this).addClass("aclick")
        })
        /*全图概述*/
        //$j(".dregv").hide();
        //$j(".start_jiu").click(function(){
        //    $j(".egvg").toggle();
        //    $j(".dregv").toggle();
        //})

        $(".total").hide();
        $(".total_del").hide();
        $(".show_tip02").click(function(){
            $(".total").toggle();;


        })
        /*右侧TAB切换*/
        $(function(){
            $(" .current_content_right").hide();
            $(".current_left_list li").unbind("click").bind("click", function(){
                var index = $(".current_left_list>li").index( $(this) );
                $(".current_content_right").eq(index).show().siblings(".current_content_right").hide()
            });
        })
        $(".seach_tab").click(function(){
            $(this).parents(".current_content_right").hide();
        })
        /*整屏切换*/
        $(".tab span  a:first ,.realtion_tab .realtion_a a:first").addClass("tabActive");
        $(".tab div ,.realtion_tab .relation_div").not(":first").hide();
        $(".tab span a ,.realtion_tab .realtion_a a").unbind("click").bind("click", function(){
            $(this).siblings("a").removeClass("tabActive").end().addClass("tabActive");
            var index = $(".tab span a ,.realtion_tab .realtion_a a").index( $(this) );
            $(".tab div ,.realtion_tab .relation_div").eq(index).siblings(".tab div ,.realtion_tab .relation_div").hide().end().fadeIn("slow");
        });

        /*右侧tab切换*/
        $(function(){
            $(".right_tab dl dt>a:first").addClass("tabActive");
            $(".right_tab dl dd ul.search_tab_ul").not(":first").hide();
            $(".right_tab dl dt>a").unbind("click").bind("click", function(){
                $(this).siblings("a").removeClass("tabActive").end().addClass("tabActive");
                var index = $(".right_tab dl dt>a").index( $(this) );
                $(".right_tab dl dd ul.search_tab_ul").eq(index).siblings(".right_tab dl dd ul.search_tab_ul").hide().end().fadeIn("slow");

                if(index == 0){
                    $('.item').siblings().removeClass('active');
                    $('#mynetwork').addClass('active').fadeIn('slow');

                }
                if(index == 1){
                    $('.item').siblings().removeClass('active');
                    $('#relationGrade').addClass('active').fadeIn('slow');

                }

            });
        })
        /*搜索*/
        $(".search_input_te").hide();
        $(".icon-icon_search").click(function(){
            $(".search_input_te").toggle()
        })
        /*index_user2*/
        $(".dan_delect").click(function(){
            if(confirm("确定要删除吗")){
                $(this).parents("tr").remove();
            }else{
            }
        })
        /*密码隐藏显示*/
        $(".password_hide").hide()
        $(".icon-icon_hide").click(function(){
            if($(this).hasClass("icon-icon_hide")){
                $(this).removeClass("icon-icon_hide").addClass("icon-icon_show ")
            }else{
                $(this).addClass("icon-icon_hide").removeClass("icon-icon_show ")
            }
            $(this).siblings(".password_hide").toggle()
            $(this).siblings(".pass_i").toggle();
        })
        /*增加管理员*/
        $(".add_admin").hide();
        $(".icon_hide").hide();
        $(".tab_add_a").click(function(){
            $(".icon_hide").toggle()
            $(".add_admin").toggle(400)
        })
        $(".icon_hide").click(function(){
            $(".add_admin").hide();
            $(this).hide()
        })
        $(".save_addmin").click(function(){
            $(".add_admin").hide();
            $(".icon_hide").hide()
        })
        $(".pass_hide").hide();
        $(".click_pass").click(function(){
            $(".pass_hide").toggle();

        })
        /*修改密码*/
        $(".hide_block").click(function(){
            $(".change_password"). hide();
        })
        $(".change_password").hide();
        $(".user_name_icon").click(function(){
            $(".change_password").show();
        })
        $(".close_icon-icon_cancel").click(function(){
            $(".webSkin").hide();
        })
        $(".webSkin").hide();
        $(".icon-cogs").click(function(){

            $(".webSkin").show();
        })
        /*显示详情*/
        $(".details").click(function(){
            if($(this).is(":checked")){
                $(".details_table tr td a").removeClass("over_hide");
            }else {
                $(".details_table tr td a").addClass("over_hide");
            }
        })
        /*选中教学*/
        $(".left_subnav a").click(function(){
            $(".left_subnav a").removeClass("teacher_add_class");
            $(this).addClass("teacher_add_class")
        })
        /*操作训练记录*/
        $(".icon-icon_copy").click(function(){
            var index=$(".table_style .icon-icon_copy").index($(this))
            $(".bre_teacher02").eq(index).show().siblings(".bre_teacher02").hide()

        })
        /*表单过滤*/

        /* $j(".add_admin_input").blur(function(){
         var form_input=$j(".add_admin_input ").val();
         var pattern="[`~\\\\!@#\$j%\^&\*\(\)_\+<>\?:\"{},\.\/;'\[\\]]";
         var str=""
         for(var i=0;i<form_input.length;i++){
         str=str+$j(this).substr(i,1).replace(pattern,"");
         }
         $j(this).val(str)
         })*/
        /*    $j(".add_admin_input").blur(function(){
         var form_input=$j(this).val();
         var pattern=/^[\u4E00-\u9FA5A-Za-z0-9]+$j/;
         if(!pattern.test(form_input)){
         alert("不能输入特殊字符");
         return false;
         }else{
         alert(0)
         }
         })*/

        $(".exend_list").click(function (){
            $(".total").hide();
        })


        $(".search_buttou_more").show();
        $(".two_click ").click(function (){
            $(".new_edge").toggle()
            $(".jiediao_H").show();
            //$j("#relation").show();
            //$j(".jiediao_H2").hide()
        });


        $(".skin_choose").click(function(){
            $(this).siblings("a").removeClass("icon-checkmark").end().addClass("icon-checkmark")

        })
        /*左侧树形下拉*/

        $(".side_Bar_toggle_B ").click(function (){
            $(".side_bar_left").toggle(300);
            $(this).toggleClass("icon-triangle-right");
            $(this).toggleClass("icon-triangle-left");
        })
        $(".drpo_ul ul").hide();
        $(".drpo_ul h5 ").click(function (){
            $(this).next(".drpo_ul_01").toggle(300);
            $(".drpo_ul ul li span ul").hide();
        })

        $(".attr_F").click(function (){
            if($(this).prop('checked')==true) {
                $(this).prop('checked',true)
                $(this).parents("li").find(".attr_Check1").prop('checked',true)
                $(this).parents("li").find(".drpo_ul_02").show("300").end().siblings().find(".drpo_ul_02").hide().end();
                $(this).parents("li").siblings().find(".attr_F").prop("checked", false);
                /* $(this).children(".drpo_ul_02  li input ").attr("checked", true)*/

            }else{
                $(this).prop('checked',false);
                $(this).parents("li").find(".attr_Check1").prop('checked',false)
            }
        })
        $(" .attr_Check1").click(function (){
            if($(this).prop("checked")==false ){
                $(this).parents("li").find(".attr_F").prop("checked",false);
            }
        })
        /*禁止输入*/
        $(".coll_div  input.form-control").attr("disabled","disabled");
        /*    $(".active_T .drw  input.form-control").attr("disabled","disabled");*/
        $(".chenge_checkbox").click(function (){
            if($(this).prop("checked")==true){
                $(this).parent().next().children().removeAttr("disabled");
            }else{
                $(this).parent().next().children().attr("disabled","disabled");
            }
        })
        /*增加删除行*/
        $(function (){
            $(".add_circle").click(function addRow(){
                $(".active_T").append($(".active_T li:last").clone())
            })
            $(".icon-circle-with-minus").click(function delRow(){
                var rowCount= $(".active_T li").length;
                if(rowCount>1){
                    $(".active_T li:last").remove();
                }else{
                    alert("请至少保留一行")
                }
            })
        })
        /*轨迹下一步*/
        $(".next_page11").click(function (){
            //判断案例分析下一步是否进入；
            if($('#analysis').length){
                return true;
            }else{
                $(".coll_d011").hide();
                $(".coll_d01").show()
            }
        })
        $(".next_page1").click(function (){
            $(".coll_d01").hide();
            $(".coll_d02").show()
        })
        $(".prve_page11").click(function (){
            $(".coll_d011").show();
            $(".coll_d01").hide()
        })
        $(".prve_page1").click(function (){
            $(".coll_d01").show();
            $(".coll_d02").hide()
        })
        $(".next_page22").click(function (){
            $(".coll_d02").show();
            $(".coll_d01").hide()
        })
        $(".next_page2").click(function (){
            $(".coll_d02").hide()
            $(".coll_d03").show();
        })
        $(".prve_page2").click(function (){
            $(".coll_d02").show();
            $(".coll_d03").hide()
        })
        $(".prve_page15").click(function (){
            $(".coll_d01").show();
            $(".coll_d02").hide();

        })
        $(".toggle_Cont").hide();
        /*首页快捷菜单收缩*/
        $(".toggle_show").click(function (){
            $(".toggle_Cont").toggle(100);
            $(this).find("i").toggleClass("icon-icon_arrow-up-small");

        })
        $(".mapbar_right").hide();
        $(".side_Bar_toggle_B ").click(function (){
            $(".mapbar_right").toggle(300)
        })
        $(".condition").hide();
        $(".require_drop_l02").hide();
        $(".require_drop_l").click(function (){
            $(this).toggleClass("icon-icon_filter");
            $(".condition").toggle(300);
            $(this).hide()
            $(".require_drop_l02").show();
        })
        $(".require_drop_l02").click(function (){
            $(this).toggleClass("icon-icon_filter");
            $(".condition").toggle(300);
            $(this).hide()
            $(".require_drop_l").show();
        })
        //注释的这段js不能传递参数；
        /*  $(".all_choose").click(function (){
         if($(this).prop("checked")==true){
         $(this).parents(".condition").find(':checkbox').prop('checked',true)
         }else{
         $(this).parents(".condition").find(':checkbox').prop('checked',false)
         }
         })*/
        /*$(".material-icons").click(function (){
         if($(".condition").find(':checkbox').prop('checked')==false){
         alert("您必须选择一个条件");
         return;
         }
         })*/
        $(".tree_icon").hide();
        $(".icon-device_hub").click(function (){
            $(".tree_icon").toggle(300);
            /* $(this).toggleClass("icon-device_hub") ;*/
            $(".tree_icon a").click(function (){
                $(this).siblings().removeClass("addClass_02 addClass").end().addClass("addClass_02")
            })
        })
        $(".float_ul_meun2 li a").click(function (){
            $(this).addClass("addClass");
            $(this).parent("li").siblings().find("a").removeClass("addClass")

        })
        /*首页右侧收缩*/
        /*   $(".rev_bottom").hide();*/
        $(".side_toggle_icon").click(function (){

            $(this).parent().toggleClass("index_side_toggle");
            $(this).find("a").toggleClass("icon-triangle-right")
        })
        /*加*/
        /*     $(".filter_header").hide()
         $(".icon-icon_filter").click(function (){
         $(".filter_header").toggle()
         })*/
        $(".total_ul li").click(function (){
            $(this).siblings().removeClass("add_css").end().addClass("add_css")
        })




        /*首页侧边来显隐*/
        $('.navSide_toggle').click(function (){
            $('.addd_leftbar').toggle();
            $('.navSide_toggle').toggleClass('icon-triangle-right')
            if($('.addd_leftbar').is(":hidden")){
                $(".left_float_menu").css({'margin-left':'10px'})
                $(".header_clum span").css({'margin-left':'10px'})
                $(this).css({'left':'10px'})
                $(".wen_input").css({'left':'10px'})
                $(".por_deatil ").css({'width':'100%','margin':'0px'});
                $(".heade_T").css({'width':'100%','margin':'0px'});
            }else{
                $(".left_float_menu").css({'margin-left':'90px'})
                $(".header_clum span").css({'margin-left':'100px'})
                $(this).css({'left':'70px'})
                $(".wen_input").css({'left':'80px'});
                $(".por_deatil ").css({'width':'calc( 100% - 80px)','margin-left':'80px'});
                $(".heade_T").css({'width':'calc( 100% - 80px)','margin-left':'80px'});
            }

        })

        $('.navSide_toggle2').click(function (){
            $('.warp_content dt').toggle();
            $('.navSide_toggle2').toggleClass('icon-triangle-right')
            if($('.warp_content dt').is(":hidden")){
                $(".warp_content dl dd").css({'padding-left':'0px'})
                $(".sidebar_nav").css({'padding-left':'30px'})
                $(this).css({'left':'0px'})
                $(".sidebar_left2").css({'left':'0'});
                $(".realtion_tab").css({'width':'100%'});
                $(".heade_T").css({'width':'100%'});
            }else{
                $(".warp_content dl dd").css({'padding-left':'80px'})
                $(".sidebar_nav").css({'padding-left':'10px'})
                $(this).css({'left':'72px'})
                $(".sidebar_left2").css({'left':'80px'});
                $(".realtion_tab").css({'width':'calc( 100% - 80px)'});
                $(".heade_T").css({'width':'calc( 100% - 80px)'});
            }

        })
        /*设置*/
        $('.setup_block').hide();
        $('.setup').click(function (){
            $('.setup_block').toggle()
        })
        $(".setup_block .icon-icon_delete").click(function (){
            $('.setup_block').hide();
        })
        $(".tips_nav").click(function (){
            $(".tips_tool").toggle()
        })
        $(".tips_nav2").click(function (){
            $(".tips_tool2").toggle()
        })
        $(".tips_tool .icon-icon_delete").click(function (){
            $(".tips_tool").hide()
        })
        $(".tips_tool2 .icon-icon_delete").click(function (){
            $(".tips_tool2").hide()
        })
    })
})(jQuery);






