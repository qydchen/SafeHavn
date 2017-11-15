json.extract! confirmation,
  :home,
  :start_date,
  :end_date,
  :num_guests,
  :total_cost,
  :cleaning_cost,
  :service_cost,
  :nightly_cost,
  :days
  json.first confirmation.home.host.first
  json.last confirmation.home.host.last
  json.image_url asset_path(confirmation.home.image.url)
