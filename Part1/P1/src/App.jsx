import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {

    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 

    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {

    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}





// const App = () => {
//   const [ counter, setCounter ] = useState(0)


//   const increaseByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)
//   console.log('rendering...', counter)
//   return (
//     <div>
//       <div>{counter}</div>

//       <button onClick={increaseByOne}>
//         plus
//       </button>

//       <button onClick={setToZero}>
//         zero
//       </button>
//     </div>
//   )
// }




// const App = () => {

//   const [ counter, setCounter ] = useState(0)


//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//   console.log('rendering...', counter)
//   return (
//     <div>{counter}</div>
//   )
// }
// export default App






// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App





// const Hello = (props) => {
//   const { name, age } = props
//   const bornYear = () => new Date().getFullYear() - age

//   return (  
//     <div>
//       <p>
//         Hola {name}, tu tienes {age} de edad.
//       </p>
//       <p>Probablemente naciste en el año {bornYear()}</p>
//     </div>
//   )
// }

// const props = {
//   name: 'Arto Hellas',
//   age: 35,
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

export default App