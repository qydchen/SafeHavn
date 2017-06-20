```js

{
  session: {
    currentUser: {
      id: 1,
      email: "johndoe69@gmail.com",
      name: "Jaysheezy",
    },
    errors: [],
  }

  search_params: {
    ///????
  }

  homes: {
    1: {
      id: 1,
      host_id: 2,
      title: "High rise apartment with an amazing balcony view",
      description: "Heart of NYC. Extremely close to bars & nightlife. Close proximity to many attractions!",
      lat: 33,
      lng: -111,
      image_url: "apartment.jpg",
      price: 160,
      city: "New York",
      state: "NYC",
      country: "United States",
    }
    2: {
    //  ...
    },
    3: {
    //  ...
    },
  }

  homeDetail: {
    id: 1,
    title: "High rise apartment with an amazing balcony view",
    price: 160,
    space: {
      accommodates: 4,
      bathrooms: 1,
      bedrooms: 2,
      beds: 3,
      property_type: "House",
      room_type: "Entire home/apt"
    },
    amenity: {
      "Wireless Internet": true,
      "Family/kid friendly": true,
      "Free parking on premises": true,
      "Kitchen": true
    },
    description: "Heart of NYC. Extremely close to bars & nightlife. Close proximity to many attractions!",
    cancellation: "Loose",
    max_guests: 6,
    trips: {
      1: {
        start_date: { month: "Jan", day: 5, year: 2017 }
        end_date: { month: "Jan", day: 21, year: 2017 }
      }
    },
    reviews: {
      1: {
        author_Id: 1,
        rating: 9,
        body: "Best view in NYC, hands down!"
      }
    }
  }

  trips: {
    1: {
      user_id: 1,
      home_id: 1,
      host_id: 2,
      start_date: { month: "Dec", day: 31, year: 2016 }
      end_date: { month: "Jan", day: 3, year: 2017 }
    }
  }

  reviews: {
    1: {
      author_Id: 1,
      home_id: 1,
      rating: 9,
      body: "Best view in NYC, hands down!"
    }
  }


}
```
