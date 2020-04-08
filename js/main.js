var htmlBlocks = document.querySelectorAll(".html-block");
htmlBlocks.forEach(function(el){
	var c = el.innerHTML;
	 c = c.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>')
			.replace(/&gt;(.*?)&lt;/g, '&gt;<span class="code-content">$1</span>&lt;')
	el.innerHTML = c;
});

var htmlBlocks = document.querySelectorAll(".js-block");
htmlBlocks.forEach(function(el){
	var c = el.innerHTML;
	c = c.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>')
			.replace(/\/\*(.*?)\*\//g, '<span class="code-comment">//$1</span>')
			.replace(/ops/g, '<span class="code-keyword">ops</span>')
			.replace("rootMargin", '<span class="code-keyword">rootMargin</span>')
	el.innerHTML = c;
});


initSliceReveal({rootMargin: "0px 0px -50px 0px"});