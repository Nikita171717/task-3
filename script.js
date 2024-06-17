document.addEventListener('DOMContentLoaded', function () {
    const fetchPostsBtn = document.getElementById('fetchPostsBtn');
    const postsContainer = document.getElementById('postsContainer');
    const postsNumberInput = document.getElementById('postsNumber');

    fetchPostsBtn.addEventListener('click', function () {
        const postsNumber = parseInt(postsNumberInput.value);

        if (isNaN(postsNumber) || postsNumber <= 0) {
            alert('Please enter a valid number of posts to fetch.');
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsNumber}`)
            .then(response => response.json())
            .then(posts => {
                postsContainer.innerHTML = '';
                posts.forEach(post => {
                    const postCard = document.createElement('div');
                    postCard.classList.add('post-card');
                    postCard.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.body}</p>
            `;
                    postsContainer.appendChild(postCard);
                });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                alert('Failed to fetch posts. Please try again later.');
            });
    });
});  