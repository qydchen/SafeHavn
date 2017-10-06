# == Schema Information
#
# Table name: homes
#
#  id            :integer          not null, primary key
#  host_id       :integer          not null
#  lat           :float            not null
#  lng           :float            not null
#  price         :integer          not null
#  image_url     :string           not null
#  title         :string           not null
#  description   :text             not null
#  cancellation  :text             not null
#  address       :string           not null
#  max_guests    :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  start_date    :date
#  end_date      :date
#  bathrooms     :float
#  property_type :string
#  room_type     :string
#  internet      :boolean
#  family        :boolean
#  parking       :boolean
#  kitchen       :boolean
#  acommodates   :integer
#  beds          :integer
#  bedrooms      :integer
#

require 'test_helper'

class HomeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
