(function() {
    window.sr = ScrollReveal({
    	reset : true,
    	origin : 'left'
    });
	var experienceContainer = document.getElementById('experience');
	sr.reveal('.group.block.flexed', 
		{rotate: {x: 65}
	});

	   

	particlesJS.load('particles-js', 'assets/particles.json', function() {
	    console.log('callback - particles.js config loaded');
	});
})();