import { Provider } from "react-redux";
import "./App.css";
import AppContainer from "./AppContainer";
import store from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </div>
  );
}

export default App;
