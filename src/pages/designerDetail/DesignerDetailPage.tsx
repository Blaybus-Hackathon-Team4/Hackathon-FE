import styled from "styled-components";
import "../../styles/scroll.css";

const DesignerDetailPage = () => {
  return (
    <DivWrapper>
      <SectionWrapper>
        <img src="/image_designer.svg" alt="designer-profile" />
        <Name>이초 디자이너</Name>
        <Introduction>레드벨벳, ITZY가 방문하는 샵</Introduction>
        <StDiv>
          <DivBox $profession>펌</DivBox>
          <DivBox>대면</DivBox>
          <DivBox>비대면</DivBox>
        </StDiv>
        <StDiv_2>
          <Consulting>
            <ConsultingDetail>
              <TextWithImg>
                <img src="/money.svg" alt="money" />
                <Text $light>대면 컨설팅</Text>
              </TextWithImg>
              <DottedLine />
              <Text>
                <Text $bold>40,000</Text>원
              </Text>
            </ConsultingDetail>
            <ConsultingDetail>
              <TextWithImg>
                <img src="/money.svg" alt="money" />
                <Text $light>비대면 컨설팅</Text>
              </TextWithImg>
              <DottedLine />
              <Text>
                <Text $bold>20,000</Text>원
              </Text>
            </ConsultingDetail>
          </Consulting>
          <TextWithImg>
            <img
              src="/map_pin.svg"
              alt="map-pin"
              width={16.67}
              height={16.67}
            />
            <Text $light>서울 강남구 압구정로79길</Text>
          </TextWithImg>
        </StDiv_2>
      </SectionWrapper>
      <Line />
      <SectionWrapper>
        <StH3>헤어컨설팅 포트폴리오</StH3>
        <img src="/video.svg" alt="video" style={{ width: "100%" }} />
      </SectionWrapper>
      <Button>컨설팅 예약신청</Button>
    </DivWrapper>
  );
};

export default DesignerDetailPage;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 14px;
`;

const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  margin: 32px 0;
  width: 92%;
`;

const DottedLine = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.gray[100]};
  width: 47%;
  height: 0;
`;

const Consulting = styled.div`
  width: 350px;
  height: 41px;
  margin-bottom: 16px;
`;

const ConsultingDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const TextWithImg = styled.div`
  display: flex;
  gap: 8px;
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
  width: 350px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-weight: bold;
  border: none;
  margin: 20px 20px 16px 20px;
`;
