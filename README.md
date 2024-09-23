# Blog

My-learning-repo에서 공식 홈페이지의 내용을 그대로 기록했으나, 학습한 내용과 개인적인 생각을 파악하기 어려웠습니다. 그래서 학습 내용을 쉽게 이해하고 파악하기 위해 블로그를 제작했습니다.

<br/>
<br/>
<br/>
<br/>

## How to install

-   저장소 클론

```bash
   git clone https://github.com/pparkssang93/blog
```

-   필요한 패키지 설치

    `npm install`

-   프로젝트 실행

    `npm run dev`

<br/>
<br/>
<br/>
<br/>

## How to use

### 01. MDX 파일 작성

-   `./src/posts`에 mdx 파일 작성.

### 02. 포스팅 데이터 입력.

-   `./src/data/postingListData.ts`에 mdx파일에 관한 정보 입력.
-   link에 `posts/` **필수** 입력.
-   `key`값은 숫자값 입력.
    -   데이터 `0`번째는 root 객체
    -   root 하위 요소는 `childIds` 프로퍼티에 입력.
    -   `hasChild` 값 변경.

**포스팅 데이터 Interface**

```ts
interface IPostingList {
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
```

<br/>
<br/>
<br/>
<br/>

# Version 🎾

## 1.0.0

-   블로그
-   블로그 프로젝트 배포
