class DeleteSpaceFromHomes < ActiveRecord::Migration
  def change
    remove_column :homes, :space, :string
    add_column :homes, :accomodates, :integer
    add_column :homes, :bathrooms, :float
    add_column :homes, :bed, :integer
    add_column :homes, :property_type, :string
    add_column :homes, :room_type, :string
    add_column :homes, :internet, :boolean
    add_column :homes, :family, :boolean
    add_column :homes, :parking, :boolean
    add_column :homes, :kitchen, :boolean
  end
end
