import React, { useContext } from 'react';
import { icons } from '../../assets/icons/icon';
import { ThemeContext } from '../../App';

const LanguageAndTheme = () => {
    const [context,setContext] = useContext(ThemeContext);
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
                <img src={icons.uk_flag} alt="uk flag" />
                <h4 className="font-11">Eng</h4>
            </div>
            <div className="theme">
                <img onClick={() => setContext({...context,theme:'light'})} className={`${context.theme === 'light' ? 'active' : ''} `} src={context.theme === 'dark' ? icons.sun_dark :icons.sun_light } alt="" />
                <img onClick={() => setContext({...context,theme:'dark'})} className={`${context.theme === 'dark' ? 'active' : ''} `} src={context.theme === 'light' ? icons.moon_light : icons.moon_dark} alt="" />
            </div>
        </div>
    );
}

export default LanguageAndTheme;
