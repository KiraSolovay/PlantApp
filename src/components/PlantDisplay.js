export default function PlantDisplay({ plant }) {
  if (!plant) {
    return <p>No plant data available.</p>;
  }

  return (
    <>
      <h1>{plant?.common_name || "Common Name Not Available"}</h1>
      <p>{plant?.scientific_name[0] || "Scientific Name Not Available"}</p>
      <h2>{plant?.watering || "Watering Information Not Available"}</h2>
      <h2>{plant?.sunlight[0] || "Sunlight Information Not Available"}</h2>
      <h2>{plant?.hardiness?.min || "Hardiness Information Not Available"}</h2>
      <h2>{plant?.cycle || "Cycle Information Not Available"}</h2>
      <img src={plant?.default_image?.medium_url} alt={plant?.id || "Plant Image"} />
    </>
  );
}