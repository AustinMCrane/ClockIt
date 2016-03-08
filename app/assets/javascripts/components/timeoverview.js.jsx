var TimeOverview = React.createClass({
  deleteTime: function(id){
  },
  getHoursList: function(){
    var hourList = [];
    for (var i = 0; i < this.props.times.length; i++) {
      var hour = this.props.times[i];
      hourList.push(
        <li className="collection-item" key={"time_" + hour.id}>
          <div className="left-center">
            {hour.start}
          </div>
          <div className="left-align">
            {hour.task_id}
          </div>
          <div className="right-align">
            {hour.end}
          </div>
        </li>
      );
    }
    return hourList;
  },
  render: function() {
    var hourList = this.getHoursList();
    return(
      <div className="row">
        <div className="col s12 offset-m4 m4">
          <div className="card">
            <div className="card-content text-center">
              <span className="card-title">Hours</span>
                <ul className="collection">
                    {hourList}
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
