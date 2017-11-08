class Home < ActiveRecord::Base
  validates :lat, :lng, :price, :host, :title, :description, presence: true
  validates :cancellation, inclusion: { in: %w(Strict Moderate Flexible)}

  has_attached_file :image, default_url: "home2.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

  has_many :trips,
    class_name: :Trip,
    foreign_key: :home_id

  has_many :reviews,
    class_name: :Review,
    foreign_key: :home_id

  has_many :visitors,
    through: :trips,
    source: :visitor

  def average_review
    sum = 0
    self.reviews.each do |review|
      sum += review.rating
    end
    sum/review_count
  end

  def review_count
    self.reviews.length
  end

  def self.in_bounds(bounds)
  self.where("lat < ?", bounds[:northeast][:lat])
      .where("lat > ?", bounds[:southwest][:lat])
      .where("lng > ?", bounds[:southwest][:lng])
      .where("lng < ?", bounds[:northeast][:lng])
  end

  def booking_conflict?(start_date, end_date)
    self.trips.any? { |trip| trip.conflict?(start_date, end_date)}
  end

  def booked_days
    all_booked_days = []
    self.trips.each do |trip|
      (trip.start_date..trip.end_date).each do |date|
        all_booked_days << date
      end
    end
    all_booked_days
  end

end
