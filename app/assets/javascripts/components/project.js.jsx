var Project = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },
  getTasksList: function(){
    var taskList = [];
    for (var i = 0; i < this.props.tasks.length; i++) {
      var task = this.props.tasks[i];
      taskList.push(
        <a href={"/projects/" + this.props.project.id + "/tasks/" + task.id} className="collection-item" key={"task_" + task.id}>
          <div className="left-center">
            {task.title}
          </div>
        </a>
      );
    }
    return taskList;
  },

  render: function() {
    var tasks = this.getTasksList()
    return (
      <div className="row">
        <div className="col s11 offset-m4 m4">
          <a href={"/projects/"  + this.props.project.id + "/tasks/new"} id="add_project" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">{this.props.project.title}</span>
              <h6>{this.props.project.description}</h6>
                <ul className="collection scroll">
                  {tasks}
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
var ProjectsList = React.createClass({
  getProjectsList: function(){
    var hourList = [];
    for (var i = 0; i < this.props.projects.length; i++) {
      var hour = this.props.projects[i];
      hourList.push(
        <a href={"/projects/" + hour.id} className="collection-item" key={"time_" + hour.id}>
          <div className="left-center">
            {hour.title}
          </div>
          <div className="right-align">
            {hour.description}
          </div>
        </a>
      );
    }
    return hourList;
  },

  render: function() {
    var projectsList = this.getProjectsList();
    return (
      <div className="row">
        <div className="col s11 offset-m4 m4">
          <a href="/projects/new" id="add_project" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Projects</span>
                <ul className="collection scroll">
                  {projectsList}
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
var ProjectCreateForm = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },
  getInitalState: function(){
    return({
      title: "",
      description: ""
    })
  },
  onSubmit: function(){
    console.log("hello")
    var project = {
      project:{
        title: this.state.title,
        description: this.state.description
      }
    }
    $.ajax({
      type: "POST",
      url: "/projects.json",
      data: project,
      success: function(response){
        console.log(response)
        window.location.href = "/projects/" + response.id;
      }
    })
  },
  descriptionChange: function(e){
    this.setState({
      title: e.target.value,
    })
  },
  titleChange: function(e){
    this.setState({
      description: e.target.value,
    })
  },
  render: function() {
    return (
      <div className="row">
        <div className="col s12 offset-m4 m4">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Create A Project</span>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Title" onChange={this.titleChange} id="title" type="text" className="validate"/>
                  <label htmlFor="first_name">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="description" type="text" onChange={this.descriptionChange} className="validate"/>
                  <label htmlFor="last_name">Short Description</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light" onClick={this.onSubmit}  type="submit" name="action">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
