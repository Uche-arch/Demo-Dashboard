import Account from "./account-toggle";
import Plan from "./plan";
import RouteSelect from "./route-select";
import Search from "./search";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay (mobile only) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 z-30 lg:hidden transition-opacity
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-40 h-full w-[220px] bg-white flex flex-col justify-between transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0`}
      >
        {/* Close button */}
        <div className="flex justify-end lg:hidden">
          <button
            onClick={() => setOpen(false)}
            className="text-xl font-bold hover:bg-stone-200 rounded py-1 px-3 transition-colors mr-2 mt-1"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-2 sm:p-3 flex-1">
          <Account />
          <Search />
          <RouteSelect />
        </div>

        {/* Bottom plan toggle */}
        <div className="p-2 sm:p-3">
          <Plan />
        </div>
      </aside>
    </>
  );
}
