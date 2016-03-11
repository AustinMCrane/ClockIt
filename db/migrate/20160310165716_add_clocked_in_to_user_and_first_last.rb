class AddClockedInToUserAndFirstLast < ActiveRecord::Migration
  def change
    add_column :users, :clocked_in, :boolean
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string
  end
end
