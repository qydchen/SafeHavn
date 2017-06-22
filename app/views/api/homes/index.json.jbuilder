@homes.each do |home|
  json.set! home.id do
    json.extract! home,
      :id,
      :lat,
      :lng,
      :price,
      :host_id,
      :image_url,
      :title,
      :description,
      :address,
      :max_guests,
      :beds,
      :room_type
  end
end
