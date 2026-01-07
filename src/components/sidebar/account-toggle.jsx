import Image from "next/image";
export default function Account() {
  return (
    <>
      <div className="border-b mb-4 pb-3 pt-0.5 border-stone-300">
        <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
          <Image
            src="/profile.png"
            alt="avatar"
            className="size-8 rounded shrink-0 shadow"
            width={500}
            height={500}
          />
          <div className="text-start">
            <span className="text-sm font-bold block">Uche Godswill</span>
            <span className="text-xs block text-stone-500">Uche@gmail.com</span>
          </div>
          <div className="ml-2 text-xs">
            <p>&uarr;</p>
            <p>&darr;</p>
          </div>
        </button>
      </div>
    </>
  );
}
