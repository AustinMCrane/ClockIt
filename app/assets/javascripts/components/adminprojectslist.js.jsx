var Employee = React.createClass({
  clockOut: function(){
    $.ajax({
      type: "POST",
      url: "/admin/clock_user_out",
      data: {
        user: {
          user_id: this.props.employee.id,
        }
      },
      success: function(){
        window.location.href = "/admin/";
      }
    })
  },
  render: function(){
    console.log("hello")
    if (this.props.employee.clocked_in) {
      return(
        <li className="collection-item">
          <div>
            <img src={"http://www.gravatar.com/avatar/" + this.props.employee.email} />
            <h6>{this.props.employee.email}</h6>
            <button onClick={this.clockOut}>Clock Out</button>
          </div>
        </li>
      )
    }else{
      return(
        <li className="collection-item">
          <div>
            <img src={"http://www.gravatar.com/avatar/" + this.props.employee.email} />
            <h6>{this.props.employee.email}</h6>
          </div>
        </li>
      )
    }
  }
})
var UsersProjectDetail = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col s11 offset-m2 m6">
          <div className="card">
            <div className="card-content">
              <img href={"http://www.gravatar.com/avatar/" + this.props.user.email} />
              <h6 className="card-title">{this.props.user.email}</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
var ProjectDetail = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col s11 offset-m2 m6">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">{this.props.project.title}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
var AdminProjectsList = React.createClass({
  getProjectsList: function(){
    var project_list = []
    for (var i = 0; i < this.props.projects.length; i++) {
      console.log("hello")
      var project = this.props.projects[i]
      project_list.push(<ProjectDetail project={project}/>)
    }
    return project_list
  },
  render: function(){
    var project_list = this.getProjectsList()
    return (
      <div>
        {project_list}
      </div>
    );
  }
})
var AdminEmployeesList = React.createClass({
  getEmployees: function(clocked_in){
    var employees = []
    for (var i = 0; i < this.props.employees.length; i++) {
      var employee = this.props.employees[i]
      if (clocked_in == employee.clocked_in) {
        employees.push(
          <Employee employee={employee} />
        )
      }
    }
    return employees
  },
  render: function(){
    var employees_clocked_in = this.getEmployees(true);
    var employees_clocked_out = this.getEmployees(false);
    return (
      <div>
      <div className="row">
        <div className="col s11 offset-m3 m6">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Clocked In</span>
              <ul className="collection">
                {employees_clocked_in}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s11 offset-m3 m6">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Clocked Out</span>
              <ul className="collection">
                {employees_clocked_out}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
})
