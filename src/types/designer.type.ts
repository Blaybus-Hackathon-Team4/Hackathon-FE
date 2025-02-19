export type DesignerDetailResponse = {
  responseDto: DesignerDetail;
  error: null | Error;
  success: boolean;
};

export type DesignerDetail = {
  designerId: number;
  profilePhoto: string;
  name: string;
  field: string;
  location: string;
  offPrice: number;
  onPrice: number;
  isOnline: boolean;
  isOffline: boolean;
  rating: number;
  text: string;
};
