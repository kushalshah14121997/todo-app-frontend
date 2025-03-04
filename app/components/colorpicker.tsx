'use client';

interface ColorPickerProps {
  selectedColor: string;
  onSelect: (color: string) => void;
}

export default function ColorPicker({ selectedColor, onSelect }: ColorPickerProps) {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown"];

  return (
    <div>
      <label className="block text-[14px] font-medium mb-2 text-[#4EA8DE]">Color</label>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            className={`w-10 h-10 rounded-full border-2 ${
              selectedColor === color ? "border-white" : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
