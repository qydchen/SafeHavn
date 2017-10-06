class DeleteStringImageUrlfromUser < ActiveRecord::Migration
  def change
      remove_column :users, :image_url, :string
  end
end
