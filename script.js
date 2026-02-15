// Script for demonstrating required elements and attributes

console.log('Site loaded successfully ✨');

// Template element demo - adds new game cards dynamically
function addNewGame() {
    const template = document.getElementById('gameCardTemplate');
    if (template) {
        const clone = template.content.cloneNode(true);
        const container = document.getElementById('newGamesContainer');
        if (container) {
            container.appendChild(clone);
        }
    }
}

// Loading overlay demo (using inert attribute)
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.hidden = false;
        overlay.removeAttribute('inert');
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.hidden = true;
        overlay.setAttribute('inert', '');
    }
}

// Example: simulate loading when page loads
window.addEventListener('load', () => {
    // Show loading for 1 second as demo
    // Remove this in production
    setTimeout(() => {
        hideLoading();
    }, 1000);
});