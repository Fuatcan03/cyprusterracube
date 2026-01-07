import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Locale } from "@/lib/i18n"

export function FAQ({ lang }: { lang: Locale }) {
  const faqs =
    lang === "tr"
      ? [
          {
            question: "Terra Cube ile yapılan yapılar depreme dayanıklı mıdır?",
            answer:
              "Evet, doğru mimarlık ve mühendislik ilkelerine göre üretildiğinde, depreme karşı betonarme yapılara göre iki kat daha dayanıklıdır.",
          },
          {
            question: "Terra Cube'ler nasıl birleşiyor?",
            answer:
              "Terra Cube blokları özel tasarlanmış kilit sistemleri ile birbirine bağlanır. Ayrıca doğal harçlar kullanılarak da birleştirilebilir. Montaj süreci hızlı ve pratiktir.",
          },
          {
            question: "Terra Cube ekolojik midir?",
            answer:
              "Evet, tamamen doğal malzemelerden üretilir ve çevreye zararlı hiçbir katkı içermez. Enerji verimliliği yüksektir ve hizmet ömrü sonunda tamamen geri dönüştürülebilir.",
          },
          {
            question: "Terra Cube ile inşaat süreci ne kadar sürer?",
            answer:
              "Geleneksel yapı sistemlerine göre %30-40 daha hızlı inşa edilir. Proje büyüklüğüne göre süre değişkenlik gösterebilir.",
          },
        ]
      : [
          {
            question: "Are structures built with Terra Cube earthquake resistant?",
            answer:
              "Yes, when produced according to proper architectural and engineering principles, it is twice as durable against earthquakes compared to reinforced concrete structures.",
          },
          {
            question: "How do Terra Cubes connect?",
            answer:
              "Terra Cube blocks connect with specially designed locking systems. They can also be joined using natural mortars. The assembly process is fast and practical.",
          },
          {
            question: "Is Terra Cube ecological?",
            answer:
              "Yes, it is made entirely from natural materials and contains no harmful additives. It has high energy efficiency and is completely recyclable at the end of its service life.",
          },
          {
            question: "How long does the construction process with Terra Cube take?",
            answer:
              "It is built 30-40% faster than traditional building systems. Duration may vary depending on project size.",
          },
        ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {lang === "tr" ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
          </h2>
          <p className="text-xl text-muted-foreground">{lang === "tr" ? "Daha fazla bilgi edinin" : "Learn more"}</p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {index + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
