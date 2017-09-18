/**
 * Created by brance on 2016/7/21.
 */

$(document).ready(
    function(){
     /*   $('#container').jstree({
            "plugins" : ["checkbox"]
        });*/
        $('#jstree').jstree({
            'core' : {
                'data' : [
                    { "text" : "Root node",
                        "state" : {"opened" : true },
                        "children" : [
                        { "text" : "Child node 1",
                            "state" : { "selected" : true }
                        },
                        { "text" : "Child node 2" ,
                            "state" : { "disabled" : true }
                        }
                    ]
                    }
                ]
            },
            "plugins" : ["checkbox","types"]
        });

        var xmlHttpReq;
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
                   /* for(var i = 0;i<message.length;i++){
                        //message[i].id = message[i].id.trim();
                        message[i].parent = message[i].parentId.trim();
                        //message[i].text = '犯罪';
                        //message2.push(message[i].id.trim());
                        //message1.push(message[i].parent.trim());
                    }*/
                   /* var errordata = [];
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
                    console.log(errordata);*/
                   // message = message.slice(0,10);
                    $('#jstreeAllCase').jstree({
                        'core' : {
                            'data':message
                           /* 'data' : {
                                "url" : "assets/javascripts/jstree.json",
                                "dataType" : "json" // needed only if you do not supply JSON headers
                            },*/
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

       /* $('#jstreeAllCase').jstree({
            'core' : {
                 'data' : {
                 "url" : "jstree.json",
                 "dataType" : "json" // needed only if you do not supply JSON headers
                 },
                //"check_callback" : true
            },
            //"plugins" : ["checkbox","dnd"]
            "plugins" : ["checkbox","types"],
            "types": {
                "default" : {
                    "icon" : false  // 关闭默认图标
                }
            }
        });*/

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




    }
);
