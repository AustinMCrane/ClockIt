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

  private
  def check_admin
    if current_user.has_role? :admin
      return true
    else
      redirect_to '/'
    end
  end
end
