// import Avengers from "./components/composition/Avengers";
// import Human from "./components/composition/Human";
// import Powers from "./components/composition/Powers";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="app">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

// function App() {
//   return (
//     <Human>
//       {({ canDo }) => (
//         <Powers>
//           {({ superPower }) => (
//             <Avengers canDo={canDo} superPower={superPower} />
//           )}
//         </Powers>
//       )}
//     </Human>
//   );
// }

// we have to keep in mind that, these callback functions must return an element or a component

export default App;

// This is react suggests. Use composition instead of inheritance
