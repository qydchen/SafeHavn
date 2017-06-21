class Home < ActiveRecord::Base
  validates :lat, :lng, :price, :host, :image_url, :title, :description, :location, presence: true
  validates :cancellation, inclusion: { in: %w(Strict Moderate Loose)}

  belongs_to :host,
    class_name: :User, index: { unique: true },
    foreign_key: :host_id

end
