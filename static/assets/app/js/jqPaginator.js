(function (jQuery) {
    'use strict';

    jQuery.jqPaginator = function (el, options) {
        if(!(this instanceof jQuery.jqPaginator)){
            return new jQuery.jqPaginator(el, options);
        }

        var self = this;

        self.jQuerycontainer = jQuery(el);

        self.jQuerycontainer.data('jqPaginator', self);

        self.init = function () {

            if (options.first || options.prev || options.next || options.last || options.page) {
                options = jQuery.extend({}, {
                    first: '',
                    prev: '',
                    next: '',
                    last: '',
                    page: ''
                }, options);
            }

            self.options = jQuery.extend({}, jQuery.jqPaginator.defaultOptions, options);

            self.verify();

            self.extendJquery();

            self.render();

            self.fireEvent(this.options.currentPage, 'init');
        };

        self.verify = function () {
            var opts = self.options;

            if (!self.isNumber(opts.totalPages)) {
                throw new Error('[jqPaginator] type error: totalPages');
            }

            if (!self.isNumber(opts.totalCounts)) {
                throw new Error('[jqPaginator] type error: totalCounts');
            }

            if (!self.isNumber(opts.pageSize)) {
                throw new Error('[jqPaginator] type error: pageSize');
            }

            if (!self.isNumber(opts.currentPage)) {
                throw new Error('[jqPaginator] type error: currentPage');
            }

            if (!self.isNumber(opts.visiblePages)) {
                throw new Error('[jqPaginator] type error: visiblePages');
            }

            if (!opts.totalPages && !opts.totalCounts) {
                throw new Error('[jqPaginator] totalCounts or totalPages is required');
            }

            if (!opts.totalPages && !opts.totalCounts) {
                throw new Error('[jqPaginator] totalCounts or totalPages is required');
            }

            if (!opts.totalPages && opts.totalCounts && !opts.pageSize) {
                throw new Error('[jqPaginator] pageSize is required');
            }

            if (opts.totalCounts && opts.pageSize) {
                opts.totalPages = Math.ceil(opts.totalCounts / opts.pageSize);
            }

            if (opts.currentPage < 1 || opts.currentPage > opts.totalPages) {
                throw new Error('[jqPaginator] currentPage is incorrect');
            }

            if (opts.totalPages < 1) {
                throw new Error('[jqPaginator] totalPages cannot be less currentPage');
            }
        };

        self.extendJquery = function () {
            jQuery.fn.jqPaginatorHTML = function (s) {
                return s ? this.before(s).remove() : jQuery('<p>').append(this.eq(0).clone()).html();
            };
        };

        self.render = function () {
            self.renderHtml();
            self.setStatus();
            self.bindEvents();
        };

        self.renderHtml = function () {
            var html = [];

            var pages = self.getPages();
            for (var i = 0, j = pages.length; i < j; i++) {
                html.push(self.buildItem('page', pages[i]));
            }

            self.isEnable('prev') && html.unshift(self.buildItem('prev', self.options.currentPage - 1));
            self.isEnable('first') && html.unshift(self.buildItem('first', 1));
            self.isEnable('statistics') && html.unshift(self.buildItem('statistics'));
            self.isEnable('next') && html.push(self.buildItem('next', self.options.currentPage + 1));
            self.isEnable('last') && html.push(self.buildItem('last', self.options.totalPages));

            if (self.options.wrapper) {
                self.jQuerycontainer.html(jQuery(self.options.wrapper).html(html.join('')).jqPaginatorHTML());
            } else {
                self.jQuerycontainer.html(html.join(''));
            }
        };

        self.buildItem = function (type, pageData) {
            var html = self.options[type]
                .replace(/{{page}}/g, pageData)
                .replace(/{{totalPages}}/g, self.options.totalPages)
                .replace(/{{totalCounts}}/g, self.options.totalCounts);

            return jQuery(html).attr({
                'jp-role': type,
                'jp-data': pageData
            }).jqPaginatorHTML();
        };

        self.setStatus = function () {
            var options = self.options;

            if (!self.isEnable('first') || options.currentPage === 1) {
                jQuery('[jp-role=first]', self.jQuerycontainer).addClass(options.disableClass);
            }
            if (!self.isEnable('prev') || options.currentPage === 1) {
                jQuery('[jp-role=prev]', self.jQuerycontainer).addClass(options.disableClass);
            }
            if (!self.isEnable('next') || options.currentPage >= options.totalPages) {
                jQuery('[jp-role=next]', self.jQuerycontainer).addClass(options.disableClass);
            }
            if (!self.isEnable('last') || options.currentPage >= options.totalPages) {
                jQuery('[jp-role=last]', self.jQuerycontainer).addClass(options.disableClass);
            }

            jQuery('[jp-role=page]', self.jQuerycontainer).removeClass(options.activeClass);
            jQuery('[jp-role=page][jp-data=' + options.currentPage + ']', self.jQuerycontainer).addClass(options.activeClass);
        };

        self.getPages = function () {
            var pages = [],
                visiblePages = self.options.visiblePages,
                currentPage = self.options.currentPage,
                totalPages = self.options.totalPages;

            if (visiblePages > totalPages) {
                visiblePages = totalPages;
            }

            var half = Math.floor(visiblePages / 2);
            var start = currentPage - half + 1 - visiblePages % 2;
            var end = currentPage + half;

            if (start < 1) {
                start = 1;
                end = visiblePages;
            }
            if (end > totalPages) {
                end = totalPages;
                start = 1 + totalPages - visiblePages;
            }

            var itPage = start;
            while (itPage <= end) {
                pages.push(itPage);
                itPage++;
            }

            return pages;
        };

        self.isNumber = function (value) {
            var type = typeof value;
            return type === 'number' || type === 'undefined';
        };

        self.isEnable = function (type) {
            return self.options[type] && typeof self.options[type] === 'string';
        };

        self.switchPage = function (pageIndex) {
            window.pageIndex = pageIndex;
            /*var evt = new CustomEvent('pageIndexChanged2', { detail: pageIndex });

            window.dispatchEvent(evt);
*/

            self.options.currentPage = pageIndex;

            self.render();
        };

        self.fireEvent = function (pageIndex, type) {
            return (typeof self.options.onPageChange !== 'function') || (self.options.onPageChange(pageIndex, type) !== false);
        };

        self.callMethod = function (method, options) {
            switch (method) {
                case 'option':
                    self.options = jQuery.extend({}, self.options, options);
                    self.verify();
                    self.render();
                    break;
                case 'destroy':
                    self.jQuerycontainer.empty();
                    self.jQuerycontainer.removeData('jqPaginator');
                    break;
                default :
                    throw new Error('[jqPaginator] method "' + method + '" does not exist');
            }

            return self.jQuerycontainer;
        };

        self.bindEvents = function () {
            var opts = self.options;

            self.jQuerycontainer.off();
            self.jQuerycontainer.on('click', '[jp-role]', function () {
                var jQueryel = jQuery(this);
                if (jQueryel.hasClass(opts.disableClass) || jQueryel.hasClass(opts.activeClass)) {
                    return;
                }

                var pageIndex = +jQueryel.attr('jp-data');
                if (self.fireEvent(pageIndex, 'change')) {
                    self.switchPage(pageIndex);
                }
            });
        };

        self.init();

        return self.jQuerycontainer;
    };

    jQuery.jqPaginator.defaultOptions = {
        wrapper: '',
        first: '<li class="first"><a href="javascript:;">First</a></li>',
        prev: '<li class="prev"><a href="javascript:;">Previous</a></li>',
        next: '<li class="next"><a href="javascript:;">Next</a></li>',
        last: '<li class="last"><a href="javascript:;">Last</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        totalPages: 0,
        totalCounts: 0,
        pageSize: 0,
        currentPage: 1,
        visiblePages: 7,
        disableClass: 'disabled',
        activeClass: 'active',
        onPageChange: null
    };

    jQuery.fn.jqPaginator = function () {
        var self = this,
            args = Array.prototype.slice.call(arguments);

        if (typeof args[0] === 'string') {
            var jQueryinstance = jQuery(self).data('jqPaginator');
            if (!jQueryinstance) {
                throw new Error('[jqPaginator] the element is not instantiated');
            } else {
                return jQueryinstance.callMethod(args[0], args[1]);
            }
        } else {
            return new jQuery.jqPaginator(this, args[0]);
        }
    };


})(jQuery);


