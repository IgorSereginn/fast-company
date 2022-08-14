import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ id, users }) => {
    const history = useHistory();
    // const user = getById(id);
    console.log(users);
    const handleSave = () => {
        history.push("/users");
    };

    return <>
        {/* <h2>{user.name ? user.name : "Loading..."}</h2> */}
        <button
            onClick= { () => {
                handleSave();
            }
            }>
            Вернуться
        </button>
    </>;
};

User.propTypes = {
    id: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
};
export default User;
