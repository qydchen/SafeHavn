All tables have timestamps and id primary keys. These are omitted below for brevity.

## users
column name     | data type | details
----------------|-----------|-----------------------
name            | string    | not null, indexed, unique
password_digest | string    | not null, indexed, unique
session_token   | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
image_url       | string    | indexed

## homes
column name | data type | details
------------|-----------|-----------------------
host_id     | integer   | not null, foreign key (users), indexed
lat         | float     | not null
lng         | float     | not null
price       | integer   | not null
image_url   | string    | not null
title       | string    | not null
space       | string    |
amenity     | string    |
description | text      | not null
cancellation| string    | (*Loose*, *Moderate*, or *Strict*)
city        | string    | not null
state       | string    | not null
country     | string    | not null
max_guests  | integer   |


## trips
column name | data type | details
------------|-----------|-----------------------
visitor_id  | integer   | not null, foreign key (users), indexed
host_id     | integer   | not null, foreign key (users), indexed
home_id     | integer   | not null, foreign key (homes), indexed
start_date  | date      | not null
end_date    | date      | not null
booked      | boolean   | not null
cost        | integer   | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
author_id   | integer   | not null, foreign key (users), indexed
home_id     | integer   | not null, foreign key (homes), indexed
rating      | integer   | not null
body        | text      | not null
