import { useState } from 'react'


const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
]
const voteArray = Array.apply(null, {length: anecdotes.length}).map(function() {return 0;})

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

function getRandomInt(min, max) {
  var random = Math.floor(Math.random() * (max - min)) + min
  return random
}

const DisplayVote = ( {voteArray, selected }) => {
  return (
    <p>Number of votes for current anecdote: {voteArray[selected]}</p>
  )
}

function returnMaxIndex (voteArray) {
  const copy = [...voteArray]
  var i = 0
  var j = 0
  var index = 0

  copy.forEach(element => {
    if (element > i) {
      i = element
      index = j
    }
    j++
  });
  console.log(index)
  return index
}

function returnMaxVotes (voteArray) {
  const copy = [...voteArray]
  var i = 0

  copy.forEach(element => {
    if (element > i) {
      i = element
    }
  });
  return i
}

const DisplayMaxVote = ({anecdotes, index}) => {
  console.log(voteArray)
  console.log(index)
  return(
    <div>
      <h1>Most votes: </h1>
      <p>{anecdotes[index]}</p>
      <p>Votes: {returnMaxVotes(voteArray)}</p>
    </div>
  )
}

const App = () => {
          
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteArray)


  return (
    <div>
    <h1>Random anecdote generator</h1>
      <div>
        <p>{anecdotes[selected]}</p>
        <Button text={"Click for a random anecdote"} 
          handleClick={() => setSelected(getRandomInt(0, 7))}
        />
        <Button text={"Vote"} 
          handleClick={() => setVotes(voteArray[selected] += 1)}
        />
        <DisplayVote voteArray={voteArray} selected={selected}></DisplayVote>
        <DisplayMaxVote anecdotes={anecdotes} index={returnMaxIndex(voteArray)}></DisplayMaxVote>
      </div>
    </div>
  )
}

export default App