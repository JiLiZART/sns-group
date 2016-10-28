import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import countdown from './countdown';

$(() => {
	svg4everybody();

	const $countdown = $('[data-countdown]');

	if ($countdown.length) {
		const params = $countdown.data('countdown');
		const $days = $countdown.find('[data-countdown-key=day]');
		const $hours = $countdown.find('[data-countdown-key=hour]');
		const $minutes = $countdown.find('[data-countdown-key=minute]');
		const $seconds =$countdown.find('[data-countdown-key=second]');
		let days, hours, minutes, seconds;

		console.log(params);

		const instance = countdown(params, (data) => {
			const {days, hours, minutes, seconds} = data;

			$days.each((i, el) => {
				el.innerHTML = days[i];
			});

			$hours.each((i, el) => {
				el.innerHTML = hours[i];
			});

			$minutes.each((i, el) => {
				el.innerHTML = minutes[i];
			});

			$seconds.each((i, el) => {
				el.innerHTML = seconds[i];
			});
		});

		instance.start();
	}

	$(window).on('scroll', (e) => {
		if (window.scrollY < 200) {
			setTimeout(() => {
				$('.header__menu-item').removeClass('header__menu-item_active');
			}, 100);
		}
	});

	$(document).on('click', 'a.header__menu-item', (e) => {
		const hash = e.target.hash;

		if (hash[0] === '#') {
			const name = hash.slice(1);
			const $el = $(`#${name}`);
			const pos = $el.position();

			e.preventDefault();

			if (pos.top) {
				$('html, body').stop().animate({scrollTop: pos.top});
				setTimeout(() => {
					$('.header__menu-item').removeClass('header__menu-item_active');
					$(e.target).addClass('header__menu-item_active');
				}, 300)
			}
		}
	});

	$(document).on('click', '.header__menu-bar', () => {
		$('.header__menu-bar').toggleClass('header__menu-bar_active');
		$('.header__menu').toggleClass('header__menu_active');
	})
});
