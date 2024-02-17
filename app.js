const accBtns = document.querySelectorAll('.acc');

accBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const btn = e.currentTarget;
        const content = btn.querySelector('.acc-content');
        const accIcon = btn.querySelector("img");
        if (content.dataset.accHidden === "false" ) {
            content.dataset.accHidden = true;
            accIcon.setAttribute('src', 'assets/images/icon-plus.svg')
        } else {
            content.dataset.accHidden = false;
            accIcon.setAttribute('src', 'assets/images/icon-minus.svg')
        }
    })
})