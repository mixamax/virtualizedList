import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";

export const withProviders = (component) => () =>
    (
        <BrowserRouter>
            <Provider store={store}>{component()}</Provider>
        </BrowserRouter>
    );
