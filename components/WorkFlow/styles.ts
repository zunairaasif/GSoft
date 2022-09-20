import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})((theme) => ({
  //   container: {
  //     display: "flex",
  //     // alignItems: "center",
  //     justifyContent: "center",
  //     color: "#FFFFFF",
  //     backgroundColor: "#001A1F",
  //   },
  //   box: {
  //     padding: "40px",
  //   },
  //   text: {
  //     display: "flex",
  //     flexDirection: "column",
  //     // marginBottom: "30px",
  //   },
  //   grid: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //   },
  //   thirdComponent: {
  //     justifyContent: "center",
  //     paddingTop: "30px",
  //     paddingBottom: "100px",
  //     backgroundColor: "rgba(255,255,255,0.1)",
  //   },
  //   forthComp: {
  //     padding: "20px",
  //     marginTop: "97px",
  //   },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    // padding: "40px",
    // flexDirection: "column",
    backgroundColor: "#001A1F",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "1150px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "pink",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    // backgroundColor: "pink",
    justifyContent: "space-between",
  },
}));
export const style = {};