import React, {Component} from "react";

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    };

    submitSignInForm = (e) => {
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
                <form onSubmit={this.submitSignInForm} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign In
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
                        <button className="btn green z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;