import { Command } from "cmdk";
import { useEffect, Dispatch, SetStateAction, useState } from "react";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden

export const CommandMenu = ({ open, setOpen }) => {
  //   const [open, setOpen] = useState(false);

  const [value, setValue] = useState("");

  // Toggle the menu when ⌘K is pressed
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
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      {/* Adding a DialogTitle */}
      {/* <Command.Title>
        <VisuallyHidden>Global Command Menu</VisuallyHidden>
      </Command.Title> */}

      <div
        className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
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
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <span>+</span>
              Invite Member
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <span>$</span>
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group
            className="text-sm mb-3 text-stone-400"
            heading="Integration"
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <span>+</span>
              Link Services
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <span>$</span>
              Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-700 bg-stone-950 rounded items-center gap-2">
            <span>$</span>
            Sign Out
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
