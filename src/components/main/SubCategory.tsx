// TYPE
import { IPostingList } from "../../data/postingData";

export default function SubCategory({ child, data }: { child: number[]; data: IPostingList }) {
    return (
        <ul className="ml-8">
            {child.map((ele) => (
                <li key={ele} className="leading-10">
                    {data[ele].postingTitle}
                </li>
            ))}
        </ul>
    );
}
