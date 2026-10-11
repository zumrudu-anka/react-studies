/**
*   @author Osman DURDAĞ
*   @version 0.0.1
*   @since 05.12.2020
*   @copyright Osman DURDAĞ
*/

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to = "/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to = "/login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
