import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ModelViewSettingsState {
  orbitControls: boolean;
  pivotControls: boolean;
  backgroundColor: string;
  setOrbitControls: (value: boolean) => void;
  setPivotControls: (value: boolean) => void;
  setBackgroundColor: (value: string) => void;
}

export const useModelViewSettingsStore = create<ModelViewSettingsState>()(
  persist(
    (set) => ({
      orbitControls: false, // default value
      pivotControls: false, // default value
      backgroundColor: "transparent",
      setOrbitControls: (value: boolean) => set({ orbitControls: value }),
      setPivotControls: (value: boolean) => set({ pivotControls: value }),
      setBackgroundColor: (value: string) => set({ backgroundColor: value }),
    }),
    {
      name: "model-view-settings", // unique name for the localStorage key
      storage: createJSONStorage(() => localStorage), // Use createJSONStorage to specify localStorage
    }
  )
);
