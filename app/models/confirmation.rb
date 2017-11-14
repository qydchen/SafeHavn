class Confirmation < ActiveRecord::Base
  validates :home, :user, :num_guests, :totalcost, :cleaningcost, :servicecost, presence: true
  belongs_to :home
  belongs_to :user
end
