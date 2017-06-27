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

def host_id
  (rand(1..2))
end

def lat # NYC
  (40.0000 + rand())
end

def lng # NYC
  (-74.0000 + rand())
end

def title
  (Faker::Pokemon.location)
end

def price
  (rand(0..500))
end

def address
   (Faker::Address.street_address + ", " + Faker::Address.city + ", " + Faker::Address.country)
end

def bathrooms
  (rand(0..5))
end

def bedrooms
  (rand(0..6))
end

def max_guests
  (rand(0..12))
end

def beds
  (rand(0..8))
end

def property_type
  "House"
end

def room_type
  "Entire home/apt"
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
  Faker::Lorem.paragraph(5)
end

def cancellation
  (["Flexible", "Moderate", "Strict"].sample)
end


Home.create({"host_id": host_id,
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
  "image": 	"https://s3.amazonaws.com/safehavns-dev/seeds/clouds-cloudy-building-64287.jpeg"
})

User.create({"email": "guest@live.com",
  "first": "Ronald",
  "last": "McDonald",
  "password": "asdf1234",
  "month": 5,
  "day": 11,
  "year": 1980})
User.create({
  "email": "david@qydc.com",
  "first": "Dav",
  "last": "Chen",
  "password": "password123",
  "month": 5,
  "day": 12,
  "year": 1991})

Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/architecture-castle-england-68683.jpeg"
})

Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/cold-snow-nature-24642.jpg"
})

Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/dawn-landscape-building-208309.jpeg"
})

Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/field-forest-trees-48632.jpeg"
})

Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/france-landmark-water-34223.jpg"
})

Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/landmark-building-forest-24294.jpg"
})

Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/landscape-nature-landmark-390202.jpeg"
})


Home.create({"host_id": host_id,
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
  "image": "https://s3.amazonaws.com/safehavns-dev/seeds/light-landscape-forest-206648.jpeg"
})
