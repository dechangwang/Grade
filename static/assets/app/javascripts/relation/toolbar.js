
    $(function() {
        $.ajax({
            type: "get",
            url: "assets/app/configs/relation/objectLabels.json",
            async: true,
            success: function (labelItems) {
                var generalItems = [];
                for (var i = 0; i < labelItems.length; i++) {
                    var item={};
                    //color
                    item['type'] = 'text-color';
                    item['id'] = labelItems[i].label + 'text-color';
                    item['text'] =labelItems[i].label;
                    item['transparent'] = false;
                    generalItems.push(item);
                    //menu
                    item={};
                    item['type'] = 'menu-radio';
                    item['id'] = labelItems[i].label + 'menu-radio';
                    item['selected'] = item['id']+'item1';
                    /*item['text']= function (item) {
                        var text = item.selected;
                        var el   = this.get('item2:' + item.selected);
                        return '  ' + el.text;
                    };*/
                    var itm=[
                        { id: item['id']+'item1', text: '不选'},
                        { id: item['id']+'item1', text: '选中'},
                        { id: item['id']+'item1', text: '反选'}
                    ];
                    item['items'] =itm;
                    generalItems.push(item);
                }
                $('#tbLabels').w2toolbar({
                    name: 'tbLabels',
                    items:generalItems
                });
            },
            error: function(e){
                alert("error");
            }

        });
        $.ajax({
            type: "get",
            url: "assets/app/configs/relation/objectRelations.json",
            async: true,
            success: function (relationlItems) {
                //items=JSON.parse(relationlItems);
                $('#tbRelations').w2toolbar({
                    name: 'tbRelations',
                    items: relationlItems
                });
            },
            error: function(e){
                alert("error");
            }
        });
    });
