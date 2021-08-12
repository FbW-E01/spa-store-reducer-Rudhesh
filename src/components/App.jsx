import {useReducer, useEffect, useState } from 'react'


const initialState = {
    strength : 50,
    gear:0,
    speed : 0,
    distance: 0,

    
}








const divStyle = {
textAlign : "center",
border: "1px black solid",
borderRadius : 100/2,
margin : "auto",
background : "red", 
color :"white",
fontSize : "2em"

}


function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("state is:", state)
    const [distance, setDistance] = useState(0);
    let [meter, setMeter] = useState(0);


    function reducer(previousState, action) {

      
        
        
     
        
            if (previousState.strength === 0) {
                alert("boat engine is fail : Strength " + previousState.strength + "%" )
            }
        
            else {

              
                if (action.type === "accelerate") {
            
            
                    if (previousState.gear !== 0 && previousState.speed < 220) {
                    
                    return {
                        
                        speed: previousState.speed + (previousState.gear * 10),
                        gear: previousState.gear,strength : previousState.strength,
                    }
                }
                    else 
                    {
                          
                        return {
                            gear : previousState.gear , speed : previousState.speed , strength : previousState.strength, distance: previousState.distance,
                        }  
                    }
                    
                    }
        
           
            if (action.type === "increment") {
        
                if (previousState.gear < 5 ) {
                    
                    return {
                
                        gear : previousState.gear + 1, speed : previousState.speed , distance: previousState.distance,strength : previousState.strength - 2,
                    }
                }
                else 
                {
                      
                    return {
                        gear : previousState.gear , speed : previousState.speed , strength : previousState.strength, distance: previousState.distance,
                    }  
                }
            }
        
        
        
        
            if (action.type === "decrement") {
                if (previousState.gear > -2 && previousState.speed >= -1) {
                    return {
                        gear : previousState.gear - 1, speed : previousState.speed - 1, strength : previousState.strength - 2,
                        distance: previousState.distance,
                    }  
                }
                else {
                    
                    return {
                        gear : previousState.gear , speed : previousState.speed , strength : previousState.strength, distance: previousState.distance,
                    }  
                }
               
            }
        
            if (action.type === "reset") {
                return initialState
            }
        
        }
        
        
            return previousState
        }
        
        
        useEffect(() => {
            setInterval(() => {
                setMeter(meter++);
            }, 1000);
        }, [])
        
        useEffect(() => {
            if (state.gear !== 0) {
                
            setDistance((distance + state.speed ) );
        }
        }, [meter])
        
        
        
        

    return (
        <div style = {divStyle}>
            <h1>Boat Speed-O-Meter</h1>
       boat engine strength : {state.strength} %
       <br/>
       boat speed : {state.speed} km/h
       <br/>
       boat gear : {state.gear}
       <br/>
       distance : {distance} km
       <br/>
       <button onClick={()=> dispatch({type: "accelerate"})}>
       accelerate
       </button>
       <button onClick={()=> dispatch({type: "reset"})}>
       start engine
       </button>
       <button onClick={()=> dispatch({type: "increment"})}>
       gear up
       </button>
       <button onClick={()=> dispatch({type: "decrement"})}>
       gear down
       </button>
       </div>
    )
}

export default App;