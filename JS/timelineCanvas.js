const timelineCanvas_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            timelineCanvas.classList.add("timelineCanvas__Entry")
        }
    })
}, {threshold: 0.9});

timelineCanvas_observer.observe(timelineCanvas)

