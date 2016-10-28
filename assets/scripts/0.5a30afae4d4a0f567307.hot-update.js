webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _countdown = __webpack_require__(5);
	
	var _countdown2 = _interopRequireDefault(_countdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		var $countdown = (0, _jquery2.default)('[data-countdown]');
	
		if ($countdown.length) {
			(function () {
				var params = $countdown.data('countdown');
				var $days = $countdown.find('[data-countdown-key=day]');
				var $hours = $countdown.find('[data-countdown-key=hour]');
				var $minutes = $countdown.find('[data-countdown-key=minute]');
				var $seconds = $countdown.find('[data-countdown-key=second]');
				var days = void 0,
				    hours = void 0,
				    minutes = void 0,
				    seconds = void 0;
	
				console.log(params);
	
				var instance = (0, _countdown2.default)(params, function (data) {
					var days = data.days,
					    hours = data.hours,
					    minutes = data.minutes,
					    seconds = data.seconds;
	
	
					$days.each(function (i, el) {
						el.innerHTML = days[i];
					});
	
					$hours.each(function (i, el) {
						el.innerHTML = hours[i];
					});
	
					$minutes.each(function (i, el) {
						el.innerHTML = minutes[i];
					});
	
					$seconds.each(function (i, el) {
						el.innerHTML = seconds[i];
					});
				});
	
				instance.start();
			})();
		}
	
		(0, _jquery2.default)(window).on('scroll', function (e) {
			console.log('scroll', e);
		});
	
		(0, _jquery2.default)(document).on('click', 'a.header__menu-item', function (e) {
			var hash = e.target.hash;
	
			if (hash[0] === '#') {
				var name = hash.slice(1);
				var $el = (0, _jquery2.default)('#' + name);
				var pos = $el.position();
	
				e.preventDefault();
	
				if (pos.top) {
					(0, _jquery2.default)('html, body').stop().animate({ scrollTop: pos.top });
					(0, _jquery2.default)('.header__menu-item').removeClass('header__menu-item_active');
					(0, _jquery2.default)(e.target).addClass('header__menu-item_active');
				}
			}
		});
	
		(0, _jquery2.default)(document).on('click', '.header__menu-bar', function () {
			(0, _jquery2.default)('.header__menu-bar').toggleClass('header__menu-bar_active');
			(0, _jquery2.default)('.header__menu').toggleClass('header__menu_active');
		});
	});

/***/ }
])
//# sourceMappingURL=0.5a30afae4d4a0f567307.hot-update.js.map