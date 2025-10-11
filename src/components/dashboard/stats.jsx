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
    <div className="p-4 rounded border border-stone-300">
      <div className="flex mb-8 items-start justify-between ">
        <div>
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>
        <span
          className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "down" ? "-" : "+"} {pillText}
        </span>
      </div>
      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};
