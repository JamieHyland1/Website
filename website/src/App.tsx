import './App.css';
import { Banner } from './Banner';

function App() {
  return (
    <div className="App">
      <Banner name="Jamie Hyland" titles={["Software developer","Game Developer","Creative Coder"]} interval={1000} colors={["#FFB7B7","#F0C5FA","#ACFADF"]} colors2={["#E1FFD1","#FAF8DE","#FAB9D0"]}></Banner>
    </div>
  );
}

export default App;
