class CreateDaysColInTrips < ActiveRecord::Migration
  def change
    add_column :trips, :days, :integer, null: false
  end
end
