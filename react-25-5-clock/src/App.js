import { faAngleDown, faAngleUp, faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const App = () => {
    const defaultBreakLength = 5;
    const defaultSessionLength = 25;
    const [breakLength, setBreakLength] = useState(defaultBreakLength);
    const [sessionLength, setSessionLength] = useState(defaultSessionLength);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [timer, setTimer] = useState(defaultSessionLength * 60);
    const [timeLeft, setTimeLeft] = useState(`${defaultSessionLength}:00`);
    const [timerType, setTimerType] = useState("Session");
    const interval = useRef(null);
    const audioBeep = useRef();
    
    const breakLengthUpdate = value => {
      lengthControl(setBreakLength, value, breakLength, "Session");
    };
    
    const sessionLengthUpdate = value => {
      lengthControl(setSessionLength, value, sessionLength, "Break");
    };
    
    const lengthControl = (stateToChange, value, currentLength, _timerType) => {
      if(isTimerActive) return;
      if (timerType === _timerType) {
        if (value === -1 && currentLength !== 1) {
          stateToChange(currentLength - 1);
        } else if (value === 1 && currentLength !== 60) {
          stateToChange(currentLength + 1);
        }
      } else if (value === -1 && currentLength !== 1) {
        stateToChange(currentLength - 1);
        setTimer(currentLength * 60 - 60);
      } else if (value === 1 && currentLength !== 60) {
        stateToChange(currentLength + 1);
        setTimer(currentLength * 60 + 60);
      }
    }
    
    const timerTrigger = () => {
      setIsTimerActive(!isTimerActive);
    };
  
    useEffect(() => {
      if(isTimerActive){
        interval.current = setInterval(timerDecrement, 1000);
      }
      else{
        if(interval){
          clearInterval(interval.current);
          interval.current = null;
        }
      }
    }, [isTimerActive]);
    
    const beginCountDown = () => {
      interval.current = setInterval(timerDecrement, 1000);
    };
    
    const timerDecrement = () => {
      setTimer(timer => timer - 1);
    }
    
    const switchTimer = (value, _timerType) => {
      setTimer(value);
      setTimerType(_timerType);
    }
    
    useEffect(() => {
      if(timer < 0){
        setTimeLeft("00:00");
        if(interval){
             clearInterval(interval.current);
            interval.current = null;
          }
        if(timerType === "Session"){
            switchTimer(breakLength * 60, "Break");        
        }
        else{
            switchTimer(sessionLength * 60, "Session");        
        }
        beginCountDown();
      }
      else{
        let minutes = Math.floor(timer / 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
  
        let seconds = timer - minutes * 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        
        setTimeLeft(`${minutes}:${seconds}`);
      }
    }, [timer]);
    
    useEffect(() => {
      if(timeLeft === "00:00"){
        audioBeep.current.play();
      }
    }, [timeLeft]);
   
    const reset = () => {
      setTimerType("Session");
      setBreakLength(5);
      setSessionLength(25);
      setIsTimerActive(false);
      setTimer(1500);
      if(interval){
        clearInterval(interval.current);
        interval.current = null;
      }
      audioBeep.current.currentTime = 0;
      audioBeep.current.pause();
    };
    
    return (
      <main>
        <header>
          <h1>25 + 5 Clock</h1>
        </header>
          <section className="controls">
            <div className="break-controls">
              <h2 id="break-label">
                Break Length
              </h2>
              <div className="set-timer-controls">
                <button id = "break-decrement" onClick = {() => breakLengthUpdate(-1)}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
                <p id="break-length">{breakLength}</p>
                <button id = "break-increment" onClick = {() => breakLengthUpdate(1)}>
                  <FontAwesomeIcon icon={faAngleUp} />
                </button>
              </div>
            </div>
            <div className="session-controls">
              <h2 id="session-label">
                Session Length
              </h2>
              <div className="set-timer-controls">
                <button id = "session-decrement" onClick = {() => sessionLengthUpdate(-1)}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
                <p id="session-length">{sessionLength}</p>
                <button id = "session-increment" onClick = {() => sessionLengthUpdate(1)}>
                  <FontAwesomeIcon icon={faAngleUp} />
                </button>
              </div>
            </div>
          </section>
          <div className="timer">
            <h2 id="timer-label">
              {timerType}
            </h2>
            <p id="time-left">{timeLeft}</p>
            <div className = "timer-controls">
              <button id="start_stop" onClick = {() => timerTrigger()}>
                <FontAwesomeIcon icon={isTimerActive ? faPause : faPlay} />
              </button>
              <button id="reset" onClick = {() => reset()}>
                <FontAwesomeIcon icon={faRotate} />
              </button>
            </div>
          </div>
          <audio
            id="beep"
            ref = {audioBeep}
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          />
      </main>
    );
  };

export default App;
