import {
  useState,
  useRef,
  useEffect
} from "react";

function App() {

  const minutesRef = useRef(null);
  const secondsRef = useRef(null);
  const progressBarRef = useRef(null);

  const [startStopText, setStartStopText] = useState("START");
  const [progress, setProgress] = useState(null);
  const [progressEnd, setProgressEnd] = useState(25);
  const [progressStart, setProgressStart] = useState(0);
  const speed = 1000;
  const [degTravel, setDegTravel] = useState(360 / 25);
  const [isSettingsActive, setIsSettingsActive] = useState(false);

  useEffect(() => {

    return () => {
      
      if(progressStart != 0 && progressStart <= progressEnd){
        let minutes = minutesRef.current;
        let seconds = secondsRef.current;
        let remainingMinutes = Math.floor((progressEnd - progressStart) / 60);
        let minutesText = remainingMinutes.toString().length > 1 ? remainingMinutes : `0${remainingMinutes}`;
  
        let remainingSeconds = Math.floor((progressEnd - progressStart) % 60);
        let secondsText = remainingSeconds.toString().length > 1 ? remainingSeconds : `0${remainingSeconds}`;
  
        minutes.innerHTML = minutesText;
        seconds.innerHTML = secondsText;
        
        let progressBar = progressBarRef.current;
        progressBar.style.background = `conic-gradient(
          #9d0000 ${progressStart * degTravel}deg,
          #17171a ${progressStart * degTravel}deg
        )`;
  
        if (progressStart === progressEnd) {
          setProgress(null);
        }
      }
      
    };
  }, [progressStart]);

  const progressTrack = () => {
    setProgressStart(progressStart => progressStart + 1);
  }

  useEffect(() => {
    let progressBar = progressBarRef.current;

    if (progressStart === progressEnd || progressStart === progressEnd + 1){
      progressBar.style.background = `conic-gradient(
        #00aa51 360deg,
        #00aa51 360deg
      )`;
    }
    else if(progressStart > 0){
      progressBar.style.background = `conic-gradient(
        #9d0000 ${(progressStart - 1) * degTravel}deg,
        #17171a ${(progressStart - 1) * degTravel}deg
      )`;
    }
    else{
      progressBar.style.background = `conic-gradient(
        #17171a 360deg,
        #17171a 360deg
      )`;
    }

    return () => {
      if(progress){
        clearInterval(progress);
        setStartStopText("START");
      }
    };
  }, [progress]);
  

  let startStopProgress = () => {
    if (!progress) {
      setProgress(setInterval(progressTrack, speed));
    } else {
      setProgress(null);
    }
  }

  let startStopHandler = () => {
    let minutes = minutesRef.current.innerHTML;
    let seconds = secondsRef.current.innerHTML;
    if (startStopText === "START") {
      if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
        setStartStopText("STOP");
        startStopProgress();
      } else {
        alert("Enter the Time Value in your Timer!");
      }
    } else {
      setStartStopText("START");
      startStopProgress();
    }
  }

  //#region SETTINGS
  const updateSettingOptions = () => {
    let minutesElem = minutesRef.current;
    let secondsElem = secondsRef.current;
    if(isSettingsActive){
      minutesElem.contentEditable = false;
      minutesElem.style.borderBottom = `none`;
      secondsElem.contentEditable = false;
      secondsElem.style.borderBottom = `none`;
    }
    else{
      minutesElem.contentEditable = true;
      minutesElem.style.borderBottom = `1px dashed #ffffff50`;
      secondsElem.contentEditable = true;
      secondsElem.style.borderBottom = `1px dashed #ffffff50`;
    }
  }

  useEffect(() => {
    return () => {
      updateSettingOptions();

      if(isSettingsActive){
        
        let minutesElem = minutesRef.current;
        let secondsElem = secondsRef.current;
        
        setProgress(null);
        setProgressStart(0);

        let progressEndVal = parseInt(minutesElem.innerHTML) * 60 + parseInt(secondsElem.innerHTML);
        setProgressEnd(progressEndVal);
        setDegTravel(360 / progressEndVal);

      }
    };
  }, [isSettingsActive]);

  const setTime = event => {
    event.target.innerHTML = event.target.innerHTML.length > 1 ? event.target.innerHTML : `0${event.target.innerHTML}`;

    setIsSettingsActive(!isSettingsActive);
  }
  //#endregion
  
  return (
    <div className="container">
      <div className="outerRing" ref = {progressBarRef}>
        <div className="timer">
          <div id="time">
            <span id="minutes" ref = {minutesRef} onBlur = {setTime}>00</span>
            <span id="colon">:</span>
            <span id="seconds" ref = {secondsRef} onBlur = {setTime}>25</span>
          </div>
          <div id="stsp" onClick = {startStopHandler} className = {startStopText === "START" ? "start" : "stop"}>{startStopText}</div>
          <span id="setting" onClick = {() => setIsSettingsActive(!isSettingsActive)}><i className="fas fa-cog"></i></span>
        </div>
      </div>
    </div>
  );
}

export default App;
