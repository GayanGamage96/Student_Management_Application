import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontWeight:'bold',
    fontSize: 20,
    color: "#444262",
  },
  welcomeMessage: {
    fontWeight:'bold',
    fontSize: 24,
    color: "#FE7654",
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#F3F4F8",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: "100%",
  },
  searchInput: {
    
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor:  "#FF7754",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: "#F3F4F8",
  },

  
  tabsContainer: {
    width: "100%",
    marginTop: 25,
  },
  tab: (activeCourse, item) => ({
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor:"#FE7654",
    //borderColor: activeCourse === item ? "#444262" : "#C1C0C8",
    backgroundColor:activeCourse === item ? "#FE7654" : "white"
  }),
  tabText: (activeCoure, item) => ({
    color: activeCoure === item ? "white" : "black",
  }),

 
 
});

export default styles;
