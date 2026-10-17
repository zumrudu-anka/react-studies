import clap from "./Clap.mp3";
import closed_hh from "./Closed_HH.mp3";
import heater_1 from "./Heater-1.mp3";
import heater_2 from "./Heater-2.mp3";
import heater_3 from "./Heater-3.mp3";
import heater_4 from "./Heater-4.mp3";
import kick_and_hat from "./Kick_n_Hat.mp3";
import kick from "./Kick.mp3";
import open_hh from "./Open_HH.mp3";

export const audios = [
    {
        src: heater_1,
        id: "Heater-1",
        key: "Q",
        keyCode: 81
    },
    {
        src: heater_2,
        id: "Heater-2",
        key: "W",
        keyCode: 87
    },
    {
        src: heater_3,
        id: "Heater-3",
        key: "E",
        keyCode: 69
    },
    {
        src: heater_4,
        id: "Heater-4",
        key: "A",
        keyCode: 65
    },
    {
        src: clap,
        id: "Clap",
        key: "S",
        keyCode: 83
    },
    {
        src: open_hh,
        id: "Open-HH",
        key: "D",
        keyCode: 68
    },
    {
        src: kick_and_hat,
        id: "Kick-n'-Hat",
        key: "Z",
        keyCode: 90
    },
    {
        src: kick,
        id: "Kick",
        key: "X",
        keyCode: 88
    },
    {
        src: closed_hh,
        id: "Closed-HH",
        key: "C",
        keyCode: 67
    }
];