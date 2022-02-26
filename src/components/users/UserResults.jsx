import React from 'react';
import {useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';


const UserResults = () => {

    const {loading, users} = useContext(GithubContext)


    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cos-2">
                {
                    users.map((user) => (
                        <UserItem
                            key={user.id}
                            login={user.login}
                            user={user.login}
                            avatar={user.avatar_url}
                        />
                    ))
                }
            </div>
        )
    } else {
        return (
            <Spinner />
        )
    }
}

export default UserResults