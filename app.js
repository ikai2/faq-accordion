const acc = document.querySelectorAll('.acc');
acc.forEach(btn => {
    btn.addEventListener('click', e => {
        const clickedBtn = e.currentTarget;
        const content = clickedBtn.querySelector('.acc-content');
        const accIcon = clickedBtn.querySelector("img");
        const isExpanded = content.getAttribute("aria-expanded") === "false"; // this will return true
        content.setAttribute('aria-expanded', isExpanded); // setting the aria expanded to true to open the accordion
        accIcon.setAttribute('src', isExpanded ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg');
        acc.forEach(otherBtn => {
           if (otherBtn !== clickedBtn) {
            otherBtn.querySelector('.acc-content').setAttribute("aria-expanded", "false")
            otherBtn.querySelector('img').setAttribute('src', 'assets/images/icon-plus.svg')
           }            
        })
    })
})