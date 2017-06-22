# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({"email": "guest@live.com", "first": "Ronald", "last": "McDonald", "password": "asdf1234", "month": "5", "day": "11", "year": "1980"})

Home.create(host_id:3,
  lat: 50,
  lng: -77,
  image_url: "/lookatme",
  title: "DavidsHouse",
  price:"160",
  accommodates:4,
  bathrooms:1,
  bedrooms:2,
  beds:3,
  property_type:"House",
  room_type:"Entire home/apt",
  internet:true,
  family:true,
  parking:true,
  kitchen:true,
  description:"this is a really long set state",
  cancellation: "Flexible",
  max_guests: 6,
  address: "123 Flex Street")
