class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..10) }
  validates :home, presence: true
  belongs_to :home
end
