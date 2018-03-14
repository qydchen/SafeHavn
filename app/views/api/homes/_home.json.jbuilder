json.extract! home,
  :id,
  :lat,
  :lng,
  :price,
  :title,
  :description,
  :cancellation,
  :address,
  :trips,
  :featured
  json.reviews home.reviews.review_desc do |review|
    json.id review.id
    json.author_id review.author_id
    json.rating review.rating
    json.body review.body
    json.created_at review.created_at
    json.updated_at review.updated_at
    json.author review.author.first
    json.image_url asset_path(review.author.image.url)
  end
  json.booked_days home.booked_days
  json.host do
    json.first home.host.first
    json.last home.host.last
  end
  json.host_image_url asset_path(home.host.image.url)
  json.image_url asset_path(home.image.url)

  json.revcount home.reviews.length
  json.avg home.reviews.review_average

  json.space do
    json.max_guests home.max_guests
    json.bathrooms home.bathrooms
    json.bedrooms home.bedrooms
    json.beds home.beds
    json.property_type home.property_type
    json.room_type home.room_type
  end

  json.amenities do
    json.internet home.internet
    json.family home.family
    json.parking home.parking
    json.kitchen home.kitchen
  end
