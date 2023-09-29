document.addEventListener("DOMContentLoaded", function() {
    var navItem = [...document.querySelectorAll('.md-tabs__item')].find(item => item.textContent.includes('Order Form'));
    if (navItem) navItem.classList.add('right-align');
});