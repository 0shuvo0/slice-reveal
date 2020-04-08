function initSliceReveal(ops = {}){
	const sliceBgs = document.querySelectorAll(".slice-reveal")
	
	const addObserver = (el, close, del) => {
		let observer = new IntersectionObserver((entries, observer) => { 
			entries.forEach(entry => {
				if(entry.isIntersecting){
					if(!entry.target.classList.contains("active")){
						entry.target.classList.add("active")
					}
					if(!close){
						setTimeout(function(){
							removeSlices(el)
						}, del)
						observer.unobserve(entry.target)
					}
				}else{
					if(close && entry.target.classList.contains("active")){
						entry.target.classList.remove("active")
					}
				}
			});
		}, ops)
		observer.observe(el)
	}
	
	const removeSlices = el => {
		const slices = el.querySelectorAll('.slice-reveal-slice')
		for(let i = 0; i < slices.length; i++){
			el.removeChild(slices[i])
		}
	}
	
	sliceBgs.forEach(el => {
		const numSlice = parseInt(el.getAttribute("num-slice")) || 5
		const delay = el.getAttribute("reveal-delay") || 0.2
		const sliceHeight = 100 / numSlice
		const op = el.classList.contains("horizontal") ? "left" : "top"
		const sp = el.classList.contains("horizontal") ? "width" : "height"
		const ro = el.classList.contains("reverse-order")
		const inputColor = el.getAttribute("slice-color")
		const duration = el.getAttribute("reveal-duration")
		const close = el.getAttribute("close-revealed") || false
		
		if('IntersectionObserver' in window){
			addObserver(el, close, ((numSlice * (duration || 0.33)) * 1000) + 500)
		}else{
			el.classList.add("active")
		}
		
		for(let i = 0; i < numSlice; i++){
			const slice = document.createElement('div')
			slice.classList.add("slice-reveal-slice")
			slice.style[op] = i * sliceHeight + "%"
			slice.style[sp] = sliceHeight + "%"
			inputColor && (slice.style.backgroundColor = inputColor)
			duration && (slice.style.animationDuration = duration + "s")
			slice.style.animationDelay = (ro? numSlice - i : i) * delay + "s"
			el.appendChild(slice)
		}
	})
}