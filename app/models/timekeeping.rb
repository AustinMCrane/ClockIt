class Timekeeping < ActiveRecord::Base
  before_save :check_malformed
  belongs_to :task
  belongs_to :user
  validates :task, :user, presence: true

  # was it started
  def check_malformed
    if start?
      return true
    else
      return false
    end
  end

  # does it have a start and end
  def finished
    if (start?) and (end?)
      return true
    else
      return false
    end
  end
end