window.totalPages = 1;
window.addEventListener('casePaginatorChanged', function (e) {

        window.totalPages = e.detail;
        jQuery("#demo3").jqPaginator({
            totalPages: Math.ceil(window.totalPages/10),
            visiblePages: 7,
            currentPage: 1,
            first: '<li class="first"><a href="javascript:void(0);">第一页<\/a><\/li>',
            prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
            next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
            last: '<li class="last"><a href="javascript:void(0);">最后一页<\/a><\/li>',
            page: '<li class="page"><a href="javascript:void(0);" onclick="window.firePaginator1({{page}});">{{page}}<\/a><\/li>',
        });

   // }
});
jQuery("#demo3").jqPaginator({
    totalPages: Math.ceil(window.totalPages/10),
    visiblePages: 7,
    currentPage: 1,
    first: '<li class="first"><a href="javascript:void(0);">第一页<\/a><\/li>',
    prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
    next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
    last: '<li class="last"><a href="javascript:void(0);">最后一页<\/a><\/li>',
    page: '<li class="page"><a href="javascript:void(0);" onclick="window.firePaginator1({{page}});">{{page}}<\/a><\/li>'

});

window.addEventListener('personListPaginatorChanged',function(e){

    var pages = e.detail;
    jQuery("#demo4").jqPaginator({
        totalPages: Math.ceil(pages/10),
        visiblePages: 7,
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">第一页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">最后一页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);" onclick="window.firePaginator({{page}});">{{page}}<\/a><\/li>'

    });
})
jQuery("#demo4").jqPaginator({
    totalPages: Math.ceil(window.totalPages/10),
    visiblePages: 7,
    currentPage: 1,
    first: '<li class="first"><a href="javascript:void(0);">第一页<\/a><\/li>',
    prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
    next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
    last: '<li class="last"><a href="javascript:void(0);">最后一页<\/a><\/li>',
    page: '<li class="page"><a href="javascript:void(0);" onclick="window.firePaginator({{page}});">{{page}}<\/a><\/li>'

});
