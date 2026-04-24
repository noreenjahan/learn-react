import React from 'react'

const App = () => {
localStorage.setItem('user','noreen')
localStorage.setItem('age','18')

localStorage.removeItem('age');
const user= localStorage.getItem('user')
console.log(user);

const data={
  name:'noor',
  age:20,
  city:'Rawalpindi'
}
localStorage.setItem('data',JSON.stringify(data));
//when i will try to get data i will recive it in string type.
//to convert it back in to object i have to use method JSON.parse

const data1=localStorage.getItem('data')
console.log(typeof(data1));

const data2=JSON.parse(localStorage.getItem('data'));
console.log(typeof(data2));

//four methods of local storage

// localStorage.setItem('key','value')
// localStorage.getItem('key')
// localStorage.removeItem('key')
// localStorage.clear();
  return (
    <div>
      App is here. Check the console to see the local storage data.
    </div>
  )
}

export default App
