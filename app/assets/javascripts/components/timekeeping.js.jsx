var Timekeeping = React.createClass({
  getInitalState: function(){
    return({
      clocked_in: this.props.clocked_in
    })
  },
  onClockIn: function(){
    this.refs.clock_out_btn.disabled = false
    this.refs.clock_in_btn.disabled = true
    $.ajax({
      url: "/clock_in",
      type: "POST",
      data: {
        timekeeping: {
          start: new Date(),
          end: null
        }
      },
      success: function(){
      }
    })
  },
  onClockOut: function(){
    this.refs.clock_out_btn.disabled = true
    this.refs.clock_in_btn.disabled = false
    $.ajax({
      url: "/clock_out",
      type: "POST",
      data: {
        timekeeping: {
          start: null,
          end: new Date()
        }
      },
      success: function(){
      }
    })
  },
  componentDidMount: function(){
    if (this.props.clocked_in) {
      console.log("clocked in")
      this.refs.clock_in_btn.disabled = true
      this.refs.clock_out_btn.disabled = false
    }else{
      console.log("clocked out")
      this.refs.clock_in_btn.disabled = false
      this.refs.clock_out_btn.disabled = true
    }
  },
  getClockOutButton: function(){
    return(
      <button onClick={this.onClockOut} ref="clock_out_btn"  className="btn btn-default">Clock Out</button>
    );

  },
  getClockInButton: function(){
    return(
      <button onClick={this.onClockIn} ref="clock_in_btn"  className="btn btn-default" >Clock In</button>
    );

  },
  render: function() {
    var clock_in_btn = this.getClockInButton();
    var clock_out_btn = this.getClockOutButton();
    return(
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3>Clock In</h3>
      </div>
      <div className="panel-body">
        <ul className="list-inline text-center">
          <li>
            {clock_in_btn}
          </li>
          <li>
            {clock_out_btn}
          </li>
          <li>
            <a type="button" href="/hours" className="btn btn-default">View Hours</a>
          </li>
        </ul>
      </div>
    </div>
  );
  }
});
