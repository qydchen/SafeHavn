class RemoveDatesFromHomes < ActiveRecord::Migration
  def change
    remove_column :homes, :start_date, :date
    remove_column :homes, :end_date, :date
  end
end
