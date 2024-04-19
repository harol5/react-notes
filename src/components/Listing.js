function Listing({ data }) {
  return (
    <section className="listing-container">
      {data.map((u) => (
        <div key={u.id} className="listing-item">
          <h3>{u.username}</h3>
          <ul>
            <li>{u.name}</li>
            <li>{u.website}</li>
            <li>{u.phone}</li>
            <li>{u.email}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Listing;
