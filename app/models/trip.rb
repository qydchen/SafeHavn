class Trip < ActiveRecord::Base
  belongs_to :visitor,
    class_name: :User,
    foreign_key: :visitor_id

  belongs_to :home,
    class_name: :Home,
    foreign_key: :home_id
end
