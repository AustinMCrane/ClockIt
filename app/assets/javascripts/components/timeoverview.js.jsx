function daysInMonth(month) {
  var year = new Date().getFullYear()
    return new Date(year, month, 0).getDate();
}
var Months = [
  {
    title: "January",
    days: daysInMonth(1),
    start_day_of_week: 4
  },
  {
    title: "February",
    days: daysInMonth(2),
    start_day_of_week: 0
  },
  {
    title: "March",
    days: daysInMonth(3),
    start_day_of_week: 0
  },
  {
    title: "April",
    days: daysInMonth(4),
    start_day_of_week: 0
  },
  {
    title: "May",
    days: daysInMonth(5),
    start_day_of_week: 0
  },
  {
    title: "June",
    days: daysInMonth(6),
    start_day_of_week: 0
  },
  {
    title: "July",
    days: daysInMonth(7),
    start_day_of_week: 4
  },
  {
    title: "August",
    days: daysInMonth(8),
    start_day_of_week: 0
  },
  {
    title: "September",
    days: daysInMonth(9),
    start_day_of_week: 0
  },
  {
    title: "October",
    days: daysInMonth(10),
    start_day_of_week: 0
  },
  {
    title: "November",
    days: daysInMonth(11),
    start_day_of_week: 0
  },
  {
    title: "December",
    days: daysInMonth(12),
    start_day_of_week: 0
  },
]
var Calendar = React.createClass({
  getInitalState: function(){
    return({
      month: Months[1].title
    })
  },
  getMonths: function(){
    var months = []
    for (var i = 0; i < Months.length; i++) {
    var month = Months[i]
    }
  },
  getRows: function(row_count){
    var rows = []
    for (var i = 0; i < row_count; i++) {
      rows.push(
        <tr>
          <td>
            <div>
              <p className="date">12</p>
              <p className="hours">2.3 hrs</p>
            </div>
          </td>
          <td>
            <div>
              <p className="date">12</p>
              <p className="hours">2.3 hrs</p>
            </div>
          </td>
          <td>
            <div>
              <p className="date">12</p>
              <p className="hours">2.3 hrs</p>
            </div>
          </td>
          <td>
            <div>
              <p className="date">12</p>
              <p className="hours">2.3 hrs</p>
            </div>
          </td>
          <td>
            <div>
              <p className="date">12</p>
              <p className="hours">2.3 hrs</p>
            </div>
          </td>
          <td>
            <div>
              <p className="date">12</p>
              <p className="hours">2.3 hrs</p>
            </div>
          </td>
          <td>
            <div>
              <p className="date">12</p>
              <p className="hours">2.3 hrs</p>
            </div>
          </td>
        </tr>
      )
    }
    return rows
  },
  render: function(){
    var rows = this.getRows(4)
    var month = Months[0].title
    return(
      <div className="calendar">
        <button>a</button>
        <h5 className="aligns-center">{month}</h5>
        <button>b</button>
        <table className="responsive-table">
          <thead className="amber lighten-3">
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
})
var TimeOverview = React.createClass({
  getInitalState: function(){
    return{
      hello: "hello"
    }
  },
  deleteTime: function(id){
  },
  getHoursRows: function(){
    var hourList = [];
    for (var i = 0; i < this.props.times.length; i++) {
      var hour = this.props.times[i];
      var started = new Date(hour.started);
      var ended = hour.ended;
      if (ended == null) {
        ended = new Date();
      }else{
        ended = new Date(hour.ended);
      }
      var hours = (((ended - started)/1000) / 3600)
      console.log(started - ended)
      hourList.push(
        <tr>
          <td>
            {hour.task_id}
          </td>
          <td>
            {started.toString()}
          </td>
          <td>
            {ended.toString()}
          </td>
          <td>
            {hour.hours}
          </td>
        </tr>
      );
    }
    return hourList;
  },
  getTotalHours: function(){
    var hours = 0
    for (var i = 0; i < this.props.times.length; i++) {
      var hour = this.props.times[i];
      hours = hours + hour.hours
    }
    return hours
  },
  updateTimes: function(){
    $.ajax({
      type: "POST",
      url: "/hours"
    })
  },
  render: function() {
    var hourRows = this.getHoursRows();
    var total_hours = this.getTotalHours();
    return(
      <div className="row">
        <div className="col s12 offset-m3 m6">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Hours ({total_hours} hrs)</span>
              <div className="calendar">
                <h2>
                </h2>
                <table className="">
                  <thead className="amber lighten-3">
                    <tr>
                      <th>Project</th>
                      <th>Started</th>
                      <th>Ended</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hourRows}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
