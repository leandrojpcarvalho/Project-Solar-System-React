type ElmentsJSX = {
  children: React.ReactElement;
}

function SolarSystem({ children }:ElmentsJSX) {
  return (
    <div data-testid="solar-system">
      { children }
    </div>
  );
}

export default SolarSystem;
