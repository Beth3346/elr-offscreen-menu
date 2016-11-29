'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var $ = require('jquery');

var elrOffscreenMenu = function elrOffscreenMenu() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$menuClass = _ref.menuClass,
        menuClass = _ref$menuClass === undefined ? 'elr-offscreen-menu' : _ref$menuClass,
        _ref$buttonClass = _ref.buttonClass,
        buttonClass = _ref$buttonClass === undefined ? 'elr-menu-button' : _ref$buttonClass,
        _ref$contentClass = _ref.contentClass,
        contentClass = _ref$contentClass === undefined ? 'elr-offscreen-content' : _ref$contentClass,
        _ref$state = _ref.state,
        state = _ref$state === undefined ? 'hide' : _ref$state;

    var $menu = $('.' + menuClass);
    var self = {
        toggleMenu: function toggleMenu(menuWidth, $menu, $holder) {
            var menuPos = $menu.css('left');

            if (menuPos === '0px') {
                this.hideMenu(menuWidth, $menu);
            } else {
                this.showMenu($menu, $holder);
            }
        },
        showMenu: function showMenu($menu, $holder) {
            $menu.animate({ 'left': '0' });
        },
        hideMenu: function hideMenu(menuWidth, $menu) {
            $menu.animate({
                'left': '-' + menuWidth
            });
        }
    };

    if ($menu.length) {
        (function () {
            var $content = $('.' + contentClass);
            var $button = $('.' + buttonClass);
            var menuWidth = $menu.css('width');
            var menuPos = $menu.css('left');

            if (state === 'hide' && menuPos === '0px') {
                self.hideMenu(menuWidth, $menu);
            }

            $content.on('click', function (e) {
                self.hideMenu(menuWidth, $menu);
                e.stopPropagation();
            });

            $button.on('click', function (e) {
                e.stopPropagation();

                $(this).find('div').toggleClass('active');
                self.toggleMenu(menuWidth, $menu, $content);
            });
        })();
    }

    return self;
};

exports.default = elrOffscreenMenu;