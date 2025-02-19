import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import CheckIcon from "../../assets/icons/check.svg";
import SelectedFaceToFaceImg from "../../assets/images/face-to-face-selected.svg";
import FaceToFaceImg from "../../assets/images/face-to-face.svg";
import SelectedNonFaceToFaceImg from "../../assets/images/non-face-to-face-selected.svg";
import NonFaceToFaceImg from "../../assets/images/non-face-to-face.svg";
import { useReservationStore } from "../../zustand/reservation.store";
import BackHeader from "../designerDetail/components/BackHeader";

export type Process = "대면" | "비대면";

const SelectProcessPage = () => {
  const [selectedCard, setSelectedCard] = useState<Process | null>(null);
  const navigate = useNavigate();
  const { setProcess } = useReservationStore();

  const handleClickCard = (cardType: Process) => {
    setSelectedCard(cardType);
  };

  const handleGoToSelectDatePage = () => {
    // 컨설팅 방식 전역 상태에 저장
    if (selectedCard) setProcess(selectedCard);
    navigate("/select-date");
  };

  return (
    <>
      <BackHeader />
      <DivWrapper>
        <ConsultProcessContainer>
          <DivBox $gap={8}>
            <TextBox>
              <img src={CheckIcon} alt="check" width={12} height={12} />
              <Text>예약 전에 확인해주세요!</Text>
            </TextBox>
            <ContentBox>
              <p>
                소요시간 <HighLightText>약 30분</HighLightText> 진행
              </p>
              <p>
                컨설팅 진행 후, <HighLightText>요약 리포트</HighLightText>가
                고객님께 전달됩니다.
              </p>
            </ContentBox>
          </DivBox>
          <DivBox $gap={16}>
            <StH3>상담 방식</StH3>
            <Card
              onClick={() => handleClickCard("대면")}
              $selected={selectedCard === "대면"}
            >
              <InfoBox>
                <CustomText $size={12}>30,000￦부터 시작</CustomText>
                <CustomText $size={20} $bold>
                  대면
                </CustomText>
                <CustomText $size={14}>
                  실제 샵에 방문하여 컨설팅 진행
                </CustomText>
              </InfoBox>
              {selectedCard === "대면" ? (
                <GraphicImg src={SelectedFaceToFaceImg} alt="face-to-face" />
              ) : (
                <GraphicImg src={FaceToFaceImg} alt="face-to-face" />
              )}
            </Card>
            <Card
              onClick={() => handleClickCard("비대면")}
              $selected={selectedCard === "비대면"}
            >
              <InfoBox>
                <CustomText $size={12}>20,000￦부터 시작</CustomText>
                <CustomText $size={20} $bold>
                  비대면
                </CustomText>
                <CustomText $size={14}>
                  예약 후 생성되는 링크로 화상 컨설팅 진행
                </CustomText>
              </InfoBox>
              {selectedCard === "비대면" ? (
                <GraphicImg
                  src={SelectedNonFaceToFaceImg}
                  alt="non-face-to-face"
                />
              ) : (
                <GraphicImg src={NonFaceToFaceImg} alt="non-face-to-face" />
              )}
            </Card>
          </DivBox>
        </ConsultProcessContainer>
        <ButtonContainer>
          <NextButton
            disabled={selectedCard === null}
            $disabled={selectedCard === null}
            onClick={handleGoToSelectDatePage}
          >
            다음
          </NextButton>
        </ButtonContainer>
      </DivWrapper>
    </>
  );
};

export default SelectProcessPage;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const ConsultProcessContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const DivBox = styled.div<{ $gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => `${$gap}px`};
`;

const TextBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const HighLightText = styled.span`
  color: ${({ theme }) => theme.colors.primary[500]};
`;

const StH3 = styled.h3`
  color: black;
`;

const Card = styled.div<{ $selected: boolean }>`
  position: relative;
  border-radius: 16px;
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.primary[500] : theme.colors.gray[200]};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 172px;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary[50] : "white"};
  cursor: pointer;
`;

const InfoBox = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
  align-self: end;
  position: relative;
  z-index: 1;
`;

const CustomText = styled.p<{ $size: number; $bold?: boolean }>`
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: ${({ $bold }) => $bold && "bold"};
`;

const GraphicImg = styled.img`
  position: absolute;
  right: 2%;
  top: 10%;
  max-width: 120px;
  max-height: 130px;
`;

const ButtonContainer = styled.div`
  padding: 20px 20px 16px 20px;
`;

const NextButton = styled.button<{ $disabled: boolean }>`
  width: 100%;
  height: 48px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[100] : theme.colors.primary[500]};
  font-weight: bold;
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[300] : "white"};
  border: none;
  &:hover {
    cursor: ${({ $disabled }) => $disabled && "default"};
  }
`;
