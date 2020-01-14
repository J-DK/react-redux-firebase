import React, {Component} from "react";

class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    };

    submitCreateProjectForm = (e) => {
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
                <form onSubmit={this.submitCreateProjectForm} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.changeInput}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.changeInput}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject;