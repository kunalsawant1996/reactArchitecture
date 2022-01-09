import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from './actions';

const User = () => {
    const userData = useSelector(state => state.userDetails.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userRequest());
    }, [dispatch]);

    return (
        <div>
            {
                userData.length > 0 ?
                    userData?.map((data) => (
                        <ul key={data.id}>
                            <li>
                                {data.name}
                            </li>
                        </ul>
                    ))
                    : <h1>Hello</h1>
            }

        </div>
    )

}
export default User;