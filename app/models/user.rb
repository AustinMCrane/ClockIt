class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :timekeepings
  def hours
    @hours = 0
    timekeepings.each do |t|
      if t.finished
        puts t.to_yaml
        @hours = @hours + t.hours
      end
    end
    return @hours
  end
end
