export default function Card(props) {
  const image = props.item.imageUrl;
  const loc = props.item.location;
  const googleUrl = props.item.googleMapsUrl;
  const title = props.item.title;
  const startDate = props.item.startDate;
  const endDate = props.item.endDate;
  const desc = props.item.description;

  return (
    <div className="card">
      <img src={image} alt={loc} className="card--image" />
      <div className="card--text">
        <div className="card--loc-line">
          <i className="fa-solid fa-map-marker-alt card--icon"></i>
          <p className="card--loc">{loc.toUpperCase()}</p>
          <a href="{googleUrl}" className="card--link">View on Google Maps</a>
        </div>
        <h2 className="card--title">{title}</h2>
        <p className="card--date">{startDate} - {endDate}</p>
        <p className="card--desc">{desc}</p>
      </div>
    </div>
  );
}
