import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    const handleSave = () => {
        history.push("/users");
    };
    if (user) {
    return (
        <>
        <h1>{user.name}</h1>
        <h2>{user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <h3>Всего встреч: {user.completedMeetings}</h3>
        <h3>Оценка: {user.rate}</h3>
        <button
            onClick= { () => {
                handleSave();
                }
            }>
            Вернуться
        </button>
    </>
    );
} else {
    return <h1>Loading...</h1>;
}
};
UserPage.propTypes = {
    id: PropTypes.string.isRequired
};
export default UserPage;
