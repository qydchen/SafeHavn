# SafeHavn
URL: [safehavn.herokuapp.com](https://safehavn.herokuapp.com)

![safehavn-Landing](/app/assets/images/demo/SafeHavnLanding.png)

SafeHavn draws inspiration from AirBnB that helps users find unique locations. The user can filter these locations, book them, and manage them in a clear, intuitive, user-friendly navigation.

## Project Information
This project was developed in two weeks utilizing Ruby on Rails, React, Redux, Google Maps, and Amazon S3.

## Features
  * Account creation and authentication
  * Search for trips in a geographic location by price and guest size
  * View homes' show page
  * Displays home details (address, amenities, space details)
  * Book a home
  * Manage bookings and view trips.
  * Users may only view trips that they booked personally

## Key Features & Implementation

### User Authentication
On the back-end, an encrypted, hashed password is stored in the database (passwords are never saved to the database). On log-in, the provided password is rehashed and compared to the encrypted password in order to verify the log-in.

### Home Show Page
All homes are stored in the database, which contains columns for:
  * the home `id`
  * the Geographic location (`lat` and `lng`)
  * `price` per night
  * `title` of the home
  * `description` of the home
  * `cancellation` policy
  * the `address` of home
  * an `image_url` referencing it's picture hosted in AWS
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

Below is an example of a state shape for the home index page:

```JavaScript
{
  1: {
    id: 1,
    lat: 41.1706021488593,
    lng: -74.9294859019342,
    price: 138,
    title: "Three Island",
    description: "Classic Brooklyn Brownstone. Suite 627 is a spacious 1 bedroom apt with private entry. Living room, full kitchen and bath on the second floor on quiet tree-lined block in historic Bedford-Stuyvesant, Brooklyn. Built in 1899, Suite 627 features original architectural details, such as hardwood floors, fireplaces and built-ins. Accommodates 4 with a queen bed and convertible sofa. Close to subway for easy access to Manhattan. Short cab ride from both JFK and LaGuardia airports. The space Suite 627 is a comfortable oasis. You have the entire floor and features a private entryway. All inclusive amenities include Wi-fi, air conditioning, laptop work-space and smart TV to access your favorite apps. Perfect for couples retreat, family get-a-way or business traveler. Interaction with guests My family and I occupy the lower levels of the home and have been residents of Bedford Stuyvesant for over 20 years. We enjoy everything about our neighborhood--friends, family, and friends who are extended family. I am a self professed HGTV enthusiast. I love watching the magic that happens when people love their house and transform it into a home. I apply these learnings to my own home and by extension Suite 627. Suite 627 is waiting for you to join in on the good people, great diverse food, beautiful art and non-stop culture. So many things to do and see! Don't wait, book Suite 627 now! We can't wait to have you as our guest!",
    address: "79886 Skiles Mission, Lake Marlee, Mauritania",
    host: {
      first: "Kim",
      last: "Kardashian"
    },
    revcount: 9,
    avg: 7,
    space: {
      max_guests: 12,
      beds: 12,
      room_type: "Private Room"
    },
    image_url: "http://s3.amazonaws.com/safehavns-dev/homes/images/000/000/001/original/0.jpg?1500573048"
  },
  2: {
    id: 2,
    lat: 40.6777110577057,
    lng: -73.8242275239494,
    price: 338,
    title: "Icirrus City",
    description: "Beautiful, newly renovated apartment. Very clean(really) and quiet. Has a fully equipped kitchen, cable tv, smart tv, wifi troughout. Located a stone throw away from the Freedom tower, Wall Street, NYSE, Shopping malls, Battery Park City, Hudson River boardwalk, Statue of Liberty ferry, Federal Reserve Bank, Goldman Sachs and more. All within 5 min walk from my place. I would love to share my love of New York City with you. Я говорю по русски. Пишите, спрашивайте. Thank you and see you soon. The space Designed with home in mind, all of the pieces were carefully selected to make you feel cozy. Lots of clean towels, sheets and essentials for a comfortable stay in my place. Interaction with guests I love New York, especially Downtown and Finacial district, Battery Park city promenade and the marina. Got my sailors license there. Would love to show you my favorite places or advice you on where to go. We have it all down here! And the clean air, and water, and beautiful parks.",
    address: "7547 Franz Falls, Dooleyport, Honduras",
    host: {
      first: "Emma",
      last: "Watson"
    },
    revcount: 4,
    avg: 7,
    space: {
      max_guests: 12,
      beds: 12,
      room_type: "Entire home/apt"
    },
    image_url: "http://s3.amazonaws.com/safehavns-dev/homes/images/000/000/002/original/1.jpg?1500573048"
  }
}
```

Below is an example of a state shape for the home show page:

```JavaScript
{
  id: 29,
  lat: 40.817193641856,
  lng: -74.0953376465903,
  price: 244,
  title: "Vermilion City",
  description: "Classic Brooklyn Brownstone. Suite 627 is a spacious 1 bedroom apt with private entry. Living room, full kitchen and bath on the second floor on quiet tree-lined block in historic Bedford-Stuyvesant, Brooklyn. Built in 1899, Suite 627 features original architectural details, such as hardwood floors, fireplaces and built-ins. Accommodates 4 with a queen bed and convertible sofa. Close to subway for easy access to Manhattan. Short cab ride from both JFK and LaGuardia airports. The space Suite 627 is a comfortable oasis. You have the entire floor and features a private entryway. All inclusive amenities include Wi-fi, air conditioning, laptop work-space and smart TV to access your favorite apps. Perfect for couples retreat, family get-a-way or business traveler. Interaction with guests My family and I occupy the lower levels of the home and have been residents of Bedford Stuyvesant for over 20 years. We enjoy everything about our neighborhood--friends, family, and friends who are extended family. I am a self professed HGTV enthusiast. I love watching the magic that happens when people love their house and transform it into a home. I apply these learnings to my own home and by extension Suite 627. Suite 627 is waiting for you to join in on the good people, great diverse food, beautiful art and non-stop culture. So many things to do and see! Don't wait, book Suite 627 now! We can't wait to have you as our guest!",
  cancellation: "Strict",
  address: "9821 Soledad Green, North Erika, Romania",
  trips: [
    {
    id: 4,
    visitor_id: 1,
    home_id: 29,
    start_date: "2017-08-08",
    end_date: "2017-08-15",
    created_at: "2017-07-20T18:54:39.861Z",
    updated_at: "2017-07-20T18:54:39.861Z",
    num_guests: 4,
    totalcost: 1763
    }
  ],
  host: {
    id: 3,
    first: "Beyonce",
    last: "Knowles"
  },
  host_image_url: "http://s3.amazonaws.com/safehavns-dev/users/images/000/000/003/original/beyonce.jpg?1500573040",
  image_url: "http://s3.amazonaws.com/safehavns-dev/homes/images/000/000/029/original/28.jpg?1500573065",
  space: {
    max_guests: 4,
    bathrooms: 1,
    bedrooms: 2,
    beds: 4,
    property_type: "Farmhouse",
    room_type: "Shared Room"
  },
  amenities: {
    internet: false,
    family: false,
    parking: true,
    kitchen: false
  }
}
```

![safehavn-show](/app/assets/images/demo/SafeHavnShow.png)

### Instant Map Filters
SafeHavn offers real-time filtering based on party size and price (per night). The Redux state is updated with a list of all the homes matching both the filter query and location bounds. Map markers are then populated on the map as an overlay for every location stored in the state. With every filter or idle state of the map, old map markers are replaced with new map markers; the bounds also resize automatically when zooming in or out of the map.

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
      northEast: {lat: 39.123551, lng: -73.951231},
      southWest: {lat: 41.139024, lng: -69.994121}
    }
    minHousing: 2,
    maxHousing: 4,
    minPrice: 50,
    maxPrice: 250,
  }
```

![map-drag](/app/assets/images/demo/map-drag.gif)

### Booking a Trip
All trips (bookings) are stored in one table in the database, which contains columns for `id`, the `visitor_id` that references a visitor (user), the `home_id` that references the booked home, and the `start_date` and `end_date` of the trip.

![safehavn-book](/app/assets/images/demo/SafeHavnBook.png)

### Viewing trips
Only the user can view their own trips. The user can view details about their trip, the amount they paid, and if they have to, cancel their trips. If the user has no trips, a link will allow the user to redirect back to the home index page.

This is the page where the user can post a review of their trips.

![safehavn-trip](/app/assets/images/demo/SafeHavnTrip.png)

### Reviews

Only visitors can make a review of the homes they visit. A review requires a rating and a body. The rating has to be between 1-10 and the body has to be less than 500 characters just like AirBnB. Upon creating a review, the review will be posted on the respective home show page. In the backend, each review will be tallied and the average rating calculated. This information will be displayed on the home index page.

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
Compared with AirBnB, there are countless UX design tweaks that I can improve on such as: adding a carousel that spins through photos of the home. Adding a slider bar to filter budgets and guest size.
