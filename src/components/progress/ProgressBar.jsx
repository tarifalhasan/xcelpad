import React from 'react';
import './progress.css'
const ProgressBar = ({progress}) => {
    return (
        <div className="progress">
            <div style={{width:`${progress}%`}} className="progress_value"></div>
        </div>
    );
}

export default ProgressBar;
