class AddTotalCostToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :totalcost, :float
  end
end
