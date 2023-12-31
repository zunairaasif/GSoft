import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentWebDev",
  uniqId: "webDevComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5%",
    color: theme.palette.secondary.light,
    backgroundSize: "cover",
    backgroundColor: theme.palette.secondary.main,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  block: {
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "80px",
    marginBottom: "100px",
  },
}));
export const style = {};
