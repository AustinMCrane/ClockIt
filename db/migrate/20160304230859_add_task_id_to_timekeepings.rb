class AddTaskIdToTimekeepings < ActiveRecord::Migration
  def change
    add_column :timekeepings, :task_id, :integer
    add_index :timekeepings, :task_id
  end
end
