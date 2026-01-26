import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(

            "relative font-medium text-slate-600 transition-all duration-300 hover:text-cyan-600 px-4 py-2 rounded-xl group",


            "hover:bg-slate-50",


            isActive && cn(
              "text-transparent bg-gradient-to-r from-violet-600 via-cyan-600 to-teal-600 bg-clip-text font-bold",
              "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5",
              "before:bg-gradient-to-r before:from-violet-500 before:via-cyan-500 before:to-teal-500",
              "before:rounded-full before:shadow-lg before:shadow-cyan-500/50",
              "after:absolute after:inset-0 after:bg-gradient-to-r after:from-violet-500/5 after:via-cyan-500/5 after:to-teal-500/5",
              "after:rounded-xl after:-z-10",
              activeClassName
            ),


            isPending && cn(
              "text-cyan-600 opacity-70",
              "animate-pulse",
              pendingClassName
            ),


            !isActive && "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-500 after:via-cyan-500 after:to-teal-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4",


            className
          )
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };