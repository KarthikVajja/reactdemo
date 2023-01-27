export const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};

export const Planets = (props) => {
    return (
      <div className="App">
        <h1>{props.planet.isGasPlanet ? props.planet.name : ''}</h1>
      </div>
    )
  }