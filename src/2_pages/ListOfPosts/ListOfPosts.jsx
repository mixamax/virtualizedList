import { Virtualize, Post } from "../../5_entities";

const ListOfPosts = function () {
    return Virtualize(Post);
};

export default ListOfPosts;
