import { createFileRoute } from "@tanstack/react-router";

import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { TrustSection } from "@/components/TrustSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sushi Lovers Нагария — суши, роллы и сеты с доставкой" },
      {
        name: "description",
        content:
          "Свежие роллы, нигири и сеты от Sushi Lovers в Нагарии. Доставка в Нагарию, Акко и Маалот, самовывоз и заказ через WhatsApp.",
      },
      { property: "og:title", content: "Sushi Lovers Нагария — суши с доставкой" },
      {
        property: "og:description",
        content: "Меню, отзывы и заказ в один клик через WhatsApp. Доставка Нагария, Акко, Маалот.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <TrustSection />
        <GallerySection />
        <ReviewsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
