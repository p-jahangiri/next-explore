// import "../assets/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../states";
import 'assets/styles/globals.css'; 
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
