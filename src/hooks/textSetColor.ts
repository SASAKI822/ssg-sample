import { useState } from "react";

export default function useTextColor() {
 const [color, setColor] = useState<"red" | "blue">("red")
 return {color, setColor}
}