import React from 'react';
import { icons } from '../../assets/icons/icon';
import { Link } from 'react-router-dom';

const LaunchpadSingleCmnt = () => {
    return (
        <div>
            <div className="profile_details d-flex align-items-center justify-content-between">
                <div className="d-flex gap-2 align-items-start">
                    <img src={icons.profile} alt="profile" />
                    <div>
                        <p className="font-18 mb-0">Stive Jhon <Link><img className='small_img' src={icons.add_friend} alt="" /></Link></p>
                        <p className="font-16">a day ago</p>
                    </div>
                </div>

            </div>
            <div className="comment_text my-4 ">
                <p className='font-16'>✅ Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p className='font-16'>✅ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem, ipsum.</p>
                <p className='font-16'>✅ Lorem ipsum dolor sit amet consectetur, elit.</p>
                <p className='font-16'>✅ Lorem  amet consectetur, adipisicing .</p>
            </div>
            <p className='font-16 mb-4'>
                <em>Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim illum voluptate maxime corrupti minus perferendis ullam quia hic laborum autem nobis similique explicabo, iure est error repellendus officia beatae dolorem totam, culpa fugit itaque atque necessitatibus. Autem quibusdam dolores dolore voluptatem, officiis, optio eveniet ratione quas incidunt impedit asperiores.</em>
            </p>

            <div className="d-flex align-items-center gap-2 cmnt_reaction">
                <Link className='d-flex align-items-center'><img className='small_img' src={icons.thumbs_up} alt="thumbs up" /><span className="font-18">0</span></Link>
                <Link className='d-flex align-items-center'><img className='small_img' src={icons.thumbs_up} alt="thumbs down" /><span className="font-18">0</span></Link>
                <Link><span className="font-16">Reply</span></Link>
                <div className='d-flex align-items-center gap-2'>
                    <Link><span className="font-16">Share</span></Link>
                    <div className="d-flex gap-2 align-items-center">
                        <Link><img src={icons.twitter} alt="" /></Link>
                        <Link><img src={icons.discord} alt="" /></Link>
                        <Link><img src={icons.medium} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LaunchpadSingleCmnt;
