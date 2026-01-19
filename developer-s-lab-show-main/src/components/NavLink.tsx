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
            // Base styles
            "relative font-medium text-gray-600 transition-all duration-300 hover:text-[#158fa2] px-4 py-2 rounded-lg group",
            
            // Active state - usando as cores da paleta
            isActive && cn(
              "text-[#722731] font-bold",
              "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5",
              "before:bg-gradient-to-r before:from-[#e4b302] before:via-[#158fa2] before:to-[#de4f3a]",
              "before:rounded-full",
              activeClassName
            ),
            
            // Pending state
            isPending && cn(
              "text-[#158fa2] opacity-70 animate-pulse",
              pendingClassName
            ),
            
            // Custom className
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