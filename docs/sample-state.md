{
  currentUser: {
    id: 1,
    email: "cp3@clippers.com",
    name: "Chris Paul",
  }

  listings: {
    1: {
      listingId: 1,
      owner_Id: 1,
      title: "High rise condo with an amazing balcony view",
      description: "Heart of DTLA. Extremely close to Staples Center. You can walk to all the nearby attractions!",
      lat: 34.043181,
      lng: -118.267104,
      image_url: "condo.jpg",
      price: 160,
      city: "Los Angeles",
      state: "California",
      country: "United States",
    }
  }

  listingDetail: {
    listingId: 1,
    title: "High rise condo with an amazing balcony view",
    price: 160,
    bookings: {
      1: {
        start_date: { month: "Dec", day: 31, year: 2016 }
        end_date: { month: "Jan", day: 3, year: 2017 }
      }
    },
    reviews: {
      1: {
        author_Id: 1,
        rating: 5,
        body: "Best view of Downtown Los Angeles, hands down!"
      }
    }
  }



  bookings: {
    1: {
      booker_id: 1,
      listing_id: 1,
      start_date: { month: "Dec", day: 31, year: 2016 }
      end_date: { month: "Jan", day: 3, year: 2017 }
    }
  }

  reviews: {
    1: {
      author_Id: 1,
      listing_Id: 1,
      rating: 5,
      body: "Best view of Downtown Los Angeles, hands down!"
    }
  }

}
