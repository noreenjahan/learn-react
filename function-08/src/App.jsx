import React from 'react'

const App = () => {
  function Clicked(){
    console.log("this function is called");
  }
  function write(val){
    console.log(val);
  }
  function scrolling(elem){
    console.log("pagescrolling... at speed",elem);
  }
  return (
    <div onWheel={(elem)=>{
      scrolling(elem.deltaY)
    }
    }>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
