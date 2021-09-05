import { INavbarProps } from "./types";

export function Navbar({ children }: INavbarProps) {
  return (
    <nav aria-label="Main">
      <ul>{children}</ul>
    </nav>
  );
}
