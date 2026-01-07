import { Command } from "cmdk";
import { useEffect, Dispatch, SetStateAction, useState } from "react";
import {
  FiUserPlus, // Invite Member
  FiLayout, // See Org Chart
  FiLink, // Link Services
  FiHeadphones, // Contact Support
  FiLogOut, // Sign Out
} from "react-icons/fi";

export const CommandMenu = ({ open, setOpen }) => {
  const [value, setValue] = useState("");

  // Toggle the menu when ctrl+K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50 z-[9999]"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12 z-4000"
        onClick={(e) => e.stopPropagation()}
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need"
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for {""}
            <span className="text-violet-500">"{value}"</span>
          </Command.Empty>

          <Command.Group className="text-sm mb-3 text-stone-400" heading="Team">
            <Command.Item className="flex items-center gap-2 p-2 rounded hover:bg-stone-200 cursor-pointer">
              <FiUserPlus />
              Invite Member
            </Command.Item>
            <Command.Item className="flex items-center gap-2 p-2 rounded hover:bg-stone-200 cursor-pointer">
              <FiLayout />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group
            className="text-sm mb-3 text-stone-400"
            heading="Integration"
          >
            <Command.Item className="flex items-center gap-2 p-2 rounded hover:bg-stone-200 cursor-pointer">
              <FiLink />
              Link Services
            </Command.Item>
            <Command.Item className="flex items-center gap-2 p-2 rounded hover:bg-stone-200 cursor-pointer">
              <FiHeadphones />
              Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="flex items-center gap-2 p-2 rounded bg-stone-950 text-stone-50 hover:bg-stone-700 cursor-pointer">
            <FiLogOut />
            Sign Out
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
