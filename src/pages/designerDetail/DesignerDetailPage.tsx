import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { GetDesignerDetailInfo } from "../../api/designer.api";
import DesignerIcon from "../../assets/icons/image_designer.svg";
import MapPinIcon from "../../assets/icons/map_pin.svg";
import MoneyIcon from "../../assets/icons/money.svg";
import VideoIcon from "../../assets/icons/video.svg";
import "../../styles/scroll.css";
import {
  DesignerDetail,
  DesignerDetailResponse,
} from "../../types/designer.type";
import { useModalStore } from "../../zustand/modal.store";
import { useReservationStore } from "../../zustand/reservation.store";
import { useUserStore } from "../../zustand/user.store";
import LoginModal from "../login/components/LoginModal";
import BackHeader from "./components/BackHeader";

const DesignerDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { designerId } = useParams();
  const { isLoggedIn } = useUserStore();
  const { setDesignerId } = useReservationStore();
  const { openModal } = useModalStore();

  const handleGoToSelectProcessPage = () => {
    if (!isLoggedIn) {
      openModal(<LoginModal />);
      return;
    }
    if (designerId) setDesignerId(designerId);
    navigate("/select-process");
  };

  const { data: designerData } = useQuery<
    DesignerDetailResponse,
    Error,
    DesignerDetail
  >({
    queryKey: ["designer", designerId],
    queryFn: async () => await GetDesignerDetailInfo(designerId!),
    enabled: !!designerId,
    refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
    select: (data) => data.responseDto,
  });

  return (
    <>
      <BackHeader />
      {designerData && (
        <DivWrapper>
          <SectionWrapper>
            <img src={DesignerIcon} alt={designerData.profilePhoto} />
            <Name>{designerData.name}</Name>
            <Introduction>{designerData.text}</Introduction>
            <StDiv>
              <DivBox $profession>{designerData.field}</DivBox>
              {designerData.isOffline && <DivBox>대면</DivBox>}
              {designerData.isOnline && <DivBox>비대면</DivBox>}
            </StDiv>
            <StDiv_2>
              <Consulting>
                <ConsultingDetail>
                  <TextWithImg>
                    <img src={MoneyIcon} alt="money" />
                    <Text $light>대면 컨설팅</Text>
                  </TextWithImg>
                  <Divider></Divider>
                  <Text>
                    <Text $bold>{designerData.offPrice.toLocaleString()}</Text>
                    원
                  </Text>
                </ConsultingDetail>
                <ConsultingDetail>
                  <TextWithImg>
                    <img
                      src={MoneyIcon}
                      alt="money"
                      style={{ visibility: "hidden" }}
                    />
                    <Text $light>비대면 컨설팅</Text>
                  </TextWithImg>
                  <Divider></Divider>
                  <Text>
                    <Text $bold>{designerData.onPrice.toLocaleString()}</Text>원
                  </Text>
                </ConsultingDetail>
              </Consulting>
              <TextWithImg>
                <img
                  src={MapPinIcon}
                  alt="map-pin"
                  width={16.67}
                  height={16.67}
                />
                <Text $light>{designerData.location}</Text>
              </TextWithImg>
            </StDiv_2>
          </SectionWrapper>
          <Line />
          <SectionWrapper>
            <StH3>헤어컨설팅 포트폴리오</StH3>
            <img src={VideoIcon} alt="video" style={{ width: "100%" }} />
          </SectionWrapper>
          <ButtonBox>
            <Button onClick={handleGoToSelectProcessPage}>
              컨설팅 예약신청
            </Button>
          </ButtonBox>
        </DivWrapper>
      )}
    </>
  );
};

export default DesignerDetailPage;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SectionWrapper = styled.section<{ $border?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: ${({ $border }) => $border && "1px solid black"};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
`;

const Introduction = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const StDiv = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
`;

const StDiv_2 = styled.div`
  padding: 0 20px;
  font-size: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  margin: 32px 0;
  width: 92%;
  align-self: center;
`;

const Divider = styled.hr`
  flex-grow: 1;
  border: 1px dashed ${({ theme }) => theme.colors.gray[100]};
  margin: 0 10px;
`;

const Consulting = styled.div`
  width: 100%;
`;

const ConsultingDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextWithImg = styled.div`
  display: flex;
  gap: 8px;
  align-self: start;
  align-items: center;
`;

const Text = styled.span<{ $light?: boolean; $bold?: boolean }>`
  font-weight: ${({ $bold }) => $bold && "bold"};
  color: ${({ $light, theme }) => $light && theme.colors.gray[500]};
`;

const DivBox = styled.div<{ $profession?: boolean }>`
  border-radius: 4px;
  background-color: ${({ $profession, theme }) =>
    $profession ? theme.colors.primary[50] : theme.colors.secondary[50]};
  color: ${({ $profession, theme }) =>
    $profession ? theme.colors.primary[500] : theme.colors.secondary[500]};
  padding: 2px 12px;
  font-weight: bold;
  font-size: 14px;
`;

const StH3 = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
  margin-left: 20px;
  align-self: self-start;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-weight: bold;
  border: none;
`;

const ButtonBox = styled.div`
  margin-top: 32px;
  display: flex;
  padding: 20px;
  border-top: 0.5px solid ${({ theme }) => theme.colors.gray[100]};
`;
