## Component Hierarchy

**AuthFormContainer**
- AuthForm

**HeaderContainer**
- NavbarLoggedIn
- NavbarLoggedOut

**SearchContainer**
- Search

**HomesContainer**
- Homes

**FooterContainer**
- Footer

**ListingsContainer**
- ListingsIndex

**ListingDetailContainer**
- Listing

**BookingFormContainer**
- BookingForm

**BookingsContainer**
- BookingForm

**ReviewFormContainer**
- ReviewForm

**ReviewsContainer**
- Reviews

**SearchContainer**
- MapContainer
- ListingsContainer

**ListingFormContainer**
- ListingForm

## Route

Path	Component
"/sign-up"	"AuthFormContainer"
"/sign-in"	"AuthFormContainer"
"/home"	"HeaderContainer"
"/home"	"HomesContainer"
"/home"	"SearchContainer"
"/home"	"FooterContainer"
"/listings/:listingId"	"ListingsContainer"
"/listings/:listingId"	"BookingFormContainer"
"/listings/:listingId"	"ReviewsContainer"
"/listings/:listingId"	"ReviewFormContainer"
"/bookings"	"BookingsContainer"
"/newListing"	"ListingContainer"
