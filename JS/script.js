const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            aboutCanvas.classList.add("aboutCanvas__Entry")
        }
    })
}, {threshold: 0.9});

observer.observe(trigger__aboutCanvas);


