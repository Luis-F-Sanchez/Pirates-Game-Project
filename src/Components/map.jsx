import Sector from "./sector.jsx";

function Map(props) {
  //a matrix of the board
  let gridData = {
    //1=treasure, 2=kraken, 3=ocean
    grid: [
      [3, 3, 3, 1],
      [3, 2, 1, 2],
      [3, 3, 2, 3],
      [1, 3, 1, 3]
    ]
  };
  return (
    <div>
      {/* loops thru every element in array */}
      {gridData.grid.map((row) => (
        <div>
          {/* loops thru every element in the current array/row */}
          {row.map((col) => (
            // Sector: pass usestate properties as props again
            <Sector
              num={col}
              pts={props.Points}
              setPts={props.setpoints}
              hit={props.hits}
              setHit={props.setHits}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Map;
