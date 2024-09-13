import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

// Component
import Pre from "../components/mdx/Pre";

function PostingContentsPage() {
    const { id } = useParams();

    const MdxComponent = lazy(() => import(`../posts/${id}.mdx`));

    return (
        <div className="grow-[6] prose overflow-auto max-h-[819px] min-h-[819px] hide-scrollbar bg-white p-16 max-w-[880px] border rounded-md prose-ul:ps-3 prose-li:list-disc prose-code:bg-gray-300 prose-code:text-red-400">
            <Suspense>
                <MdxComponent components={{ pre: Pre }} />
            </Suspense>
        </div>
    );
}

export default PostingContentsPage;
