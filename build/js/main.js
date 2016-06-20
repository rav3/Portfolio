(function() {
    window.sr = ScrollReveal();
	var experienceContainer = document.getElementById('experience');
	sr.reveal('.group.block.flexed');

	   

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

})();