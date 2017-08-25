import React from "react";
import Header from "./Header";
import NurseryBody from "./NurseryBody";

var main = {
  display: 'flex',
  fontFamily: 'sans-serif',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#90d275',
  width: '100%',
  height: '100vh'
}

function App(props){
  return (
    <div style={main} className="contatiner">
      <Header/>
      <p>Add a plant variety to track watering criteria!</p>
      <NurseryBody/>
    </div>
  );
}

export default App;
