const acc = document.querySelectorAll('.acc');
acc.forEach(btn => {
    btn.addEventListener('click', e => {
        const clickedBtn = e.currentTarget;
        const content = clickedBtn.querySelector('.acc-content');
        const accIcon = clickedBtn.querySelector("img");
        const isOpen = content.getAttribute("aria-hidden");
        if (isOpen === "false" ) {
            content.setAttribute("aria-hidden", "true")
            accIcon.setAttribute('src', 'assets/images/icon-plus.svg')
        } else {
            content.setAttribute("aria-hidden", "false")
            accIcon.setAttribute('src', 'assets/images/icon-minus.svg')
        }
        acc.forEach(acc => {
           if (clickedBtn !== acc) {
            acc.querySelector('.acc-content').setAttribute("aria-hidden", "true")
            acc.querySelector('img').setAttribute('src', 'assets/images/icon-plus.svg')
           }            
        })
    })
})