import styled from "styled-components";
import { colors } from "@/styles/colors-style";
import TextBox from "@/components/common/TextBox/TextBox";

export const GithubBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeTxt = styled.div`
  width: auto;
`;

export const CodeCopyBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.NavBarCreamColor};
  padding: 15px;
  width: 80%;
`;

export const ReadmeCode = styled.div`
  flex-grow: 8;
  text-align: center;
  overflow: hidden; // 여기 나중에 주소 길이통해서 수정해야할 수 있음.
`;

// export const CopyBtn = styled.div`
//   /* background-color: ${colors.ItemBoxColor};
//   position: relative;
//   width: 15%;
//   text-align: center;
//   border-radius: 5px;

//   &:hover {
//     background-color: ${colors.NavBarCreamColor};
//     cursor: pointer;
//   } */
// `;

export const CopyBtnImg = styled.img`
  background-color: ${colors.ItemBoxColor};
  padding: 2%;
  width: 5%;

  border-radius: 5px;

  &:hover {
    background-color: ${colors.NavBarCreamColor};
    cursor: pointer;
  }
`;
