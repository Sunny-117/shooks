import {useArray} from '../common/useArray';
import {useTaskPendingState} from '../common/useTaskPendingState';
import request from '../../request';

export const useUserList = () => {
    const [users, {push, removeById, set}] = useArray([]);
    const [load, pending] = useTaskPendingState(request, set);
    return [users, {pending, load, addUser: push, deleteUser: removeById}];
};
