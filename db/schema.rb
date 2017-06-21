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

ActiveRecord::Schema.define(version: 20170621211933) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "homes", force: :cascade do |t|
    t.integer  "host_id",      null: false
    t.float    "lat",          null: false
    t.float    "lng",          null: false
    t.integer  "price",        null: false
    t.string   "image_url",    null: false
    t.string   "title",        null: false
    t.string   "space"
    t.string   "amenity"
    t.text     "description",  null: false
    t.text     "cancellation", null: false
    t.string   "address",      null: false
    t.integer  "max_guests"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "homes", ["host_id"], name: "index_homes_on_host_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email",           null: false
    t.string   "image_url"
    t.string   "first",           null: false
    t.string   "last",            null: false
    t.integer  "month"
    t.integer  "day"
    t.integer  "year"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["image_url"], name: "index_users_on_image_url", using: :btree

end
