# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({"email": "guest@live.com", "first": "Ronald", "last": "McDonald", "password": "asdf1234", "month": "5", "day": "11", "year": "1980"})
