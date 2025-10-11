export default function Transaction() {
  return (
    <>
      <div className="p-4 rounded border col-span-3 border-stone-300">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 font-medium">
            $ Recent Transactions
          </h3>
          <button className="text-sm text-violet-500 hover:underline cursor-pointer">
            See all
          </button>
        </div>
        <table className="w-full table-auto">
          <TableHead></TableHead>
          <tbody>
            <TableRow
              cusId="#48912"
              sku="Pro 1 Month"
              date="Oct 2nd"
              price="$9.75"
              order={1}
              
            ></TableRow>
            <TableRow
              cusId="#48888"
              sku="Basic 5 Month"
              date="Sept 2nd"
              price="$29.99"
              order={2}
            ></TableRow>
            <TableRow
              cusId="#38415"
              sku="Master 4 Month"
              date="Aug 2nd"
              price="$129.75"
              order={3}
            ></TableRow>
            <TableRow
              cusId="#52952"
              sku="Pro 1 Month"
              date="Jul 18th"
              price="$9.77"
              order={4}
            ></TableRow>
            <TableRow
              cusId="#28416"
              sku="Premium 5 Month"
              date="Jul 2nd"
              price="$19.22"
              order={5}
            ></TableRow>
          </tbody>
        </table>
      </div>
    </>
  );
}

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ cusId, sku, date, price, order }) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {cusId} &rarr;
        </a>
      </td>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          ...
        </button>
      </td>
    </tr>
  );
};
