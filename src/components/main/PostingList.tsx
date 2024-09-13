// DATA
import { postingListData } from "../../data/postingData";

// COMPONENT
import MainCategory from "./MainCategory";

function PostingList() {
    const root = postingListData[0];

    if (!root.hasChild) {
        return (
            <div className="border rounded-md grow-[1] p-6 bg-white min-h-[819px] max-h-[819px] min-w-[273px] max-w-[273px] overflow-y-scroll hide-scrollbar">
                <h1 className="font-black">nothing.</h1>
            </div>
        );
    }

    return (
        <div
            id="posting_list-wrapper"
            className="border rounded-md grow-[1] p-6 bg-white min-h-[819px] max-h-[819px] min-w-[273px] max-w-[273px] overflow-y-scroll hide-scrollbar"
        >
            {root.childIds.map((ele) => (
                <MainCategory key={ele} id={ele} data={postingListData} />
            ))}
        </div>
    );
}

export default PostingList;
