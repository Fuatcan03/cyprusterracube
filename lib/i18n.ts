export const locales = ["tr", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "tr"

export const translations = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      projects: "Projeler",
      contact: "İletişim",
      getQuote: "Teklif Alın",
    },
    hero: {
      subtitle: "GELENEKTEN GELECEĞE...",
      title: "Terracube",
      description1: "20 Yıllık Mimari Geçmişimizle Geleneksel Kerpiçe İnovasyon Kattık.",
      description2:
        "Yaklaşık 3 yıllık Arge çalışmalarımız sonucunda, kendi bünyemizde geliştirdiğimiz formülasyonla kerpiçte yaşanan suya ve neme karşı düşük dayanım sorununu Terra Cube ile ortadan kaldırdık.",
      description3:
        "Terra Cube enerji tüketimi diğer yapı malzemelerinden daha azdır. Enerji tüketimi malzemenin üretimi, binanın inşaat aşaması ve kullanım süresinde harcanan enerjilerin toplamı şeklinde değerlendirilmelidir.",
      description4:
        "Gelecekte nasıl konutlarda barınacağımız konusu artık küresel boyutta irdelenmesi gereken yaşamsal bir sorun olarak karşımızdadır. Mutlaka tasarlanacak yapıların çevreyle uyumlu olması, tüketilen enerjinin en aza indirilerek seçilen malzemelerin geri dönüştürülebilir olması ile doğaya zarar vermeden, doğadan en üst düzeyde yararlanmak başlıca amaçlarımız arasında olmalıdır.",
      cta: "Projelerimizi İnceleyin",
      learnMore: "Daha Fazla Bilgi",
    },
    about: {
      title: "HAKKIMIZDA",
      description:
        "20 yılı aşkın mimari proje çizim ve uygulama deneyimimizle, kendi ürünümüz olan terracube ile ekolojik yapıları proje aşamasından itibaren inşa ediyoruz.",
      mission: "Misyonumuz",
      missionText: "Müşterilerimize çevre dostu çözümlerle ilham vermek ve bunları uygulamak.",
      vision: "Vizyonumuz",
      visionText:
        "Zorluklar ne olursa olsun, müşterilerimize ekolojik yapı çözümleri sunarak daha da ileri gitmeye çalışıyoruz.",
    },
    projects: {
      title: "PROJELERİMİZ",
      subtitle: "Terra Cube ile Hayata Geçirdiğimiz Ekolojik Yapılar",
      viewAll: "Tüm Fotoğraflar",
    },
    contact: {
      title: "İLETİŞİM",
      subtitle: "Bize Ulaşın",
      email: "E-Posta",
      phone: "Telefon Numarası",
      location: "Konumumuz",
      address: "Dörtyol, Geçitkale yolu üzeri",
      form: {
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        message: "Mesajınız",
        send: "Gönder",
      },
    },
    footer: {
      description: "Geleneksel kerpiçe modern teknoloji ile inovasyon katarak sürdürülebilir yapılar inşa ediyoruz.",
      quickLinks: "Hızlı Bağlantılar",
      contact: "İletişim",
      followUs: "Bizi Takip Edin",
      rights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      projects: "Projects",
      contact: "Contact",
      getQuote: "Get Quote",
    },
    hero: {
      subtitle: "FROM TRADITION TO FUTURE...",
      title: "Terracube",
      description1: "We Added Innovation to Traditional Adobe Blocks with Our 20 Years of Architectural Background.",
      description2:
        "As a result of approximately 3 years of R&D work, we eliminated the low resistance problem against water and moisture in adobe with Terra Cube, developed with our own formulation.",
      description3:
        "Terra Cube energy consumption is less than other building materials. Energy consumption should be evaluated as the sum of the energy spent in the production of the material, the construction phase of the building and the usage period.",
      description4:
        "The issue of what kind of houses we will live in in the future is now a vital problem that needs to be examined globally. The main objectives should be to ensure that the buildings to be designed are compatible with the environment, to minimize the energy consumed, to ensure that the selected materials are recyclable, and to benefit from nature at the highest level without harming nature.",
      cta: "View Our Projects",
      learnMore: "Learn More",
    },
    about: {
      title: "ABOUT US",
      description:
        "With over 20 years of architectural design and implementation experience, we build ecological structures from the project stage with our own product, terracube.",
      mission: "Our Mission",
      missionText: "To inspire and implement environmentally friendly solutions for our customers.",
      vision: "Our Vision",
      visionText:
        "Regardless of the challenges, we strive to go further by providing ecological building solutions to our customers.",
    },
    projects: {
      title: "OUR PROJECTS",
      subtitle: "Ecological Structures Built with Terra Cube",
      viewAll: "View All Photos",
    },
    contact: {
      title: "CONTACT",
      subtitle: "Get In Touch",
      email: "Email",
      phone: "Phone Number",
      location: "Our Location",
      address: "Dörtyol, Geçitkale road",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message: "Your Message",
        send: "Send",
      },
    },
    footer: {
      description: "We build sustainable structures by adding innovation to traditional adobe with modern technology.",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.tr
}
