"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationMenuServices = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black">
            <Link href={"/services"}>Services </Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-1 py-2 md:w-[200px] lg:w-[300px] bg-black">
              <ListItem
                href="/services/web-development"
                title="Website Development"
              ></ListItem>
              <ListItem
                href="/"
                title="Search Engine Optimisation (SEO)"
              ></ListItem>
              <ListItem
                href="/"
                title="Search Engine Marketing (SEM)"
              ></ListItem>
              <ListItem href="/" title="Branding & Content Writing"></ListItem>
              <ListItem
                href="/"
                title="Social Media Marketing (SMM)"
              ></ListItem>
              <ListItem href="/" title="IT Infrastructure Services"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuServices;

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 text-white",
              className
            )}
            {...props}
          >
            <div className="text-sm font-light leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
