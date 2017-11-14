class RenameTotalCostInTrips < ActiveRecord::Migration
  def change
    add_column :trips, :total_cost, :float, null: false
    add_column :trips, :nightly_cost, :float, null: false
    add_column :trips, :service_cost, :float, null: false
    add_column :trips, :cleaning_cost, :float, null: false
    
    remove_column :trips, :totalcost, :float
  end
end
