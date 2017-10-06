class AddIndexToHomes < ActiveRecord::Migration
  def change
      remove_column :homes, :accomodates
      add_column :homes, :acommodates, :integer, index: true
      remove_column :homes, :bed
      add_column :homes, :beds, :integer, index: true
      add_column :homes, :bedrooms, :integer, index: true
      add_index :homes, :bedrooms
      add_index :homes, :bathrooms
      add_index :homes, :beds
      add_index :homes, :property_type
      add_index :homes, :room_type
      add_index :homes, :internet
      add_index :homes, :parking
      add_index :homes, :family
      add_index :homes, :kitchen
      add_index :homes, :max_guests
  end
end
