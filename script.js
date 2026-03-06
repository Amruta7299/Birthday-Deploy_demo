// Navigation Logic
function navigateTo(pageNumber) {
    const mainAudio = document.getElementById('bg-music-1');
    const popupAudio = document.getElementById('popup-audio');

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        
        setTimeout(() => {
            if (!page.classList.contains('active')) {
                page.style.display = 'none';
            }
        }, 500); 
    });

    // Handle music logic
    if (popupAudio) {
        popupAudio.pause();
        popupAudio.currentTime = 0;
    }

    // Play main audio ONLY on page 2
    if (pageNumber === 2 && mainAudio) {
        if (mainAudio.paused) {
             if (mainAudio.currentTime < 30) {
                 mainAudio.currentTime = 30; // Start at 0:30
             }
             mainAudio.play().catch(e => console.log("Audio prevented:", e));
        }
    } else if (mainAudio) {
        // Pause if they go to page 1 or page 3
        mainAudio.pause();
    }

    // Show target page
    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.style.display = 'block';
        void targetPage.offsetWidth; 
        targetPage.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Logic for Page 2 Photos
function openPhotoModal(imageSrc, text) {
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text');

    if (!modal) return;

    modalImg.src = imageSrc;
    modalText.textContent = text;
    modal.classList.add('show');
}

function closePhotoModal() {
    const modal = document.getElementById('photo-modal');

    if (modal) {
        modal.classList.remove('show');
    }
}

// Toggle Music Manually on Page 2
function toggleMusic() {
    const mainAudio = document.getElementById('bg-music-1');
    const toggleBtn = document.getElementById('music-toggle-btn');
    
    if (!mainAudio || !toggleBtn) return;
    
    if (mainAudio.paused) {
        mainAudio.play();
        toggleBtn.textContent = 'Pause Music';
    } else {
        mainAudio.pause();
        toggleBtn.textContent = 'Play Music';
    }
}

// Generate background sparkles for Page 1
function createSparkles() {
    const page1 = document.getElementById('page-1');
    if (!page1) return;
    
    // Create 40 sparkles
    for(let i=0; i<40; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Randomize position
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.left = Math.random() * 100 + '%';
        
        // Randomize size and animation duration
        const sizeInfo = Math.random() * 4 + 2; 
        sparkle.style.width = sizeInfo + 'px';
        sparkle.style.height = sizeInfo + 'px';
        sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        sparkle.style.animationDelay = (Math.random() * 3) + 's';
        
        page1.appendChild(sparkle);
    }
}

// Initialize display correctly
document.addEventListener('DOMContentLoaded', () => {
    // Show only active
    document.querySelectorAll('.page').forEach(page => {
        if (!page.classList.contains('active')) {
            page.style.display = 'none';
        }
    });

    createSparkles();

    // Ensure music loops back to 30s instead of 0s
    const mainAudio = document.getElementById('bg-music-1');
    if (mainAudio) {
        mainAudio.addEventListener('timeupdate', function() {
            // Loop adjustment or forced start skip
            // Note: Native loop jumps to 0, on next frame it will get caught here 
            // and skip back to 30.
            if (this.currentTime < 30 && !this.paused) {
                this.currentTime = 30;
            }
        });
    }
});
