json.extract! user, :id, :first, :last, :email, :month, :day, :year
json.image_url asset_path(user.image.url)
