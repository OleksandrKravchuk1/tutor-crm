import { Text, View } from "react-native";
import { DateChip } from "../../../components/shared/DateChip";

export function HomeHeader({ name }: { name: string }) {
  return (
    <View className='flex-row items-center justify-between'>
      {/* Left column with greeting and question */}
      <View className='flex-1 pr-3'>
        <Text className='text-3xl font-bold tracking-tight text-neutral-950'>Good Morning, </Text>
        <Text className="text-3xl font-bold tracking-tight text-gray-950">
          {name}!
        </Text>
        <Text className=' text-lg mt-1.5 text-neutral-600 leading-snug`'>Ready for another inspiring day of coaching?</Text>
      </View>

      {/* Right column with date */}
      <View>
        <DateChip />
      </View>
    </View>
  )
}