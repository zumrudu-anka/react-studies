import { useSelector, useDispatch } from "react-redux";
import { switchAction } from "../../store/actions/switchAction";
import { setVolumeAction } from "../../store/actions/setVolumeAction";
import { setDisplayTextAction } from "../../store/actions/setDisplayTextAction.js";
import { useRef } from "react";

const Controls = () => {
    const powerStatus = useSelector(state => state.drumMachine.status);
    const volume = useSelector(state => state.drumMachine.volume);
    const displayText = useSelector(state => state.drumMachine.displayText);
    const dispatch = useDispatch();
    const volumeColors = {
        powerOn: "#3c82a1",
        powerOff: "#6b0202"
    };
    const displayTimeout = useRef(null);

    const switchPower = () => {
        dispatch(switchAction());
        document.documentElement.style.setProperty("--slider-thumb-color", powerStatus ? volumeColors.powerOff : volumeColors.powerOn);
    }

    const setVolume = e => {
        clearTimeout(displayTimeout.current);
        const volumeValue = e.target.value;
        dispatch(setVolumeAction(volumeValue));
        if(displayText !== ""){
            const oldText = displayText;
            dispatch(setDisplayTextAction(`Volume: ${volumeValue * 100}`));
            if(oldText && oldText !== "" && oldText !== null && !oldText.includes("Volume")){
                displayTimeout.current = setTimeout(() => {
                    dispatch(setDisplayTextAction(oldText));
                }, 1000);
            }
        }
    };

    return (
        <section id="control-box">
            <div id="power-box">
                <h4>Power</h4>
                <input type="checkbox" onChange={() => switchPower()} checked={powerStatus} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 8
            }}>
                <h5>Volume</h5>
                <div id="volume-control">
                    <input type="range" id="volume-range" min={0} max={1} value={volume} step={0.1} onChange={(e) => { setVolume(e) }}/>
                </div>
            </div>
            <p id="display" className={!powerStatus ? "off" : ""}>
                {displayText}
            </p>
            <p id="powered-by">Powered by <a href="https://osmandurdag.com" target="_blank" rel="noreferrer">Osman DURDAĞ</a></p>
        </section>
    )
}

export default Controls