import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TEST_DATA = [
  {
    enTitle: "Steel Manufacturers",
  },
  {
    enTitle: "Crane Companies",
  },
  {
    enTitle: "Land Clearing Companies",
  },
  {
    enTitle: "Trucking Companies",
  },
  {
    enTitle: "Excavation Companies",
  },
  {
    enTitle: "Gas Stations",
  },
  {
    enTitle: "Diesel Mechanic Shops",
  },
  {
    enTitle: "Landscaping Companies",
  },
  {
    enTitle: "Heavy Equipment Salvage Yards",
  },
  {
    enTitle: "Land Fills",
  },
  {
    enTitle: "Cattle Companies",
  },
  {
    enTitle: "Equipment Dealerships",
  },
  {
    enTitle: "Sand Mines",
  },
  {
    enTitle: "Rock Quarry",
  },
  {
    enTitle: "Utilities Companies",
  },
  {
    enTitle: "Paving Companies",
  },
  {
    enTitle: "Drilling Companies",
  },
  {
    enTitle: "Oil Field Companies",
  },
  {
    enTitle: "Pipe Yards",
  },
  {
    enTitle: "Boring Companies",
  },
  {
    enTitle: "Logging Companies",
  },
  {
    enTitle: "Municipalities",
  },
  {
    enTitle: "Farm & Agriculture",
  },
  {
    enTitle: "Septic Tank Companies",
  },
  {
    enTitle: "Wrecker Services",
  },
  {
    enTitle: "Equipment Rental Companies",
  },
  {
    enTitle: "County Precincts",
  },
  {
    enTitle: "Construction Companies",
  },
];

export default function App() {
  const ItemSeparator = () => {
    return (
      <View
        style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }}
      />
    );
  };

  const ListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No Categories Available</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TEST_DATA}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("Category selected: ", item.enTitle);
            }}>
            <Text style={styles.itemText}>{item.enTitle}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemText: {
    margin: 12,
    fontSize: 17,
  },
  item: {
    padding: 20,
    fontSize: 17,
    marginTop: 5,
  },
});
