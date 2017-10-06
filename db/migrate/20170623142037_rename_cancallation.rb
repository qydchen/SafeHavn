class RenameCancallation < ActiveRecord::Migration
  def change
    remove_column :homes, :cancallation
    add_column :homes, :cancellation, :string
  end
end
