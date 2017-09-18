/**
 * Created by brance on 2016/7/5.
 */
    // 路径配置

require.config({
    paths: {
        echarts: 'assets/bower_components/echarts/build/dist',
        //jq:'assets/bower_components/jquery/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/pie', // 使用饼状图就加载pie模块，按需加载
        //'jq/jquery.min'
    ],
    function (ec,jQuery) {
        //var $j = jQuery.noConflict();

        // 人员现住地分布比例；
        var myChart0 = ec.init(document.getElementById('tt1'));

        var option0 = {
            title : {
               /* text: '人员现住地分布比例',*/
                subtext: '总人数：337028人',
                x:'right'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                textStyle:{color:'#fff'},
                x : 'left',
               /* data:(function(){
                    $j.get('assets/app/js/data.json',function(data){

                        var data1=[];
                        _.forEach(data.compilerOptions,function(el){

                            data1.push(el);
                        });
                        return data1;
                    });
                })()*/
                data:['苍南县','泰顺县','鹿城区','瓯海区','龙湾区','瑞安市','永嘉县','洞头县','乐清市','文成县']

            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'地区/人数/比例',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],

                   /* data:(function(){
                        $j.get('assets/app/js/data.json',function(data){

                            var data1=[];
                            _.forEach(data.compilerOptions,function(el){

                                data1.push(el);
                            });
                            return data1;
                        });
                    })()*/
                    data:[
                        {value:6740, name:'苍南县'},
                        {value:3370, name:'泰顺县'},
                        {value:74140, name:'鹿城区'},
                        {value:53920, name:'瓯海区'},
                        {value:40440, name:'龙湾区'},
                        {value:33700, name:'瑞安市'},
                        {value:33700, name:'永嘉县'},
                        {value:23590, name:'洞头县'},
                        {value:23590, name:'乐清市'},
                        {value:23590, name:'文成县'},

                    ]
                }
            ]
        };

        myChart0.setOption(option0);

       /* option0.legend.data.push('天津');
        option0.series.push({value:16850, name:'天津'});
        myChart0.setOption(option0);*/

        //人员籍贯地分布比例；
        var myChart1 = ec.init(document.getElementById('tt2'));

        var option1 = {
            title : {
               /* text: '人员籍贯地分布比例',*/
                subtext: '福建省',
                x:'right'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                textStyle:{color:'#fff'},
                x : 'left',
                data:['福州市鼓楼区','厦门市思明区','福州市仓山区','泉州市晋江县','莆田市仙游县','漳州市云霄县','漳州市龙文区']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : false,
            series : [
                {
                    name:'地区/人数/比例',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:13445, name:'福州市鼓楼区'},
                        {value:5378, name:'厦门市思明区'},
                        {value:59158, name:'福州市仓山区'},
                        {value:43024, name:'泉州市晋江县'},
                        {value:32268, name:'莆田市仙游县'},
                        {value:26890, name:'漳州市云霄县'},
                        {value:18823, name:'漳州市龙文区'}

                    ]
                }
            ]
        };

        myChart1.setOption(option1);

        //人员年龄段分布比例；
        var myChart2 = ec.init(document.getElementById('tt3'));

        var option2 = {
            title : {
                /*text: '人员年龄段分布比例',*/
                subtext: '总人数：337028人',
                x:'right'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                textStyle:{color:'#fff'},
                x : 'left',
                data:['10-20','20-30','30-40','40-50','50-60','60-70','70-80']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'年龄区间/人数/比例',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:337000*0.10, name:'10-20'},
                        {value:337000*0.20, name:'20-30'},
                        {value:337000*0.25, name:'30-40'},
                        {value:337000*0.20, name:'40-50'},
                        {value:337000*0.15, name:'50-60'},
                        {value:337000*0.10, name:'60-70'},
                        {value:337000*0.06, name:'70-80'}
                    ]
                }
            ]
        };

        myChart2.setOption(option2);

        //重点人员占比比例；
        var myChart4 = ec.init(document.getElementById('tt5'));

        var option4 = {
            title : {
               /* text: '重点人员占比比例',*/
                subtext: '总人数：337000人',
                x:'right'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                textStyle:{color:'#fff'},
                x : 'left',
                data:['重点人数','非重点人数']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'人数/比例',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:151650, name:'重点人数'},
                        {value:185350, name:'非重点人数'}

                    ]
                }
            ]
        };

        myChart4.setOption(option4);




    }
);

