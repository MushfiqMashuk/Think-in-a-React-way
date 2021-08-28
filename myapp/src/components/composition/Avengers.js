export default function Avengers({ canDo, superPower }) {
  let text = "All Avengers are Humans";
  let power = "All Avengers are Super Hero"

  if(canDo){
    text = canDo('Iron Man', "Fly");
  }

  if(superPower){
    power = superPower("Iron Man", "Brain");
  }

  // console.dir((<div id="horse">{function a(){return 3}}</div>).props);
  // console.dir((<div id="horse"><p>Good Boy</p> Galaxy War</div>));
  
  return <div>{text} {power}</div>;
}
