function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => displayUsers2(users))
}

function displayUsers2(users){
  const ul = document.getElementById('users-list');
  for(const user of users){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}