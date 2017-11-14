class Confirmation < ActiveRecord::Base
  validates
    :home,
    :user,
    :num_guests,
    :days,
    :nightly_cost,
    :total_cost,
    :cleaning_cost,
    :service_cost,
    :start_date,
    :end_date,
    presence: true
  belongs_to :home
  belongs_to :user

  # def conflicting_confirmation
  #
  # end

end
