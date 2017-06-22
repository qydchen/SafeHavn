# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#  image_url       :string
#  first           :string           not null
#  last            :string           not null
#  month           :integer
#  day             :integer
#  year            :integer
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