require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {



        //犯罪人员所属案件分布比例；
        var myChart5 = ec.init(document.getElementById('tt6'));

        var option5 = {
           /* title : {
                text: '犯罪人员所属案件分布比例',
                subtext: '全库人员总数为337028人，其中无相关犯罪记录人员2452380人，存在相关犯罪记录人员91790人'
            },*/
            tooltip : {
                trigger: 'axis'
            },
           /* legend: {
                data:['2014年','2015年']
            },*/
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    boundaryGap : [0, 0.1]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisLabel: {
                        show: true,
                        clickable:true,
                        margin:8,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    data : ['军人违反职责罪','渎职罪','贪污受贿罪','危害国防利益罪',
                        '妨害社会管理秩序罪','侵犯财产罪','侵犯公民人身民主权利罪','破坏社会主义经济秩序罪','危害公共安全罪','危害国家安全罪','犯罪类别/总人数(人)'],
                }
            ],
            series : [

              /*  {
                    name:'2014年',
                    type:'bar',
                    data:[1932, 2343, 3100, 1215, 1341,5932,2932,6932,1932,7932,35591]
                },*/
                {
                    name:'2015年',
                    type:'bar',
                    data:[7932, 6932, 1932, 5932, 2932,5932,1341,1215,3100,2343,35591]
                }
            ]
        };

        myChart5.setOption(option5);


        //人员火车/航班人员乘坐总人数；
        var myChart9 = ec.init(document.getElementById('tt8'));

        var option9 = {
            /* title : {
             text: '某地区蒸发量和降水量',
             subtext: '纯属虚构'
             },*/
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                textStyle:{color:'#fff'},
                data:['火车','航班']
            },
            /* toolbox: {
             show : true,
             feature : {
             mark : {show: true},
             dataView : {show: true, readOnly: false},
             magicType : {show: true, type: ['line', 'bar']},
             restore : {show: true},
             saveAsImage : {show: true}
             }
             },*/
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['火车','航班'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    name:'乘坐总人次（万人次）（注：总人次为历年人次之和）',
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'火车',
                    type:'bar',
                    data:[22250]

                },
                {
                    name:'航班',
                    type:'bar',
                    data:[3427]

                }
            ]
        };

        myChart9.setOption(option9);


        //人员旅馆/网吧人员出入记录总人数图；
        var myChart10 = ec.init(document.getElementById('tt10'));

        var option10 = {
           /* title : {
                text: '某地区蒸发量和降水量',
                subtext: '纯属虚构'
            },*/
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                textStyle:{color:'#fff'},
                data:['旅馆','网吧']
            },
           /* toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },*/
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['旅馆','网吧'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    name:'出入记录总人次（万人次）（注：总人次为历年人次之和）',
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'旅馆',
                    type:'bar',
                    data:[3427]

                },
                {
                    name:'网吧',
                    type:'bar',
                    data:[1500]

                }
            ]
        };

        myChart10.setOption(option10);

    }
);

