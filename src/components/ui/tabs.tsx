"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col w-full", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex w-full items-center justify-start border-b border-neutral-800/50 overflow-x-auto scrollbar-hide",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap px-3 py-3 text-sm font-medium tracking-wide transition-all relative text-neutral-400 hover:text-neutral-200",
        "data-[state=active]:text-[#f4d03f] data-[state=active]:font-medium",
        "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#f4d03f] after:scale-x-0 after:opacity-0 after:transition-all",
        "data-[state=active]:after:scale-x-100 data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "mt-6 focus-visible:outline-none transition-opacity duration-500 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
