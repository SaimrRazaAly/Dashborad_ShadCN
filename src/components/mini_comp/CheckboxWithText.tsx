"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxWithTextProps {
  itemId: string;
  title: string;
  para?: string;
}

export function CheckboxWithText({
  itemId,
  title,
  para,
}: CheckboxWithTextProps) {
  return (
    <div className="flex items-center gap-4">
      <Checkbox id={itemId} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={itemId}
          className="text-sm text-muted-foreground"
        >
          {title}
        </label>
        {para && <p className="text-sm text-muted-foreground">{para}</p>}
      </div>
    </div>
  );
}
