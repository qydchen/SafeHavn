# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user
- `PATCH /api/users` - update user info
- `GET /api/users/:id` - bonus feature, fetch user details for user
    dashboard/profile

### Session

- `POST /api/session` - log in user
- `DELETE /api/session` - log out

### Homes

- `GET /api/homes`
  - homes index/search actions
  - accepts `price`, `start_date`, and `end_date` query params to fetch
      available homes
- `GET /api/homes/:id` - fetch one spot
- `POST /api/homes`- bonus feature, users can list homes
- `DELETE /api/homes/:id` - cancel a home
- `PATCH /api/homes/:id` - edit a home

### Trips

- `GET /api/trips` - fetches user trips
- `POST /api/trips` - create a trip
- `GET /api/trips/:id` - fetch one trip
- `DELETE /api/trips/:id` - cancel a trip

### Reviews

- `GET /api/reviews` - fetches home's reviews
- `POST /api/reviews` - create a review
- `PATCH /api/reviews/:id` - edit your review
- `DELETE /api/reviews/:id` - delete your review
