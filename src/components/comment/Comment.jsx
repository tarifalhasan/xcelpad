import React from 'react';
import { icons } from '../../assets/icons/icon';

const Comment = ({number}) => {
    return (
        <div className="position-relative comment">
            <img src={icons.comment} alt="comment" />
            <p className='position-absolute'>{number}</p>
        </div>
    );
}

export default Comment;
