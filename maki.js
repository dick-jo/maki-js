const maki = () => {

    const scrollTargets = document.querySelectorAll("[data-maki]")

    const callback = (entries, observer) => {
        entries.forEach((entry, index) => {
            const target = entry.target.dataset.maki

            // check for timing offset override
            let offset
            if (entry.target.dataset.makiOffset) {
                offset = entry.target.dataset.makiOffset
            } else {
                offset = 240
            }

            // set elements
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.dataset.makiSet = target
                }, index * offset)
            }
        })
    }

    // intersection handling

    const options = {
        root: null,
        rootMargin: '0px',
        treshold: 0
    }

    const scrollObserver = new IntersectionObserver(callback, options)

    scrollTargets.forEach(target => {
        scrollObserver.observe(target)
    })
}
