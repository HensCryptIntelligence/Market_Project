// Get DOM elements
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const overlay = document.getElementById('overlay');

// Function to check if device is mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Initial setup based on screen size
function setupInitialState() {
    if (isMobile()) {
        sidebar.classList.add('sidebar-hidden');
        mainContent.classList.add('full-width');
    } else {
        sidebar.classList.remove('sidebar-hidden');
        mainContent.classList.remove('full-width');
    }
}

// Toggle sidebar visibility
function toggleSidebar() {
console.log("Toggle sidebar called");
    if (isMobile()) {
        console.log("Mobile mode detected");
        sidebar.classList.toggle('sidebar-visible');
        overlay.classList.toggle('active');
    } else {
        console.log("Desktop mode detected");
        sidebar.classList.toggle('sidebar-hidden');
        mainContent.classList.toggle('full-width');
    }
}

// Event listeners
toggleBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Resize handler
window.addEventListener('resize', setupInitialState);

// Run initial setup
setupInitialState();