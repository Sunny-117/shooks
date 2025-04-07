import {useCallback} from 'react';

export default ({id, text, deleteUser}) => {
    const del = useCallback(() => {
        deleteUser(id);
    }, [deleteUser, id]);

    return (
        <div>
            ID：{id} | 姓名：{text} |
            <span onClick={del}>删除</span>
        </div>
    );
};
