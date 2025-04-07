import {useEffect, useCallback} from 'react';
import {useUserList} from '../hooks/biz/useUserList';
import User from './User';

export default ({pageNo}) => {
    const [users, {pending, load, addUser, deleteUser}] = useUserList();
    useEffect(() => {
        load('/data/user/list', {pageNo});
    }, [pageNo]);

    const add = useCallback(() => {
        const id = Math.floor(Math.random() * 100); // mock
        addUser({id, text: `新${id}`});
    }, [addUser]);

    if (pending) {
        return '加载中...';
    }

    return (
        <>
            {
                users.map(user => (
                    <User
                        key={user.id}
                        id={user.id}
                        text={user.text}
                        deleteUser={deleteUser}
                    />
                ))
            }
            <div onClick={add}>添加</div>
        </>
    );
}
