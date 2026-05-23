import { Helmet } from "react-helmet-async"
import { Heart, Leaf, Brain, Sparkles, Baby, ShieldCheck, Hop as HomeIcon, CircleCheck as CheckCircle, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { useI18n } from "@/lib/i18n"
import { openWhatsApp, buildServiceEnquiryMessage } from "@/lib/whatsapp"

const specializedTherapies = [
  {
    key: "painRelief",
    icon: Heart,
    img: "/images/_SpecializedTherapies-images/PainReliefRootCauseTreatment.jpeg",
    benefits: [
      "Advanced root cause diagnosis",
      "Targeted pain elimination",
      "Long-lasting relief without medication",
      "Personalized rehabilitation plan",
      "Prevention of recurring pain",
    ],
    benefitsHi: [
      "उन्नत मूल कारण निदान",
      "लक्षित दर्द उन्मूलन",
      "दवाओं के बिना लंबे समय तक राहत",
      "व्यक्तिगत पुनर्वास योजना",
      "दोबारा दर्द की रोकथाम",
    ],
  },
  {
    key: "holisticHealing",
    icon: Leaf,
    img: "/images/_SpecializedTherapies-images/Holistic_Approach_Healing.jpeg",
    benefits: [
      "Whole-body healing approach",
      "Natural therapeutic techniques",
      "Improved blood circulation",
      "Enhanced energy and vitality",
      "Restored body balance",
    ],
    benefitsHi: [
      "पूरे शरीर का उपचार दृष्टिकोण",
      "प्राकृतिक चिकित्सीय तकनीकें",
      "बेहतर रक्त संचार",
      "बढ़ी हुई ऊर्जा और जीवन शक्ति",
      "शरीर का संतुलन बहाल",
    ],
  },
  {
    key: "stressRelief",
    icon: Brain,
    img: "/images/_SpecializedTherapies-images/Stress_Relief_&_Emotional_Healing_Therapy.jpeg",
    benefits: [
      "Release physical tension from stress",
      "Anxiety and cortisol reduction",
      "Improved sleep quality",
      "Emotional release and calm",
      "Renewed mental clarity",
    ],
    benefitsHi: [
      "तनाव से शारीरिक तनाव दूर करना",
      "चिंता और कोर्टिसोल में कमी",
      "बेहतर नींद की गुणवत्ता",
      "भावनात्मक मुक्ति और शांति",
      "नवीनीकृत मानसिक स्पष्टता",
    ],
  },
  {
    key: "mindBody",
    icon: Sparkles,
    img: "/images/_SpecializedTherapies-images/MindBodyBalanceRelaxationTherapy.jpeg",
    benefits: [
      "Guided breathing techniques",
      "Deep relaxation therapy",
      "Mind-body harmony restoration",
      "Reduced muscle tension",
      "Inner peace and wellness",
    ],
    benefitsHi: [
      "निर्देशित श्वास तकनीकें",
      "गहन विश्राम थेरेपी",
      "मन-शरीर सामंजस्य बहाली",
      "मांसपेशियों के तनाव में कमी",
      "आंतरिक शांति और कल्याण",
    ],
  },
  {
    key: "postPregnancy",
    icon: Baby,
    img: "/images/_SpecializedTherapies-images/Post-PregnancyCareandRehabilitation.jpeg",
    benefits: [
      "Core strength rebuilding",
      "Pelvic floor rehabilitation",
      "Posture correction post-delivery",
      "Safe return to activity",
      "Tailored to your recovery stage",
    ],
    benefitsHi: [
      "कोर शक्ति पुनर्निर्माण",
      "पेल्विक फ्लोर पुनर्वास",
      "प्रसव के बाद पोस्चर सुधार",
      "सुरक्षित रूप से गतिविधि में वापसी",
      "आपकी रिकवरी अवस्था के अनुसार अनुकूलित",
    ],
  },
  {
    key: "diastasisRecti",
    icon: ShieldCheck,
    img: "/images/_SpecializedTherapies-images/DiastasisRectiCorrectionTherapy.jpeg",
    benefits: [
      "Abdominal gap assessment",
      "Targeted core exercises",
      "Progressive strengthening program",
      "Restored abdominal alignment",
      "Improved functional strength",
    ],
    benefitsHi: [
      "पेट के गैप का मूल्यांकन",
      "लक्षित कोर व्यायाम",
      "क्रमिक मजबूती कार्यक्रम",
      "पेट की संरेखना बहाल",
      "बेहतर कार्यात्मक शक्ति",
    ],
  },
  {
    key: "homeVisitSpecialized",
    icon: HomeIcon,
    img: "/images/_SpecializedTherapies-images/HomeVisitPhysiotherapyAvailable.jpeg",
    benefits: [
      "All therapies at your doorstep",
      "Comfortable home environment",
      "Flexible scheduling",
      "Ideal for new mothers & elderly",
      "Full professional equipment",
    ],
    benefitsHi: [
      "आपके दरवाजे पर सभी थेरेपी",
      "आरामदायक घरेलू वातावरण",
      "लचीला शेड्यूल",
      "नई माताओं और बुजुर्गों के लिए आदर्श",
      "पूर्ण पेशेवर उपकरण",
    ],
  },
]

export function SpecializedTherapiesPage() {
  const { t, lang } = useI18n()

  return (
    <>
      <Helmet>
        <title>{t("seo.specializedTitle")}</title>
        <meta name="description" content={t("seo.specializedDesc")} />
        <meta property="og:title" content={t("seo.specializedTitle")} />
        <meta property="og:description" content={t("seo.specializedDesc")} />
        <link rel="canonical" href="https://narayana-physiocare2.prototype-web.site/specialized-therapies" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-12 md:py-18">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.05),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <Badge variant="secondary" className="mb-4">{t("clinic.name")}</Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {t("section.specializedTherapies")}
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            {t("section.specializedTherapiesSubtitle")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="gap-2"
              onClick={() =>
                openWhatsApp(
                  lang === "hi"
                    ? "नमस्ते, मुझे विशेष थेरेपी के बारे में जानकारी चाहिए।"
                    : "Hello, I would like to know about your specialized therapies."
                )
              }
            >
              {t("cta.enquireNow")}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="tel:9871001508">
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                {t("cta.callNow")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Therapies Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 space-y-16">
          {specializedTherapies.map((therapy, idx) => {
            const Icon = therapy.icon
            const isEven = idx % 2 === 0
            return (
              <div key={therapy.key} className="scroll-mt-20" id={therapy.key}>
                <div className={`grid gap-8 md:grid-cols-2 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}>
                  <div className={!isEven ? "md:[direction:ltr]" : ""}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={therapy.img}
                        alt={t(`specialTherapy.${therapy.key}`)}
                        className="w-full h-60 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                  <div className={!isEven ? "md:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold md:text-2xl">{t(`specialTherapy.${therapy.key}`)}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`specialTherapy.${therapy.key}Desc`)}
                    </p>
                    <div className="mt-5 space-y-2.5">
                      {(lang === "hi" ? therapy.benefitsHi : therapy.benefits).map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2.5">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="mt-6 gap-2"
                      onClick={() => openWhatsApp(buildServiceEnquiryMessage(t(`specialTherapy.${therapy.key}`), lang))}
                    >
                      {t("cta.enquireNow")}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why These Therapies */}
      <section className="bg-card py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            title={lang === "hi" ? "हम अलग क्यों हैं" : "What Makes Us Different"}
            subtitle={lang === "hi" ? "सिर्फ दर्द का इलाज नहीं, पूरे शरीर का उपचार" : "We treat the whole person, not just the pain"}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { en: "Root Cause Focus", hi: "मूल कारण पर ध्यान", descEn: "We identify and fix the source, not just mask symptoms", descHi: "हम सिर्फ लक्षण छुपाने नहीं, मूल कारण ढूंढकर ठीक करते हैं" },
              { en: "Holistic Healing", hi: "समग्र उपचार", descEn: "Body, mind, and emotional well-being treated together", descHi: "शरीर, मन और भावनात्मक कल्याण एक साथ उपचारित" },
              { en: "Women's Health Expert", hi: "महिला स्वास्थ्य विशेषज्ञ", descEn: "Specialized in post-pregnancy and women's wellness", descHi: "प्रसवोत्तर और महिला कल्याण में विशेषज्ञता" },
              { en: "Natural Approach", hi: "प्राकृतिक दृष्टिकोण", descEn: "Drug-free therapies that activate your body's healing", descHi: "दवा-मुक्त थेरेपी जो शरीर की प्राकृतिक उपचार शक्ति जगाती है" },
              { en: "Home Visits Available", hi: "होम विजिट उपलब्ध", descEn: "All specialized therapies available at your doorstep", descHi: "सभी विशेष थेरेपी आपके दरवाजे पर उपलब्ध" },
              { en: "Personalized Plans", hi: "व्यक्तिगत योजनाएं", descEn: "Every treatment tailored to your unique needs", descHi: "हर उपचार आपकी अनूठी जरूरतों के अनुसार" },
            ].map((item) => (
              <Card key={item.en} className="transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold">{lang === "hi" ? item.hi : item.en}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{lang === "hi" ? item.descHi : item.descEn}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-xl font-bold text-primary-foreground md:text-2xl">
            {lang === "hi"
              ? "अपनी रिकवरी यात्रा आज शुरू करें"
              : "Begin Your Healing Journey Today"}
          </h2>
          <p className="mt-2 text-primary-foreground/80 text-sm max-w-lg mx-auto">
            {lang === "hi"
              ? "हमारे विशेषज्ञ से बात करें और जानें कि कौन सी थेरेपी आपके लिए सही है"
              : "Talk to our specialist and discover which therapy is right for you"}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2"
              onClick={() =>
                openWhatsApp(
                  lang === "hi"
                    ? "नमस्ते, मुझे विशेष थेरेपी के बारे में परामर्श चाहिए।"
                    : "Hello, I would like a consultation about your specialized therapies."
                )
              }
            >
              {t("cta.whatsappUs")}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="tel:9871001508">
              <Button variant="outline" size="lg" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4" />
                {t("cta.callNow")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
