import { audios } from "../../assets/audios";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayTextAction } from "../../store/actions/setDisplayTextAction.js";

const Pad = () => {
    const dispatch = useDispatch();
    const powerStatus = useSelector(state => state.drumMachine.status);
    const volume = useSelector(state => state.drumMachine.volume);

    const playSound = e => {
        if(!powerStatus) return;
        const buttonElement = e.target;
        dispatch(setDisplayTextAction(buttonElement.id));
        const audioElement = buttonElement.children[0];
        audioElement.currentTime = 0;
        audioElement.volume = volume;
        audioElement.play();
    }
    
    const handleKeyDown = (e, audio) => {
      e.keyCode === audio.keyCode && playSound(e);
    }
    return (
        <section id="pad">
            {audios.map(audio => (
                <button tabIndex={-100} key={`key_${audio.key}`} className="drum-pad" id={audio.id} onClick={e => playSound(e)} onKeyDown = {e => handleKeyDown(e, audio)}>
                    <audio id={audio.key} src={audio.src} className="clip" ></audio>{audio.key}
                </button>
            ))}
        </section>
    )
};

export default Pad;