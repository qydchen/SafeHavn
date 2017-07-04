json.array! @reviews do |review|
  json.extract! review, :id, :body, :home_id, :author_id, :rating
  json.first review.user.first
end
