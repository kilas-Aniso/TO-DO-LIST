// fetch data

// const getUsers = () =>{
//     fetch('https://dummyjson.com/users')
//     .then(response=>response.json())
//     .then(response=>console.log({response}))
//     .catch(error=>console.log(error))
// }
// getUsers()

const userContainer = document.getElementById('users')

const getUsers = () =>{
   return fetch('https://dummyjson.com/users/5')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error)
}
// getUsers();

// display
const displayUsers = async()=>{
    const user = await getUsers();
    console.log(user);
  

   user.users.map((item)=>{
    let div = document.createElement('div');
    let image=document.createElement('img');
    let name = document.createElement('h2');
    let userName = document.createElement('p')


    image.src = item.image;
    name.innerHTML = `${item.firstName} ${item.lastName}`;
    userName.innerHTML = item.username;


    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(userName);
    div.setAttribute('key', item.id);
    div.setAttribute('class', 'people')
    userContainer.appendChild(div);
})

}
displayUsers();