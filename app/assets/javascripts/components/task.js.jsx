var Task = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  clockIn: function(){
    $.ajax({
      url: "/clock_in",
      type: "POST",
      data: {
        timekeeping: {
          start: new Date(),
          task_id: this.props.task.id,
          end: null
        }
      },
      success: function(response){
        console.log(response)
        window.location.href = "/";
      }
    })

  },
  render: function() {
    console.log(this.props.task.title)
    return (
      <div className="row">
        <div className="col s10 offset-s1">
          <a id="add_task" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">{this.props.task.title}</span>
              <br></br>
              <button className="btn btn-default" onClick={this.clockIn}>Clock In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var TaskCreateForm = React.createClass({
  // getInitalState: function(){
  //   return({
  //     title: "",
  //   })
  // },
  onSubmit: function(){
    console.log("hello")
    var task = {
      task:{
        title: this.state.title,
        project_id: this.props.project_id
      }
    }
    $.ajax({
      type: "POST",
      url: "/projects/" + this.props.project_id,
      data: task,
      success: function(response){
        window.location.href = "/projects/" + response.project_id;
      }
    })
  },
  titleChange: function(e){
    this.setState({
      title: e.target.value,
    })
  },
  render: function() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Create A Task</span>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Title" onChange={this.titleChange} id="title" type="text" className="validate"/>
                  <label htmlFor="first_name">Title</label>
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
