import { palette } from "@/constants/palette";
import { Switch } from "react-native";

type AppSwitchProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function AppSwitch({ value, onValueChange }: AppSwitchProps) {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: palette.neutral[200], true: palette.primary[600] }}
      thumbColor="#FFFFFF"
      ios_backgroundColor={palette.neutral[200]}
    />
  );
}
