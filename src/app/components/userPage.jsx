import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";
// import Users from "../layouts/users";
// import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    const handleSave = () => {
        history.push("/users");
    };

    return <>
      (user) {
      <h1>{user.name}</h1>
}
        <button
            onClick= { () => {
                handleSave();
                }
            }>
            Вернуться
        </button>
    </>;
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};
export default UserPage;
