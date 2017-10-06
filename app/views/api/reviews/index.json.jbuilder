json.array! @reviews do |review|
  json.extract! review, :id, :body, :home_id, :author_id, :rating, :created_at
  json.image_url asset_path(review.author.image.url)
  json.author review.author.first
end
