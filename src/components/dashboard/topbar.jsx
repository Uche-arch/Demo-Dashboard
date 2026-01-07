export default function Top({ onMenuClick }) {
  return (
    <div className="border-b border-stone-200 px-3 sm:px-4 mt-1 sm:mt-2 pb-3 sm:pb-4 mb-3 sm:mb-4">
      <div className="flex items-center justify-between pt-2 sm:pt-3 lg:pt-0.5">
        {/* Left */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Menu toggle (mobile only) */}
          <button
            onClick={onMenuClick}
            className="lg:hidden text-lg sm:text-xl"
          >
            ☰
          </button>

          <div>
            {/* Greeting */}
            <span className="block font-semibold text-sm sm:text-base">
              Good morning, Uche
            </span>

            {/* Date */}
            <span className="block text-[10px] sm:text-xs text-stone-500">
              Monday, Oct 6th 2025
            </span>
          </div>
        </div>

        {/* Right */}
        <button className="flex items-center gap-1.5 sm:gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm">
          🗓
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
}
