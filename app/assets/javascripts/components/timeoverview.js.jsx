var TimeOverview = React.createClass({
  deleteTime: function(id){
  },
  getHoursList: function(){
    var hourList = [];
    for (var i = 0; i < this.props.times.length; i++) {
      var hour = this.props.times[i];
      hourList.push(
        <li className="list-group-item" key={"time_" + hour.id}>
          {hour.start}
          {hour.end}
        </li>
      );
    }
    return hourList;
  },
  render: function() {
    var hourList = this.getHoursList();
    return(<div className="panel panel-default">
        <div className="panel-heading">
          <h3>Hours</h3>
        </div>
        <div className="panel-body scroll">
          <ul className="list-group">
            {hourList}
          </ul>
        </div>
      </div>);
  }
});
