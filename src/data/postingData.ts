export interface IPostingList {
    [key: number]: {
        id: number;
        postingTitle: string | null;
        postingDate: string | null;
        hasChild: boolean;
        childIds: number[];
        category: "root" | "main" | "sub";
        link: string | null;
    };
}

export const postingListData: IPostingList = {
    0: {
        id: 0,
        postingTitle: null,
        postingDate: null,
        hasChild: false,
        childIds: [],
        category: "root",
        link: null,
    },
};
