import Board from './components/Board'
import Header from './components/Header'
import './index.css'
const App = () => {
  
  return (
    <div>
      <Header />
      <div className='game'>
        <Board />
      </div>
    </div>
  )
}

export default App
