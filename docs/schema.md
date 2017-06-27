All tables have timestamps and id primary keys. These are omitted below for brevity.

## users
column name     | data type | details
----------------|-----------|-----------------------
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null
month           | integer    | not null
day             | integer    | not null
year            | integer    | not null


## homes
column name | data type | details
------------|-----------|-----------------------
host_id     | integer   | not null, foreign key (users), indexed
lat         | float     | not null
lng         | float     | not null
price       | integer   | not null
title       | string    | not null
description | text      | not null
cancellation| string    | (*Loose*, *Moderate*, or *Strict*)
address     | string    | not null
internet    | boolean    |
family      | boolean    |
parking     | boolean    |
kitchen     | boolean    |
beds        | integer    |
bedrooms    | integer   |
bathrooms   | integer   |
property_type| string   |
room_type   | string   |

## trips
column name | data type | details
------------|-----------|-----------------------
visitor_id  | integer   | not null, foreign key (users), indexed
host_id     | integer   | not null, foreign key (users), indexed
home_id     | integer   | not null, foreign key (homes), indexed
start_date  | date      | not null
end_date    | date      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
author_id   | integer   | not null, foreign key (users), indexed
home_id     | integer   | not null, foreign key (homes), indexed
rating      | integer   | not null
body        | text      | not null
