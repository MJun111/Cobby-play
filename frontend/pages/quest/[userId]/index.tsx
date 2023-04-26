// 유저별 도전과제 페이지
// 유저별 마이페이지
import { useRouter } from "next/router";
import { Fragment } from "react";
import BottomNavBar from "@/components/layout/BottomNavBar";
import * as page from "@/pages/style/Page";

//QuestPage
const QuestPage = () => {
  const router = useRouter();
  return (
    <Fragment>
      <page.PageWrapper>
        <div>QuestPage 입니다.</div>
        <div>user명 : {router.query.userId}</div>
      </page.PageWrapper>
      <BottomNavBar />
    </Fragment>
  );
};

export default QuestPage;
