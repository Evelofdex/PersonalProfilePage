const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            aboutCanvas.classList.add("aboutCanvas__Entry")
            aboutCol_title__line.classList.add("aboutCol_title__line__Entry")
            aboutCol_title.classList.add("aboutCol_title__Entry")
            aboutCol_subtitleBox.classList.add("aboutCol_subtitleBox__Entry")
        }
    })
}, {threshold: 0.9});

observer.observe(trigger__aboutCanvas);

