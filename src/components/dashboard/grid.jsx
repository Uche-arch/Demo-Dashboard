import Activity from "./activity";
import Stats from "./stats";
import Transaction from "./transaction";
import Usage from "./usage";

export default function Grid() {
  return (
    <div className="px-4 md:grid md:grid-cols-3 md:gap-3 sm:flex sm:flex-col sm:gap-3">
      <Stats />
      <Activity />
      <Usage />
      <Transaction />
    </div>
  );
}
