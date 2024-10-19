"use client";

import ColorPicker from "@/components/color-picker";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useModelViewSettingsStore } from "@/stores/modelViewSettingsStore";
import { useSearchParams } from "next/navigation";

type Props = {};

const EditorSidebar = (props: Props) => {
  const {
    orbitControls,
    setOrbitControls,
    pivotControls,
    setPivotControls,
    backgroundColor,
    setBackgroundColor,
  } = useModelViewSettingsStore();

  // Handle changes for each control
  const handleOrbitControlsChange = (checked: boolean) => {
    setOrbitControls(checked);
  };

  const handlePivotControlsChange = (checked: boolean) => {
    setPivotControls(checked);
  };

  return (
    <div className="absolute left-3 top-3 bg-background border-border border rounded-sm p-3 z-10">
      {/* <h1 className="font-bold mb-3">Options</h1> */}
      <ul className="space-y-2">
        {/* Pivot Controls */}
        <li className="flex items-center space-x-2">
          <Switch
            id="pivot-controls"
            checked={pivotControls}
            onCheckedChange={handlePivotControlsChange}
          />
          <Label className="cursor-pointer" htmlFor="pivot-controls">
            Pivot Controls
          </Label>
        </li>

        {/* Orbit Controls */}
        <li className="flex items-center space-x-2">
          <Switch
            id="orbit-controls"
            checked={orbitControls}
            onCheckedChange={handleOrbitControlsChange}
          />
          <Label className="cursor-pointer" htmlFor="orbit-controls">
            Orbit Controls
          </Label>
        </li>

        <li className="">
          <ColorPicker
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
          />
        </li>
      </ul>
    </div>
  );
};

export default EditorSidebar;
