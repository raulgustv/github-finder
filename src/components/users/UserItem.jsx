import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({user, avatar}) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar} alt="Profile" />
                    </div>
                </div>
                <h2 className="card-title">
                    {user}
                </h2>
                
                <Link to={`/user/${user}`} className="text-base-content text-opacity-40">Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem