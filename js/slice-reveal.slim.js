function initSliceReveal(ops) {
    if (ops === void 0) { ops = {}; }
    var sliceBgs = document.querySelectorAll(".slice-reveal");
    sliceBgs.forEach(function (el) {
        var numSlice = parseInt(el.getAttribute("num-slice")) || 5;
        var delay = el.getAttribute("reveal-delay") || 0.2;
        var sliceHeight = 100 / numSlice;
        var op = el.classList.contains("horizontal") ? "left" : "top";
        var sp = el.classList.contains("horizontal") ? "width" : "height";
        var ro = el.classList.contains("reverse-order");
        var inputColor = el.getAttribute("slice-color");
        var duration = el.getAttribute("reveal-duration");
        for (var i = 0; i < numSlice; i++) {
            var slice = document.createElement('div');
            slice.classList.add("slice-reveal-slice");
            slice.style[op] = i * sliceHeight + "%";
            slice.style[sp] = sliceHeight + "%";
            inputColor && (slice.style.backgroundColor = inputColor);
            duration && (slice.style.animationDuration = duration + "s");
            slice.style.animationDelay = (ro ? numSlice - i : i) * delay + "s";
            el.appendChild(slice);
        }
    });
}
