import React, {Component} from "react";

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    submitSignUpForm = (e) => {
        e.preventDefault(); // Prevent the browser's default action of refreshing
        console.log(this.state);
    };

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitSignUpForm} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign Up
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.changeInput}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.changeInput}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.changeInput}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.changeInput}/>
                    </div>
                    <div className="input-field">
                        <button className="btn green z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;