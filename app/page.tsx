import { Hero } from "@/Pages/Hero";
import { GoogleGeminiEffectDemo } from "../Componentse/ui/Gemini";
import { ThreeDCardDemo } from "@/Componentse/ui/ThreeDcardDemo";
import slika1 from "../public/Slike/jonas-bg-remove.png";
import slika2 from "../public/Slike/kiril.png";
import slika3 from "../public/Slike/max.png";

import { MacbookScrollDemo } from "../Componentse/ui/MacbookScrollDemo";
import MyFooter from "@/Componentse/ui/MyFooter";

export default function Home() {
  return (
    <div className="bg-[#02010a]">
      <Hero />
      <GoogleGeminiEffectDemo />
      <div className="flex width-full justify-center gap-10 bg-[#02010a] ">
        <ThreeDCardDemo
          imeProfesora="Jonas Schmeddtman"
          slika={slika1}
          deskripcija
          deskripcija="Jonass Schmeddtmann is a well-known course creator, famous for his JavaScript course."
          brojKurseva={11}
          twitter="jonasschmedtman"
        />
        <ThreeDCardDemo
          imeProfesora="Maximilian Schwarzmüller"
          slika={slika3}
          deskripcija="Maximilian Schwarzmüller is a German course creator known for his courses on React and TypeScript."
          brojKurseva={7}
          twitter="maxedapps"
        />
        <ThreeDCardDemo
          imeProfesora="Kirill Eremenko"
          slika={slika2}
          deskripcija="Kirill Eremenko, better known as SuperDataScience, is a celebrated course creator from Australia."
          brojKurseva={8}
          twitter="kirill_eremenko"
        />
      </div>
      <MacbookScrollDemo />
      <MyFooter />
    </div>
  );
}
