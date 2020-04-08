function initSliceReveal(ops = {}){
	const sliceBgs = document.querySelectorAll(".slice-reveal")
	
	sliceBgs.forEach(el => {
		const numSlice = parseInt(el.getAttribute("num-slice")) || 5
		const delay = el.getAttribute("reveal-delay") || 0.2
		const sliceHeight = 100 / numSlice
		const op = el.classList.contains("horizontal") ? "left" : "top"
		const sp = el.classList.contains("horizontal") ? "width" : "height"
		const ro = el.classList.contains("reverse-order")
		const inputColor = el.getAttribute("slice-color")
		const duration = el.getAttribute("reveal-duration")
		
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