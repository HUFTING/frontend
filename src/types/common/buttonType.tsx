type voidFunc = () => void;

export interface SizeAssetType {
  width: string;
  height: string;
  paddingX: string;
  paddingY: string;
  fontSize: string;
  fontWeight: string;
}
export type BasicButtonColor = 'red' | 'gray';
export type BasicButtonAssetType = 'Primary' | 'Secondary';
export interface BasicButtonProps {
  color: BasicButtonColor;
  assetType: BasicButtonAssetType;
  size: 'S' | 'M';
  content: string;
  onClickEvent: null | voidFunc;
  isActive: boolean;
  buttonType?: 'submit' | 'reset' | 'button';
  width?: string;
}
