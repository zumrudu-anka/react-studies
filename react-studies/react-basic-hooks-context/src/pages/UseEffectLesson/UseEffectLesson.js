import React, {useState, useEffect} from 'react'
let belirliCounter = 0;
let sayfaCounter = 0;
// let herhangiCounter = 0;
let belirliDurumCounter = 0;
let digerDurum = 0;
let digerDurum2 = 0;

export default function useEffectLesson() {
    const [sayfaYuklendiginde, setSayfaYuklendiginde] = useState("");
    // const [herhangiBirState, setHerhangiBirState] = useState("");
    const [belirliBirState, setBelirliBirState] = useState("");
    const [digerState, setDigerState] = useState("");
    const [digerState2, setDigerState2] = useState("");
    // const [durum, setDurum] = useState("State");
    const [durum2, setDurum2] = useState("State2");
    const [durum3, setDurum3] = useState("State3");
    // const [durum4, setDurum4] = useState("State4");

    
    useEffect(() => {
        sayfaCounter++;
        setSayfaYuklendiginde("Sayfa yüklendiğinde Çalışır " + sayfaCounter);
    }, []);

    // useEffect(() =>{
    //     herhangiCounter++;
    //     setHerhangiBirState("Herhangi bir state setlendiğinde Çalışır " + herhangiCounter);
    //     setDurum("Herhangi bir state Setlendi " + herhangiCounter);
    // });

    useEffect(() =>{
        belirliDurumCounter++;
        setDurum2("Belirli bir state Setlendi " + belirliDurumCounter);
    }, [belirliBirState]);

    useEffect(() =>{
        setDurum3("Diger bir state Setlendi " + digerDurum + " " + digerDurum2);
    }, [digerState, digerState2]);

    const style = {
        textAlign : "center"
    }

    const changeBelirliState = () =>{
        belirliCounter++;
        setBelirliBirState("Belirli State Degistiginde Calisir Yeni Setlendi " + belirliCounter);
    }

    const changeDigerState = () =>{
        digerDurum++;
        setDigerState("Diger State Degistiginde Calisir Yeni Setlendi " + digerDurum);
    }

    const changeDigerState2 = () =>{
        digerDurum2++;
        setDigerState2("Diger State2 Degistiginde Calisir Yeni Setlendi " + digerDurum2);
    }
    
    return (
        <div style = {style} className = "useEffectPage">
            <h2>Use Effect Çalışması</h2>
            <hr/>
            <br/><br/><br/>
            {sayfaYuklendiginde}
            <br/>
            {/* {herhangiBirState} */}
            <br/>
            {belirliBirState}
            <br/>
            <br/>
            <button onClick={changeBelirliState}>Change Belirli State</button>
            <br/><br/>
            <button onClick={changeDigerState}>Change Belirli State</button>
            <br/><br/>
            <button onClick={changeDigerState2}>Change Belirli State</button>
            <br/><br/><br/><br/>
            <p>
                {/* {durum} */}
            </p>
            <p>
                {durum2}
            </p>
            <p>
                {durum3}
            </p>
            <p>
                {/* {durum4} */}
            </p>
        </div>
    )
}
