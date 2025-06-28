import FullMenu from "@/components/Home/FullMenu";
import SubHero from "@/components/Common/SubHero";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-black">
      <SubHero
        title="Unsere Speisekarte"
        subtitle="Hardal Restaurant"
        description="Entdecken Sie unsere authentische türkische Küche mit einem modernen Twist"
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074"
        imageAlt="Türkische Küche"
        height="medium"
        overlay="dark"
        align="center"
      />
      <FullMenu />
    </main>
  );
}
