import React from 'react';
import { useState, useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

import GithubContext from '../../context/github/GithubContext';


const UserSearch = () => {

    const [input, setInput] = useState('');

    const { users, clearUsers, dispatch } = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);

    const handleInputChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (input === '') {
            setAlert('Please type on the search bar', 'error')
        } else {

            dispatch({
                type: 'SET_LOADING'
            })

            const users = await searchUsers(input);
            dispatch({
                type: 'GET_USERS',
                payload: users
            })
            setInput('');
        }
    };

    //clear search results

    const clearSearch = () =>{
        clearUsers();
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder='Search'
                                value={input}
                                onChange={handleInputChange}
                            />

                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {users.length > 0 && (
                <div>
                    <button className="btn btn-ghost btn-lg" onClick={clearSearch}>
                        Clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserSearch