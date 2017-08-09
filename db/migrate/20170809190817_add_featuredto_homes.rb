class AddFeaturedtoHomes < ActiveRecord::Migration
  def change
    add_column :homes, :featured, :boolean
  end
end
