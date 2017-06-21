class CreateHomes < ActiveRecord::Migration
  def change
    create_table :homes do |t|
      t.integer :host_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.string :title, null: false
      t.string :space
      t.string :amenity
      t.text :description, null: false
      t.text :cancellation, null: false
      t.string :address, null: false
      t.integer :max_guests

      t.timestamps null: false
    end
    add_index :homes, :host_id
  end
end
