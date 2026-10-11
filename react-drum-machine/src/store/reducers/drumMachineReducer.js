const initialState = {
    status: true,
    volume: 1,
    displayText: "Power On"
};

export const drumMachineReducer = (state = initialState, action) => {
    switch (action.type) {
        case "switch":
            return { ...state, status: !state.status, sound: "", displayText: state.status ? "Power Off" : "Power On" };
        case "setVolume":
            return { ...state, volume: action.value };
        case "setDisplayText":
            return { ...state, displayText: action.displayText };
        default:
            return state;
    }
};