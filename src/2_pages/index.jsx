import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const List = lazy(() => import("./ListOfPosts/ListOfPosts"));
const OpenLazyPost = lazy(() => import("./open_post/OpenPost"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/post/:id" element={<OpenLazyPost />}></Route>
        </Routes>
    );
};
