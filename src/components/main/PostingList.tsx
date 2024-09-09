// DATA
import { postingListData } from "../../data/postingData";

// COMPONENT
import MainCategory from "./MainCategory";

function PostingList() {
    const root = postingListData[0];

    return (
        <div
            id="posting_list-wrapper"
            className="border rounded-md grow-[1] px-4 bg-white min-h-[819px] min-w-[273px] max-w-[273px]"
        >
            {root.childIds.map((ele) => (
                <MainCategory key={ele} id={ele} data={postingListData} />
            ))}
        </div>
    );
}

export default PostingList;
