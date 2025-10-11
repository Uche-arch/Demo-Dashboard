import Activity from "./activity";
import Stats from "./stats";
import Transaction from "./transaction";
import Usage from "./usage";

export default function Grid() {
    return (
        <>
            <div className="px-4 grid gap-3 grid-cols-3">
                <Stats></Stats>
                <Activity></Activity>
                <Usage></Usage>
                <Transaction></Transaction>
            </div>
        </>
    )
}