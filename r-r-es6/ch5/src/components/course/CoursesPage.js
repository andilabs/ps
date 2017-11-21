import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course})
    }

    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
          <div>
              <h1>Courses</h1>
              {this.props.courses.map(this.courseRow)}
              <h2>Add courses</h2>
              <input
                type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title} />

              <input
                  type="submit"
                  value="Save"
                  onClick={this.onClickSave} />
          </div>
        );
    }
}


CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}


export default connect(mapStateToProps
    // , mapDispatchToProps lets use default behaviour for now
)(CoursesPage);

// alternative way of defining connect
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);