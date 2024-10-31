import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function FootScroll() {
  return (
    <VelocityScroll
    text="Thanks for visiting my portfolio! |  Made by Pranjal Jain ❤️| "
    default_velocity={1}
      className="font-display text-center text-lg  tracking-[-0.02em] text-gray-500 drop-shadow-sm dark:text-gray-300 md:text-2xl md:leading-8 font-semibold"
    />
  );
}