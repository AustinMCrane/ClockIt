class AdminController < ApplicationController
  before_action :check_admin
  def index
    @projects = Project.all
    render component: 'AdminProjectsList', props: {projects: @projects}
  end
  def employees
    @employees = User.all
    render component: 'AdminEmployeesList', props: {employees: @employees}
  end
  def clock_user_out
    puts employee_params[:id]
    @employee = User.find(employee_params[:user_id])
    @timekeeping = Timekeeping.where(user_id: @employee.id).last
    if @timekeeping.ended.nil?
      @timekeeping.ended = Time.now
      @employee.clocked_in = false
      @employee.save
      if @timekeeping.save
        render json: {message: "User Clocked Out"}
      end
    end
  end

  private
  def employee_params
    params.require(:user).permit(:user_id)
  end
  def check_admin
    if current_user.has_role? :admin
      return true
    else
      redirect_to '/'
    end
  end
end