require(
    [
        'echarts',
        'echarts/chart/line' // 使用折线图就加载line模块，按需加载
    ],
    function (ec) {

        //重点人员数量趋势分布图；
        var myChart3 = ec.init(document.getElementById('tt4'));

        var option3 = {
            /*title : {
                text: '重点人员数量趋势分布图',
                /!*subtext: '纯属虚构'*!/
            },*/
            tooltip : {
                trigger: 'axis'
            },
           /* legend: {
                data:['最高气温','最低气温']
            },*/
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                    ,

                    data : ['2007','2008','2009','2010','2011','2012','2013','2014','2015']
                }
            ],
            yAxis : [
                {
                    type : 'value',

                    axisLabel : {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        },

                        formatter: '{value} 人'
                    }
                }
            ],
            series : [
                {
                    name:'重点人员数',
                    type:'line',
                    data:[213, 387, 250, 769, 404, 320, 110,234,565],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
               /* {
                    name:'最低气温',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    markPoint : {
                        data : [
                            {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }*/
            ]
        };

        myChart3.setOption(option3);



        //犯罪人员所属案件趋势分布图；
         var myChart6 = ec.init(document.getElementById('tt7'));

         var option6 = {
            /* title : {
                 text: '犯罪人员所属案件趋势分布图',
                 /!*subtext: '纯属虚构'*!/
             },*/
             tooltip : {
                 trigger: 'axis'
             },
             legend: {
                 orient:'horizontal',
                 x:'left',

                 data:['危害国家安全罪','危害公共安全罪','破坏社会主义经济秩序罪','侵犯公民人身民主权利罪','侵犯财产罪',
                 '妨害社会管理秩序罪','危害国防利益罪','贪污受贿罪','渎职罪','军人违反职责罪'],
                 textStyle:{color:'#fff'}
             },

             toolbox: {
                 show : false,
                 feature : {
                     mark : {show: true},
                     dataView : {show: true, readOnly: false},
                     magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                     restore : {show: true},
                     saveAsImage : {show: true}
                 }
             },
             calculable : true,
             xAxis : [
                 {
                     type : 'category',
                     boundaryGap : false,
                     axisLabel: {
                         show: true,
                         textStyle: {
                             color: '#fff'
                         }
                     }
                     ,
                     data : ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015']
                 }
             ],
             yAxis : [
                 {
                     axisLabel: {
                         show: true,
                         textStyle: {
                             color: '#fff'
                         }
                     }
                     ,
                     type : 'value'
                 }
             ],
             series : [
                 {
                     name:'危害国家安全罪',
                     type:'line',
                     stack: '总量',
                     data:[1120, 732, 801, 134, 900, 630, 510,420, 632, 301, 134]
                 },
                 {
                     name:'危害公共安全罪',
                     type:'line',
                     stack: '总量',
                     data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234]
                 },
                 {
                     name:'破坏社会主义经济秩序罪',
                     type:'line',
                     stack: '总量',
                     data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154]
                 },
                 {
                     name:'侵犯公民人身民主权利罪',
                     type:'line',
                     stack: '总量',
                     data:[320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334]
                 },
                 {
                     name:'侵犯财产罪',
                     type:'line',
                     stack: '总量',
                     data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934]
                 },
                 {
                     name:'妨害社会管理秩序罪',
                     type:'line',
                     stack: '总量',
                     data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934]
                 },
                 {
                     name:'危害国防利益罪',
                     type:'line',
                     stack: '总量',
                     data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934]
                 },
                 {
                     name:'贪污受贿罪',
                     type:'line',
                     stack: '总量',
                     data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934]
                 },
                 {
                     name:'渎职罪',
                     type:'line',
                     stack: '总量',
                     data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934]
                 },
                 {
                     name:'军人违反职责罪',
                     type:'line',
                     stack: '总量',
                     data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934]
                 }
             ]
         };
       /* data : ['军人违反职责罪','渎职罪','贪污受贿罪','危害国防利益罪',
            '妨害社会管理秩序罪','侵犯财产罪','侵犯公民人身民主权利罪','破坏社会主义经济秩序罪','危害公共安全罪','危害国家安全罪','犯罪类别/人数(人)']
    }*/
         myChart6.setOption(option6);


        //人员火车/航班总人次分布图；
        var myChart7 = ec.init(document.getElementById('tt9'));

        var option7 = {
           /* title : {
                text: '未来一周气温变化',
               /!* subtext: '纯属虚构'*!/
            },*/
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['火车','航班'],
                textStyle:{color:'#fff'}
            },
           /* toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },*/
            calculable : true,
            xAxis : [
                {
                    name : '年份',
                    type : 'category',
                    boundaryGap : false,
                    data : ['2008','2009','2010','2011','2012','2013','2014','2015'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    name : '人数(万人次)',
                    type : 'value',
                    position:'right',
                    axisLabel : {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        },
                        formatter: '{value} '
                    }
                }
            ],
            series : [
                {
                    name:'火车',
                    type:'line',
                    data:[2000, 1400, 1750, 750, 2150, 1300, 1600,1300],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'航班',
                    type:'line',
                    data:[1500, 1750, 1400, 2250, 1400, 2550, 2350,2590],
                    markPoint : {
                        data : [
                            /*{name : '周最低', value : -2, xAxis: 1, yAxis: -1.5},*/
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]

                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        myChart7.setOption(option7);

        //人员旅馆/网吧总人次分布图；
        var myChart8 = ec.init(document.getElementById('tt11'));

        var option8 = {
            /* title : {
             text: '未来一周气温变化',
             /!* subtext: '纯属虚构'*!/
             },*/
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['旅馆','网吧'],
                textStyle:{color:'#333'}

            },
            /* toolbox: {
             show : true,
             feature : {
             mark : {show: true},
             dataView : {show: true, readOnly: false},
             magicType : {show: true, type: ['line', 'bar']},
             restore : {show: true},
             saveAsImage : {show: true}
             }
             },*/
            calculable : true,
            xAxis : [
                {
                    name : '年份',
                    type : 'category',
                    boundaryGap : false,
                    data : ['2008','2009','2010','2011','2012','2013','2014','2015'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    name : '人数(万人次)',
                    type : 'value',
                    position:'right',
                    axisLabel : {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        },
                        formatter: '{value} '
                    }
                }
            ],
            series : [
                {
                    name:'旅馆',
                    type:'line',
                    data:[2000, 1400, 1750, 750, 2150, 1300, 1600,1300],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'网吧',
                    type:'line',
                    data:[1500, 1750, 1400, 2250, 1400, 2550, 2350,2590],
                    markPoint : {
                        data : [
                            /*{name : '周最低', value : -2, xAxis: 1, yAxis: -1.5},*/
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]

                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        myChart8.setOption(option8);
    }
);