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

![safehavn-trip](/app/assets/images/demo/SafeHavnTrip.png)

## Future Concepts
During my two week course of development, I discovered many more implementation that can deliver a better user experience listed below:

#### Reviews
Making reviews will improve the utility of the app as it will give users better tools for decision making.

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
