import { FadeInText } from "@/components";
import { GlowText } from "@/components";



export default function TextSection() {
  return (
    <div className="flex flex-col items-center gap-11 text-center">
        <h2 className="text-2xl font-bold underline">Text Components</h2>
        <FadeInText>
            Fade In
        </FadeInText>
        <GlowText>
            Wonderful
        </GlowText>
  </div>
  )
}