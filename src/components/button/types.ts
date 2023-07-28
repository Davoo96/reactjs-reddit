export enum ButtonIcons {
  ADD = "bg-add-icon",
}

export enum ButtonTypes {
  DEFAULT = "w-[202px]",
  FULL = "w-full",
}

export type ButtonProps = {
  title: string;
  onClick: () => void;
  icon?: ButtonIcons;
  type: ButtonTypes;
  isActive?: boolean;
};
