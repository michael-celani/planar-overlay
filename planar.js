function testNode(targ) {
    return (targ && targ.nodeName === "A" && targ.href.startsWith('https://c1.scryfall.com/'))
}

document.addEventListener("mouseout", function(e) {
        if (!testNode(e.target)) {
            return;
        }

        e.target.style.setProperty("--delay", "0.0s");
    }
);

document.addEventListener("mouseover", function(e) {
        if (!testNode(e.target)) {
            return;
        }

        e.target.style.setProperty("--link", "url(" + e.target.href + ")");
        e.target.style.setProperty("--delay", "0.25s");
    }
);

document.addEventListener("mousemove", function(e) {
        if (!testNode(e.target)) {
            return;
        }

        var rect = e.target.getBoundingClientRect();
        e.target.style.setProperty("--top", String(e.clientY) + "px");
        e.target.style.setProperty("--left", String(e.clientX)+ "px");
    }
);

