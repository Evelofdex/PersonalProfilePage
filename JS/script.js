const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("aboutCanvas__Entry")
        }
    })
}, {threshold: 1});

if (aboutCanvas) observer.observe(aboutCanvas)


