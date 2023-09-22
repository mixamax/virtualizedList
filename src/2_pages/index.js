import { MainPage } from "./main_page/MainPage";
import { OpenPost } from "./open_post/OpenPost";
import { Routes, Route } from "react-router-dom";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/post/:id" element={<OpenPost />}></Route>
        </Routes>
    );
};
