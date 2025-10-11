import Grid from "./grid";
import Top from "./topbar";

export default function Dashboard() {
  return <>
    <div className="bg-white rounded-lg pb-3 shadow">
      <Top></Top>
      <Grid></Grid>
    </div>
  </>;
}
