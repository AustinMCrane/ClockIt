class Timekeeping < ActiveRecord::Base
  before_save :check_malformed

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
