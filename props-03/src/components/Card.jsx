const Card = ({ user, role, img, bio, isFavorite, onToggleFavorite }) => {
  return (
    <article className="card">
      <img src={img} alt={user} />
      <h2>{user}</h2>
      <span className="role-badge">{role}</span>
      <p>{bio}</p>

      <button type="button" onClick={onToggleFavorite}>
        {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
      </button>
    </article>
  )
}

export default Card
