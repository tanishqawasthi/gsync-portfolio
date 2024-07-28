function revealToSpan() {
    document.querySelectorAll(".reveal").forEach((elem) => {
        let parent = document.createElement("span");
        let child = document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = "";
        elem.appendChild(parent);
    });
};

revealToSpan()

let tl = gsap.timeline()

tl.from(".child span", {
    x: "100px",
    duration: 1.5,
    stagger: 0.1,
    delay: 1,
    ease: Power3.easeInOut
})
.to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})
.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})
.to('#purple', {
    height: '100%',
    top: 0,
    duration: 1,
    ease: Circ.easeInOut
})
