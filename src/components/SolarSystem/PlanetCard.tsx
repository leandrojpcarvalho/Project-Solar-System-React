type Planet = {
  planetName:string;
  planetImage:string;
  planetInfo:string;
  setPlanet: (event: React.MouseEvent<HTMLDivElement>) => void;
  setModalIsInvisible: ()=>void;
};

function PlanetCard({ planetName, planetImage, setPlanet, setModalIsInvisible }:Planet) {
  function handleClick(event:React.MouseEvent<HTMLDivElement>) {
    setModalIsInvisible();
    setPlanet(event);
  }

  return (
    <div
      data-testid="planet-card"
      className="container ul"
      onClick={ (event) => handleClick(event) }
      aria-hidden="true"
    >
      { planetName === 'Terra'
        ? <img src="src/images/rocket.png" className="rocket" alt="rocket" />
        : <div className="planet-to-earth"> </div> }
      <img
        src={ planetImage }
        alt={ `Planeta ${planetName}` }
        id={ planetName }
        className="animation"
      />
      <p data-testid="planet-name">{ planetName }</p>
    </div>
  );
}

export default PlanetCard;
