@trips.each do |trip|
  json.set! trip.id do
    json.extract! trip,
      :id,
      :home,
      :visitor,
      :start_date,
      :end_date,
      :num_guests,
      :total_cost,
      :nightly_cost,
      :service_cost,
      :cleaning_cost,
      :days
      json.image_url asset_path(trip.home.image.url)
  end
end
