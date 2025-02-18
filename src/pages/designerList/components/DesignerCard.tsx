import styled from "styled-components";
import DefaultProfile from "../../../assets/images/designer1.jpg";
import { theme } from "../../../styles/theme";
import Tag from "././Tag";

interface DesignerCardProps {
  designerId: number;
  name: string;
  profilePhoto: string | null;
  field: string;
  location: string;
  text: string;
  isOnline: boolean;
  isOffline: boolean;
}

const DesignerCard = ({
  profilePhoto,
  name,
  field,
  location,
  text,
  isOnline,
  isOffline,
}: DesignerCardProps) => {
  return (
    <Card>
      <ProfileImage
        src={profilePhoto || DefaultProfile}
        alt="디자이너 프로필"
      />
      <Info>
        <Name>
          {name} <Separator>|</Separator> <Location>{location}</Location>
        </Name>
        <Description>{text}</Description>
        <TagContainer>
          <Tag type="field">{field}</Tag>
          {isOnline && <Tag type="consult">비대면</Tag>}
          {isOffline && <Tag type="consult">대면</Tag>}
        </TagContainer>
      </Info>
    </Card>
  );
};

export default DesignerCard;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.black};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Separator = styled.span`
  font-weight: 300;
  color: ${theme.colors.gray[300]};
`;

const Location = styled.span`
  font-weight: 500;
  color: ${theme.colors.gray[500]};
`;

const Description = styled.div`
  font-size: 13px;
  color: ${theme.colors.gray[300]};
  margin-top: 4px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 6px;
`;
