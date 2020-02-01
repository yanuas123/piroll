export function Tooltip(el, text) {
	var hidden_class = "hidden-tooltip";
	var time = 1000;
	var tooltip = document.getElementById("tooltip");

	var win_width;

	win_width = document.documentElement.clientWidth;
	var el_coord = el.getBoundingClientRect();
	var el_dimens = {
		top: el_coord.top + (window.pageYOffset || document.documentElement.scrollTop),
		left: el_coord.left,
		width: el_coord.right - el_coord.left
	};
	var tt_dimens = {
		top: el_dimens.top + el_coord.height,
		left: el_dimens.left + (el_dimens.width / 2)
	};

	tooltip.style.display = "block";
	tooltip.classList.remove(hidden_class);
	tooltip.innerHTML = text;
	tooltip.style.top = tt_dimens.top + "px";
	tooltip.style.left = tt_dimens.left + "px";
	var tt_coord = tooltip.getBoundingClientRect();
	tt_dimens.width = tt_coord.right - tt_coord.left;
	if(tt_dimens.width > +(win_width / 100 * 95).toFixed(0)) {
		tt_dimens.width = +(win_width / 100 * 95).toFixed(0);
	}
	if(tt_dimens.width + tt_dimens.left > win_width) {
		if(tt_dimens.left - tt_dimens.width < 0) {
			tooltip.style.left = "0px";
			tooltip.style.right = "auto";
		} else {
			tooltip.style.left = "auto";
			tooltip.style.right = (win_width - tt_dimens.left) + "px";
		}
	}

	setTimeout(() => {
		tooltip.classList.add(hidden_class);
	}, time);
}
;