import Header from "./components/Header";
import ViewScreen from "./screens/ViewScreen";

const App = () => {
  return (
    <div >
      <Header />
      <div style={{ height: '100px' }}></div>
      <ViewScreen />
    </div>
  );
}

export default App;
