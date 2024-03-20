import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar as ExpoBar } from "expo-status-bar";
import React from "react";

const MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View id="search" style={styles.searchView}>
        <Text>Search</Text>
      </View>
      <View id="list" style={styles.restOfScreen}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => (
            <Text key={item.key} style={styles.listViewItem}>
              {item.key}
            </Text>
          )}
        />
      </View>
      <ExpoBar style="auto" />
    </SafeAreaView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchView: {
    backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    padding: 16,
    color: "white",
  },
  restOfScreen: {
    flex: 1,
    backgroundColor: "blue",
  },
  listContent: {
    padding: 16,
    gap: 8,
  },
  listViewItem: {
    padding: 10,
    fontSize: 18,
    color: "white",
    backgroundColor: "black",
  },
});
