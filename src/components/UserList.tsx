import React from "react";
import {useSelector} from "react-redux";
import {useTypesSelector} from "../hooks/useTypesSelector";

export const UserList: React.FC = () => {
    const {users, loading, error} = useTypesSelector(state => state.user)
    return (
        <div>

        </div>
    )
}