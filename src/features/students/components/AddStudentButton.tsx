import { SymbolView } from "expo-symbols";
import { Pressable } from "react-native";
import { AddStudentButtonProps } from "../types/students";

export function AddStudentButton({ onPress }: AddStudentButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Add student"
      className='
      h-12 w-12 items-center justify-center rounded-2xl bg-primary-700 
      active:opacity-80 
      ios:shadow-soft 
      android:shadow-md
      '
    >
      <SymbolView
        name={{
          ios: "person.badge.plus",
          android: "person_add",
          web: "person_add",
        }}
        size={22}
        tintColor="#FFFFFF"
      />
    </Pressable>
  );
}
