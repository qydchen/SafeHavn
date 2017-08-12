# SafeHavn
URL: [Live Link](http://www.safehavn.site/#/)

![safehavn-Landing](/app/assets/images/demo/SafeHavnLanding.png)

SafeHavn draws inspiration from AirBnB that helps users find unique locations. The user can filter these locations, book them, and manage them in a clear, intuitive, user-friendly navigation.

## Contents
**Features**

* [User Authentication](#user-authentication)
* [Home Show Page](#home-show-page)
* [Instant Map Filters](#instant-map-filters)
* [Booking a Trip](#booking-a-trip)
* [Reviews](#reviews)
* [Preventing N+1 Queries](#Preventing N+1 Queries)

## Project Information
This project was developed in two weeks utilizing Ruby on Rails, React.js with Redux, Google Maps API, and AWS S3.

## Features
  * Account creation and authentication
  * Search for trips in a geographic location by price and guest size
  * View homes' show page
  * Displays home details (address, amenities, space details)
  * Book a home
  * Manage bookings and view trips.
  * Users may only view trips that they booked personally
  * Visitors may only post reviews on homes that they visit

## User Authentication
On the back-end, an encrypted, hashed password is stored in the database (passwords are never saved to the database). On log-in, the provided password is rehashed and compared to the encrypted password in order to verify the log-in.

When signing up for a SafeHavn account, the user has to be 18 years or older just like the real AirBnB.

``` Ruby
  validate :validate_age

  private

  def birth_date
    Date.parse("#{day}/#{month}/#{year}")
  end

  def validate_age
    if birth_date.present? && birth_date > 18.years.ago
      errors.add(:birth_day, 'is under 18 years.')
    end
  end
```

## Home Show Page
All homes are stored in the database, which contains columns for:
  * the home `id`
  * the Geographic location (`lat` and `lng`)
  * `price` per night
  * `title` of the home
  * `description` of the home
  * `cancellation` policy
  * the `address` of home
  * an `image_url` referencing its picture hosted in AWS
  * `max_guests`, the maximum number of guests for the home
  * the number of `bathrooms` (can also be float to accommodate for 1.5 bathrooms, etc.)
  * the number of `bedrooms`
  * the number of `beds`
  * the `property_type` of home (Mansion, House, Cabin, Cabana, etc.)
  * the `room_type` that the host is servicing (Shared Room, Entire House, Entire Room, etc.)
  * a boolean that determines if the host provides the `internet` amenity
  * a boolean that determines if the host provides the `family`-friendly amenity
  * a boolean that determines if the host provides the free-`parking` amenity
  * a boolean that determines if the host provides a `kitchen`
  * a boolean that determines if the home is `featured`

Below is an example of a state shape for the home index page:

```JavaScript
{
  2: {
    id: 2,
    lat: 41.3517071578383,
    lng: -74.097058141765,
    price: 184,
    title: "Oreburgh City",
    description: "Windows to the NYC VIEW ... One of 2 bedrooms that place is good for solo adventurers, business travelers, and furry friends (pets) Or even a light traveling couple for a romantic escape! Guest access All available for the guest within apartment, parking pass, washer and dryer , blow dryer, ice machine, blenders etc Other things to note All available for the guest within apartment, parking pass, washer and dryer , blow dryer, ice machine, blenders etc",
    address: "6959 Feeney Throughway, Darrelborough, Spain",
    featured: true,
    host: {
      first: "Nicki",
      last: "Minaj"
    },
    revcount: 8,
    avg: 7,
    space: {
      max_guests: 6,
      beds: 6,
      room_type: "Private Room"
    },
    image_url: "http://s3.amazonaws.com/safehavns-dev/homes/images/000/000/002/original/1.jpg?1502306488"
  },
  4: {
    id: 4,
    lat: 40.6174974596302,
    lng: -74.1008671933032,
    price: 415,
    title: "Couriway Town",
    description: "Windows to the NYC VIEW ... One of 2 bedrooms that place is good for solo adventurers, business travelers, and furry friends (pets) Or even a light traveling couple for a romantic escape! Guest access All available for the guest within apartment, parking pass, washer and dryer , blow dryer, ice machine, blenders etc Other things to note All available for the guest within apartment, parking pass, washer and dryer , blow dryer, ice machine, blenders etc",
    address: "23930 Garrett Cape, Lake Kian, Bouvet Island (Bouvetoya)",
    featured: true,
    host: {
      first: "Deadpool",
      last: "Wilson"
    },
    revcount: 6,
    avg: 7,
    space: {
      max_guests: 4,
      beds: 4,
      room_type: "Private Room"
    },
    image_url: "http://s3.amazonaws.com/safehavns-dev/homes/images/000/000/004/original/3.jpg?1502306490"
  },
}
```

Below is an example of a state shape for the home show page:

```JavaScript
{
  id: 87,
  lat: 41.3597284791475,
  lng: -73.8634425131675,
  price: 436,
  title: "Mossdeep City",
  description: "The space Stay in this state-of-the art 2 Bedrooms steps away from Times Square. Apartment Features: ** Elevator building with 24Hr doorman ** Apartment with splendid City views ** Unit featuring lots of windows throughout entire apartment ** Kitchen finishes include white granite countertops, appliances, built-in microwave and custom cabinetry ** Wireless internet available ** Flat screen TV with cable package channels ** Comfortable sofa in living room ** Dining table seats 4 ** Washer / Dryer in the apartment ** Spacious Closets ** Parquet wood flooring ** Towels and Linens provided free of charge ** Complimentary breakfast provided Apartment Amenities: • Oversized windows • Rift cut white oak floors • Bosch washer and dryer • Chef’s Kitchen: – Whitewashed oak cabinetry – Natural calacatta backsplash – Caesarstone countertop – Bertazzoni range and microwave – Stainless steel refrigerator and dishwasher • Baths: – Moss Lappato porcelain floors and shower wall – White Caesarstone vanity top – Rift cut white oak vanity with matching custom medicine cabinet – Soaking tub Guest access Doorman, Lounge, Gym, Roof Top hot jacuzzi, Pet Friendly, Tv, Wifi, AC, Central Air, Kitchen, Dishwasher, Dishes, Elevator Interaction with guests we can put portable bed on air mattress, if you need, pls write me. Other things to note Please note that if you do not meet the 11:00 AM check-out deadline. If you have a flight later on in the day, you can store your luggage until your flight at our other place for free.",
  cancellation: "Moderate",
  address: "325 Demetrius Flat, North Frederic, Seychelles",
  trips: [ ],
  featured: false,
  host: {
    first: "Kim",
    last: "Kardashian"
  },
  host_image_url: "http://s3.amazonaws.com/safehavns-dev/users/images/000/000/010/original/kim.jpg?1502306483",
  image_url: "http://s3.amazonaws.com/safehavns-dev/homes/images/000/000/087/original/86.jpg?1502306536",
  revcount: 9,
  avg: 8,
  space: {
    max_guests: 6,
    bathrooms: 3,
    bedrooms: 3,
    beds: 6,
    property_type: "Mansion",
    room_type: "Entire home/apt"
  },
  amenities: {
    internet: false,
    family: false,
    parking: true,
    kitchen: true
  }
}
```

![safehavn-show](/app/assets/images/demo/SafeHavnShow.png)

## Instant Map Filters
SafeHavn offers real-time filtering based on party size and price (per night). The Redux state is updated with a list of all the homes matching both the filter query and location bounds. Map markers are then populated on the map as an overlay for every location stored in the state. With every filter or idle state of the map, old map markers are removed and new map markers are created; the bounds also resize automatically when zooming in or out of the map.

![filter-map](/app/assets/images/demo/filter-map.gif)

#### Implementation

On the backend, the home model will take in a query based on a latitude and longitude rectangular boundary. The home controller will also query based on guest range and price range.

  ``` Ruby
  @homes = bounds ? Home.in_bounds(bounds) : Home.all
  if (params[:minHousing] && params[:maxHousing])
    @homes = @homes.where(max_guests: housing_range)
  end
  if (params[:minPrice] && params[:maxPrice])
    @homes = @homes.where(price: price_range)
  end
  ```

On the frontend, a filter object will be a slice of state that will be passed in when making an ajax request for an index of homes, and the subsequent response will update the map api with the filtered index.

``` JavaScript
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchHomes(getState().filters)(dispatch);
};
```

Here is an example of a filter state slice:
```
  {
    bounds: {
      northeast: {lat: 39.123551, lng: -73.951231},
      southwest: {lat: 41.139024, lng: -69.994121}
    }
    minHousing: 2,
    maxHousing: 4,
    minPrice: 50,
    maxPrice: 250,
  }
```

![map-drag](/app/assets/images/demo/map-drag.gif)

## Booking a Trip
All trips (bookings) are stored in one table in the database, which contains columns for `id`, the `visitor_id` that references a visitor (user), the `home_id` that references the booked home, and the `start_date` and `end_date` of the trip.

![safehavn-book](/app/assets/images/demo/SafeHavnBook.png)

### Viewing Trips
Only the user can view their own trips. The user can view details about their trip, the amount they paid, and if they have to, cancel their trips. If the user has no trips, a link will allow the user to redirect back to the home index page.

This is the page where the user can post a review of their trips.

![safehavn-trip](/app/assets/images/demo/SafeHavnTrip.png)

## Reviews

Only visitors can make a review of the homes they visit. A review requires a rating and a body. The rating has to be between 1-10 and the body has to be less than 500 characters just like AirBnB. Upon creating a review, the review will be posted on the respective home show page. In the backend, each review will be tallied and the average rating calculated. This information will be displayed on the home index page as well as the home show page.

## Preventing N+1 Queries

Active Record allows eager loading of all the associations with a single Model. This is possible by specifying the includes method. With this method, Active Record ensures that all of the specified associations are loaded using the minimum possible number of queries.

Below are snippets of such queries:

``` Ruby
@homes = params[:bounds]
  ? Home.includes(:reviews, :host).in_bounds(params[:bounds]) : Home.where(featured: true).includes(:reviews, :host).limit(8)

@reviews = Review.includes(:author).where(home_id: params[:home_id])

@trips = Trip.where(visitor_id: current_user.id).includes(:home)
```


## Future Concepts
During my two week course of development, I discovered many more implementation that can deliver a better user experience listed below:

#### User Profile Pages
Along with reviews, adding user profiles will improve the utility of the app and give a social element to the app.

#### Improved Booking
There is currently no model validation or validations to determine if the home is reserved, making double-booking permissible. I hope to tackle this problem by graying out dates in the calendar and also add a front-end validation as well as adding a model level validation.

#### Port to React Native
Integration with mobile using React Native.

#### More Filters
Filtering by amenities and housing accommodations will improve usability. Adding dropdowns and modals will allow the expansion of such filters.

#### Improved Styling/Design
Compared with AirBnB, there are countless UX design tweaks that I can improve on such as:
  - Adding a carousel that spins through photos of the home.
  - Adding a slider bar to filter budgets and guest size.
