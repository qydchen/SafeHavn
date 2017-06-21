class RemoveUsernameFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :username, :string
    add_column :users, :first, :string, null: false
    add_column :users, :last, :string, null: false
    add_column :users, :month, :integer
    add_column :users, :day, :integer
    add_column :users, :year, :integer
  end
end
