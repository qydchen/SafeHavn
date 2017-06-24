# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({"email": "guest@live.com", "first": "Ronald", "last": "McDonald", "password": "asdf1234", "month": "5", "day": "11", "year": "1980"})
User.create({"email": "david@qydc.com", "first": "Dav", "last": "Chen", "password": "password1233", "month": "5", "day": "12", "year": "1991"})


Home.create({"host_id": 1,
  "lat": 50,
  "lng": -77,
  "image_url": "/lookatme",
  "title": "SampleHouse",
  "price": 160,
  "address": "123 Flex Street",
  "bathrooms": 1.5,
  "bedrooms": 2,
  "max_guests": 6,
  "beds": 3,
  "property_type": "House",
  "room_type": "Entire home/apt",
  "internet": true,
  "family": true,
  "parking": true,
  "kitchen": true,
  "description": "this is a really long set state",
  "cancellation": "Flexible"
  })

Home.create({"host_id": 2,
  "lat": 52,
  "lng": -76.1,
  "image_url": "/mansion",
  "title": "DavidsMansion",
  "price": 233,
  "address": "555 Fake Street",
  "bathrooms": 9,
  "bedrooms": 12,
  "max_guests": 11,
  "beds": 15,
  "property_type": "Mansion",
  "room_type": "Entire home/apt",
  "internet": true,
  "family": false,
  "parking": true,
  "kitchen": false,
  "description": "test2 I like cake and bunch of text this is a really long set state",
  "cancellation": "Moderate"
  })

Home.create({"host_id": 2,
  "lat": 51.11,
  "lng": -77.23,
  "image_url": "/luckyimg",
  "title": "Lucky House",
  "price": 125,
  "address": "888 Lucky Street",
  "bathrooms": 2.5,
  "bedrooms": 4,
  "max_guests": 9,
  "beds": 6,
  "property_type": "Apartment Building",
  "room_type": "Entire home/apt",
  "internet": true,
  "family": true,
  "parking": false,
  "kitchen": true,
  "description": "test3 bunch of text",
  "cancellation": "Strict"
  })

Home.create({"host_id": 2,
  "lat": 55.11,
  "lng": -69.67,
  "image_url": "/cheapimg",
  "title": "Cheap Room",
  "price": 15,
  "address": "125 Apt Terrace",
  "bathrooms": 1,
  "bedrooms": 1,
  "max_guests": 1,
  "beds": 1,
  "property_type": "RV",
  "room_type": "Private Room",
  "internet": false,
  "family": false,
  "parking": false,
  "kitchen": false,
  "description": "test4 bunch of text",
  "cancellation": "Flexible"
  })
