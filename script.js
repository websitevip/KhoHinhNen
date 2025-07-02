// Load app data from external files
let sampleApps = [];

function loadAppsFromData() {
    // Sử dụng tất cả dữ liệu
    sampleApps = [...appsData];
}

// Pagination - Chỉ có phân trang đơn giản
let currentSubPage = 1;
const appsPerSubPage = 8;

// DOM elements
const filesGrid = document.getElementById('filesGrid');
const fileModal = document.getElementById('fileModal');
const closeModal = document.getElementById('closeModal');
const contactModal = document.getElementById('contactModal');
const contactBtn = document.getElementById('contactBtn');
const closeContactModal = document.getElementById('closeContactModal');
const sectionTitle = document.getElementById('sectionTitle');

// Removed upload elements


// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadAppsFromData();
    setupEventListeners();
    renderFiles();
});

// Setup event listeners
function setupEventListeners() {
    // Modal close
    closeModal.addEventListener('click', closeFileModal);
    closeContactModal.addEventListener('click', closeContactModalFunc);

    // Contact button
    contactBtn.addEventListener('click', openContactModal);

    

    // Sự kiện cho pagination sẽ được tạo động

    // Prevent modal from closing when clicking on modal content
    fileModal.querySelector('.modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    contactModal.querySelector('.contact-modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });



    window.addEventListener('click', (e) => {
        if (e.target === fileModal) {
            closeFileModal();
        }
        if (e.target === contactModal) {
            closeContactModalFunc();
        }
    });

    // Upload functionality removed
}



