import { useState } from "react";
import { useGetPostsQuery } from "../../6_shared/postApi";
import { Post } from "./Post";
import style from "./main_page.module.css";

export const MainPage = () => {
    const { data = [] } = useGetPostsQuery();
    const [start, setStart] = useState(0);
    const visibleRows = 5;
    const rowHeight = 5;

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
            {data.slice(start, start + visibleRows + 1).map((post) => (
                <Post
                    key={post.id}
                    number={post.id}
                    title={post.title}
                    content={post.content}
                />
            ))}
            <div style={{ minHeight: `${getBottomHeight()}rem` }}></div>
        </div>
    );
};
