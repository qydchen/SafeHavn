class AddStartDateToHomes < ActiveRecord::Migration
  def change
    add_column :homes, :start_date, :date
    add_column :homes, :end_date, :date
  end
end
