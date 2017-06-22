class Home < ActiveRecord::Base
  validates :lat, :lng, :price, :host, :image_url, :title, :description, presence: true
  validates :cancellation, inclusion: { in: %w(Strict Moderate Loose)}

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

end
