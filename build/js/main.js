(function() {
    window.sr = ScrollReveal();
	var experienceContainer = document.getElementById('experience');
	sr.reveal('.group.block.flexed .item');

	particlesJS.load('particles-js', 'assets/particles.json', function() {
	    console.log('callback - particles.js config loaded');
	});

	$(".typed").typed({
        strings: ["Liangtai.", "LT."],
        typeSpeed: 0,
		typeSpeed: 100, // typing speed
        backDelay: 5000, // pause before backspacing
        loop: true, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
    });

    $('#work .item').hover(
    	function(){
    		$(this.children[1].children[0].children[2]).removeClass('grayscale')
    		TweenMax.to($(this.children[0]),0.3,{css:{bottom:"0px"},ease:Quad.easeOut});
    	},function(){
    		$(this.children[1].children[0].children[2]).addClass('grayscale')
    		TweenMax.to($(this.children[0]),0.3,{css:{bottom:"-60px"},ease:Quad.easeOut});
    	}
    );

})();