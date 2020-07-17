import React from 'react';
import './UsersList.css';

function UsersList(props) {

    let usersElements = props.usersList.map(user => <li key={user.id}>{user.name} <span onClick={() => props.removeUserMethod(user.id)}>X</span></li>);

    return(
        <ul className="list">
            {usersElements}
        </ul>
    );

}

export default UsersList;