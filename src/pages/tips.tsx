import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { ArrowRight, BookOpen, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { useI18n } from "@/lib/i18n"
import { openWhatsApp } from "@/lib/whatsapp"

const tips = [
  {
    title: "5 Rules for Correct Posture",
    titleHi: "सही पोस्चर के 5 नियम",
    category: "Posture",
    categoryHi: "पोस्चर",
    img: "/tip-posture.webp",
    readTime: "3 min",
    summary: "Maintaining correct posture is essential for preventing back and neck pain. Keep your shoulders back, chin tucked, and core engaged. When sitting, ensure your feet are flat on the floor and your screen is at eye level.",
    summaryHi: "सही पोस्चर बनाए रखना पीठ और गर्दन के दर्द को रोकने के लिए आवश्यक है। अपने कंधों को पीछे रखें, ठुड्डी अंदर और कोर लगा हुआ। बैठते समय सुनिश्चित करें कि आपके पैर फर्श पर सपाट हों और स्क्रीन आंखों के स्तर पर हो।",
    fullContent: `Here are the 5 essential rules to maintain correct posture throughout your day:

1. Keep your ears aligned over your shoulders. When your head drifts forward, it puts enormous strain on your neck — for every inch forward, the effective weight on your spine increases by 10 pounds.

2. Engage your core gently. You don't need to brace hard, but a light activation of your abdominal muscles supports your lower back and keeps your pelvis in a neutral position.

3. Set up your workspace properly. Your monitor should be at arm's length with the top of the screen at eye level. Your elbows should be at 90 degrees, and your feet flat on the floor or a footrest.

4. Move every 30 minutes. No posture is perfect if held too long. Stand up, stretch your hip flexors, roll your shoulders, and take a short walk.

5. Strengthen your back muscles. Exercises like rows, reverse flys, and wall angels help counteract the forward pull of daily activities like typing and phone use.

If you're experiencing pain despite good posture habits, it may indicate an underlying issue that needs professional assessment.`,
    fullContentHi: `यहां आपके पूरे दिन में सही पोस्चर बनाए रखने के 5 आवश्यक नियम हैं:

1. अपने कानों को कंधों के ऊपर संरेखित रखें। जब आपका सिर आगे की ओर झुकता है, तो यह गर्दन पर भारी दबाव डालता है — हर इंच आगे झुकने पर रीढ़ पर प्रभावी वजन 10 पाउंड बढ़ जाता है।

2. अपने कोर को हल्के से सक्रिय रखें। आपको जोर से कसने की जरूरत नहीं है, लेकिन पेट की मांसपेशियों की हल्की सक्रियता पीठ के निचले हिस्से को सहारा देती है।

3. अपनी कार्यस्थल को ठीक से सेट करें। मॉनिटर हाथ की दूरी पर हो और स्क्रीन का ऊपरी भाग आंखों के स्तर पर हो। कोहनी 90 डिग्री पर हो और पैर फर्श पर सपाट हों।

4. हर 30 मिनट में हिलें-डुलें। कोई भी पोस्चर लंबे समय तक रखने पर सही नहीं रहता। खड़े हों, स्ट्रेच करें और छोटी वॉक लें।

5. पीठ की मांसपेशियों को मजबूत करें। रो, रिवर्स फ्लाई और वॉल एंजेल जैसे व्यायाम दैनिक गतिविधियों के कारण आगे की ओर खिंचाव को कम करते हैं।

यदि अच्छी पोस्चर आदतों के बावजूद दर्द है, तो यह किसी अंतर्निहित समस्या का संकेत हो सकता है जिसे पेशेवर मूल्यांकन की आवश्यकता है।`,
  },
  {
    title: "Home Remedies for Back Pain",
    titleHi: "कमर दर्द के घरेलू उपाय",
    category: "Back Pain",
    categoryHi: "कमर दर्द",
    img: "/tip-back-pain.webp",
    readTime: "4 min",
    summary: "For mild back pain, try hot/cold therapy, gentle stretches, and maintaining activity. Ice for the first 48 hours, then switch to heat. Cat-cow stretches and child's pose can provide relief. Avoid prolonged bed rest.",
    summaryHi: "हल्के कमर दर्द के लिए, गर्म/ठंडी सिकाई, हल्की स्ट्रेचिंग और गतिविधि बनाए रखें। पहले 48 घंटे बर्फ लगाएं, फिर गर्मी। कैट-काउ स्ट्रेच और चाइल्ड पोज़ राहत दे सकते हैं। लंबे समय तक बेड रेस्ट से बचें।",
    fullContent: `Back pain affects most people at some point, but simple home remedies can often provide significant relief:

Cold Therapy (First 48 Hours): Apply an ice pack wrapped in a towel for 15-20 minutes at a time. Cold reduces inflammation and numbs the area. Repeat every 2-3 hours during the acute phase.

Heat Therapy (After 48 Hours): Switch to a hot water bottle or heating pad. Heat relaxes tight muscles, improves blood flow, and promotes healing. Use for 20-minute sessions.

Gentle Movement: While rest feels instinctive, staying mildly active is better for recovery. Short walks, gentle swimming, or simple stretches keep muscles from stiffening further.

Helpful Stretches:
- Cat-Cow: On hands and knees, alternate between arching and rounding your back. Do 10 slow repetitions.
- Child's Pose: Sit back on your heels with arms extended forward. Hold for 30 seconds.
- Knee-to-Chest: Lying on your back, pull one knee toward your chest. Hold 20 seconds each side.

Sleep Position: Sleep on your side with a pillow between your knees, or on your back with a pillow under your knees to maintain spinal alignment.

When to seek help: If pain radiates down your leg, you feel numbness or tingling, or pain persists beyond 2 weeks, consult a physiotherapist for proper diagnosis and treatment.`,
    fullContentHi: `कमर दर्द अधिकांश लोगों को कभी न कभी प्रभावित करता है, लेकिन सरल घरेलू उपचार अक्सर महत्वपूर्ण राहत दे सकते हैं:

ठंडी सिकाई (पहले 48 घंटे): तौलिये में लपेटकर आइस पैक 15-20 मिनट लगाएं। ठंड सूजन कम करती है और क्षेत्र को सुन्न करती है। तीव्र चरण में हर 2-3 घंटे दोहराएं।

गर्म सिकाई (48 घंटे के बाद): गर्म पानी की बोतल या हीटिंग पैड का उपयोग करें। गर्मी तनावग्रस्त मांसपेशियों को आराम देती है और रक्त प्रवाह बढ़ाती है। 20 मिनट के सत्र में उपयोग करें।

हल्की गतिविधि: आराम स्वाभाविक लगता है, लेकिन हल्की सक्रियता रिकवरी के लिए बेहतर है। छोटी सैर, हल्की तैराकी या सरल स्ट्रेच मांसपेशियों को और कठोर होने से रोकते हैं।

सहायक स्ट्रेच:
- कैट-काउ: हाथों और घुटनों पर, पीठ को ऊपर-नीचे करें। 10 धीमे दोहराव करें।
- चाइल्ड पोज़: एड़ियों पर बैठकर हाथ आगे फैलाएं। 30 सेकंड रुकें।
- घुटने-से-छाती: पीठ के बल लेटकर एक घुटना छाती की ओर खींचें। हर तरफ 20 सेकंड।

नींद की स्थिति: करवट लेकर सोएं और घुटनों के बीच तकिया रखें, या पीठ के बल सोते समय घुटनों के नीचे तकिया रखें।

कब डॉक्टर से मिलें: यदि दर्द पैर तक जाता है, सुन्नपन या झुनझुनी है, या 2 सप्ताह से अधिक दर्द रहता है, तो फिजियोथेरेपिस्ट से परामर्श लें।`,
  },
  {
    title: "Exercises to Strengthen Knees",
    titleHi: "घुटने मजबूत करने के व्यायाम",
    category: "Knee Health",
    categoryHi: "घुटने का स्वास्थ्य",
    img: "/tip-knee-exercise.webp",
    readTime: "5 min",
    summary: "Strengthen your knees with wall sits, straight leg raises, hamstring curls, and step-ups. Start with 10 reps, gradually increase. Always warm up first. Avoid deep squats if you have existing knee issues.",
    summaryHi: "वॉल सिट्स, स्ट्रेट लेग रेज़, हैमस्ट्रिंग कर्ल और स्टेप-अप से अपने घुटनों को मजबूत करें। 10 रेप्स से शुरू करें, धीरे-धीरे बढ़ाएं। हमेशा पहले वार्म अप करें। घुटने की समस्या हो तो गहरी स्क्वाट से बचें।",
    fullContent: `Strong muscles around the knee joint are your best protection against pain and injury. Here's a complete knee-strengthening routine:

Warm Up (5 minutes): Walk briskly or march in place to increase blood flow before exercising.

1. Wall Sits: Stand with your back against a wall, slide down until thighs are parallel to the floor. Hold 20-30 seconds. Rest and repeat 3 times. This builds quadriceps endurance without stressing the joint.

2. Straight Leg Raises: Lie on your back, one knee bent, the other straight. Lift the straight leg to the height of the bent knee. Do 10-15 reps per side. Strengthens the quadriceps while the knee remains stable.

3. Hamstring Curls: Stand holding a chair for balance. Bend one knee, bringing your heel toward your buttock. Lower slowly. 10-12 reps each side. Strong hamstrings balance the forces around the knee.

4. Step-Ups: Use a sturdy step (15-20 cm high). Step up with one foot, bring the other up, then step back down. 10 reps each leg. Builds functional strength for daily activities.

5. Calf Raises: Stand on the edge of a step, rise up on your toes, then lower slowly. 15 reps. Calf strength supports knee stability.

Important Tips:
- Never push through sharp pain — discomfort is okay, pain is not.
- Increase intensity gradually, adding 2-3 reps per week.
- Do this routine 3-4 times per week for best results.
- If you have an existing knee condition, consult a physiotherapist before starting.`,
    fullContentHi: `घुटने के जोड़ के आसपास मजबूत मांसपेशियां दर्द और चोट से आपकी सबसे अच्छी सुरक्षा हैं। यहां एक पूर्ण घुटना-मजबूती रूटीन है:

वार्म अप (5 मिनट): व्यायाम से पहले तेज चलें या जगह पर मार्च करें।

1. वॉल सिट्स: दीवार से पीठ लगाकर खड़े हों, जांघें फर्श के समानांतर तक नीचे खिसकें। 20-30 सेकंड रुकें। आराम करें और 3 बार दोहराएं। यह जोड़ पर दबाव डाले बिना क्वाड्रिसेप्स मजबूत करता है।

2. स्ट्रेट लेग रेज़: पीठ के बल लेटें, एक घुटना मुड़ा, दूसरा सीधा। सीधे पैर को मुड़े हुए घुटने की ऊंचाई तक उठाएं। हर तरफ 10-15 रेप्स।

3. हैमस्ट्रिंग कर्ल: संतुलन के लिए कुर्सी पकड़कर खड़े हों। एक घुटना मोड़ें, एड़ी को नितंब की ओर लाएं। धीरे-धीरे नीचे करें। हर तरफ 10-12 रेप्स।

4. स्टेप-अप: एक मजबूत स्टेप (15-20 सेमी ऊंचा) का उपयोग करें। एक पैर से ऊपर चढ़ें, दूसरा लाएं, फिर नीचे उतरें। हर पैर 10 रेप्स।

5. काफ रेज़: स्टेप के किनारे पर खड़े हों, पंजों पर ऊपर उठें, फिर धीरे-धीरे नीचे। 15 रेप्स।

महत्वपूर्ण सुझाव:
- तेज दर्द में कभी जबरदस्ती न करें।
- धीरे-धीरे तीव्रता बढ़ाएं, प्रति सप्ताह 2-3 रेप्स जोड़ें।
- सर्वोत्तम परिणामों के लिए सप्ताह में 3-4 बार करें।
- मौजूदा घुटने की समस्या हो तो शुरू करने से पहले फिजियोथेरेपिस्ट से परामर्श लें।`,
  },
  {
    title: "Neck Pain from Phone Use",
    titleHi: "फोन के उपयोग से गर्दन दर्द",
    category: "Neck Pain",
    categoryHi: "गर्दन दर्द",
    img: "/service-taping-therapy.webp",
    readTime: "3 min",
    summary: "Text neck is caused by looking down at your phone for extended periods. Hold your phone at eye level, take breaks every 20 minutes, and do chin tucks and neck rotations to relieve tension.",
    summaryHi: "टेक्स्ट नेक लंबे समय तक फोन पर नीचे देखने से होता है। फोन को आंखों के स्तर पर रखें, हर 20 मिनट में ब्रेक लें, और तनाव कम करने के लिए चिन टक और गर्दन के रोटेशन करें।",
    fullContent: `"Text neck" has become one of the most common conditions we see, especially in younger patients. Your head weighs about 5 kg in a neutral position, but at a 45-degree forward tilt (typical phone posture), your neck bears the equivalent of 22 kg of force.

Signs of Text Neck:
- Dull, aching pain in the neck and upper back
- Stiffness when looking up after phone use
- Headaches starting from the base of the skull
- Rounded shoulders and forward head posture

Prevention Strategies:

Hold your phone higher: Bring the screen to eye level rather than dropping your head down. Use a phone stand when watching videos.

Follow the 20-20 rule: Every 20 minutes of phone use, take a 20-second break to look ahead and stretch your neck.

Exercises for Relief:

- Chin Tucks: Sit tall, pull your chin straight back (creating a "double chin"). Hold 5 seconds, repeat 10 times. This strengthens deep neck flexors.

- Neck Side Stretches: Tilt your ear toward your shoulder, hold 20 seconds each side. Do not force — let gravity do the work.

- Shoulder Blade Squeezes: Pull shoulders back and squeeze your shoulder blades together. Hold 5 seconds, repeat 10 times.

- Thoracic Extension: Sit in a chair, clasp hands behind your head, and gently arch your upper back over the chair back. This counters the forward rounding.

Do these exercises 2-3 times daily. If neck pain persists or you feel numbness in your arms, seek professional evaluation.`,
    fullContentHi: `"टेक्स्ट नेक" आज सबसे आम समस्याओं में से एक बन गई है, खासकर युवा रोगियों में। सामान्य स्थिति में आपके सिर का वजन लगभग 5 किलो होता है, लेकिन 45 डिग्री आगे झुकने पर गर्दन पर 22 किलो के बराबर बल पड़ता है।

टेक्स्ट नेक के संकेत:
- गर्दन और ऊपरी पीठ में हल्का दर्द
- फोन उपयोग के बाद ऊपर देखने पर अकड़न
- खोपड़ी के आधार से शुरू होने वाला सिरदर्द
- गोल कंधे और आगे झुका हुआ सिर

रोकथाम के उपाय:

फोन ऊंचा रखें: सिर नीचे गिराने के बजाय स्क्रीन को आंखों के स्तर पर लाएं। वीडियो देखते समय फोन स्टैंड का उपयोग करें।

20-20 नियम: हर 20 मिनट फोन उपयोग के बाद 20 सेकंड का ब्रेक लें और गर्दन स्ट्रेच करें।

राहत के लिए व्यायाम:

- चिन टक: सीधे बैठें, ठुड्डी को सीधे पीछे खींचें। 5 सेकंड रुकें, 10 बार दोहराएं। यह गहरी गर्दन की मांसपेशियों को मजबूत करता है।

- गर्दन साइड स्ट्रेच: कान को कंधे की ओर झुकाएं, हर तरफ 20 सेकंड। जबरदस्ती न करें।

- शोल्डर ब्लेड स्क्वीज: कंधों को पीछे खींचें और स्कैपुला को एक साथ दबाएं। 5 सेकंड, 10 बार।

- थोरैसिक एक्सटेंशन: कुर्सी पर बैठकर सिर के पीछे हाथ जोड़ें और ऊपरी पीठ को कुर्सी की पीठ पर हल्के से पीछे मोड़ें।

ये व्यायाम दिन में 2-3 बार करें। यदि गर्दन दर्द बना रहे या हाथों में सुन्नपन हो, तो पेशेवर मूल्यांकन कराएं।`,
  },
  {
    title: "When to Visit a Physiotherapist",
    titleHi: "फिजियोथेरेपिस्ट कब दिखाएं",
    category: "General",
    categoryHi: "सामान्य",
    img: "/hero-physio-treatment.webp",
    readTime: "4 min",
    summary: "See a physiotherapist if pain lasts more than 2 weeks, daily activities become difficult, you have numbness or tingling, or post-surgery rehabilitation is needed. Early intervention leads to faster recovery.",
    summaryHi: "फिजियोथेरेपिस्ट दिखाएं यदि दर्द 2 सप्ताह से अधिक रहे, दैनिक गतिविधियां कठिन हों, सुन्नपन या झुनझुनी हो, या सर्जरी के बाद पुनर्वास की आवश्यकता हो। शुरुआती हस्तक्षेप से तेजी से रिकवरी होती है।",
    fullContent: `Many people wait too long before seeking physiotherapy, often making their condition harder to treat. Here's how to know when it's time to see a professional:

You Should Visit a Physiotherapist When:

1. Pain lasts more than 2 weeks: Acute pain that doesn't improve with rest and home remedies likely needs professional assessment. Waiting longer can allow compensatory patterns to develop.

2. Daily activities are affected: If you're struggling to climb stairs, lift objects, sit comfortably, or sleep through the night because of pain, it's time to get help.

3. You feel numbness or tingling: These are nerve-related symptoms that require proper diagnosis. They could indicate disc issues, nerve compression, or other conditions that need targeted treatment.

4. After surgery or injury: Post-surgical rehabilitation is crucial for full recovery. A physiotherapist ensures proper healing, restores range of motion, and rebuilds strength safely.

5. Recurring pain episodes: If the same area keeps flaring up — even if it settles on its own — there's likely an underlying weakness or imbalance that needs addressing.

6. Reduced range of motion: If you can't turn your neck fully, raise your arm overhead, or bend down like you used to, early intervention prevents the restriction from becoming permanent.

What to Expect at Your First Visit:
- Detailed assessment of your condition and movement patterns
- Identification of the root cause, not just symptom management
- A personalized treatment plan with clear goals
- Hands-on therapy combined with exercises you can do at home

At Narayana Physio Care, we believe in treating the cause, not just the pain. Early physiotherapy intervention typically means fewer sessions needed and faster return to normal life.`,
    fullContentHi: `बहुत से लोग फिजियोथेरेपी लेने से पहले बहुत देर तक इंतजार करते हैं, जो अक्सर उनकी स्थिति को और कठिन बना देता है। यहां जानें कब पेशेवर से मिलना चाहिए:

आपको फिजियोथेरेपिस्ट से मिलना चाहिए जब:

1. दर्द 2 सप्ताह से अधिक रहे: आराम और घरेलू उपचार से सुधार न हो तो पेशेवर मूल्यांकन जरूरी है। अधिक इंतजार से शरीर गलत पैटर्न अपना सकता है।

2. दैनिक गतिविधियां प्रभावित हों: सीढ़ियां चढ़ने, वजन उठाने, आराम से बैठने या रात भर सोने में कठिनाई हो तो मदद लें।

3. सुन्नपन या झुनझुनी हो: ये तंत्रिका संबंधी लक्षण हैं जिनके लिए उचित निदान आवश्यक है। ये डिस्क समस्या या तंत्रिका दबाव का संकेत हो सकते हैं।

4. सर्जरी या चोट के बाद: पोस्ट-सर्जिकल पुनर्वास पूर्ण रिकवरी के लिए महत्वपूर्ण है। फिजियोथेरेपिस्ट सही हीलिंग, गति की बहाली और शक्ति का पुनर्निर्माण सुनिश्चित करता है।

5. बार-बार दर्द: यदि एक ही जगह बार-बार समस्या आती है — भले ही अपने आप ठीक हो जाए — तो कोई अंतर्निहित कमजोरी या असंतुलन है।

6. गति में कमी: यदि आप पूरी तरह गर्दन नहीं घुमा सकते, हाथ ऊपर नहीं उठा सकते, या पहले जैसे झुक नहीं सकते तो शीघ्र हस्तक्षेप प्रतिबंध को स्थायी होने से रोकता है।

पहली विजिट में क्या उम्मीद करें:
- आपकी स्थिति और गतिविधि पैटर्न का विस्तृत मूल्यांकन
- मूल कारण की पहचान, सिर्फ लक्षण प्रबंधन नहीं
- स्पष्ट लक्ष्यों के साथ व्यक्तिगत उपचार योजना
- हाथों से थेरेपी और घर पर करने योग्य व्यायाम

नारायण फिजियो केयर में हम दर्द नहीं, कारण का इलाज करते हैं। शुरुआती फिजियोथेरेपी का मतलब है कम सत्र और सामान्य जीवन में तेजी से वापसी।`,
  },
  {
    title: "Shoulder Stretches for Desk Workers",
    titleHi: "डेस्क वर्कर्स के लिए कंधे की स्ट्रेचिंग",
    category: "Shoulder",
    categoryHi: "कंधा",
    img: "/service-mfr-therapy.webp",
    readTime: "3 min",
    summary: "Relieve shoulder tension with doorway stretches, cross-body arm pulls, and shoulder blade squeezes. Do these every 2 hours during desk work. Maintain an ergonomic desk setup to prevent recurring issues.",
    summaryHi: "दरवाजे पर स्ट्रेच, क्रॉस-बॉडी आर्म पुल और शोल्डर ब्लेड स्क्वीज़ से कंधे का तनाव दूर करें। डेस्क वर्क के दौरान हर 2 घंटे ये करें। बार-बार होने वाली समस्याओं को रोकने के लिए एर्गोनोमिक सेटअप बनाएं।",
    fullContent: `Hours of desk work creates a predictable pattern: shoulders creep up toward your ears, your upper back rounds forward, and the muscles between your shoulder blades weaken. This leads to chronic tension, stiffness, and eventually pain.

Here's a quick routine you can do at your desk every 2 hours:

1. Doorway Chest Stretch: Stand in a doorway with arms at 90 degrees on the frame. Step one foot forward and lean gently until you feel a stretch across your chest and front shoulders. Hold 30 seconds. This opens up the tight pectoral muscles that pull shoulders forward.

2. Cross-Body Arm Pull: Bring one arm across your chest and gently pull it closer with the other hand. Hold 20 seconds each side. Targets the posterior shoulder and helps release rotator cuff tension.

3. Shoulder Blade Squeezes: Sit tall, squeeze your shoulder blades together as if holding a pencil between them. Hold 5 seconds, release. Repeat 15 times. Strengthens the mid-back muscles that maintain good posture.

4. Overhead Reach: Interlace your fingers and push your palms toward the ceiling. Lean slightly to each side for a lateral stretch. Hold 15 seconds each direction.

5. Neck and Trap Release: Drop one ear toward your shoulder. For a deeper stretch, gently place your hand on top of your head (don't pull). Hold 20 seconds each side.

Desk Setup Tips:
- Keyboard and mouse at elbow height to avoid shoulder shrugging
- Monitor at arm's length and eye level
- Chair armrests that support forearms without pushing shoulders up
- Take micro-breaks to shake out your arms every 30 minutes

Consistency matters more than duration. Two minutes every two hours is more effective than a 20-minute stretch session once a day.`,
    fullContentHi: `घंटों डेस्क पर काम करने से एक पूर्वानुमानित पैटर्न बनता है: कंधे कानों की ओर ऊपर उठते हैं, ऊपरी पीठ आगे झुकती है, और कंधे की हड्डियों के बीच की मांसपेशियां कमजोर होती हैं।

यहां एक त्वरित रूटीन है जो आप हर 2 घंटे में डेस्क पर कर सकते हैं:

1. दरवाजे पर छाती की स्ट्रेच: दरवाजे में 90 डिग्री पर हाथ रखकर खड़े हों। एक पैर आगे रखें और हल्के से झुकें जब तक छाती में खिंचाव महसूस न हो। 30 सेकंड। यह तंग पेक्टोरल मांसपेशियों को खोलता है।

2. क्रॉस-बॉडी आर्म पुल: एक हाथ छाती के आर-पार लाएं और दूसरे हाथ से हल्के से खींचें। हर तरफ 20 सेकंड। पीछे के कंधे और रोटेटर कफ तनाव को दूर करता है।

3. शोल्डर ब्लेड स्क्वीज: सीधे बैठें, स्कैपुला को ऐसे दबाएं जैसे बीच में पेंसिल पकड़ रहे हों। 5 सेकंड, 15 बार। मध्य-पीठ की मांसपेशियों को मजबूत करता है।

4. ओवरहेड रीच: उंगलियां फंसाकर हथेलियों को छत की ओर धकेलें। हर तरफ हल्के से झुकें। 15 सेकंड प्रत्येक दिशा।

5. गर्दन और ट्रैप रिलीज: एक कान कंधे की ओर गिराएं। गहरी स्ट्रेच के लिए हल्के से सिर पर हाथ रखें (खींचें नहीं)। हर तरफ 20 सेकंड।

डेस्क सेटअप सुझाव:
- कीबोर्ड और माउस कोहनी की ऊंचाई पर
- मॉनिटर हाथ की दूरी और आंखों के स्तर पर
- कुर्सी के आर्मरेस्ट जो कंधों को ऊपर न धकेलें
- हर 30 मिनट में हाथ हिलाने के लिए माइक्रो-ब्रेक

निरंतरता अवधि से अधिक महत्वपूर्ण है। हर दो घंटे में दो मिनट, दिन में एक बार 20 मिनट से अधिक प्रभावी है।`,
  },
]

function TipCard({ tip, lang, isExpanded, onToggle }: { tip: typeof tips[0]; lang: string; isExpanded: boolean; onToggle: () => void }) {
  const title = lang === "hi" ? tip.titleHi : tip.title
  const summary = lang === "hi" ? tip.summaryHi : tip.summary
  const fullContent = lang === "hi" ? tip.fullContentHi : tip.fullContent

  return (
    <Card className="group overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img
          src={tip.img}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-[10px]">{lang === "hi" ? tip.categoryHi : tip.category}</Badge>
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            <Clock className="h-2.5 w-2.5" /> {tip.readTime}
          </span>
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-2 text-xs text-muted-foreground">
          {summary}
        </p>
        {isExpanded && (
          <div className="mt-4 text-xs text-muted-foreground whitespace-pre-line border-t pt-4 leading-relaxed">
            {fullContent}
          </div>
        )}
        <button
          onClick={onToggle}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline cursor-pointer"
        >
          {isExpanded
            ? (lang === "hi" ? "कम पढ़ें" : "Show Less")
            : (lang === "hi" ? "पूरा पढ़ें" : "Read More")
          }
          {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>
      </CardContent>
    </Card>
  )
}

export function TipsPage() {
  const { t, lang } = useI18n()
  const [expandedTips, setExpandedTips] = useState<Set<number>>(new Set())

  function toggleTip(index: number) {
    setExpandedTips((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <>
      <Helmet>
        <title>{t("seo.tipsTitle")}</title>
        <meta name="description" content={t("seo.tipsDesc")} />
        <meta name="keywords" content="physiotherapy exercises, back pain home remedies, knee strengthening exercises, posture correction tips, neck pain relief, shoulder stretches desk workers, when to see physiotherapist, physiotherapy guidance Gurugram" />
        <meta property="og:title" content={t("seo.tipsTitle")} />
        <meta property="og:description" content={t("seo.tipsDesc")} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://narayana-physiocare2.prototype-web.site/images/narayana_physio_care_preview.jpg" />
        <link rel="canonical" href="https://narayana-physiocare2.prototype-web.site/tips" />
      </Helmet>

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Badge variant="secondary" className="mb-3">{t("clinic.name")}</Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{t("section.tips")}</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">{t("section.tipsSubtitle")}</p>
        </div>
      </section>

      {/* Featured Tip */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-56 md:h-72">
                <img
                  src={tips[0].img}
                  alt={lang === "hi" ? tips[0].titleHi : tips[0].title}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <CardContent className="flex flex-col justify-center p-6">
                <Badge variant="secondary" className="w-fit mb-3">{lang === "hi" ? "विशेष लेख" : "Featured"}</Badge>
                <h2 className="text-xl font-bold">{lang === "hi" ? tips[0].titleHi : tips[0].title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {lang === "hi" ? tips[0].summaryHi : tips[0].summary}
                </p>
                {expandedTips.has(-1) && (
                  <div className="mt-4 text-sm text-muted-foreground whitespace-pre-line border-t pt-4 leading-relaxed">
                    {lang === "hi" ? tips[0].fullContentHi : tips[0].fullContent}
                  </div>
                )}
                <button
                  onClick={() => toggleTip(-1)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline cursor-pointer"
                >
                  {expandedTips.has(-1)
                    ? (lang === "hi" ? "कम पढ़ें" : "Show Less")
                    : (lang === "hi" ? "पूरा पढ़ें" : "Read More")
                  }
                  {expandedTips.has(-1) ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {tips[0].readTime}</span>
                  <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {lang === "hi" ? tips[0].categoryHi : tips[0].category}</span>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Tips */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            title={lang === "hi" ? "सभी स्वास्थ्य सुझाव" : "All Health Tips"}
            subtitle={lang === "hi" ? "अपने शारीरिक स्वास्थ्य को बेहतर बनाने के लिए पढ़ें" : "Read to improve your physical health"}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, i) => (
              <TipCard
                key={i}
                tip={tip}
                lang={lang}
                isExpanded={expandedTips.has(i)}
                onToggle={() => toggleTip(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-xl font-bold md:text-2xl">
            {lang === "hi" ? "व्यक्तिगत व्यायाम मार्गदर्शन चाहिए?" : "Need personalized exercise guidance?"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "hi"
              ? "डॉ. अंजू से अपनी स्थिति के लिए अनुकूलित व्यायाम योजना प्राप्त करें"
              : "Get a customized exercise plan for your condition from Dr. Anju"}
          </p>
          <Button
            className="mt-6 gap-2"
            onClick={() =>
              openWhatsApp(
                lang === "hi"
                  ? "नमस्ते, मुझे अपनी स्थिति के लिए व्यायाम मार्गदर्शन चाहिए।"
                  : "Hello, I need exercise guidance for my condition."
              )
            }
          >
            {t("cta.whatsappUs")} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
