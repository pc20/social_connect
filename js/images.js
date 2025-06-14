// Image placeholder service URLs
const PLACEHOLDER_SERVICES = {
    // Random images from Unsplash
    unsplash: (width, height, category) => 
        `https://source.unsplash.com/random/${width}x${height}/?${category}`,
    
    // Placeholder.com service
    placeholder: (width, height, text) =>
        `https://via.placeholder.com/${width}x${height}?text=${text}`,
    
    // UI Faces for profile pictures
    uifaces: (id) =>
        `https://randomuser.me/api/portraits/${id % 2 ? 'men' : 'women'}/${id}.jpg`,
    
    // Picsum for random images
    picsum: (width, height, id) =>
        `https://picsum.photos/${width}/${height}?random=${id}`
};

// Function to get a random image URL
function getRandomImage(width, height, category = '') {
    const services = Object.values(PLACEHOLDER_SERVICES);
    const randomService = services[Math.floor(Math.random() * services.length)];
    return randomService(width, height, category);
}

// Function to initialize images on page load
function initializeImages() {
    // Profile pictures
    document.querySelectorAll('.profile-picture').forEach((img, index) => {
        img.src = PLACEHOLDER_SERVICES.uifaces(index);
        img.alt = 'Profile Picture';
    });

    // Post images
    document.querySelectorAll('.post-image').forEach((img, index) => {
        img.src = PLACEHOLDER_SERVICES.picsum(800, 600, index);
        img.alt = 'Post Image';
    });

    // Cover images
    document.querySelectorAll('.cover-image').forEach((img, index) => {
        img.src = PLACEHOLDER_SERVICES.unsplash(1200, 400, 'nature');
        img.alt = 'Cover Image';
    });

    // Event images
    document.querySelectorAll('.event-image').forEach((img, index) => {
        img.src = PLACEHOLDER_SERVICES.unsplash(600, 400, 'event');
        img.alt = 'Event Image';
    });

    // Group images
    document.querySelectorAll('.group-image').forEach((img, index) => {
        img.src = PLACEHOLDER_SERVICES.unsplash(600, 400, 'group');
        img.alt = 'Group Image';
    });

    // Team member images
    document.querySelectorAll('.team-image').forEach((img, index) => {
        img.src = PLACEHOLDER_SERVICES.uifaces(index);
        img.alt = 'Team Member';
    });

    // Blog post images
    document.querySelectorAll('.blog-image').forEach((img, index) => {
        img.src = PLACEHOLDER_SERVICES.unsplash(800, 600, 'blog');
        img.alt = 'Blog Post Image';
    });
}

// Initialize images when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeImages); 