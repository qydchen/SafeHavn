export const safeHavn(home) {
  return (
    <div className="home-card">
      <Link to={`/homes/${home.id}`} className="link-to">
        <div className="show-card-container">
          <img className="show-card" src={home.image_url}/>
        </div>
        <div className="card-top-row">
          <div className="card-bold">${home.price} {home.title}</div>
        </div>
        <div className="card-bot-row">
          <div className="card-norm">{home.space.room_type}{this.favorite(home)} · {home.space.beds} beds</div>
          <div className="card-norm">Rated {home.avg} out of 10 · {home.revcount} reviews</div>
        </div>
      </Link>
    </div>
  )
}
