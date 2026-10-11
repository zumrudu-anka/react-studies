/**
*   @author Osman DURDAĞ
*   @version 0.0.1
*   @since 05.12.2020
*   @copyright Osman DURDAĞ
*/

import React from 'react';

export default function Document(props) {
    return (
        <div>
            <div className = {"document"}>
                {props.children}
            </div>
        </div>
    )
}
