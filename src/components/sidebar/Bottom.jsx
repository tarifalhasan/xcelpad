import React from 'react';
import AccountBalance from './AccountBalance';
import LanguageAndTheme from './LanguageAndTheme';

const Bottom = () => {
    return (
        <div className='sidebar_bottom ps-8'>
            <div className="px-15">
                <AccountBalance/>
                <hr />
                <LanguageAndTheme/>
            </div>
        </div>
    );
}

export default Bottom;
