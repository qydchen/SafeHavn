@homes.each do |home|
  json.set! home.id do
    json.extract! home,
      :id,
      :lat,
      :lng,
      :price,
      :title,
      :description,
      :address,
      :featured
      json.host do
        json.first home.host.first
        json.last home.host.last
      end
      json.revcount home.review_count
      json.avg home.average_review
      json.space do
        json.max_guests home.max_guests
        json.beds home.beds
        json.room_type home.room_type
      end
      json.image_url asset_path(home.image.url)
  end
end
