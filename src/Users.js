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

        if (this._inputName.value === '') {
            return;
        }

        let newUser = {
            id: Date.now(),
            name: this._inputName.value
        }

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

    removeAllUser = () => {
        this.setState(() => {
            return({
                users: []
            });
        })
    }

    render() {

        return(
            <div className="main-users">
                <form onSubmit={this.addUser}> 
                    <input ref={(element) => {this._inputName = element;}} type="text" placeholder="Enter name"/>
                    < Buttons  removeAllUserMethod={this.removeAllUser} />
                </form>
                
                < UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
            </div>
        );

    }
}

export default Users;   