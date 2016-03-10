class Project < ActiveRecord::Base
  has_many :tasks
  def hours
    @hours = 0
    tasks.each do |t|
      @hours = @hours + t.hours
    end
    return @hours
  end
  def assigned_employees
  end
end
