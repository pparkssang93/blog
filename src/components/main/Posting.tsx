// COMPONENT
import { Outlet, useLocation } from "react-router-dom";
import PostingList from "./PostingList";

const Posting = function () {
    const location = useLocation();
    const path = location.pathname;

    return (
        <main className="bg-slate-50 p-10">
            <div className="flex max-w-screen-xl mx-auto gap-10">
                <PostingList />
                {path === "/" ? <div className="grow-[6]">path</div> : <Outlet />}
            </div>
        </main>
    );
};

export default Posting;
