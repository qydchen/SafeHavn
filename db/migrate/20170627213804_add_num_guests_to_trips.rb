class AddNumGuestsToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :num_guests, :integer
  end
end
