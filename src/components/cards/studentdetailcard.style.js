import { StyleSheet } from "react-native";

const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };

const styles = StyleSheet.create({
  container: (selectedStudent, item) => ({
  
    width: 250,
    padding: 24,
    backgroundColor: selectedStudent === item.std_id ? "#312651" : "#FFF",
    borderRadius: 16,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: "#F3F4F8",
  }),
  logoContainer: (selectedStudent, item) => ({
    width: 60,
    height: 60,
    backgroundColor: selectedStudent === item.std_id ? "#FFF" :  "#F3F4F8",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
    
  },
  companyName: {
    fontSize: 16,
    color: "#B3AEC6",
    marginTop: 10/1.5,
  },
  infoContainer: {
    marginTop: 20,
  },
  jobName: (selectedStudent, item) => ({
    fontSize: 20,
    //fontFamily: FONT.medium,
    color: selectedStudent === item.std_id ? "#F3F4F8" : "#312651",
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedStudent) => ({
    fontSize: 14,
    //fontFamily: FONT.bold,
    color: selectedStudent === item.std_id ? "#F3F4F8" : "#312651",
  }),
  location: {
    fontSize: 14,
    //fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
