import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
// import Users from "../layouts/users";

const UserPage = ({ id }) => {
    const history = useHistory();

    const handleSave = () => {
        history.push("/users");
    };

    return <>
      (userId) {
      <h1>{userId.name}</h1>
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
