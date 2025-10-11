import Account from "./account-toggle";
import Plan from "./plan";
import RouteSelect from "./route-select";
import Search from "./search";

export default function Sidebar() {
  return (
    <div className="">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* TODO main sidebar content */}
        <Account></Account>
        <Search></Search>
        <RouteSelect></RouteSelect>
      </div>

      {/* Plan toggle */}
      <Plan></Plan>
    </div>
  );
}
