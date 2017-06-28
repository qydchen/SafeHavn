# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170627213804) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.integer  "host_id",            null: false
    t.float    "lat",                null: false
    t.float    "lng",                null: false
    t.integer  "price",              null: false
    t.string   "title",              null: false
    t.text     "description",        null: false
    t.string   "address",            null: false
    t.integer  "max_guests"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.date     "start_date"
    t.date     "end_date"
    t.float    "bathrooms"
    t.string   "property_type"
    t.string   "room_type"
    t.boolean  "internet"
    t.boolean  "family"
    t.boolean  "parking"
    t.boolean  "kitchen"
    t.integer  "beds"
    t.integer  "bedrooms"
    t.string   "cancellation"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "homes", ["bathrooms"], name: "index_homes_on_bathrooms", using: :btree
  add_index "homes", ["bedrooms"], name: "index_homes_on_bedrooms", using: :btree
  add_index "homes", ["beds"], name: "index_homes_on_beds", using: :btree
  add_index "homes", ["family"], name: "index_homes_on_family", using: :btree
  add_index "homes", ["host_id"], name: "index_homes_on_host_id", using: :btree
  add_index "homes", ["internet"], name: "index_homes_on_internet", using: :btree
  add_index "homes", ["kitchen"], name: "index_homes_on_kitchen", using: :btree
  add_index "homes", ["max_guests"], name: "index_homes_on_max_guests", using: :btree
  add_index "homes", ["parking"], name: "index_homes_on_parking", using: :btree
  add_index "homes", ["property_type"], name: "index_homes_on_property_type", using: :btree
  add_index "homes", ["room_type"], name: "index_homes_on_room_type", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "home_id",    null: false
    t.integer  "rating",     null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["home_id"], name: "index_reviews_on_home_id", using: :btree

  create_table "trips", force: :cascade do |t|
    t.integer  "visitor_id", null: false
    t.integer  "host_id",    null: false
    t.integer  "home_id",    null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "num_guests"
  end

  add_index "trips", ["home_id"], name: "index_trips_on_home_id", using: :btree
  add_index "trips", ["host_id"], name: "index_trips_on_host_id", using: :btree
  add_index "trips", ["visitor_id"], name: "index_trips_on_visitor_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "email",              null: false
    t.string   "first",              null: false
    t.string   "last",               null: false
    t.integer  "month"
    t.integer  "day"
    t.integer  "year"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree

end
