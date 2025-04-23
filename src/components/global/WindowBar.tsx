import { X, Minus } from "lucide-react";

export function MacWindowBar() {
  return (
    <div className="flex items-center gap-2 h-8 px-4 py-1 bg-[#1a1a1a] rounded-t-none border-b border-[#212225] w-full select-none">
      <div className="flex gap-2">
        <span
          className="inline-flex items-center justify-center h-3 w-3 rounded-full"
          style={{
            background: "#ff5f57",
            // border: "1.5px solid #d0021b",
          }}
          title="Close"
        >
          <X className="w-2 h-2 text-[#d0021b] opacity-0 pointer-events-none" />
        </span>
        <span
          className="inline-flex items-center justify-center h-3 w-3 rounded-full"
          style={{
            background: "#ffbd2e",
            // border: "1.5px solid #e1a500",
          }}
          title="Minimize"
        >
          <Minus className="w-2 h-2 text-[#e1a500] opacity-0 pointer-events-none" />
        </span>
        <span
          className="inline-flex items-center justify-center h-3 w-3 rounded-full"
          style={{
            background: "#28c940",
            // border: "1.5px solid #059c19",
          }}
          title="Zoom"
        />
      </div>
    </div>
  );
}
