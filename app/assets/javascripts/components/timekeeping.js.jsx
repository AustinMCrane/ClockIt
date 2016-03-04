var Timekeeping = React.createClass({
  getInitalState: function(){
    return({
      clocked_in: this.props.clocked_in
    })
  },
  onClockIn: function(){
    this.refs.clock_out_btn.disabled = false
    this.refs.clock_in_btn.disabled = true
    // $.ajax({
    //   url: "/clock_in",
    //   type: "POST",
    //   data: {
    //     timekeeping: {
    //       start: new Date(),
    //       end: null
    //     }
    //   },
    //   success: function(){
    //   }
    // })
    window.location.href = "/projects/";
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
      <button onClick={this.onClockOut} ref="clock_out_btn"  className="btn btn-default margin-small">Clock Out</button>
    );

  },
  getClockInButton: function(){
    return(
      <button onClick={this.onClockIn} ref="clock_in_btn"  className="btn btn-default margin-small" >Clock In</button>
    );

  },
  render: function() {
    var clock_in_btn = this.getClockInButton();
    var clock_out_btn = this.getClockOutButton();
    return(
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Clock In</span>
            </div>
            <div className="card-action text-center">
              {clock_in_btn}
              {clock_out_btn}
              <a type="button" href="/hours" className="btn btn-default">View Hours</a>
            </div>
          </div>
        </div>
      </div>

  );
  }
});
