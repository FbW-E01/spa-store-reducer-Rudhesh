import {useReducer} from 'react'


const initialState = {
    strength : 50,
    gear:0,
    speed : 1
    
}

function reducer(previousState, action) {

    if (action.type === "stop") {

        
        return {
            strength: previousState.strength == 0
        }
        }
    if (previousState.strength === 0) {
        alert("boat engine is fail : Strength " + previousState.strength + "%" )
    }

    else {

   
    

    if (action.type === "increment") {

        if (previousState.gear < 5) {
            
            return {
                gear : previousState.gear + 1, speed : previousState.speed + 10, strength : previousState.strength - 2
            }
        }
        else 
        {
              
            return {
                gear : previousState.gear , speed : previousState.speed , strength : previousState.strength
            }  
        }
    }

    if (action.type === "decrement") {
        if (previousState.gear > -2 ) {
            return {
                gear : previousState.gear - 1, speed : previousState.speed - 5, strength : previousState.strength - 2
            }  
        }
        else {
            
            return {
                gear : previousState.gear , speed : previousState.speed , strength : previousState.strength
            }  
        }
       
    }

    if (action.type === "reset") {
        return initialState
    }


}
    return previousState
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


    return (
        <div style = {divStyle}>
            <h1>Boat Speed-O-Meter</h1>
       boat engine strength : {state.strength} %
       <br/>
       boat speed : {state.speed} km/h
       <br/>
       boat gear : {state.gear}
       <br/>
       <button onClick={()=> dispatch({type: "stop"})}>
       stop engine
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