class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..10) }
  validates :body, length: { maximum: 500 }
  validates :home, :author, presence: true

  belongs_to :home

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  scope :review_average, -> { average(:rating).round(1) }
  scope :review_desc, -> { includes(:author).order('id DESC')}
end
