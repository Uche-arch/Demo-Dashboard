import Grid from "./grid";
import Top from "./topbar";

export default function Dashboard({ onMenuClick }) {
  return (
    <div className="bg-white rounded-lg pb-3 shadow w-full">
      <Top onMenuClick={onMenuClick} />
      <Grid />
    </div>
  );
}
