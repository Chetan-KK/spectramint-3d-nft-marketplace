"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const EditorSidebar = (props: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLButtonElement>) {
    console.log(e.target);
  }

  const searchParams = useSearchParams();
  console.log(searchParams.get("pivot"));

  return (
    <div className="fixed left-1 bg-background border-border border rounded-sm p-3 top-20">
      <h1 className="font-bold mb-3">Options</h1>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <Switch id="pivot-controls" onChange={handleChange} checked={true} />
          <Label htmlFor="pivot-controls">Pivot Controls</Label>
        </li>
        <li className="flex items-center space-x-2">
          <Switch id="orbit-controls" onChange={handleChange} checked={true} />
          <Label htmlFor="orbit-controls">Orbit Controls</Label>
        </li>
      </ul>
    </div>
  );
};

export default EditorSidebar;
