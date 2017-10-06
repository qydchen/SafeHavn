json.extract! review,
  :id,
  :author_id,
  :home_id,
  :rating,
  :body,
  :created_at

  json.image_url asset_path(review.author.image.url)
