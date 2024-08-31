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
              <ListItem title="Website Development">
                <Link href={"/services/web-development"}>
                  Website Development
                </Link>
              </ListItem>
              <ListItem title="Search Engine Optimisation (SEO)">
                <Link href={"/services/search-engine-optimisation"}>
                  Search Engine Optimisation (SEO)
                </Link>
              </ListItem>
              <ListItem title="Search Engine Marketing (SEM)">
                <Link href={"/services/search-engine-marketing"}>Search Engine Marketing (SEM)</Link>
              </ListItem>
              <ListItem title="Branding & Content Writing">
                <Link href={"/services/branding-content-writing"}>Branding & Content Writing</Link>
              </ListItem>
              <ListItem title="Social Media Marketing (SMM)">
                <Link href={"/services/social-media-marketing"}>Social Media Marketing (SMM)</Link>
              </ListItem>
              <ListItem title="IT Infrastructure Services">
                <Link href={"/services/it-infrastructure-solutions"}>IT Infrastructure Services</Link>
              </ListItem>
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
            <div className="text-sm font-light leading-none">{children}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p> */}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
