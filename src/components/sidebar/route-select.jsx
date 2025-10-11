import {
  FiGrid,
  FiUsers,
  FiFileText,
  FiLayers,
  FiDollarSign,
} from "react-icons/fi";

export default function RouteSelect() {
  return (
    <>
      <div className="space-y-1">
        <Route icon={<FiGrid />} selected={true} title="Dashboard" />
        <Route icon={<FiUsers />} selected={false} title="Team" />
        <Route icon={<FiFileText />} selected={false} title="Invoices" />
        <Route icon={<FiLayers />} selected={false} title="Integrations" />
        <Route icon={<FiDollarSign />} selected={false} title="Finance" />
      </div>
    </>
  );
}

const Route = ({ selected, icon, title }) => {
  return (
    <>
      <button
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow, background-color, color]
            ${
              selected
                ? "bg-white text-stone-950 shadow"
                : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
            }`}
      >
        <span className={selected ? "text-violet-500" : ""}>{icon}</span>
        <span>{title}</span>
      </button>
    </>
  );
};
