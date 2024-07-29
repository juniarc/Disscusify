import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

function LangBtn() {
    return(
        <button className="lang-btn">
            <p>English (USA)</p>
            <FaChevronDown />
        </button>
    )
}

export default LangBtn;
