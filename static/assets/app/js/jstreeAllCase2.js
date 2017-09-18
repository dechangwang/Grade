/**
 * Created by mingmingGou on 2016/7/21.
 */
$(document).ready(
    function(){
        /*下面是测试*/
        $('#jstreeAllCase').jstree({
            'core' : {
                "multiple" : false,//单选状态
                "check_callback" : true,
                'data' : [
                    { "id":1,"text" : "抢劫案","state" : { "disabled" : true }, "children" : [
                        { "id":2,"text" : "入室盗窃","state" : { "disabled" : true },"children":true ,"children" : [
                            {"id":3, "text" : "贵州省毕节市人员" },
                            {"id":4, "text" : "江苏省南京市人员" },
                            {"id":5, "text" : "云南省丽江市人员" },
                            {"id":6, "text" : "福建省漳州市人员" }
                        ]}
                    ]
                    }, { "id":7,"text" : "抢夺案","state" : { "disabled" : true }, "children" : [
                        {"id":8, "text" : "入室盗窃","state" : { "disabled" : true },"children":true ,"children" : [
                            { "id":9,"text" : "贵州省毕节市人员" },
                            { "id":10,"text" : "江苏省南京市人员" },
                            { "id":11,"text" : "云南省丽江市人员" },
                            { "id":12,"text" : "福建省漳州市人员" }
                        ]}
                    ]
                    },{ "id":13,"text" : "盗窃案","state" : { "disabled" : true }, "children" : [
                        { "id":14,"text" : "入室盗窃","state" : { "disabled" : true },"children":true ,"children" : [
                            {"id":15, "text" : "贵州省毕节市人员" },
                            {"id":16, "text" : "江苏省南京市人员" },
                            {"id":17, "text" : "云南省丽江市人员" },
                            {"id":18, "text" : "福建省漳州市人员" }
                        ]}
                    ]
                    },{ "id":19,"text" : "诈骗案", "state" : { "disabled" : true },"children" : [
                        {"id":20, "text" : "入室盗窃","state" : { "disabled" : true },"children":true ,"children" : [
                            {"id":21, "text" : "贵州省毕节市人员" },
                            { "id":22,"text" : "江苏省南京市人员" },
                            { "id":23,"text" : "云南省丽江市人员" },
                            { "id":24,"text" : "福建省漳州市人员" }
                        ]}
                    ]
                    }
                ]
            },
            "plugins" : ["checkbox","contextmenu","state","themes",'ui']
            /*state就是激活状态打开一个状态在页面刷新的时候不会改变*/
        }).bind("activate_node.jstree",'click.jstree', function (obj, e) {
            // 处理代码
            // 获取当前节点
            var $subject = $(e.target).parent();//点击事件是触发的对象
            console.log($subject);
            console.log(e);
            var currentNode = e.node.id;
            console.log(currentNode);
            if($subject.find('ul').length > 0){
                //todo
            }else{
                var idd=$(e.target).parents('li').attr('id');
                if(currentNode.id==idd){
                    /* $("#screen").click(function(e){*/
                    //添加阻止事件冒泡
                    $('#uploadImg > input').on('change',function(){
                        /*在这里我需要判断是不是导入的文档为txt格式*/
                        var regex = /\.txt$/gi;
                        var reader = new FileReader();
                        reader.readAsText(this.files[0], 'utf-8');
                        if(regex.test(this.files[0].name)){
                            arr_name.push(this.files[0].name.split('.txt')[0]);
                            var _name=sessionStorage.setItem('name',arr_name.toString());
                            reader.onload = function(e){
                                /*console.log(this.result);*/
                                var res=this.result;
                                var le= $.trim(res).toString().split("\n");
                                /*console.log(le)*/
                                arr1.push(le)//添加的数组
                                console.log(arr1)
                                e.stopPropagation()? e.stopPropagation(): e.cancelBubble=true;
                                $("#pichi li").css("display",'block');
                                $("#pichi")[0].innerHTML = '';
                                var _arrName = sessionStorage.getItem('name').split(',');
                                console.log(_arrName);
                                /*for(var k=0;k<arr1.length;k++){
                                    var  _zong=0;
                                    var  _z=_zong+arr1[k].length;
                                    console.log(_z)
                                    $("#myModa3").text(_zong)
                                }*/
                                /*下面是循环创建的标签批次*/
                                for(var i = 0;i < _arrName.length;i++){
                                    var _li = $("<li>").css({"display":"block"});
                                    var _div = $("<div>").addClass("checkbox").appendTo(_li);
                                    _div.append($("<input type='checkbox'/>").addClass("che"));
                                    var _a = $("<a>").addClass("b_first1").attr("contenteditable","true").text("第" + _arrName[i] + "批");
                                    _div.append(_a);
                                    _li.append($("<a>").addClass("a_first").text(arr1[i].length));
                                    $("#pichi").append(_li);
                                }
                                /*基础库对应的总人数*/
                               /* var _res1 = [];//保存选中元素的数组
                                var _comLength1 = 0;//保存重复的个数
                                var _length1 = 0;//保存所有选中元素的数组长度

                                    $("#pichi li").each(function(index,dom){
                                        _arr.push(index)
                                        if(_arr.length>0){
                                            /!*for(var c; c<arr1.length;c++){*!/
                                                _length1 = _length + arr1[index].length;
                                                _res1.push(arr1[index]);
                                            /!*}*!/
                                        }
                                    });
                                for(var x1 = 0;x1 < _res1[0].length; x1++){
                                    var _boolCom = true;
                                    for(var y1 = 1;y1 < _res1.length; y++){
                                        if(_res1[y1].indexOf(_res1[0][x1]) < 0){
                                            _boolCom = false;
                                        }
                                    }
                                    if(_boolCom){
                                        _comLength1++;
                                    }
                                }
                                var _cha=_length1 - _comLength1;
                                console.log(_cha+"我是添加批次的时候计算的人数")//打印点击添加批次的时候计算的人输*/


                                var ca=sessionStorage.getItem("b_b");
                                console.log(ca+"我是对应的人数");
                                $("#myModa3").text(ca);
                                var arr = [];//保存批次添加的个数
                               /* var _arr=[];//保存批次再导入时计算人数*/
                                var arr4=[];
                                /*var arr5=[];
                                 arr5.push("40%","20%","30%");*/
                                $("#pichi li .che").on('click', function () {
                                    //var _arrName = sessionStorage.getItem('name').split(',');
                                    //console.log($("#pichi .che").attr("checked", "true"))

                                    $("#pichi li .che").each(function(index,dom){
                                        /*console.log(index);*/
                                        //自己创建标签 下面的进度条显示
                                        var _l1=$("<li>").addClass("l1");
                                        var _i=$("<i>").addClass('fl_l');
                                        var _div1=$("<div>").addClass("progress fl_r width_90");
                                        var _div2=$("<div>").addClass("progress-bar").attr({role:"progressbar"});
                                        _div1.append(_div2);
                                        _l1.append(_i);
                                        _l1.append(_div1);
                                        $("#pichi1").append(_l1);
                                        if(dom.checked == true){
                                            arr.push(index);
                                            var _domName = _arrName[index];
                                            console.log(_domName+"日日年年")
                                            /*console.log(index);*/
                                            //这是下面进度条对应的显示
                                            var _quZ=sessionStorage.getItem('b_b');
                                            var c_f=sessionStorage.getItem("a_a");
                                            console.log((c_f/_quZ).toFixed(2)+"我是明明啊")
                                            console.log(_quZ+"我是123")
                                            $("#pichi1 li").eq(index).css("display",'block');
                                            $("#pichi1 li").eq(index).find(".fl_l").text(_domName + "批次");
                                            $("#pichi1 li .progress-bar").eq(index).text(arr1[index].length + "人");
                                            $("#pichi1 li .progress-bar").eq(index).css({'width':(((arr1[index].length/_quZ).toFixed(2)*100)+"%")});
                                            // 打印进度条的百分比console.log(((arr1[index].length/_quZ)*100)+"%")
                                            $("#pichi1 li .fl_l").eq(index).text(arr4[index]);
                                            $("#quChong").css({'width':(100+"%")});
                                            $("#Chongf").css({'width':(((c_f/_quZ).toFixed(2)*100)+"%")});
                                            //下面点击进度条确定在哪一个批次进行条件筛选
                                            //todo
                                            $(".l1 .progress-bar").each(function(a,b){
                                                $(this).on('click',function(e){
                                                    e=event||window.e
                                                    e.stopPropagation? e.stopPropagation: e.cancelBubble=true;
                                                    $(this).css({'border':'1px solid red'});
                                                    $('#pi_other').text(_domName[a]+"不同条件筛选")
                                                    console.log(_domName[a]+"一个明明")
                                                });
                                                console.log($(this)+"我是this明明");

                                            });
                                            //进度条的颜色设置
                                            $("#pichi1 li .progress-bar").eq(index).css({'backgroundColor':"rgb("+ Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+")"});
                                        }else {
                                            $("#pichi1 li").eq(index).css("display",'none');
                                        }
                                    });
                                    //交并集去重的显示
                                    if(arr.length > 1){
                                        var _res = [];//保存选中元素的数组
                                        var _comLength = 0;//保存重复的个数
                                        var _length = 0;//保存所有选中元素的数组长度
                                        $("#pichi .che").each(function(index,dom){
                                            console.log(index,typeof $(dom).prop("checked"));//判断input的选中状态
                                            if($(dom).prop("checked")){
                                                _length = _length + arr1[index].length;
                                                _res.push(arr1[index]);
                                               /* console.log(_res[0]+'我是明明')*/
                                                /*for(var i =0;i< arr1[index].length;i++){
                                                 console.log(arr1[index][i]);//循环数组里面的数组并显示数组的内容
                                                 if(_res.indexOf(arr1[index][i].toString()) < 0){
                                                 _res.push(arr1[index][i]);
                                                 }
                                                 }*/
                                            }
                                        });
                                        for(var x = 0;x < _res[0].length; x++){
                                            var _boolCom = true;
                                            for(var y = 1;y < _res.length; y++){
                                                if(_res[y].indexOf(_res[0][x]) < 0){
                                                    _boolCom = false;
                                                }
                                            }
                                            if(_boolCom){
                                                _comLength++;
                                            }
                                        }
                                        console.log(_comLength);//重复的长度
                                        $('#pichi2').fadeIn();
                                        var _cF=sessionStorage.setItem("a_a",_comLength.toString());
                                        var cha=_length - _comLength;
                                        var _quC=sessionStorage.setItem("b_b",cha.toString());
                                        console.log(cha); //去重的长度
                                        $("#quChong").text(cha);
                                        $("#Chongf").text(_comLength);
                                        console.log(_comLength,_length);
                                        /*var _res = aaa(arr);
                                         console.log(_res);*/
                                    }
                                })
                            };
                        }else{
                            alert("请导入格式为txt的格式")
                        }

                        /*console.log(this.files[0].name);
                        var name_1=this.files[0].name.split('.txt')[0];
                        arr2.push(name_1);
                        console.log(arr2);
                        这些是获取导入文档的具体的内容名字之类的
                        */

                    });

                    /*})*/
                }else{
                    alert('请勾选批次在进行添加');
                }
            }
        });
        /*导入文件上传数组定义为全局数组*/
        var arr1=[];//保存所有数据

        /*var arr2=[];*/
        var arr_name = [];//该数组用于保存导入文档的名称，用于展示

        //下面是档节点改变的时候出发的事件修改三级目录时的操作
        $('#jstreeAllCase').on("changed.jstree", function (e, data) {
            console.log(data.selected);
            console.log(data)
            // console.log(data.instance.get_selected(true)[0].text);
            //  console.log(data.instance.get_node(data.selected[0]).text);
            if(data.instance.get_node(data.selected[0]).text){}
        });
        /*//点击设置增加三级目录
        $('.submit_setup').click(function(){
            var form = document.getElementById("form_menu");
            // 用表单来初始化
            var formData = new FormData(form);
            $.ajax({
                url: 'http://localhost:8080/cfJAX_RS/rest/file/upload' ,
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (returndata) {
                    alert(returndata);
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
            // 我们可以根据name来访问表单中的字段
            /!*var name = formData.get("name"); // 获取名字
             // 当然也可以在此基础上，添加其他数据
             formData.append("token","kshdfiwi3rh");*!/
        });*/
        /* $('#jstreeOne').jstree({
         'core' : {
         'data' : {
         "url" : "//www.jstree.com/fiddle/?lazy",//todo url的数据格式就是上面的那种到时候只要按照输的格式直接加载就行
         "data" : function (node) {
         return { "id" : node.id };
         }
         }
         },
         "plugins" : ["checkbox"]
         });*/

        /*    var xmlHttpReq;
         if (window.ActiveXObject) {
         xmlHttpReq = new ActiveXObject('Microsoft.XMLHTTP');
         } else if (window.XMLHttpRequest) {
         xmlHttpReq = new XMLHttpRequest();
         }
         if (xmlHttpReq) {
         var url = '/case/casesType';
         xmlHttpReq.open('get', url, true);
         }
         xmlHttpReq.send(null);
         xmlHttpReq.onreadystatechange = function() {
         if (xmlHttpReq.readyState == 4) {
         if (xmlHttpReq.status == 200) {
         var data = JSON.parse(xmlHttpReq.responseText);
         var message = JSON.parse(data.message);
         window.treeData = message;
         //var message2 = [];
         //var message1 = [];
         /!* for(var i = 0;i<message.length;i++){
         //message[i].id = message[i].id.trim();
         message[i].parent = message[i].parentId.trim();
         //message[i].text = '犯罪';
         //message2.push(message[i].id.trim());
         //message1.push(message[i].parent.trim());
         }*!/
         /!* var errordata = [];
         for(var k = 0;k<message1.length;k++){
         if(message2.indexOf(message1[k]) == -1){
         errordata.push(message1[k]);
         }
         }
         for(var m = 0;m<message.length;m++){
         for(var n = 0;n<errordata.length;n++){
         if(message[m].parent != '#' && message[m].parent == errordata[n]){
         message[m].parent = '#';
         break;
         }
         }
         }
         console.log(errordata);*!/
         // message = message.slice(0,10);
         $('#jstreeAllCase').jstree({
         'core' : {
         'data':message
         /!* 'data' : {
         "url" : "assets/javascripts/jstree.json",
         "dataType" : "json" // needed only if you do not supply JSON headers
         },*!/
         //"check_callback" : true
         },
         //"plugins" : ["checkbox","dnd"]
         "plugins" : ["checkbox","types"],
         "types": {
         "default" : {
         "icon" : false  // 关闭默认图标
         }
         }
         });
         }
         }
         };


         $('#jstreeAllCase').on("changed.jstree", function (e, data) {
         //console.log("The selected nodes are:");
         // console.log(data.selected);

         //var selectedNodes = data.instance.get_selected(true);
         var selectedNode = {id:data.node.id,text:data.node.text,state:data.node.state.selected};
         //console.log(data.instance.get_selected(true)[0].text);
         //console.log(data.instance.get_node(data.selected[0]).text);

         var evt = new CustomEvent('selectedConditionchanged', { detail: selectedNode });

         window.dispatchEvent(evt);
         });

         */


    }
);
/*比较函数去重计算点击批次是的人数变化*/
function aaa(arr){
    /*在这里判断条件去重*/
    var res = [];
    var _length = 0;
    $("#pichi .che").each(function(index,dom){
        if($(dom).attr("checked") == "true"){
            _length = _length + arr[index].length;
            for(var i =0;i< arr[index].length;i++){
                console.log(arr[index],index,dom);
                if(!res.indexOf(arr[index][i])){
                    res.push(arr[index][i]);
                }
            }
        }
    });
    return {
        num1: res.length,
        num2: _length - res.length
    };
}
/*计算基础库的总人数的函数*/
/*
function bbb(_arr){
    var res1 = [];
    var _length1 = 0;
    $("#pichi li").each(function(index,dom){

        _length1 = _length1 + _arr[index].length;
            for(var i =0;i< _arr[index].length;i++){
                console.log(_arr[index],index,dom);
                if(!res1.indexOf(_arr[index][i])){
                    res1.push(_arr[index][i]);
                }
            }

    });
    return {
        num_1: res1.length,
        num_2: _length1 - res1.length
    };
}*/
///todo  在点击导入批次的时候获取每一个批次的数量个数，导入多个批次的时候得到他们去重统计数的和并展示展示。
        //todo 点击勾选批次的时候对应的进度天显示出来（已完成），当点击显示对应进度条的时筛查添加重点库上面对应相同的批次（有bug，批次对应不上）