import Controls from "./components/Controls/Controls";
import Pad from "./components/Pad/Pad";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {

    return (
        <div id="drum-machine">
            <header>
                <h1>Drum Machine</h1>
            </header>
            <div id="machine-wrapper">
                <Provider store={store}>
                    <Pad />
                    <Controls />
                </Provider>
            </div>
            <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
        </div>
    );
}

export default App;
