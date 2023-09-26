import { Button } from "../../../6_shared/Button";
import style from "./post.module.css";

export const Post = ({ data }) => {
    const { id: number, title, content } = data;

    return (
        <div className={style["post"]}>
            {" "}
            <span className={style["post-text"]}>
                {number}. <b>{title}</b> {content}
            </span>
            <Button button_text={"просмотр"} link={`/post/${number}`} />
        </div>
    );
};
