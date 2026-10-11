import { configureStore } from "@reduxjs/toolkit";
import { updatePreviewReducer } from "./reducers/updatePreviewReducer";


export const store = configureStore({
    reducer: {
        updatePreviewReducer
    }
});