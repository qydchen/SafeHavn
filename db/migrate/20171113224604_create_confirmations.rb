class CreateConfirmations < ActiveRecord::Migration
  def change
    create_table :confirmations do |t|
      t.integer :home_id, null: false
      t.integer :user_id, null: false
      t.integer :num_guests, null: false
      t.integer :days, null: false
      t.float :total_cost, null: false
      t.float :nightly_cost, null: false
      t.float :cleaning_cost, null: false
      t.float :service_cost, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps null: false
    end
    add_index :confirmations, :user_id
    add_index :confirmations, :home_id
  end
end
