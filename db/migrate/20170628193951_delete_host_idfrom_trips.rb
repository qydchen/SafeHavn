class DeleteHostIdfromTrips < ActiveRecord::Migration
  def change
    remove_column :trips, :host_id, :integer
  end
end
