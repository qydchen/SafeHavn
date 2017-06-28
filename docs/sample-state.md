```js

{
  session: {
    currentUser: {
      id: 1,
      email: "johndoe69@gmail.com",
      first: "John",
      last: "Doe",
      name: "Jaysheezy",
      month: 5,
      day: 14,
      year: 1998
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
      address: "123 Fake Street"
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
    amenities: {
      internet: true, // "Wireless Internet"
      family: true, // "Family/kid friendly"
      parking: true, //"Free parking on premises"
      kitchen: true // "Kitchen"
    },
    description: "Heart of NYC. Extremely close to bars & nightlife. Close proximity to many attractions!",
    cancellation: "Flex",
    max_guests: 6,
    address: "123 Flex Street"
    trips: {
      1: {
        start_date: { month: 1, day: 5, year: 2017 }
        end_date: { month: 1, day: 21, year: 2017 }
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
      visitor_id: 1,
      home_id: 1,
      host_id: 2,
      start_date: "11/11/2016"
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
