class RenameAccommodates < ActiveRecord::Migration
  def change
    remove_column :homes, :acommodates
    add_column :homes, :accommodates, :integer
  end
end
