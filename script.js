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

const randomButton = document.getElementById('randomButton');
const imageContainer = document.getElementById('imageContainer');

function getRandomPosition() {
    const maxX = window.innerWidth - 150; // Image width
    const maxY = window.innerHeight - 150; // Image height
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}

function spawnImage(imageUrl, category) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'image';
    img.dataset.category = category;
    const { x, y } = getRandomPosition();
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.addEventListener('click', handleImageClick);
    imageContainer.appendChild(img);
}

randomButton.addEventListener('click', () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const images = imageCategories[randomCategory];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    spawnImage(randomImage, randomCategory);
});

function handleImageClick(event) {
    const category = event.target.dataset.category;
    const images = imageCategories[category];
    const numToSpawn = Math.floor(Math.random() * 3) + 1; // Spawn 1-3 related images
    for (let i = 0; i < numToSpawn; i++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        spawnImage(randomImage, category);
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