import React, {Component} from 'react';
import './Users.css';
import UsersList from './UsersList';
import Buttons from './Buttons';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    addUser = (e) => {
        e.preventDefault();

        let newUser = {
            id: Date.now(),
            name: this._inputName.value
        }
        /* console.log(newUser); */

        this.setState((state) => {
            return({
                users: state.users.concat(newUser)
            });
        })

        this._inputName.value = '';
    }

    removeUser = (userId) => {
        this.setState((state) => {
            return({
                users: state.users.filter((user) => {
                    return(user.id !== userId)
                })
            });
        })
    }

    render() {

        return(
            <div className="main-users">
                <form onSubmit={this.addUser}> 
                    <input ref={(element) => {this._inputName = element;}} type="text" placeholder="Enter name"/>
                    < Buttons />
                </form>
                < UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
            </div>
        );

    }
}

export default Users;   