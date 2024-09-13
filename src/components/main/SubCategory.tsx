import { Link } from "react-router-dom";
// TYPE
import { IPostingList } from "../../data/postingData";

export default function SubCategory({ child, data }: { child: number[]; data: IPostingList }) {
    return (
        <ul className="ml-8">
            {child.map((ele) => {
                if (typeof data[ele].link === "string") {
                    return (
                        <li key={ele} className="leading-8 text-sm">
                            <Link to={data[ele].link}>{data[ele].postingTitle}</Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
}
