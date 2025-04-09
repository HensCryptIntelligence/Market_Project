      
function showPopup(title, message, type) {
    const popup = document.getElementById('popup');
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupMessage').textContent = message;
    
    popup.classList.remove('success', 'error');
    popup.classList.add(type, 'show');
};

function closePopup() {
    document.getElementById('popup').classList.remove('show');
};