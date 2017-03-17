var elem=document.getElementById('scroll');

elem.addEventListener('click',function(event){
	
	var interval=setInterval(function(){		
		window.scrollBy(0,-10);
		if(window.pageYOffset==0){
			clearInterval(interval);
		}
	},7);
});