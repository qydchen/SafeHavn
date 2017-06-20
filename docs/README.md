## Minimum Viable Product

SafeHavn is a web application inspired by AirBnB that helps users find unique locations.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Homes
- [ ] Book Trips (aka Bookings)
- [ ] View Trips
- [ ] Google Maps on search
- [ ] Homes search (by location & availability)
- [ ] Hosts and Guests can make many Reviews

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: /docs/component-hierarchy.md
[api-endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md
[sample-state]: /docs/sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Homes Model, API, and components (1.5 days)

**Objective:** Homes belong to Users and can be seen from homes page along with map.

### Phase 3: GoogleMap Api (1 day)

**Objective:** Render home markers on GoogleMap based on bounds.

### Phase 4: Homes Search (2 days)

**Objective:** Homes can be searched by location and number of guests.

### Phase 5: Bookings (1 days)

**Objective:** Logged in user can set up a booking and host can approve. User can then view their bookings (aka trips) (CRUD)

### Phase 6: Listings (1.5 days)

**Objective:** Host can CRUD a listing.

### Phase 7: Reviews (1.5 days)

**Objective:** Reviews belong to listings and also users and can be created through the API.

### Bonus Features (TBD)

- [ ] User/host profiles
- [ ] Messaging
