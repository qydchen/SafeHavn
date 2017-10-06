class AddIndexToAccomodates < ActiveRecord::Migration
  def change
    add_index :homes, :accommodates
  end
end
