const categories = [
    'animals', 'nature', 'city', 'space', 'art', 'food', 'tech', 'people', 'abstract', 'vehicles'
];

// Simulate 200+ images by generating placeholder URLs for each category
const imageCategories = {};
categories.forEach(category => {
    imageCategories[category] = Array.from({ length: 25 }, (_, i) => 
        `https://placehold.co/150x150?text=${category}_${i + 1}`
    );
});

const imageContainer = document.getElementById('imageContainer');
const clickText = document.getElementById('clickText');

function getRandomPosition() {
    const maxX = window.innerWidth - 150; // Image width
    const maxY = window.innerHeight - 150; // Image height
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}

function makeDraggable(img) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    img.addEventListener('mousedown', startDragging);
    img.addEventListener('dblclick', handleImageClick); // Double-click for spawning

    function startDragging(e) {
        e.preventDefault(); // Prevent default to avoid image drag behavior
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        isDragging = true;
        img.style.zIndex = 1000; // Bring to front while dragging
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            // Constrain within viewport
            const maxX = window.innerWidth - img.offsetWidth;
            const maxY = window.innerHeight - img.offsetHeight;
            currentX = Math.max(0, Math.min(currentX, maxX));
            currentY = Math.max(0, Math.min(currentY, maxY));

            img.style.left = `${currentX}px`;
            img.style.top = `${currentY}px`;
        }
    }

    function stopDragging() {
        isDragging = false;
        img.style.zIndex = 'auto'; // Reset z-index
    }

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
}

function spawnImage(imageUrl, category, x, y) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'image';
    img.dataset.category = category;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    currentX = x;
    currentY = y;
    makeDraggable(img);
    imageContainer.appendChild(img);
    // Hide click text after first image spawn
    clickText.style.display = 'none';
}

// Spawn image on viewport click
document.body.addEventListener('click', (e) => {
    // Ignore clicks on images to avoid conflicts with drag or double-click
    if (e.target.classList.contains('image')) return;
    
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const images = imageCategories[randomCategory];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    // Spawn at click position, adjusted to keep image in bounds
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;
    const x = Math.max(0, Math.min(e.clientX - 75, maxX)); // Center image on click
    const y = Math.max(0, Math.min(e.clientY - 75, maxY));
    spawnImage(randomImage, randomCategory, x, y);
});

function handleImageClick(event) {
    event.preventDefault(); // Prevent default behavior
    const category = event.target.dataset.category;
    const images = imageCategories[category];
    const numToSpawn = Math.floor(Math.random() * 3) + 1; // Spawn 1-3 related images
    for (let i = 0; i < numToSpawn; i++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const { x, y } = getRandomPosition();
        spawnImage(randomImage, category, x, y);
    }
}

// Ensure images stay within viewport on resize
window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.image');
    images.forEach(img => {
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 150;
        let x = parseInt(img.style.left);
        let y = parseInt(img.style.top);
        if (x > maxX) img.style.left = `${maxX}px`;
        if (y > maxY) img.style.top = `${maxY}px`;
    });
});