import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      { planets
        .map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
    </div>
  );
}

export default SolarSystem;
