import { SymbolView } from "expo-symbols";
import { Image, Pressable, Text, View } from "react-native";
import { TimelineLessonItem } from "../types/calendar";

type TimelineLessonCardProps = {
  item: TimelineLessonItem;
  onPress?: () => void;
  onActionPress?: () => void;
  onPhonePress?: () => void;
};

export function TimelineLessonCard({
  item,
  onPress,
  onActionPress,
  onPhonePress,
}: TimelineLessonCardProps) {
  const {
    studentName,
    avatarUrl,
    initials,
    subject,
    accentColor,
    avatarBadge,
    paymentStatus,
    info,
    hasPhoneAction,
    actionButton,
  } = item;

  const accentColorClass =
    accentColor === "emerald"
      ? "bg-emerald-500"
      : accentColor === "amber"
      ? "bg-amber-500"
      : "bg-indigo-600";

  const paymentBadgeClasses =
    paymentStatus.variant === "emerald"
      ? "bg-emerald-50 text-emerald-600"
      : paymentStatus.variant === "amber"
      ? "bg-amber-100/70 text-amber-600"
      : "bg-indigo-50 text-indigo-700";

  const actionButtonClasses =
    actionButton.variant === "indigo"
      ? "bg-indigo-100 text-primary-700"
      : actionButton.variant === "amber"
      ? "bg-amber-100 text-amber-900"
      : "bg-blue-100/70 text-primary-800";

  const actionIconTint =
    actionButton.variant === "amber"
      ? "#78350F"
      : actionButton.variant === "indigo"
      ? "#4D44E3"
      : "#3323CC";

  const renderAvatarBadge = () => {
    if (!avatarBadge) return null;

    if (avatarBadge.type === "check") {
      return (
        <View className="absolute -bottom-0.5 -right-0.5 h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
          <SymbolView
            name={{ ios: "checkmark", android: "check", web: "check" }}
            size={9}
            tintColor="#FFFFFF"
          />
        </View>
      );
    }

    if (avatarBadge.type === "warning") {
      return (
        <View className="absolute -bottom-0.5 -right-0.5 h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-amber-500">
          <SymbolView
            name={{
              ios: "exclamationmark",
              android: "priority_high",
              web: "priority_high",
            }}
            size={9}
            tintColor="#FFFFFF"
          />
        </View>
      );
    }

    return (
      <View className="absolute -bottom-0.5 -right-0.5 h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-indigo-600">
        <SymbolView
          name={{ ios: "flask", android: "science", web: "science" }}
          size={9}
          tintColor="#FFFFFF"
        />
      </View>
    );
  };

  const renderInfoIcon = () => {
    switch (info.icon) {
      case "lesson-count":
        return (
          <SymbolView
            name={{
              ios: "checkmark.seal",
              android: "verified",
              web: "verified",
            }}
            size={14}
            tintColor="#64748B"
          />
        );
      case "video":
        return (
          <SymbolView
            name={{ ios: "video", android: "videocam", web: "videocam" }}
            size={14}
            tintColor="#64748B"
          />
        );
      case "invoice":
        return (
          <SymbolView
            name={{
              ios: "doc.text",
              android: "receipt_long",
              web: "receipt_long",
            }}
            size={14}
            tintColor="#F59E0B"
          />
        );
      case "homework":
        return (
          <SymbolView
            name={{ ios: "checklist", android: "task_alt", web: "task_alt" }}
            size={14}
            tintColor="#64748B"
          />
        );
    }
  };

  const renderActionIcon = () => {
    switch (actionButton.iconType) {
      case "notes":
        return (
          <SymbolView
            name={{
              ios: "text.badge.checkmark",
              android: "edit_note",
              web: "edit_note",
            }}
            size={13}
            tintColor={actionIconTint}
          />
        );
      case "start":
        return (
          <SymbolView
            name={{
              ios: "play.fill",
              android: "play_arrow",
              web: "play_arrow",
            }}
            size={11}
            tintColor={actionIconTint}
          />
        );
      case "collect":
        return (
          <SymbolView
            name={{
              ios: "banknote",
              android: "payments",
              web: "payments",
            }}
            size={13}
            tintColor={actionIconTint}
          />
        );
      case "details":
        return (
          <SymbolView
            name={{
              ios: "arrow.right",
              android: "arrow_forward",
              web: "arrow_forward",
            }}
            size={12}
            tintColor={actionIconTint}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      className="relative overflow-hidden rounded-2xl border border-slate-100/80 bg-white py-3.5 pl-4 pr-3.5 ios:shadow-soft android:shadow-xs active:opacity-95"
    >
      {/* Colored Left Accent Bar */}
      <View className={`absolute bottom-0 left-0 top-0 w-1.5 ${accentColorClass}`} />

      {/* Top Header Row */}
      <View className="flex-row items-start justify-between">
        <View className="flex-1 flex-row items-center gap-3 pr-2">
          {/* Avatar with Status Badge */}
          <View className="relative">
            {avatarUrl ? (
              <Image
                source={{ uri: avatarUrl }}
                className="h-11 w-11 rounded-full bg-slate-100"
              />
            ) : (
              <View className="h-11 w-11 items-center justify-center rounded-full bg-indigo-100">
                <Text className="text-sm font-bold text-indigo-700">
                  {initials ?? "ST"}
                </Text>
              </View>
            )}
            {renderAvatarBadge()}
          </View>

          {/* Student Name & Subject */}
          <View className="flex-1">
            <Text className="text-base font-bold text-slate-900" numberOfLines={1}>
              {studentName}
            </Text>
            <Text className="mt-0.5 text-xs text-slate-500" numberOfLines={1}>
              {subject}
            </Text>
          </View>
        </View>

        {/* Status Badge */}
        <View className={`rounded-full px-2.5 py-1 ${paymentBadgeClasses.split(" ")[0]}`}>
          <Text className={`text-xs font-semibold ${paymentBadgeClasses.split(" ")[1]}`}>
            {paymentStatus.label}
          </Text>
        </View>
      </View>

      {/* Bottom Info & Action Row */}
      <View className="mt-3.5 flex-row items-center justify-between pt-1">
        {/* Left Info Indicator */}
        <View className="flex-1 flex-row items-center gap-1.5 pr-2">
          {renderInfoIcon()}
          <Text
            className={`text-xs ${
              info.isWarning
                ? "font-medium text-amber-600"
                : "font-normal text-slate-500"
            }`}
            numberOfLines={1}
          >
            {info.text}
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          {/* Optional Phone Action */}
          {hasPhoneAction && (
            <Pressable
              onPress={onPhonePress}
              className="h-8 w-8 items-center justify-center rounded-full active:bg-slate-100"
            >
              <SymbolView
                name={{ ios: "phone", android: "phone", web: "phone" }}
                size={16}
                tintColor="#64748B"
              />
            </Pressable>
          )}

          {/* Action Button */}
          <Pressable
            onPress={onActionPress}
            className={`flex-row items-center gap-1.5 rounded-full px-3.5 py-1.5 active:opacity-80 ${
              actionButtonClasses.split(" ")[0]
            }`}
          >
            <Text
              className={`text-xs font-semibold ${
                actionButtonClasses.split(" ")[1]
              }`}
            >
              {actionButton.label}
            </Text>
            {renderActionIcon()}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
