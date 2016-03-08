class CreateTimekeepings < ActiveRecord::Migration
  def change
    create_table :timekeepings do |t|
      t.datetime :started
      t.datetime :ended

      t.timestamps null: false
    end
  end
end
