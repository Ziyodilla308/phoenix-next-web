"use client";

import { Button } from "@/components/ui/button";

const filters: string[] = ["Category", "Price", "Brand", "Color", "Size"];

export default function ShopSidebarMenu() {
  return (
    <aside className="w-72 bg-background border border-border rounded-xl  p-6 hidden lg:block">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Filter</h2>
        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Clear All
        </button>
      </div>

      {/* Filter list */}
      <ul className="space-y-2">
        {filters.map((title, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                       text-foreground font-medium hover:bg-muted hover:text-primary
                       transition-colors"
          >
            {title}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3">
        <Button
          size="sm"
          className="w-full rounded-lg font-medium shadow-sm hover:shadow-md transition-all"
        >
          Save Filters
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-lg font-medium text-destructive border-destructive hover:bg-destructive/10 transition-all"
        >
          Reset Filters
        </Button>
      </div>
    </aside>
  );
}
