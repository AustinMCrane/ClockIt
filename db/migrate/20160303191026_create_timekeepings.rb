class CreateTimekeepings < ActiveRecord::Migration
  def change
    create_table :timekeepings do |t|
      t.datetime :start
      t.datetime :end

      t.timestamps null: false
    end
  end
end
