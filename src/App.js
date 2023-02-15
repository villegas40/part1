import { useState } from "react"

const Hello = ({name, age}) =>{
  const bornYear = () => new Date().getFullYear() - age

  return(
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were born probabbly in {bornYear()}
      </p>
    </div>
  )
}

const Display = ({counter}) => <div>Counter: {counter}</div>

//Se le pasa el evento por medio de props y este se recupera con el nombre del evento pasado
const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>

const History = (props) => {
  if (props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  //Agregando dos estados mas 
  const [clicks, setClicks] = useState({
    left:0, 
    right:0
  })
  
  //Array to remeber all clicks ocurred in the application
  const[left, setLeft] = useState(0)
  const[right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClicks = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClicks = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  //Se definen las funciones para hacer las adiciones y guardarlas en un objeto nuevo
  //usando los object spread
  const handLeftClicks = () => {
    setClicks({...clicks,left: clicks.left + 1})
  }
  const handRightClicks = () => {
    setClicks({...clicks,right: clicks.right + 1})
  }

  //const {counter} = props
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value ', counter)

  //Separating event handlers, this is not ok but for this example is ok because of it simplicity
  const increaseByOne = () => {
    console.log('increasing, value before ', counter)
    setCounter(counter + 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before ', counter)
    setCounter(0)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before ', counter)
    setCounter(counter - 1)
  }

  //const handleClick = () => {
  //  console.log('clicked')
  //}
  
  //setTimeout(
  //  () => setCounter(counter + 1),
  //  1000
  //)

  const name = 'Peter'
  const age = 10
  const friends = [
    {name:'Peter', age:4},
    {name:'Maya', age:10}
  ]
  const friendsArray = ['Peter', 'Maya']

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age}/>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friendsArray}</p>
      <Display counter={counter}/>
      <Button onClick = {increaseByOne} text='plus'/>
      <Button onClick = {setToZero} text='zero'/>
      <Button onClick = {decreaseByOne} text='minus'/>
      <br />
      {clicks.left}
      <button onClick={handLeftClicks}>left</button>
      {clicks.right}
      <button onClick={handRightClicks}>right</button>
      <br/>
      {left}
      <Button onClick={handleLeftClicks} text='left' />
      {right}
      <Button onClick={handleRightClicks} text='right' />
      <History allClicks = {allClicks}/>
    </div>
  )
}

export default App;
