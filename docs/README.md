## Minimum Viable Product

Nomad is a web application inspired by AirBnB that helps users find unique locations.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Spots
- [ ] Bookings
- [ ] Spots search (by location & availability
- [ ] Google Maps on search
- [ ] Hosts and Guests can make many Reviews

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md
[sample-state]: docs/sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Listings Model, API, and components (1.5 days)

**Objective:** Listings belong to Users and can be seen from listings page along with map.

### Phase 3: Spots Search (2 days)

**Objective:** Listings can be searched by location and number of guests.

### Phase 4: Bookings (1.5 days)

**Objective:** Logged in user can make a booking and view their own bookings.

### Phase 5: Reviews (1 day)

**Objective:** Reviews belong to listings and also users and can be created through the API.

### Phase 6: - Patch Up and CSS (1 day)

**Objective:** Fix overall structure, style, debug.

### Bonus Features (TBD)

- [ ] User/host profiles
- [ ] Messaging
