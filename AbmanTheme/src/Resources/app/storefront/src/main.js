//addToCartButtonAnimation.textContents will be replaced by a variable which will be imported from the storefront.de-DE.json files

const addToCartButtonAnimation = document.querySelector('.btn.btn-primary.btn-buy');

addToCartButtonAnimation.addEventListener('click', () => {
    addToCartButtonAnimation.classList.add('show');
    addToCartButtonAnimation.textContent = "Wird in den Warenkorb gelegt";
    setTimeout(() => {
        addToCartButtonAnimation.classList.remove('show');
        addToCartButtonAnimation.textContent = "In den Warenkorb";
    } ,1000);   
});
