import AppRouter from "./Config/router";
import { Provider } from "react-redux";
import configStore from "./store";

import "./App.css";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const { store, persistor } = configStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter>
          <div className="App bg-dark"></div>
        </AppRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
