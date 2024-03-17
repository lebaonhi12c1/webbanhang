import React, { memo, useContext } from 'react';
import { userContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';

const Auth = memo(({children}) => {
    const {user} = useContext(userContext)
    const navigate = useNavigate()
    if(user){
        return navigate('/')
    }
    return (
        <div>
            {children}
        </div>
    );
});
Auth.displayName = 'Auth'
export default Auth;