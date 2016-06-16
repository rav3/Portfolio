



(function() {
    window.sr = ScrollReveal();
	var experienceContainer = document.getElementById('experience');
	sr.reveal('.group.block.flexed');

	   

	particlesJS.load('particles-js', 'assets/particles.json', function() {
	    console.log('callback - particles.js config loaded');
	});
})();