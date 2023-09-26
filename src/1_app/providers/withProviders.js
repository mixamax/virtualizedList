import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

export const withProviders = (component) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Provider store={store}>{component()}</Provider>
            </Suspense>
        </BrowserRouter>
    );

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
