import './App.css';
import { useEffect } from 'react';

function App() {
  const canvasStyle = {
    border:"1px solid black",
    padding:0,
    margin:"40px"
  }

  useEffect(() => {
      changeBlue();
      changeGreen();
      changeRed();
  }, []); // Pass an empty array to only call the function once on mount.
  
 


  function changeBlue(){
    const elem = document.getElementById("blueOne")
    if (elem === null)return console.log("null")
    let val = elem.value
    let colourA = `rgb(255,255,${val})`
    let colourB = `rgb(255,0,${val})`
    let colourC = `rgb(0,255,${val})`
    let colourD = `rgb(0,0,${val})`
    let blueA = document.getElementById("blueA");
    blueA = blueA.getContext("2d");
    blueA.rect(0, 0, 200, 100);
    blueA.fillStyle = colourA;
    blueA.fill();
    let blueB = document.getElementById("blueB");
    blueB = blueB.getContext("2d");
    blueB.rect(0, 0, 200, 100);
    blueB.fillStyle = colourB;
    blueB.fill();
    let blueC = document.getElementById("blueC");
    blueC = blueC.getContext("2d");
    blueC.rect(0, 0, 200, 100);
    blueC.fillStyle = colourC;
    blueC.fill();
    let blueD = document.getElementById("blueD");
    blueD = blueD.getContext("2d");
    blueD.rect(0, 0, 200, 100);
    blueD.fillStyle = colourD;
    blueD.fill();
  }

  function changeGreen(){
    const elem = document.getElementById("greenOne")
    if (elem === null)return console.log("null")
    let val = elem.value
    let colourA = `rgb(255,${val},255)`
    let colourB = `rgb(255,${val},0)`
    let colourC = `rgb(0,${val},255)`
    let colourD = `rgb(0,${val},0)`
    let greenA = document.getElementById("greenA");
    greenA = greenA.getContext("2d");
    greenA.rect(0, 0, 200, 100);
    greenA.fillStyle = colourA;
    greenA.fill();
    let greenB = document.getElementById("greenB");
    greenB = greenB.getContext("2d");
    greenB.rect(0, 0, 200, 100);
    greenB.fillStyle = colourB;
    greenB.fill();
    let greenC = document.getElementById("greenC");
    greenC = greenC.getContext("2d");
    greenC.rect(0, 0, 200, 100);
    greenC.fillStyle = colourC;
    greenC.fill();
    let greenD = document.getElementById("greenD");
    greenD = greenD.getContext("2d");
    greenD.rect(0, 0, 200, 100);
    greenD.fillStyle = colourD;
    greenD.fill();
  }

  function changeRed(){
    const elem = document.getElementById("redOne")
    if (elem === null)return console.log("null")
    let val = elem.value
    let colourA = `rgb(${val},255,255)`
    let colourB = `rgb(${val},0,255)`
    let colourC = `rgb(${val},255,0`
    let colourD = `rgb(${val},0,0)`
    let redA = document.getElementById("redA");
    redA = redA.getContext("2d");
    redA.rect(0, 0, 200, 100);
    redA.fillStyle = colourA;
    redA.fill();
    let redB = document.getElementById("redB");
    redB = redB.getContext("2d");
    redB.rect(0, 0, 200, 100);
    redB.fillStyle = colourB;
    redB.fill();
    let redC = document.getElementById("redC");
    redC = redC.getContext("2d");
    redC.rect(0, 0, 200, 100);
    redC.fillStyle = colourC;
    redC.fill();
    let redD = document.getElementById("redD");
    redD = redD.getContext("2d");
    redD.rect(0, 0, 200, 100);
    redD.fillStyle = colourD;
    redD.fill();
  }

  return (
    <div className="App">
      
      <p>Vision Test</p>
      <hr/>
      <p>Blue Cone Test</p>
      <input id="blueOne" type="range" min="0" max="255" onChange={changeBlue}/>
      <p/>
      <div className="can">
  
        Yellow/White: <canvas id="blueA" width="200" height="100" style={canvasStyle}></canvas>     

        Red/Purple:  <canvas id="blueB" width="200" height="100" style={canvasStyle}></canvas> 

        Green/Cyan:  <canvas id="blueC" width="200" height="100" style={canvasStyle}></canvas> 

        Black/Blue:  <canvas id="blueD" width="200" height="100" style={canvasStyle}></canvas> 

</div>
<hr/>

      
      <p>Green Cone Test</p>
      <input id="greenOne" type="range" min="0" max="255" onChange={changeGreen}/>
      <p/>
      <div className='can'>

      Purple/White: <canvas id="greenA" width="200" height="100" style={canvasStyle}></canvas>

      Red/Yellow: <canvas id="greenB" width="200" height="100" style={canvasStyle}></canvas>

      Blue/Cyan: <canvas id="greenC" width="200" height="100" style={canvasStyle}></canvas>

      Black/Green: <canvas id="greenD" width="200" height="100" style={canvasStyle}></canvas>
      </div>
      <hr/>
      <p>Red Cone Test</p>
      <input id="redOne" type="range" min="0" max="255" onChange={changeRed}/>
      <p/>
      <div className='can'>

      Cyan/White: <canvas id="redA" width="200" height="100" style={canvasStyle}></canvas>

      Blue/Purple: <canvas id="redB" width="200" height="100" style={canvasStyle}></canvas>

      Green/Yellow: <canvas id="redC" width="200" height="100" style={canvasStyle}></canvas>

      Black/Red: <canvas id="redD" width="200" height="100" style={canvasStyle}></canvas>
      </div>
    
    
    </div>
  );
}

export default App;
