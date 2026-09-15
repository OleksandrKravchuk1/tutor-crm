import { palette } from '@/constants/palette';
import { DailyWidget } from '@/features/home/components/DailyWidget';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import { ScheduleCard } from '@/features/home/components/ScheduleCard';
import { StatisticCard } from '@/features/home/components/StatisticCard';
import { TODAY_SESSIONS } from '@/features/home/data/todaySessions';
import { SymbolView } from 'expo-symbols';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="flex-1 bg-white px-5 pt-4">
      <HomeHeader name="Oleksandr" />
      <View className="mt-5 gap-4">
        <DailyWidget />

        <View className="flex-row gap-3.5">
          <StatisticCard
            title="Daily Revenue"
            mainInfo="$280"
            icon={{
              ios: "banknote.fill",
              android: "payments",
              web: "payments",
            }}
            iconColor={palette.primary[800]}
            iconBgColor="bg-primary-100"
            subinfo={
              <View className="flex-row items-center gap-1">
                <SymbolView
                  name={{ ios: "arrow.up.right", android: "trending_up" }}
                  size={12}
                  tintColor="#10B981"
                />
                <Text className="text-sm font-semibold text-emerald-600">+14%</Text>
                <Text className="text-sm text-neutral-500">vs avg</Text>
              </View>
            }
          />
          <StatisticCard
            title="Active Students"
            mainInfo="18"
            icon={{
              ios: "graduationcap.fill",
              android: "school",
              web: "school",
            }}
            iconColor="#059669"
            iconBgColor="bg-emerald-50"
            subinfo={
              <View className="flex-row items-center gap-1.5">
                <View className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <Text className="text-sm text-neutral-600">4 lessons today</Text>
              </View>
            }
          />
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold">{"Today's Schedule"}</Text>
          <View className="items-center justify-center rounded-2xl bg-primary-200 ml-2 px-4 py-0.5">
            <Text className="text-[15px] font-semibold text-primary-700">4 lessons</Text>
          </View>
        </View>
      </View>

      <FlatList
        className="mt-3.5 flex-1"
        data={TODAY_SESSIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ScheduleCard
            name={item.name}
            subject={item.subject}
            time={item.time}
            isPaid={item.isPaid}
            topic={item.topic}
            isOnline={item.isOnline}
            onMarkComplete={() => {
              console.log(`Completed session with ${item.name}`);
            }}
          />
        )}
        ItemSeparatorComponent={() => <View className="h-3.5" />}
        ListFooterComponent={
          <Pressable
            className="mt-3.5 items-center justify-center rounded-2xl px-4 py-2"
            onPress={() => { }}
          >
            <Text className="text-lg font-bold text-primary-700">Timeline View</Text>
          </Pressable>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  );
}
