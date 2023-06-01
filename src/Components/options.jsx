function Options(props) {
  // moved the reset buttion from App to this file
  function reset() {
    alert("you got ship washed");
    props.setpoints(0);
    props.setHits(0);
  }
  return <button onClick={() => reset()}>Reset</button>;
}
export default Options;
