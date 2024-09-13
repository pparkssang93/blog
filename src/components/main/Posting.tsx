// COMPONENT
import { Outlet, useLocation } from "react-router-dom";
import PostingList from "./PostingList";

const RootPage = function () {
    return (
        <div className="grow-[6] bg-white p-16 max-w-[880px] border rounded-md">
            <i className="iFaceAdd text-8xl text-slate-500 iSemiBold"></i>
            <h3 className="text-4xl font-black mt-10">
                <i className="iArrowDropLeft text-4xl mr-2 "></i>
                게시글을 선택해주세요.
            </h3>
        </div>
    );
};

const Posting = function () {
    const location = useLocation();
    const path = location.pathname;

    return (
        <main className="bg-slate-50 p-10">
            <div className="flex max-w-screen-xl mx-auto gap-10">
                <PostingList />
                {path === "/" ? <RootPage /> : <Outlet />}
            </div>
        </main>
    );
};

export default Posting;
