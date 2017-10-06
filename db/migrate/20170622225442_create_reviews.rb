class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :home_id, null: false
      t.integer :rating, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
      add_index :reviews, :author_id
      add_index :reviews, :home_id
  end
end
