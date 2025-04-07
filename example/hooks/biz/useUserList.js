import {useState, useCallback} from 'react';
import request from '../../request';

export const useUserList = () => {
    const [pending, setPending] = useState(false);
    const [users, setUsers] = useState([]);

    const load = async (...args) => {
        setPending(true);
        setUsers([]);
        const users = await request(...args);
        setUsers(users);
        setPending(false);
    };

    const deleteUser = useCallback(
        id => setUsers(users => users.filter(user => user.id !== id)),
        []
    );
    const addUser = useCallback(
        user => setUsers(users => users.concat(user)),
        []
    );

    return [users, {pending, load, addUser, deleteUser}];
};
