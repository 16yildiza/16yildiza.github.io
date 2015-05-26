$(document).ready(
	function() {

		$(window).scrollTop(0);

		particlesJS.load('particles-js', 'assets/particles.json', function() {});
		setTimeout(function() {
			$(".hidden").show();
			$(".scroll-arrow").animate({"bottom": "+=65px"}, 800);
		}, 2500);

		$('.scroll-arrow a').click(
			function(event) {
				console.log("hello");
		        event.preventDefault();
		        var link = this;
		        $.smoothScroll({
		          scrollTarget: link.hash,
		          speed: 900,
		        });
			}
		);

	}
);

