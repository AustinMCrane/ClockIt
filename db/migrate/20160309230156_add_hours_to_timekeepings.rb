class AddHoursToTimekeepings < ActiveRecord::Migration
  def change
    add_column :timekeepings, :hours, :decimal
  end
end
