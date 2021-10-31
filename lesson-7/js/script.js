(function () {
	var observer = new IntersectionObserver(onIntersect);

	document.querySelectorAll("[data-src]").forEach((img) => {
		observer.observe(img);
	});

	function onIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.target.getAttribute("data-processed") || !entry.isIntersecting)
				return true;
			entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
			entry.target.setAttribute("data-processed", true);
		});
	}
})();

// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const imgOptions = {
//     threshold:1,
//     rootMargin: "0px 0px 10px 0px"
// }

// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {image.removeAttribute('data-src');};
// };



// if('IntersectionObserver' in window) {
// const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//     if(item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//     }
//     });
// }, imgOptions);

// imagesToLoad.forEach((img) => {
//     observer.observe(img);
// });
// } else {
// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });
// }