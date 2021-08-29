// import Avengers from "./components/composition/Avengers";
// import Human from "./components/composition/Human";
// import Powers from "./components/composition/Powers";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";

import ClickCounter from "./components/renderProps/ClickCounter";
import Counter from "./components/renderProps/Counter";
import Section from "./components/contextAPI/Section";
//import HoverCounter from "./components/renderProps/HoverCounter";

function App() {
  return (
    <div className="app">
      <Counter // this process is called render props
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Section />


      {/* <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/**Same thing can be done by this. On that case we're gonna get this as props.children*/}

      {/* <Counter> 
          {(count,incrementCount) => (<ClickCounter count={count} incrementCount={incrementCount}/>)}
      </Counter> */}
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
