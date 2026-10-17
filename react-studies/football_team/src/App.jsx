import './App.css'
import Home_Team from './components/Home_Team'
import Opponent_Team from './components/Opponent_Team'

function App() {

    return (
        <>
            <Opponent_Team />
            <hr />
            <div className="center_area"></div>
            <Home_Team />
        </>
    )
}

export default App
