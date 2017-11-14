class Trip < ActiveRecord::Base
  validates :home, :visitor, :start_date, :end_date, :total_cost, :nightly_cost, :cleaning_cost, :service_cost, presence: true

  belongs_to :visitor,
    class_name: :User,
    foreign_key: :visitor_id

  belongs_to :home

  def conflict?(start_date, end_date)
    !(self.start_date > end_date || start_date > self.end_date)
  end


end
