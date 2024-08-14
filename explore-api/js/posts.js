fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPosts(data))

function displayPosts(posts){
  const postsContainer = document.getElementById('posts-container');
  for(post of posts){
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    console.log(post);
    postDiv.innerHTML = `
      <h4>User: ${post.userId}</h4>
      <h5>Post: ${post.title}</h5>
      <p>Post description: ${post.body}</p>
    `;
    postsContainer.appendChild(postDiv);
  }
}


