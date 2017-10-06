class RemoveAmenityFromHome < ActiveRecord::Migration
  def change
    remove_column :homes, :amenity, :string
  end
end
