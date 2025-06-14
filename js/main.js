// Import the images module
import './images.js';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Post Creation
    const postTextarea = document.querySelector('.post-creator textarea');
    const postBtn = document.querySelector('.post-btn');
    const postsContainer = document.querySelector('.posts');

    // Like, Comment, Share functionality
    const likeButtons = document.querySelectorAll('.post-actions button:first-child');
    const commentButtons = document.querySelectorAll('.post-actions button:nth-child(2)');
    const shareButtons = document.querySelectorAll('.post-actions button:last-child');

    // Post Creation
    postBtn.addEventListener('click', () => {
        const postContent = postTextarea.value.trim();
        if (postContent) {
            createNewPost(postContent);
            postTextarea.value = '';
        }
    });

    // Create New Post
    function createNewPost(content) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `
            <div class="post-header">
                <img src="images/default-avatar.png" alt="User Avatar" class="avatar">
                <div class="post-info">
                    <h3>You</h3>
                    <span>Just now</span>
                </div>
            </div>
            <div class="post-content">
                <p>${content}</p>
            </div>
            <div class="post-actions">
                <button><i class="fas fa-heart"></i> Like</button>
                <button><i class="fas fa-comment"></i> Comment</button>
                <button><i class="fas fa-share"></i> Share</button>
            </div>
        `;
        postsContainer.insertBefore(post, postsContainer.firstChild);
        addPostInteractions(post);
    }

    // Add interactions to new posts
    function addPostInteractions(post) {
        const likeBtn = post.querySelector('.post-actions button:first-child');
        const commentBtn = post.querySelector('.post-actions button:nth-child(2)');
        const shareBtn = post.querySelector('.post-actions button:last-child');

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
            if (likeBtn.classList.contains('liked')) {
                likeBtn.innerHTML = '<i class="fas fa-heart"></i> Liked';
                likeBtn.style.color = '#1877f2';
            } else {
                likeBtn.innerHTML = '<i class="fas fa-heart"></i> Like';
                likeBtn.style.color = '#65676b';
            }
        });

        commentBtn.addEventListener('click', () => {
            const commentSection = document.createElement('div');
            commentSection.className = 'comment-section';
            commentSection.innerHTML = `
                <div class="comment-input">
                    <img src="images/default-avatar.png" alt="User Avatar" class="avatar">
                    <input type="text" placeholder="Write a comment...">
                    <button>Post</button>
                </div>
            `;
            post.appendChild(commentSection);
        });

        shareBtn.addEventListener('click', () => {
            alert('Post shared successfully!');
        });
    }

    // Add interactions to existing posts
    document.querySelectorAll('.post').forEach(post => {
        addPostInteractions(post);
    });

    // Search functionality
    const searchInput = document.querySelector('.nav-search input');
    const searchButton = document.querySelector('.nav-search button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Implement search functionality
                console.log('Searching for:', searchTerm);
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    // Implement search functionality
                    console.log('Searching for:', searchTerm);
                }
            }
        });
    }

    // Friend suggestion
    const addFriendButtons = document.querySelectorAll('.friend-suggestion button');
    addFriendButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Friend Request Sent';
            button.disabled = true;
            button.style.backgroundColor = '#65676b';
        });
    });

    // Trending topics
    const trendingTopics = document.querySelectorAll('.trending li');
    trendingTopics.forEach(topic => {
        topic.addEventListener('click', () => {
            alert(`Searching for topic: ${topic.textContent}`);
            // Implement topic search functionality here
        });
    });

    // Mobile menu functionality is now in mobile-menu.js

    // Like button functionality
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const likeCount = button.querySelector('.like-count');
            if (likeCount) {
                const currentCount = parseInt(likeCount.textContent);
                likeCount.textContent = button.classList.contains('active') ? currentCount + 1 : currentCount - 1;
            }
        });
    });

    // Comment form submission
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentInput = form.querySelector('textarea');
            const commentText = commentInput.value.trim();
            
            if (commentText) {
                // Add comment to the list
                const commentsList = form.closest('.post').querySelector('.comments-list');
                if (commentsList) {
                    const newComment = document.createElement('div');
                    newComment.className = 'comment';
                    newComment.innerHTML = `
                        <img src="${PLACEHOLDER_SERVICES.uifaces(Math.floor(Math.random() * 100))}" alt="User" class="comment-avatar">
                        <div class="comment-content">
                            <h4>User Name</h4>
                            <p>${commentText}</p>
                            <span class="comment-time">Just now</span>
                        </div>
                    `;
                    commentsList.appendChild(newComment);
                    commentInput.value = '';
                }
            }
        });
    });

    // Friend request functionality
    document.querySelectorAll('.friend-request-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            button.textContent = button.classList.contains('active') ? 'Friends' : 'Add Friend';
        });
    });

    // Message send functionality
    document.querySelectorAll('.message-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageInput = form.querySelector('input[type="text"]');
            const messageText = messageInput.value.trim();
            
            if (messageText) {
                // Add message to the chat
                const chatMessages = form.closest('.chat-container').querySelector('.chat-messages');
                if (chatMessages) {
                    const newMessage = document.createElement('div');
                    newMessage.className = 'message sent';
                    newMessage.innerHTML = `
                        <div class="message-content">
                            <p>${messageText}</p>
                            <span class="message-time">Just now</span>
                        </div>
                    `;
                    chatMessages.appendChild(newMessage);
                    messageInput.value = '';
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }
            }
        });
    });

    // Notification toggle
    document.querySelectorAll('.notification-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const notificationPanel = button.closest('.notification-container').querySelector('.notification-panel');
            if (notificationPanel) {
                notificationPanel.classList.toggle('active');
            }
        });
    });

    // Settings form submission
    document.querySelectorAll('.settings-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement settings save functionality
            console.log('Settings saved');
        });
    });

    // Event registration
    document.querySelectorAll('.event-register-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('registered');
            button.textContent = button.classList.contains('registered') ? 'Registered' : 'Register';
        });
    });

    // Group join/leave
    document.querySelectorAll('.group-join-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('joined');
            button.textContent = button.classList.contains('joined') ? 'Leave Group' : 'Join Group';
        });
    });
}); 