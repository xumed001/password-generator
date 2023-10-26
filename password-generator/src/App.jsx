// import { useState } from 'react'
import './App.css'
import { sha256 } from 'js-sha256'
import NavBar from './components/NavBar'

function App() {
  const array = new Uint32Array(1)
  let seed = self.crypto.getRandomValues(array)
  let hashCode = sha256(seed)
  let hashArr = [...hashCode]

  const fyShuffle = (toShuffle = []) => {
    for (let i = (toShuffle.length - 1); i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
    }
    return toShuffle;
  }

  return (
    <>
      <NavBar />

      <main>
        <p>Seed: {seed}</p>
        <p>hash code: {hashCode}</p>
        <p>Shuffled: {fyShuffle(hashArr)}</p>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
