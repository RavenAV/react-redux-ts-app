import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

export const UserList: React.FC = () => {
    const {users, loading, error} = useTypesSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            { users.map(user =>
                <div key={user.id}>{user.name}</div>
            ) }
        </div>
    )
}