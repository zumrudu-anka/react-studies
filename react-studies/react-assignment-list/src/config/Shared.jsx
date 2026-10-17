/**
*   Created By Osman DURDAG
*/

/********************************************************************************************************
 *                              define variables
 *******************************************************************************************************/
 const Shared = {
    version: "1.0.0",
    root: null,
    loading: false,
    defaultLang : 'tr',
    lang : sessionStorage.getItem("lang") ?? "tr",
    langlist: [
        {value: 'tr', label: "tr"},
        {value: 'en', label: "en"}
    ],
};

/********************************************************************************************************
 *                              define fucntions
 *******************************************************************************************************/

/**
 * set state
 * @param state
 * @param callback
 */
Shared.setState = (state, callback) => {
    Object.assign(Shared, state);
    if (Shared.root) {
        Shared.root.setState(state, callback);
    }
};

Shared.isMobilee = () => {
    return window.innerWidth <=
        500
};

export default Shared;