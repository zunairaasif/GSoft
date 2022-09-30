import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentMission",
  uniqId: "missionComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    paddingBottom: "4%",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.secondary.main,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    marginTop: "3%",
  },
}));
export const style = {};
