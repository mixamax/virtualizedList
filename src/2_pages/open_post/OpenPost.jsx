import { useParams } from "react-router-dom";
import { Button } from "../../6_shared/Button";
import styles from "./open_post.module.css";
import { useGetPostsQuery } from "../../6_shared/postApi";

export const OpenPost = () => {
    const { id } = useParams();
    const { data = [] } = useGetPostsQuery(id);
    console.log(data);
    console.log(id);
    return (
        <div className={styles["open-post_container"]}>
            <span>{data.id}</span>
            <span className={styles["open-post_title"]}>{data.title}</span>
            <span className={styles["open-post_content"]}>{data.content}</span>
            <Button button_text={"к списку постов"} link={"/"} />
        </div>
    );
};
