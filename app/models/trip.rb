class Trip < ActiveRecord::Base
  validates :home, :visitor, :start_date, :end_date, presence: true

  belongs_to :visitor,
    class_name: :User,
    foreign_key: :visitor_id

  belongs_to :home,
    class_name: :Home,
    foreign_key: :home_id

  def conflict?(start_date, end_date)
    !(self.start_date > end_date || start_date > self.end_date)
  end


end
