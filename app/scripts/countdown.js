export default function (targetDate, onTick) {
	const target = new Date(targetDate).getTime();
	const DAY = 86400;
	const HOUR = 3600;
	const MINUTE = 60;
	const SECOND = 1000;
	const pad = (n) => (n < 10 ? '0' : '') + n;
	const tick = function (done) {
		const current = new Date().getTime();

		let secondsLeft = (target - current) / SECOND,
			days, hours, minutes, seconds;

		days = pad(parseInt(secondsLeft / DAY));
		secondsLeft = secondsLeft % DAY;

		hours = pad(parseInt(secondsLeft / HOUR));
		secondsLeft = secondsLeft % HOUR;

		minutes = pad(parseInt(secondsLeft / MINUTE));
		seconds = pad(parseInt(secondsLeft % MINUTE));

		done({days, hours, minutes, seconds});
	};
	let intervalID;

	if (typeof onTick !== 'function') {
		throw 'onTick need to be a function';
	}

	if (isNaN(target)) {
		throw 'invalid date given'
	}

	return {
		start: () => {
			tick(onTick);

			intervalID = setInterval(() => tick(onTick), SECOND);
		},
		stop: () => {
			clearInterval(intervalID);
		}
	};
}
