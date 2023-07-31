export enum ButtonTypes {
  DEFAULT = "w-[202px]",
  FULL = "w-full",
}

export type ButtonProps = {
  title: string;
  onClick: () => void;
  icon?: boolean;
  type: ButtonTypes;
  isActive?: boolean;
  isDisabled?: boolean;
  ariaLabel: string;
};