// Render files grid
function renderFiles() {
    // Add fade out animation before clearing
    filesGrid.style.opacity = '0';
    filesGrid.style.transform = 'translateY(10px)';

    setTimeout(() => {
        filesGrid.innerHTML = '';

        if (sampleApps.length === 0) {
            filesGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: white; padding: 40px;">
                    <i class="fas fa-inbox" style="font-size: 3rem; opacity: 0.5; margin-bottom: 20px;"></i>
                    <p style="font-size: 1.2rem; opacity: 0.8;">Chưa có hình nền nào được chia sẻ</p>
                    <p style="font-size: 1rem; opacity: 0.6; margin-top: 10px;">Hãy là người đầu tiên chia sẻ hình nền!</p>
                </div>
            `;
            updatePagination(0);
            return;
        }

        // Calculate pagination
        const totalPages = Math.ceil(sampleApps.length / appsPerSubPage);
        const startIndex = (currentSubPage - 1) * appsPerSubPage;
        const endIndex = startIndex + appsPerSubPage;
        const currentApps = sampleApps.slice(startIndex, endIndex);

        // Render current page apps
        currentApps.forEach(imageUrl => {
            const fileCard = createFileCard(imageUrl);
            filesGrid.appendChild(fileCard);
        });

        // Update pagination controls
        updatePagination(totalPages);

        // Fade in the grid
        filesGrid.style.opacity = '1';
        filesGrid.style.transform = 'translateY(0)';
    }, 150);
}

// Create file card element
function createFileCard(imageUrl) {
    const card = document.createElement('div');
    card.className = 'app-item';

    card.innerHTML = `
        <div class="app-icon">
            <img src="${imageUrl}" alt="Wallpaper" onerror="this.parentElement.innerHTML='<i class=&quot;fas fa-image&quot;></i>'">
        </div>
    `;

    card.onclick = () => {
        openImageModal(imageUrl);
    };

    return card;
}

// Open image modal
function openImageModal(imageUrl) {
    const modal = document.getElementById('fileModal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.innerHTML = `
        <span class="close" id="closeModal">&times;</span>
        <div class="image-modal-content">
            <div class="image-container">
                <img src="${imageUrl}" alt="Wallpaper" style="width: 100%; max-height: 60vh; object-fit: contain; border-radius: 12px;">
            </div>
            <div class="image-instruction">
                <p>Bấm giữ vào ảnh để hiện tuỳ chọn lưu</p>
            </div>
        </div>
    `;

    // Re-attach close event
    modal.querySelector('#closeModal').addEventListener('click', closeFileModal);

    modal.style.display = 'block';
}

// Open file modal (keep for compatibility)
function openFileModal(app) {
    document.getElementById('modalIcon').src = app.icon;
    document.getElementById('modalTitle').textContent = app.name;
    document.getElementById('modalVersion').textContent = app.version + ' • ' + app.size;
    document.getElementById('modalDescription').textContent = app.description;

    // Setup buttons
    document.getElementById('downloadBtn').onclick = () => downloadApp(app);

    fileModal.style.display = 'block';
}

// Close file modal
function closeFileModal() {
    fileModal.style.display = 'none';
}

// Open contact modal
function openContactModal() {
    // Add click animation to contact button
    contactBtn.style.transform = 'translateY(-1px) scale(1.02)';
    setTimeout(() => {
        contactBtn.style.transform = '';
    }, 150);

    // Show modal with animation
    contactModal.style.display = 'block';
    const modalContent = contactModal.querySelector('.contact-modal-content');

    // Trigger animation
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 10);
}

// Close contact modal
function closeContactModalFunc() {
    const modalContent = contactModal.querySelector('.contact-modal-content');
    modalContent.classList.remove('show');

    // Hide modal after animation completes
    setTimeout(() => {
        contactModal.style.display = 'none';
    }, 400);
}

// Download wallpaper
function downloadApp(app) {
    // Open download link
    if (app.downloadLink) {
        window.open(app.downloadLink, '_blank');
        closeFileModal();
    } else {
        alert('Link tải xuống chưa được thiết lập cho hình nền này.');
    }
}





// Remove 3D tilt effect, keep only simple hover animations

// Add floating particles effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Update pagination controls
function updatePagination(totalPages) {
    let paginationContainer = document.getElementById('paginationContainer');

    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'paginationContainer';
        paginationContainer.className = 'pagination-container';
        document.querySelector('.files-section').appendChild(paginationContainer);
    }

    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = 'flex';
    paginationContainer.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = `pagination-btn ${currentSubPage === 1 ? 'disabled' : ''}`;
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.onclick = () => changePage(currentSubPage - 1);
    paginationContainer.appendChild(prevBtn);

    // Tính toán 4 số trang để hiển thị
    let startPage, endPage;
    
    if (totalPages <= 4) {
        // Nếu tổng số trang <= 4, hiển thị tất cả
        startPage = 1;
        endPage = totalPages;
    } else {
        // Logic trượt: hiển thị 4 số với trang hiện tại ở giữa hoặc đầu
        if (currentSubPage <= 2) {
            // Trang 1-2: hiển thị 1,2,3,4
            startPage = 1;
            endPage = 4;
        } else if (currentSubPage >= totalPages - 1) {
            // Gần cuối: hiển thị 4 trang cuối
            startPage = totalPages - 3;
            endPage = totalPages;
        } else {
            // Ở giữa: hiển thị trang hiện tại và 3 trang sau
            startPage = currentSubPage;
            endPage = Math.min(currentSubPage + 3, totalPages);
        }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn ${i === currentSubPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => changePage(i);
        paginationContainer.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = `pagination-btn ${currentSubPage === totalPages ? 'disabled' : ''}`;
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.onclick = () => changePage(currentSubPage + 1);
    paginationContainer.appendChild(nextBtn);

    // Page info
    const pageInfo = document.createElement('div');
    pageInfo.className = 'page-info';
    pageInfo.textContent = `Trang ${currentSubPage} / ${totalPages}`;
    paginationContainer.appendChild(pageInfo);
}

// Change page function
function changePage(page) {
    const totalPages = Math.ceil(sampleApps.length / appsPerSubPage);

    if (page < 1 || page > totalPages) return;

    currentSubPage = page;
    renderFiles();

    // Scroll to top of files section
    document.querySelector('.files-section').scrollIntoView({ behavior: 'smooth' });
}

// Reset pagination when switching categories or searching
function resetPagination() {
    currentSubPage = 1;
}

// Upload functionality removed



// Initialize particles
createParticles();

window.addEventListener("DOMContentLoaded", function () {
  const audio = document.createElement("audio");
  audio.src = "TRTD.m4a";        // 🔁 Thay bằng đường dẫn file nhạc bạn muốn
  audio.type = "audio/mp4";
  audio.controls = true;
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);
  audio.play().catch(e => {
    console.warn("Trình duyệt chặn autoplay:", e);
  });
});