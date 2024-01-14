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
      // eslint-disable-next-line
  }, []); // Pass an empty array to only call the function once on mount.
  
  function canvasFill(id, col){
    let canv = document.getElementById(id);
    canv = canv.getContext("2d");
    canv.rect(0, 0, 200, 100);
    canv.fillStyle = col;
    canv.fill();
    return
  }


  function changeBlue(){
    const elem = document.getElementById("blueOne")
    const perc = document.getElementById("blueOnePerc")
    if (elem === null)return console.log("null")
    let val = elem.value
    perc.innerText = Math.floor(val/2.55) + "%"
    let colourA = `rgb(255,255,${val})`
    let colourB = `rgb(255,0,${val})`
    let colourC = `rgb(0,255,${val})`
    let colourD = `rgb(0,0,${val})`
    canvasFill("blueA", colourA)
    canvasFill("blueB", colourB)
    canvasFill("blueC", colourC)
    canvasFill("blueD", colourD)
    
  }

  function changeGreen(){
    const elem = document.getElementById("greenOne")
    const perc = document.getElementById("greenOnePerc")
    if (elem === null)return console.log("null")
    let val = elem.value
    perc.innerText = Math.floor(val/2.55) + "%"
    let colourA = `rgb(255,${val},255)`
    let colourB = `rgb(255,${val},0)`
    let colourC = `rgb(0,${val},255)`
    let colourD = `rgb(0,${val},0)`
    canvasFill("greenA", colourA)
    canvasFill("greenB", colourB)
    canvasFill("greenC", colourC)
    canvasFill("greenD", colourD)
  }

  function changeRed(){
    const elem = document.getElementById("redOne")
    const perc = document.getElementById("redOnePerc")
    if (elem === null)return console.log("null")
    let val = elem.value
    perc.innerText = Math.floor(val/2.55) + "%"
    let colourA = `rgb(${val},255,255)`
    let colourB = `rgb(${val},0,255)`
    let colourC = `rgb(${val},255,0`
    let colourD = `rgb(${val},0,0)`
    canvasFill("redA", colourA)
    canvasFill("redB", colourB)
    canvasFill("redC", colourC)
    canvasFill("redD", colourD)
  }

  return (
    <div className="App">
      
      <p>Vision Test</p>
      <hr/>
      <p>Blue Cone Test</p>
      <div className='range'>
      <input id="blueOne" type="range" min="0" max="255" onChange={changeBlue}/>
      <label id="blueOnePerc"/>
      </div>
      <p/>
      <div className="can">
  
        <div className="can">Yellow/White: <canvas id="blueA" width="200" height="100" style={canvasStyle}></canvas></div>     

        <div className="can">Red/Purple:  <canvas id="blueB" width="200" height="100" style={canvasStyle}></canvas></div> 

        <div className="can">Green/Cyan:  <canvas id="blueC" width="200" height="100" style={canvasStyle}></canvas></div> 

        <div className="can">Black/Blue:  <canvas id="blueD" width="200" height="100" style={canvasStyle}></canvas></div> 

</div>
<hr/>

      
      <p>Green Cone Test</p>
      <div className='range'>
      <input id="greenOne" type="range" min="0" max="255" onChange={changeGreen}/>
      <label id="greenOnePerc"/>
      </div>
      <p/>
      <div className='can'>

      Purple/White: <canvas id="greenA" width="200" height="100" style={canvasStyle}></canvas>

      Red/Yellow: <canvas id="greenB" width="200" height="100" style={canvasStyle}></canvas>

      Blue/Cyan: <canvas id="greenC" width="200" height="100" style={canvasStyle}></canvas>

      Black/Green: <canvas id="greenD" width="200" height="100" style={canvasStyle}></canvas>
      </div>
      <hr/>
      <p>Red Cone Test</p>
      <div className='range'>
      <input id="redOne" type="range" min="0" max="255" onChange={changeRed}/>
      <label id="redOnePerc"/>
      </div>
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
