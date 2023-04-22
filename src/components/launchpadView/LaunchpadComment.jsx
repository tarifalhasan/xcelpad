import React from 'react';
import Comment from '../comment/Comment';
import { Link } from 'react-router-dom';
import { icons } from '../../assets/icons/icon';
import InputOnly from '../form/InputOnly';
import LaunchpadSingleCmnt from './LaunchpadSingleCmnt';

const LaunchpadComment = () => {
    return (
        <div className='p-4 card border-0'>
            <div className="comment_header d-flex align-items-center justify-content-between pb-2 border-2 border-bottom mb-4">
                <h4 className='font-18'>1 Comment</h4>
                <div className="d-flex align-items-center gap-2">
                <Comment number={1}/>
                <Link><span className='font-16'>Login</span></Link>
                </div>
            </div>

            <div className="comment_input mb-4">
                <div className="profile d-flex gap-2">
                    <img src={icons.profile} alt="profile" />
                    <InputOnly placeholder={'Join the discussion'}/>
                </div>
            </div>
            <div className="login_with d-flex align-items-start mb-4 ">
                <div className='w-25'>
                    <p className="font-16 text-uppercase mb-2">Login With</p>
                    <div className="d-flex gap-2 align-items-center">
                        <Link><img src={icons.twitter} alt="" /></Link>
                        <Link><img src={icons.discord} alt="" /></Link>
                        <Link><img src={icons.medium} alt="" /></Link>
                    </div>
                </div>
                <div className='w-75'>
                    <p className="font-16 text-uppercase">or signup with</p>
                    <InputOnly placeholder={'Name'}/>
                </div>
            </div>
            <LaunchpadSingleCmnt/>

            
        </div>
    );
}

export default LaunchpadComment;
