// import React from "react";
import style from "./virtualize.module.css";
import { RowsMaker } from "../../model/RowsMaker";
import { useGetPostsQuery } from "../../../6_shared/postApi";
import { useState } from "react";

export const Virtualize = (
    ComponentInTheRow,
    visibleRows = 5,
    rowHeight = 5
) => {
    const { data = [] } = useGetPostsQuery("");
    const [start, setStart] = useState(0);

    function getTopHeight() {
        return rowHeight * start;
    }
    function getBottomHeight() {
        return rowHeight * (data.length - (start + visibleRows + 1));
    }
    function onScroll(e) {
        setStart(
            Math.min(
                data.length - visibleRows - 1,
                Math.floor(e.target.scrollTop / 16 / rowHeight)
            )
        );
    }

    return (
        <div className={style["main-page_container"]} onScroll={onScroll}>
            <div style={{ minHeight: `${getTopHeight()}rem` }} />
            {RowsMaker(data, ComponentInTheRow, start, visibleRows)}
            <div style={{ minHeight: `${getBottomHeight()}rem` }}></div>
        </div>
    );
};
