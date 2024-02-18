const accordions = document.querySelectorAll('.acc');
accordions.forEach(acc => {
    const clickedBtn = acc.querySelector(".acc-btn")
    clickedBtn.addEventListener('click', e => {
        const content = acc.querySelector('.acc-content');
        const accIcon = acc.querySelector("img");
        const isHidden = content.getAttribute("aria-hidden") === "true";
        const isExpanded = acc.getAttribute("aria-expanded") === "false"; // this will return true
        acc.setAttribute("aria-expanded", isExpanded);
        content.setAttribute('aria-hidden', !isHidden); // setting the aria expanded to true to open the accordion
        accIcon.setAttribute('src', isHidden ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg');
        accordions.forEach(otherBtn => {
           if (otherBtn !== acc) {
            otherBtn.querySelector('.acc-content').setAttribute("aria-hidden", "true")
            otherBtn.setAttribute("aria-expanded", "false")
            otherBtn.querySelector('img').setAttribute('src', 'assets/images/icon-plus.svg')
           }            
        })
    })
})