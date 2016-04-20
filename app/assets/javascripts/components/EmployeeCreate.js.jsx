var EmployeeCreate = React.createClass({
  propTypes: {
    email: React.PropTypes.string,
    password: React.PropTypes.string
  },
  getInitalState: function(){
    return({
      email: "",
      password: ""
    })
  },
  onSubmit: function(){
    console.log("hello")
    var user = {
        email: this.state.description,
        password: this.state.title
    }
    $.ajax({
      type: "POST",
      url: "/admin/employees",
      data: user,
      success: function(response){
        window.location.href = "/admin";

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
              <span className="card-title">New Employee</span>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Email" onChange={this.titleChange} id="title" type="text" className="validate"/>
                  <label htmlFor="first_name">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="description" type="password" onChange={this.descriptionChange} className="validate"/>
                  <label htmlFor="last_name">Password</label>
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
