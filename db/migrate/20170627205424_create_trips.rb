class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.integer :visitor_id, null: false
      t.integer :host_id, null: false
      t.integer :home_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps null: false
    end
    add_index :trips, :visitor_id
    add_index :trips, :host_id
    add_index :trips, :home_id
  end
end
