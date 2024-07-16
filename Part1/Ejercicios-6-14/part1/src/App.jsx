// import { useState } from 'react';

// const Statistics = ({ text, value }) => {
//   return (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <td>{text}</td>
//             <td>{value}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const Total = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad;

//   if (total === 0) {
//     return (
//       <div>
//         <p>No feedback given</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Statistics text="good" value={good} />
//       <Statistics text="neutral" value={neutral} />
//       <Statistics text="bad" value={bad} />
//       <Statistics text="all" value={total} />
//       <Statistics text="average" value={((good - bad) / total).toFixed(2)} />
//       <Statistics text="positive" value={((100 * good) / total).toFixed(2)} />
//     </div>
//   );
// };

// const Button = ({ onClick, text }) => {
//   return (
//     <div>
//       <button onClick={onClick}>{text}</button>
//     </div>
//   );
// };

// const App = () => {
//   // guarda los clics de cada botón en su propio estado
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleGoodButton = () => {
//     setGood(good + 1);
//   };

//   const handleNeutralButton = () => {
//     setNeutral(neutral + 1);
//   };

//   const handleBadButton = () => {
//     setBad(bad + 1);
//   };

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <div>
//         <Button onClick={handleGoodButton} text="good" />
//         <Button onClick={handleNeutralButton} text="neutral" />
//         <Button onClick={handleBadButton} text="bad" />
//       </div>
//       <h2>statistics</h2>
//       <Total good={good} neutral={neutral} bad={bad} />
//     </div>
//   );
// };

// export default App;


import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const handleRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    if (newVotes[selected] > newVotes[mostVotes]) {
      setMostVotes(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleRandomAnecdote}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[mostVotes]}</div>
      <p> has {votes[mostVotes]} votes</p>
    </div>
  )
}

export default App

