class Timekeeping < ActiveRecord::Base
  before_save :check_malformed
  belongs_to :task
  belongs_to :user
  validates :task, :user, presence: true
  def hours
    if ended.nil?
      return ((Time.now - started)/3600).round(2)
    else
      return ((ended - started) / 3600).round(2)
    end
  end
  # was it started
  def check_malformed
    if started?
      return true
    else
      return false
    end
  end

  # does it have a start and end
  def finished
    if (started?) and (ended?)
      return true
    else
      return false
    end
  end
end
