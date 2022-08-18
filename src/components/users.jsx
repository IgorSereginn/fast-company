import React, {useState} from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((el => el._id !== userId)));
    };
    
    const renderPhrase = (number) => {
        
        if (number === 1 ){
            return <th scope="col" className="badge bg-primary m-2">{number} человек тусанёт с тобой сегодня</th>
        }
        else if (number >= 2 && number < 5){
            return <th scope="col" className="badge bg-primary m-2">{number} человека тусанёт с тобой</th>
        } else {
            return <th scope="col" className="badge bg-primary m-2">{number} человек тусанут с тобой</th>
        }
    };

    if (users.length === 0){
        return (
         <span className="badge bg-danger m-2">Никто не тусанёт с тобой</span>
        )
    } else {
        return (
   
    <table className="table table-striped">
    <thead>
        <tr>
            {renderPhrase(users.length)}
        </tr>
        <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        {
            users.map(user => {
                return (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{   
                        user.qualities.map(qua => {
                            return (<span key={qua._id}
                                className={`badge bg-${qua.color} m-1`}>{qua.name}</span>);
                        })
                    }
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td>{
                        <button className="btn btn-danger" 
                        onClick={()=>handleDelete(user._id)}>delete
                        
                        </button>}
                    </td>
                </tr>
                )
            })

        }
    </tbody>
    </table>
    );
};
}
export default Users;