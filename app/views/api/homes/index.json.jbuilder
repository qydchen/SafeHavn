@homes.each do |home|
  json.set! home.id do
    json.extract! home,
      :id,
      :lat,
      :lng,
      :price,
      :host_id,
      :title,
      :description,
      :address,
      :max_guests,
      :beds,
      :room_type

      json.image_url asset_path(home.image.url)
  end
end
