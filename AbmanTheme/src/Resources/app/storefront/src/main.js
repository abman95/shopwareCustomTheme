const CLASS_CLICK_ANIMATION = 'clickAnimation';
const DISPLAY_NONE = 'none';
const DISPLAY_INLINE = 'inline';
const ANIMATION_DURATION = 1000;

const addToCartButton = document.querySelector('.btn.btn-primary.btn-buy');
const defaultText = document.querySelector('.addProduct-default-text');
const clickAnimationText = document.querySelector('.addProduct-click-animation-text');

function toggleAnimation() {
    addToCartButton.classList.toggle(CLASS_CLICK_ANIMATION);
    defaultText.style.display = addToCartButton.classList.contains(CLASS_CLICK_ANIMATION) ? DISPLAY_NONE : DISPLAY_INLINE;
    clickAnimationText.style.display = addToCartButton.classList.contains(CLASS_CLICK_ANIMATION) ? DISPLAY_INLINE : DISPLAY_NONE;
}

addToCartButton.addEventListener('click', () => {
    toggleAnimation();
    setTimeout(toggleAnimation, ANIMATION_DURATION);
});
