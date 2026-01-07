export default function Stats() {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$2,125,034.24"
        pillText="4.7%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      ></Card>
      <Card
        title="Avg Order"
        value="$277,834.7"
        pillText="15.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      ></Card>
      <Card
        title="Trailing Year"
        value="$1,278,054.24"
        pillText="60%"
        trend="up"
        period="Prev 365 days"
      ></Card>
    </>
  );
}

const Card = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="p-3 sm:p-4 rounded border border-stone-300">
      <div>
        {/* Top row */}
        <div className="flex justify-between mb-3 sm:mb-4">
          {/* Title */}
          <h3 className="text-xs sm:text-sm font-medium text-stone-500">
            {title}
          </h3>

          {/* Trend pill */}
          <span
            className={`text-[10px] sm:text-xs flex items-center gap-1 font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded ${
              trend === "up"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {trend === "down" ? "-" : "+"} {pillText}
          </span>
        </div>

        {/* Main value */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
          {value}
        </p>
      </div>

      {/* Period */}
      <p className="text-[10px] sm:text-xs text-stone-500">{period}</p>
    </div>
  );
};
