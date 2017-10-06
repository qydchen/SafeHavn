class DeleteAccommodatesFromUsers < ActiveRecord::Migration
  def change
    remove_column :homes, :accommodates
    remove_column :homes, :cancellation
    add_column :homes, :cancallation, :string
  end
end
