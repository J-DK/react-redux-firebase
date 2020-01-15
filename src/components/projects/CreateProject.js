import React, {Component} from "react";
import {connect} from "react-redux";
import {createProject} from "../../store/actions/projectActions";

class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    };

    submitCreateProjectForm = (e) => {
        e.preventDefault(); // Prevent the browser's default action of refreshing
        this.props.createProject(this.state);
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
                        Create a new project
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

const mapDispatchToProps = (dispatch) => {
    return {
      createProject: (project) => dispatch(createProject(project))
    };
};

export default connect(null, mapDispatchToProps)(CreateProject);