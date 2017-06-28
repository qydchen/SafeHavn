@trips.each do |trip|
  json.set! trip.id do
    json.partial! 'trip', trip: trip
  end
end
