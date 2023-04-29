import { Colors } from "./colors";

export interface MessageSnackBar {
  active: boolean;
  message?: string;
  color?: Colors;
  timeout?: number;
}