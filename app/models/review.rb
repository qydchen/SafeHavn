class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..10) }
  validates :body, length: { maximum: 500 }
  validates :home, :author, presence: true

  belongs_to :home,
    class_name: :Home,
    foreign_key: :home_id

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end
