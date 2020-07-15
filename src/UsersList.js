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

/* class UsersList extends Component {

    constructor() {
        super();
        this.state = {
            usersList: ['Piotr', 'Karol']
        };
    }
    

    render() {

        const listItems = this.state.usersList.map((user, index) => {
        return <li key={index}>{user} <span>X</span></li>
          });
        return (
            <ul className="list">
                {listItems}
            </ul>
        );
    }
} */

export default UsersList;