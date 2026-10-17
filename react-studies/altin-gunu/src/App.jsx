import atauni from "./assets/images/atauni.png";
import goldbars from "./assets/images/gold-bars.png";
import Currencies from "./components/Currencies/Currencies";
import Participants from "./components/Participants/Participants";

function App() {

    return (
        <>
            <header>
                <img className="atauni-logo" src={atauni} alt="atauni-logo" />
                <div className="center-div">
                    <h1>A Üniversitesi</h1>
                    <h1>B Fakültesi</h1>
                    <h1>Altın Günü</h1>
                </div>
                <img className="gold-bars" src={goldbars} alt="gold-bars" />
            </header>
            <p className="notes">
                Buluşma Günü: Her Ayın 17'si
            </p>
            <main>
                <Currencies/>
                <Participants />
            </main>

        </>
    )
}

export default App
