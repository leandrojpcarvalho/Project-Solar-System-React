type Planet = {
  planetName:string;
  planetImage:string;
};

function PlanetCard({ planetName, planetImage }:Planet) {
  return (
    <ul data-testid="planet-card" className="container ul">
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      <li data-testid="planet-name">{ planetName }</li>
    </ul>
  );
}

export default PlanetCard;
