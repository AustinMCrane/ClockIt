class EmployeeController < ApplicationController
  def assign_project
    
  end

  private
  def set_employee
    @employee = User.find(params[:id])
  end

end
