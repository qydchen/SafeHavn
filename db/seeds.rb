# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Home.create({"host_id": host_id,
#   "lat": lat,
#   "lng": lng,
#   "title": title,
#   "price": price,
#   "address": address,
#   "bathrooms": bathrooms,
#   "bedrooms": bedrooms,
#   "max_guests": max_guests,
#   "beds": beds,
#   "property_type": property_type,
#   "room_type": room_type,
#   "internet": internet,
#   "family": family,
#   "parking": parking,
#   "kitchen": kitchen,
#   "description": description,
#   "cancellation": cancellation,
#   "image": "https://s3.amazonaws.com/safehavns-dev/homes/images/000/000/004/original/sea-landscape-sunset-290098.jpeg"
# })

def lat # NYC
  (40.350000 + rand()*1.2)
end

def lng # NYC
  (-73.90000 + rand()*1.2)
end

def title
  (Faker::Pokemon.location)
end

def price
  (rand(49..500))
end

def address
   (Faker::Address.street_address + ", " + Faker::Address.city + ", " + Faker::Address.country)
end

def bathrooms
  (rand(1..5))
end

def bedrooms
  (rand(1..6))
end

def max_guests
  (rand(2..12))
end

def beds
  (rand(1..8))
end

def property_type
  ["House","Mansion","Farmhouse","RV","Apartment"].sample
end

def room_type
  ["Entire home/apt", "Private Room", "Shared Room"].sample
end

def internet
  [true, false].sample
end

def family
  [true, false].sample
end

def parking
  [true, false].sample
end

def kitchen
  [true, false].sample
end

def description
  Faker::Lorem.paragraph(15)
end

def cancellation
  (["Flexible", "Moderate", "Strict"].sample)
end

users = [
User.create({"email": "guest@live.com",
  "first": "Ronald",
  "last": "McDonald",
  "password": "asdf1234",
  "month": 5,
  "day": 11,
  "year": 1980}),
User.create({
  "email": "david@qydc.com",
  "first": "Dav",
  "last": "Chen",
  "password": "password123",
  "month": 5,
  "day": 12,
  "year": 1991})
]

101.times do |i|
  Home.create({"host_id": users.sample.id,
    "lat": lat,
    "lng": lng,
    "title": title,
    "price": price,
    "address": address,
    "bathrooms": bathrooms,
    "bedrooms": bedrooms,
    "max_guests": max_guests,
    "beds": beds,
    "property_type": property_type,
    "room_type": room_type,
    "internet": internet,
    "family": family,
    "parking": parking,
    "kitchen": kitchen,
    "description": description,
    "cancellation": cancellation,
    "image": "https://s3.amazonaws.com/safehavns-dev/seeds/#{i}.jpg"
  })
end



50.times do |i|
  Trip.create({
    visitor_id: User.all.sample.id,
    home_id: Home.all.sample.id,
    start_date: Time.at(rand * Time.now.to_i),
    end_date: Time.at(rand * Time.now.to_i),
    num_guests: 1,
    totalcost: rand(200..5000),
    }
  )
end
