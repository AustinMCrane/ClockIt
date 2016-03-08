class Task < ActiveRecord::Base
  validates :project, presence: true
  belongs_to :project
end
