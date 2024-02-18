const acc = document.querySelectorAll('.acc');
acc.forEach(btn => {
    btn.addEventListener('click', e => {
        const clickedBtn = e.currentTarget;
        const content = clickedBtn.querySelector('.acc-content');
        const accIcon = clickedBtn.querySelector("img");
        const isHidden = content.getAttribute("aria-hidden") === "true";
        const isExpanded = clickedBtn.getAttribute("aria-expanded") === "false"; // this will return true
        clickedBtn.setAttribute("aria-expanded", isExpanded);
        content.setAttribute('aria-hidden', !isHidden); // setting the aria expanded to true to open the accordion
        accIcon.setAttribute('src', isHidden ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg');
        acc.forEach(otherBtn => {
           if (otherBtn !== clickedBtn) {
            otherBtn.querySelector('.acc-content').setAttribute("aria-hidden", "true")
            otherBtn.setAttribute("aria-expanded", "false")
            otherBtn.querySelector('img').setAttribute('src', 'assets/images/icon-plus.svg')
           }            
        })
    })
})