# 설명
퍼플독 프론트엔드 과제 <br/>
hacker news API를 이용해서 등록되어 있는 게시글을 조회하는 사이트 입니다. <br/>
컴포넌트 재사용성을 위해 최대한 잘게 쪼갰으며 api data는 최상위 계층에서 뿌려주는 형식으로 구현하였습니다. <br/>
(data는 ListPage에서 fetching을 통해 값을 구하고 하위컴포넌트에 뿌려주었습니다.) <br/>
확장성을 위해 반응형으로 구현하였습니다.


## 실행방법
환경변수 파일이 .env파일이 없기때문에 api주소는 fetcher.ts파일을 참고하셔서 넣으시면 됩니다.
```
git clone https://github.com/NeatKYU/purpledog-frontend.git
npm install
npm run start
```

## 배포 링크
https://purpledog-frontend.vercel.app/

## 파일구조
```bash
src/
├── App.test.tsx
├── App.tsx
├── GlobalStyle.jsx
├── assets
│   ├── close.png
│   └── purpledog.png
├── atom
│   ├── detailAtom.ts
│   └── listAtom.ts
├── components
│   ├── common
│   │   ├── CloseButton.tsx
│   │   └── Loading.tsx
│   ├── item
│   │   ├── Item.tsx
│   │   ├── ItemDetail.tsx
│   │   └── ItemList.tsx
│   └── nav
│       ├── Menu.tsx
│       └── Navibar.tsx
├── data
│   └── menuList.ts
├── hooks
│   ├── useDetail.tsx
│   └── useList.tsx
├── index.tsx
├── model
│   └── detail.model.ts
├── pages
│   └── ListPage.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── util
    └── fetcher.tsx
```

