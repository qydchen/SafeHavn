class AddEmailToUsers < ActiveRecord::Migration
  def change
    add_column :users, :email, :string, null: false
    add_column :users, :image_url, :string
    add_index :users, :email
    add_index :users, :image_url
  end
end
