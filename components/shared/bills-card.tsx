import { Button } from "../ui/button";

export const BillsCard = () => {
  return (
    <div className="w-full bg-background  rounded-3xl">
      <div className="flex items-center justify-between p-6 border-b-2">
        <h6>My bills</h6>
        <Button variant={"outline"}>Filter by</Button>
      </div>
      <div className="w-full p-6">
      {bills.map((bill) => (
        <div key={bill.id} className="flex items-center justify-between w-full pb-5">
          <div className="flex items-center gap-3">
            <span className={`w-5 h-5 ${bill.color} rounded-full`} />
            <span>{bill.name}</span>
          </div>
          <div className={`text-sm text-center min-w-[85px] text-white p-2 px-4 ${bill.color} rounded-full`}>
            {bill.status}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

const bills = [
  { id: 1, name: "Internet bill", status: "Not paid", color: "bg-red-600" },
  { id: 2, name: "Phone bill", status: "Paid", color: "bg-green-600" },
  { id: 3, name: "Electricity bill", status: "Not paid", color: "bg-red-600" },
  { id: 4, name: "Water bill", status: "Paid", color: "bg-green-600" },
];
