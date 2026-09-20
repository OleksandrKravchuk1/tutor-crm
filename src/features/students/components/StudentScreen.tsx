import { SearchInput } from "@/components/shared/SearchInput";
import { PendingBalanceCard } from "@/features/billing/components/PendibgBalanceCard";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { STUDENTS_DATA } from "../data/students";
import { StudentFilter } from "../types/students";
import { AddStudentButton } from "./AddStudentButton";
import { StudentCard } from "./StudentCard";
import { FilterChips } from "./StudentFilterTabs";

export function StudentScreen() {
  const [filter, setFilter] = useState<StudentFilter>("all");
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();

  const filteredStudents = STUDENTS_DATA.filter((student) => {
    const matchesFilter =
      filter === "active" ? student.isActive :
        filter === "inactive" ? !student.isActive :
          filter === "owing" ? student.balanceType === "owing" :
            true;
    const matchesSearch =
      !query || [student.name, student.subject, student.grade]
        .some((value) => value?.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  return (
    <SafeAreaView
      edges={['left', 'right']}
      className="flex-1 px-4 pt-4 ios:mt-40"
    >
      <View className='flex-row gap-2'>
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search students..."
        />
        <AddStudentButton onPress={() => alert('Coming soon...')} />
      </View>

      <View className="mt-3">
        <FilterChips selected={filter} onSelect={setFilter} />
      </View>

      <View>
        <PendingBalanceCard
          amount={180}
          overdueCount={2}
          description="overdue balances need..."
          onReview={() => setFilter("owing")}
        />
      </View>

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard
            name={item.name}
            subject={item.subject}
            grade={item.grade}
            avatarUrl={item.avatarUrl}
            isActive={item.isActive}
            lastLesson={item.lastLesson}
            balanceText={item.balanceText}
            balanceType={item.balanceType}
            onPress={() => item.onPress?.() ?? alert(`Open ${item.name}`)}
          />
        )}
        ItemSeparatorComponent={() => <View className="h-3" />}
        contentContainerStyle={{ paddingBottom: 24, paddingTop: 12 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 mt-1"
      />
    </SafeAreaView>
  );
}