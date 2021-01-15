import React from 'react'
import axios from 'axios'
import { Container, Button } from 'reactstrap'

function App() {
  let wands
  axios
    .get('http://hp-api.herokuapp.com/api/characters')
    .then((data) => {
      wands = data.data.map((i) => i['wand'])
      console.log(wands[0]['wood'])
      return wands
    })
    .catch((e) => console.log(e))

  function handleGenerateWand() {
    let wandIndex = Math.floor(Math.random() * 24 + 1)

    console.log(wands[wandIndex])
  }

  return (
    <>
      <Container className="p-3 text-center">
        <h1>Generate Your Wand</h1>
        <Button onClick={handleGenerateWand}>Collect Now</Button>
      </Container>
    </>
  )
}

export default App
