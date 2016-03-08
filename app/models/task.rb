class Task < ActiveRecord::Base
  validates :project, presence: true
  belongs_to :project
  has_many :timekeepings
  def hours
    @hours = 0
    timekeepings.each do |t|
      @hours = @hours + t.hours
    end
    return @hours
  end
end
