class AdminController < ApplicationController
  before_action :check_admin
  def index
    @projects = Projects.all
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
