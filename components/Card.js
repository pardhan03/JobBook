import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Card = ({ job, onPress }) => {
  const[isBookmarked,setIsBookmarked]=useState(false)
console.log(job.primary_details)
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Icon name="briefcase" size={22} color="#0f172a" />
          <Text style={styles.title}  numberOfLines={1} ellipsizeMode="tail">{job.title}</Text>
        </View>
        <TouchableOpacity onPress={() => toggleBookmark(job)}>
          <Icon
            name={isBookmarked ? "bookmark" : "bookmark-o"}
            size={24}
            color={isBookmarked ? "#facc15" : "#94a3b8"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Icon name="map-marker" size={20} color="#64748b" />
        <Text style={styles.infoText}>{job?.primary_details?.Place}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Icon name="dollar" size={20} color="#16a34a" />
        <Text style={styles.salaryText}>${job.salary}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Icon name="phone" size={20} color="#2563eb" />
        <Text style={styles.infoText}>{job?.whatsapp_no}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    margin:16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    flexShrink: 1,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#4b5563",
  },
  salaryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#16a34a",
  },
});

export default Card;