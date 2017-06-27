## Component Hierarchy

**AuthFormContainer**
- AuthForm: will either display Sign Up/Log In buttons. DONE

When a user clicks on the Sign Up/Log In buttons it dispatches addContentToModal action with the SignUp or LogIn components, which renders a SignUp or LogIn modal in the middle of the page.

**HeaderContainer**
- NavbarLoggedIn - NavBar will be set as true if logged in. DONE
- NavbarLoggedOut - NavBar will be set as false if logged out. DONE

**HomesContainer**
- Header - DONE
- Homes - HomesContainer will hold an array of Homes based on the bounds of the map. Limit 40-50ish. - DONE
- Map - Will hold the Google Map that will feature automatic search and populate the search into Homes. - DONE
- Search
- Sorting/Filter - DONE

This will be the Home page.

Search will allow the user to search for a location, have Maps center to the location, and render Homes.

Sorting will sort and render based on the parameters.

**FooterContainer**
- Footer - About Us, Careers, my LinkedIn, my GitHub, etc. - DONE

**SelectContainer**
- Header DONE
- PictureModal - will have carousel feature after clicking
- NavigationContainer - Scrolls down to determined section - INCOMPLETE
+ SummaryContainer DONE
+ ReviewsContainer
+ HostInfo? (bonus)
+ Map - Map with a unprecise location (circle)
- BookingPanelContainer - positioned absolute - INCOMEPLETE
- Footer DONE

Select (Details) page will have a header, followed by a PictureModal. On the left, the Navigation Container will assist the user to scroll down to the relevant section (Summary Container, Reviews Container, Host Info, Map). On the right, an absolute BookingPanel will persist.

**ReviewsContainer**
- Reviews

Reviews will have ratings and descriptions, and are also able to submit and write. Pagination.

**TripsContainer**
- Header
- Trips
- Footer

Will render all the trips that the visitor has booked under their account.

**BookingPanelContainer**
- Booking

This will allow user to book a trip and redirect the user to '/user/:id/trips' and wait for the host to approve of the booking.

**BookingsContainer**
- Header
- Host Description
- Footer
- Checkout - title, description, rating, dates, total price
- Confirm Booking button (redirect to /user/:id/trips)
Will render all the trips that the host has to approve under their account

**ListingsContainer**
- StepOneForm
- StepTwoForm
- StepThreeForm
- StepFourForm
- AddressForm

Forms will fill out in order: property_type, space details, max_guests, title and description, amenity, cancellation policy, price


## Route

|Path	| Component|
|-----|----------|
|"/"	| "HomesContainer"|
|"/listings/:listingId"	| "SelectContainer"|
|"/user/:id/trips" |	"TripsContainer"|
|"/user/:id/book/" | "BookingsContainer" |
|"/user/:id/host/list" | "ListingsContainer" |
