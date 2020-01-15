import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const ProjectDetails = (props) => {
    const {project} = props;
    return project ?
     (
        <div className="container section project-details">
            <div className="card z-depth-9">
                <div className="card-content">
                    <span className="card-title">Project Title: {project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {project.authorName}</div>
                </div>
            </div>
        </div>
    ) :  <div className="container">Loading...</div>;
};

const mapStateToProps = (state, ownProps) => {
    // When this component is placed inside Router, automatically some props (info) is added
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}])
)(ProjectDetails);