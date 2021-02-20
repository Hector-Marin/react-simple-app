// const element = document.createElement('h1');
// element.innerText = 'Hello World!';

// const container = document.getElementById('root');
// container.appendChild(element);

import React from 'react';
import ReactDom from 'react-dom';

const user = {
  firstName: "Earth",
  lastName: "Planet!",
  avatar: "https://lh3.googleusercontent.com/proxy/n-7nORfeVQNXq4EtH91qzGUNWv7d1iVeR_sf1vPWj_zyzbHMbfuRx_jTdKAvE1W2pBFpQCJpbX03uWctQ0y-JrC7wwRs_fzbQ7n7jQ"
}

function getName(user){
  return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>;
  }
  return <h1>Hello World!</h1>;
}

const name = 'World!'

const element = (
  <div>
    <h1>Hello {getName(user)}</h1>
    <img src={user.avatar}/>
  </div>
)
const container = document.getElementById('root');

ReactDom.render(element, container);
