import { useState } from "react";

// Type
import { IPostingList } from "../../data/postingData";
// Component
import SubCategory from "./SubCategory";
// Asset
import colorFolder from "../../assets/color_folder.png";
import greyFoloder from "../../assets/grey_folder.png";

export default function MainCategory({ id, data }: { id: number; data: IPostingList }) {
    const [active, setActive] = useState(false);
    const mainCategory = data[id];

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;

        if (target.tagName === "BUTTON" && mainCategory.hasChild) {
            setActive(!active);
        }
    };

    return (
        <>
            <button onClick={clickHandler} key={mainCategory.id} className="block mt-3 mb-3 first:mt-0 last:mb-0">
                <img
                    src={`${active ? colorFolder : greyFoloder}`}
                    alt="folder"
                    className="inline-block w-[16px] mr-2 mb-1"
                />
                <span className="text-sm">{mainCategory.postingTitle}</span>
            </button>

            {mainCategory.hasChild && active && <SubCategory child={mainCategory.childIds} data={data} />}
        </>
    );
}
