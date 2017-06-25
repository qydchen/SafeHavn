class Deleteimageurlfromhome < ActiveRecord::Migration
  def change
    remove_column :homes, :image_url, :string
  end
end
