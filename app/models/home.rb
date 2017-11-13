class Home < ActiveRecord::Base
  validates :lat, :lng, :price, :host, :title, :description, presence: true
  validates :cancellation, inclusion: { in: %w(Strict Moderate Flexible)}

  has_attached_file :image, default_url: "home2.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

  has_many :trips, dependent: :destroy
  has_many :reviews, dependent: :destroy

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

  def self.filters(params)
    homes = nil
    # destructure filter values
    bounds, min_housing, max_housing, min_price, max_price, featured = params.
      values_at(:bounds, :minHousing, :maxHousing, :minPrice, :maxPrice, :featured)

    if bounds
      homes = Home.in_bounds(bounds).includes(:reviews, :host)
    else
      return Home.where(featured: true).includes(:reviews, :host).limit(8)
    end

    homes = housing_filter((min_housing..max_housing), homes) if (min_housing && max_housing)
    homes = pricing_filter((min_price..max_price), homes) if (min_price && max_price)
    homes = featured_filter(featured, homes)

    homes
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

  private

  def self.housing_filter(range, homes)
    homes.where(max_guests: range)
  end

  def self.pricing_filter(range, homes)
    homes.where(price: range)
  end

  def self.featured_filter(featured, homes)
    homes.where(featured: featured)
  end

end
