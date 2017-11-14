class CreateConfirmations < ActiveRecord::Migration
  def change
    create_table :confirmations do |t|
      t.integer :home_id, null: false
      t.integer :user_id, null: false
      t.integer :max_guests, null: false
      t.float :totalcost, null: false
      t.float :cleaningcost, null: false
      t.float :servicecost, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps null: false
    end
    add_index :confirmations, :user_id
    add_index :confirmations, :home_id
  end
end
