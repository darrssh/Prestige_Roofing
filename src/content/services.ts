/**
 * Service catalogue — preserves the original website's service descriptions,
 * headings, process steps and FAQs (collected September 2026 from
 * prestigeroofingsolutions.com.au).
 *
 * NOTE — known source inconsistency (preserved, flagged for client approval):
 * in the original navigation the labels for `/guttering/` and
 * `/guttering-guard/` are swapped. The slugs below keep the ORIGINAL URLs;
 * each entry carries the content that its URL actually served.
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSub: string;
  intro: string[];
  highlights: string[];
  extraHeading?: string;
  extraBody?: string[];
  process?: { title: string; body: string }[];
  faqs: ServiceFaq[];
  image: string;
  imageAlt: string;
}

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const services: ServiceContent[] = [
  {
    slug: "roof-restoration",
    title: "Roof Restoration",
    metaTitle: "Roof Restoration Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Premium roof restoration in Sydney: inspection, cleaning, repairs, sealing and protective coating to add longevity and property value. Call +61 407 462 014.",
    heroHeading: "Roof Restoration",
    heroSub:
      "With the best roof restoration company in Sydney, you will enjoy premium quality roof restoration services. We do what others can't even imagine.",
    intro: [
      "From adding longevity to your roof to increasing the property value — you can do everything possible with Prestige Roofing Solutions, the best roofing company in Sydney.",
      "The process of roof restoration involves repairing, cleaning, and refinishing a roof. A roof restoration can cover an entire roof, or part of a building that has been damaged by weather, fire, or other causes, and it can also include the attention gutters, downpipes, gables and eaves need.",
    ],
    highlights: [
      "Full roof evaluation before any work begins",
      "High-pressure clean removing moss, lichen and debris",
      "Repair of damaged tiles, sheets, flashing and leaks",
      "Application of sealer and protective roof membrane",
      "Final inspection and scheduled ongoing maintenance",
    ],
    extraHeading: "What steps are involved in our restoration?",
    extraBody: [
      "Restoration work is done according to a proper procedure: arrange an evaluation, clean the roof, fix any damage, pressure clean, apply a sealer, apply the roof membrane, run a final inspection, and set up regular maintenance.",
      "Roof membranes also help increase the value of your property while improving its street appeal. As a guide, roof membranes typically take 24–48 hours to dry completely, depending on the product and conditions.",
    ],
    faqs: [
      {
        q: "When should roof restoration be done?",
        a: "Consider the property's condition, your budget, the time commitment, the location and the availability of resources. If the roof is structurally sound but weathered, restoration is usually the right call; if damage is widespread, a professional inspection will tell you whether repair, restoration or replacement makes sense.",
      },
      {
        q: "What does a roof restoration include?",
        a: "Evaluation, cleaning, repairs to tiles or sheets, pressure cleaning, sealing, application of a protective membrane, a final inspection and a plan for regular maintenance.",
      },
      {
        q: "How long does the protective coating take to dry?",
        a: "Roof membranes commonly take 24–48 hours to dry completely, though this varies with the product and weather. We factor drying time into every job plan.",
      },
    ],
    image: img("photo-1568605114967-8130f3a36994"),
    imageAlt: "Restored suburban tile roof in Sydney",
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    metaTitle: "Roof Repairs Services Sydney | Prestige Roofing Solutions",
    metaDescription:
      "All sorts of roof repairs on tile and Colorbond roofs in Sydney — leak fixes, tile replacement, flashing and more. Call +61 407 462 014.",
    heroHeading: "Roof Repairs",
    heroSub:
      "We do all sort of roof repairs on both tile and colorbond roofs.",
    intro: [
      "Boost the look, feel, and strength of your roof. The most valuable part of your home structure should be maintained well — otherwise, soon you have to enable a replacement service. We can make stronger whatever you have.",
      "The roof repair service is not a headache if you choose the right service provider. On a regular basis, you need to inspect your roof and do the needful repairs in order to prevent bigger damages. Even the best quality materials installed with advanced technologies can develop issues due to weather and errors in the maintenance process.",
      "Professionals like us help you identify all underlying issues and suggest the best solutions accordingly — from a roof leak fix to enhancing energy efficiency, we can do more than you think.",
    ],
    highlights: [
      "Tile and Colorbond roof repairs",
      "Roof leak detection and fixes",
      "Flashing, valley and gutter repairs",
      "Licensed, insured and experienced roof repairers",
      "Advanced tools and technologies on every job",
    ],
    extraHeading: "Why choose Prestige Roofing Solutions?",
    extraBody: [
      "We serve every client better. No matter how big or small the project is, you will get the same amount of care and expertise from us. We follow a systematic way to serve all clients so that we can achieve 100% customer satisfaction.",
    ],
    process: [
      {
        title: "Requirement discussion",
        body: "We listen first — your issues, your roof type, your priorities — then inspect the roof.",
      },
      {
        title: "Project planning",
        body: "You receive a clear written plan and a fair quote before any work begins.",
      },
      {
        title: "Performing the task with sincerity",
        body: "Our repairers carry out the work with care, using advanced tools and proven methods.",
      },
      {
        title: "Feedback collection and improvements",
        body: "We check the finished work with you and act on your feedback.",
      },
    ],
    faqs: [
      {
        q: "What are the most common repair problems with roofs in Sydney?",
        a: "Damage caused by weather, birds and insects, tile damage, hail damage, and roofing concerns such as leaks and collapses.",
      },
      {
        q: "What are the different types of roof repair in Sydney?",
        a: "Common types include general roof repairs, guttering work, leak detection, and repairs around windows and penetrations.",
      },
      {
        q: "What are the tips for safe roof repair?",
        a: "Taking precautions is essential: wear a helmet while working on the rooftop, use a ladder or other sturdy support to ascend safely, and follow proper procedures for roof repair. If you don't feel comfortable, seek professional help.",
      },
      {
        q: "What is the correct procedure for roof repair?",
        a: "Seek professional help if you don't feel comfortable repairing the roof yourself — a skilled contractor fixes your roof more efficiently and safely. Follow all instructions provided by the contractor, including those for personal safety and protection from wind and rain, and make sure all materials used in repairs are adequately cleaned before they go back onto the roof.",
      },
    ],
    image: img("photo-1541888946425-d81bb19240f5"),
    imageAlt: "Roof repairers at work on a Sydney home",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    metaTitle: "Roof Replacement Services Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Best roof replacement services in Sydney, Australia — expert re-roofing without emptying your pocket. Call +61 407 462 014.",
    heroHeading: "Roof Replacement",
    heroSub:
      "Are you looking for best roof replacement services in Sydney, Australia? Look no further — Prestige Roofing Solutions is here for you.",
    intro: [
      "Are you tired of the roof repairing expenses? If yes, then you are not alone. Maybe the built quality, the design, or the material your previous contractor used is not paying you off in the way you want. But you should not worry — Prestige Roofing Solutions is here to make you enjoy the best roof replacement services in Sydney, Australia without making your pocket empty.",
      "Roof replacement is a tough task and that's why you should choose only expert professionals. With your roof, you cannot do any experiment — and that's why you should not try to do it by yourself or let an amateur do it for you.",
      "If your existing roof is having many complications, it's the best time to consult with a roofing expert like us. From repairing a damp roof to improving the existing gutter quality — we do the best thing to keep your roof in its best condition for a long time.",
    ],
    highlights: [
      "Tile-to-tile, tile-to-Colorbond and Colorbond re-roofing",
      "Damp, damaged and end-of-life roof replacement",
      "Gutter and flashing upgrades included",
      "Expert professionals — no experiments with your roof",
      "Fair pricing without compromising quality",
    ],
    faqs: [
      {
        q: "How long will it take to replace a roof?",
        a: "It depends on factors such as the size and shape of your roof and its age, and weather conditions can make the process longer or shorter. In most cases, though, 4–5 days should be enough to get your roof back in order.",
      },
      {
        q: "What are the top reasons people replace roofs in Sydney?",
        a: "One of the most common reasons is the condition of the roof. Storms that blow through Sydney can take a heavy toll, and a lack of maintenance can turn leaks, damage and rot into a full replacement. Many roofs are also defective or damaged from poor installation and should be repaired or replaced depending on the cause.",
      },
      {
        q: "How much will roof replacement cost in Sydney?",
        a: "Roof replacement cost varies individually depending on the size, pitch, and height of the roof. Contact us for an on-site inspection and a written quote.",
      },
      {
        q: "What are the benefits of roof replacement?",
        a: "A newly installed roof is a very effective way to refresh your home. It can enhance the appearance of your home or business, save on ongoing repair costs, and prevent dangerous rainwater from reaching your flooring or other vital parts of your house.",
      },
      {
        q: "Should I do a roof replacement if I have a water infiltration issue?",
        a: "A leaking roof might not be a big problem if you installed a new roof a few years ago — missing tiles, cracked edging or minor leaks can usually be repaired. However, an older roof with multiple leaks or widespread damage may be more challenging to repair, and calling a professional roofing company specialising in roof replacement is the more likely option.",
      },
    ],
    image: img("photo-1600585154340-be6161a56a0c"),
    imageAlt: "Newly replaced modern roof on a Sydney home",
  },
  {
    slug: "roof-painting-sydney",
    title: "Roof Painting",
    metaTitle: "Roof Painting Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Best roof painting in Sydney — restore your roof's appearance, add durability and protection from sun, rain and moisture. Call +61 407 462 014.",
    heroHeading: "Roof Painting",
    heroSub:
      "Are you planning to bring back the charms of your roof? Then you have decided it right — paint it with the best roof painting in Sydney.",
    intro: [
      "We have amazing roof painting services to restore roof appearance, add durability, and prevent damages from sun, rain, moisture, and snow.",
      "Painting is the finishing step of a healthy roof: we clean, repair and prepare the surface first, then apply quality coatings suited to Sydney conditions so the result looks superb and lasts.",
    ],
    highlights: [
      "Full clean and preparation before painting",
      "Quality coatings suited to Sydney sun and rain",
      "Restored street appeal and property value",
      "Added durability against moisture and weathering",
      "Tile and metal roof painting",
    ],
    faqs: [
      {
        q: "Does roof painting prevent leaks?",
        a: "Paint alone doesn't fix leaks. Leaks come from cracked tiles, failed pointing, damaged flashing or worn seals — those must be repaired first. Painting then protects the repaired surface and helps prevent future weather damage. We always inspect and repair before we paint.",
      },
      {
        q: "What is the purpose of roof painting?",
        a: "Roof painting restores appearance, adds a protective layer against sun, rain and moisture, and extends the life of the roofing material — while lifting the look and value of the whole property.",
      },
      {
        q: "How long does roof painting last?",
        a: "Longevity depends on preparation, coating quality, roof material and exposure. A properly cleaned, repaired and coated roof holds its finish far longer than paint applied over dirt or damage — which is why preparation is most of our job.",
      },
    ],
    image: img("photo-1564013799919-ab600027ffc6"),
    imageAlt: "Freshly painted roof on a Sydney home at dusk",
  },
  {
    slug: "roof-wash",
    title: "Roof Wash",
    metaTitle: "Roof Wash Sydney | Roof Cleaning | Prestige Roofing Solutions",
    metaDescription:
      "Professional roof washing in Sydney — remove pollution, moss and fungus growth and restore your roof's look and durability. Call +61 407 462 014.",
    heroHeading: "Roof Wash",
    heroSub:
      "You need to wash your roof to protect it from damages caused by pollution, moss, fungus growth, and so on.",
    intro: [
      "We use the right, rather advanced set of washing tools and techniques for the best washing of your roof area. We have expertise in restoring both the look and durability of your home roof.",
      "Regular washing is the simplest form of roof maintenance: it clears the buildup that traps moisture against tiles and sheets, and it leaves the whole property looking cared for.",
    ],
    highlights: [
      "Removal of moss, lichen, fungus and pollutants",
      "Advanced washing tools and techniques",
      "Gentle on tiles and sheets, tough on buildup",
      "Restores look and durability together",
      "Ideal preparation for restoration or painting",
    ],
    faqs: [
      {
        q: "Why should I wash my roof?",
        a: "Pollution, moss and fungus growth trap moisture against the roofing material and slowly damage it. Washing removes that buildup, protecting the roof and restoring its appearance.",
      },
      {
        q: "Will pressure washing damage my roof?",
        a: "Used incorrectly, high pressure can damage tiles and coatings. We use the right tools and techniques for your roof type so the clean is thorough without harming the surface.",
      },
      {
        q: "How often should a roof be washed?",
        a: "It depends on surrounding trees, shade and coastal exposure. Most Sydney roofs benefit from a professional wash every few years, or before any restoration or painting work.",
      },
    ],
    image: img("photo-1523217582562-09d0def993a6"),
    imageAlt: "Cleaned residential roof in Sydney",
  },
  {
    slug: "tile-roof",
    title: "Tile Roof",
    metaTitle: "Tile Roof Installation & Repairs Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Expert tile roof installation and repairs in Sydney — any profile, any slope, with the best tiles. Durable, weather-resistant roofing. Call +61 407 462 014.",
    heroHeading: "Tile Roof",
    heroSub:
      "We are expert enough to install any profile of tiles on any slope of your roof with your dream perfection. We have the reach to the best tiles.",
    intro: [
      "Tile roof installation can be good for you if you are in search of durable, shiny, weather resistance solutions.",
      "From new tile installation to re-bedding and re-pointing ridge caps, cracked tile replacement and full tile restorations — our crews handle tile roofs of every age and profile across Sydney.",
    ],
    highlights: [
      "Any tile profile on any roof slope",
      "Access to quality tiles and matching profiles",
      "Re-bedding and re-pointing of ridge capping",
      "Cracked and slipped tile replacement",
      "Durable, weather-resistant results",
    ],
    faqs: [
      {
        q: "What are the advantages of a tile roof?",
        a: "Tile roofs are durable, weather resistant and keep their good looks for decades with the right maintenance. Damaged sections can usually be repaired tile-by-tile rather than replacing the whole roof.",
      },
      {
        q: "Can you match my existing tiles?",
        a: "In most cases, yes — we have reach to a wide range of tile profiles. For very old or discontinued profiles (including some terracotta and slate), we discuss realistic options and timeframes upfront.",
      },
      {
        q: "My ridge caps are cracking — what does that mean?",
        a: "Cracked or loose ridge capping usually means the bedding and pointing have aged. Re-bedding and re-pointing restores the roof's weather seal and is a standard part of our tile restoration work.",
      },
    ],
    image: img("photo-1570129477492-45c003edd2be"),
    imageAlt: "Sydney home with a quality tile roof",
  },
  {
    slug: "colorbond-roof",
    title: "Colorbond Roof",
    metaTitle: "Ironstone Colorbond Roof Sydney | Prestige Roofing Solutions",
    metaDescription:
      "A-grade Colorbond roofing in Sydney — Surfmist, Ironstone, cladding and full Colorbond installations. Call +61 407 462 014.",
    heroHeading: "Colorbond Roof",
    heroSub:
      "Install colorbond roofing and enjoy better home feelings.",
    intro: [
      "We are here to let you enjoy a wide range of colorbond roofing solutions. You can choose the color and profile you want and enjoy the flexibility that you have never imagined. We can enable a fast and efficient roof construction facility for our clients.",
      "At Prestige Roofing Solutions, we have expertise in Colorbond Surfmist roof, Ironstone Colorbond roof and Colorbond cladding, along with other roof restoration services. Enhancing the feel and look of your entire house depends on the roof — and we can make it look like a new one with our advanced roofing services.",
      "There are a lot of benefits of Colorbond roofing that homeowners cannot even imagine — from design flexibility to improved water collection. It's an easy-to-install roof work that does not require lots of money and time, yet the durability and other benefits are simply stunning. This lightweight solution doesn't need an expensive or complicated structure, and it offers fire protection, protection from environmental hazards, and is environment-friendly.",
    ],
    highlights: [
      "Colorbond Surfmist, Ironstone and full colour range",
      "Colorbond cladding",
      "Fast, efficient installation",
      "Design flexibility in colour and profile",
      "Lightweight, durable and environment-friendly",
    ],
    extraHeading: "Why should you choose Prestige Roofing Solutions?",
    extraBody: [
      "If you want to get the best quality roofing services in an inexpensive way with a transparent process, there's no better roofing contractor than Prestige Roofing Solutions. We have experts with years of first-hand knowledge. They are properly trained to satisfy the requirements of modern clients. They use advanced tools and technologies to counter problems in the best way. With us, you will simply enjoy a better definition of satisfaction.",
    ],
    faqs: [
      {
        q: "Why Colorbond roof in Sydney?",
        a: "Colorbond roofing is an excellent choice for homeowners in Sydney. It is durable, withstands harsh weather conditions, comes with a long lifespan, and offers a wide range of colours perfect for any home.",
      },
      {
        q: "How does Colorbond help to reduce water infiltration and leaks?",
        a: "Colorbond roofing is water-resistant, making it ideal for homes that experience a lot of rainfall. Its smooth surface helps water run off quickly and doesn't cause pooling or leaks in the home's interior.",
      },
      {
        q: "What colours are available in Colorbond roof?",
        a: "Colorbond roofing is available in a huge variety of colour options, so you can match your home's style perfectly — and with high-quality materials, you can be sure it will last for years.",
      },
      {
        q: "How many types of Colorbond roofing do you provide?",
        a: "We offer a wide range of options and profiles — from affordable options to more luxurious finishes. Contact us today to learn more about our services and how we can help make your home look beautiful.",
      },
    ],
    image: img("photo-1600596542815-ffad4c1539a9"),
    imageAlt: "Sydney home with a Colorbond metal roof",
  },
  {
    slug: "guttering-guard",
    title: "Guttering",
    metaTitle: "Guttering Services Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Excellent gutter services in Sydney — repairs, replacement and maintenance that protect your roof from dampness and water damage. Call +61 407 462 014.",
    heroHeading: "Guttering",
    heroSub:
      "We take good care of your gutters so that you can enjoy the longevity of the gutter system — free from frequent repair and damage expenses.",
    intro: [
      "An excellent gutter service can save your roof from dampness, water soaking, and a lot of other major damages that can make you pay hugely in the future.",
      "We service gutters across Sydney: clearing, re-fixing sagging runs, sealing leaking joints, replacing damaged sections and full gutter replacement where the system has reached the end of its life.",
    ],
    highlights: [
      "Gutter repairs, replacement and maintenance",
      "Leaking joints, sagging runs and downpipes fixed",
      "Protection against dampness and water soaking",
      "Correct fall and drainage capacity checked",
      "Fewer repair bills over the life of the system",
    ],
    faqs: [
      {
        q: "How do I know my gutters need attention?",
        a: "Overflowing in rain, visible sagging, peeling paint near eaves, damp patches on walls, or gutters pulling away from the fascia are all signs worth an inspection.",
      },
      {
        q: "Can damaged gutters harm my roof?",
        a: "Yes. Blocked or broken gutters push water back onto the roof and into eaves and walls, causing dampness, rot and far more expensive damage over time.",
      },
      {
        q: "Do you replace gutters as well as repair them?",
        a: "Both. Where a repair gives lasting results we repair; where the system is corroded or undersized we recommend replacement and quote it fairly.",
      },
    ],
    image: img("photo-1605146769289-440113cc3d00"),
    imageAlt: "Well-maintained gutters on a Sydney home",
  },
  {
    slug: "guttering",
    title: "Gutter Guards",
    metaTitle: "Gutter Guard Installation Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Gutter guard services in Sydney — keep your gutter system and roof healthy for years with expert installation and maintenance. Call +61 407 462 014.",
    heroHeading: "Gutter Guards",
    heroSub:
      "We are here to keep your gutter system and the roof healthy for years with our amazing gutter guard services and maintenance tips.",
    intro: [
      "We have the best toolsets, experts, and long working experience. We combine everything and make clients enjoy the best gutter guard services. We keep everything perfect for your roofing.",
      "Gutter guards cut the leaves and debris that block gutters and downpipes — meaning less cleaning, less overflow, and a roof drainage system that works when storms hit.",
    ],
    highlights: [
      "Quality gutter guard supply and installation",
      "Suited to tile and metal roofs",
      "Less gutter cleaning and fewer blockages",
      "Healthier gutters and longer roof life",
      "Maintenance tips included with every job",
    ],
    faqs: [
      {
        q: "Are gutter guards worth it?",
        a: "For homes near trees, yes — guards dramatically reduce leaf buildup, blockages and overflow, and cut how often gutters need manual cleaning.",
      },
      {
        q: "Do gutter guards suit both tile and metal roofs?",
        a: "Yes. We fit guard systems to suit your roof profile and gutter type, and we check the whole drainage path so water flows freely.",
      },
      {
        q: "Do I ever need to clean gutters with guards fitted?",
        a: "Guards reduce maintenance but don't eliminate it entirely. Fine debris can still settle over time, so an occasional check keeps everything performing — we include maintenance tips with every installation.",
      },
    ],
    image: img("photo-1512917774080-9991f1c4c750"),
    imageAlt: "Sydney home protected by quality gutter guards",
  },
  {
    slug: "skylights",
    title: "Skylights",
    metaTitle: "Skylight Installation Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Tailor-made skylight services in Sydney — energy efficiency, ventilation, natural light and more. Call +61 407 462 014.",
    heroHeading: "Skylights",
    heroSub:
      "Do you know roof skylights can bring you benefits like energy efficiency, ventilation, privacy, good health and relaxing mood, and better roof access?",
    intro: [
      "We can turn everything possible with our tailor-made skylights services for your roofing. Contact the best roofing company in Sydney now.",
      "From a single skylight over a dark hallway to multiple installations across a renovation, we cut, flash and seal each opening to keep your roof watertight while transforming the rooms below.",
    ],
    highlights: [
      "Tailor-made skylight supply and installation",
      "More natural light where windows aren't an option",
      "Ventilation options for roof spaces and bathrooms",
      "Professional flashing and waterproof sealing",
      "Suited to tile and metal roofs",
    ],
    faqs: [
      {
        q: "What are the benefits of roof skylights?",
        a: "Energy efficiency, ventilation, privacy, better mood and wellbeing from natural light, and improved roof access — all without sacrificing wall space.",
      },
      {
        q: "Will a skylight leak?",
        a: "A correctly installed and flashed skylight shouldn't leak. We take particular care with flashing and sealing, since the opening is only as good as its weatherproofing.",
      },
      {
        q: "Can skylights be fitted to my existing roof?",
        a: "In most cases, yes — on both tile and metal roofs. An on-site inspection confirms the best position, size and any structural considerations.",
      },
    ],
    image: img("photo-1600607687939-ce8a6c25118c"),
    imageAlt: "Bright interior lit by newly installed skylights",
  },
  {
    slug: "roof-ventilation",
    title: "Roof Ventilation",
    metaTitle: "Roof Ventilation Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Roof ventilation in Sydney — prevent dampness, heat buildup and roof cavity damage while keeping your home cooler. Call +61 407 462 014.",
    heroHeading: "Roof Ventilation",
    heroSub:
      "Your roof requires the right ventilation to prevent water dampness, temperature and roof cavity issues, sun damage, and so many other damages it can face.",
    intro: [
      "Roof ventilation keeps your house cooler in hot summers and saves you more money with minimal investment — provided by the best roof restoration company in Sydney.",
      "A roof cavity that can't breathe traps heat and moisture, quietly damaging timber, insulation and ceilings. Correctly placed vents let the cavity breathe the way it should.",
    ],
    highlights: [
      "Ventilation assessment for your roof cavity",
      "Whirlybirds, ridge and eave vent options",
      "Reduced heat buildup in summer",
      "Less moisture, dampness and mould risk",
      "Minimal investment for lasting savings",
    ],
    faqs: [
      {
        q: "Why does my roof need ventilation?",
        a: "Without airflow, roof cavities trap heat and moisture — leading to dampness, timber and insulation damage, and hotter living spaces. Ventilation lets heat and moist air escape.",
      },
      {
        q: "Will ventilation make my home cooler?",
        a: "Yes. A ventilated roof cavity stays significantly cooler in summer, which takes load off air conditioning and improves comfort upstairs.",
      },
      {
        q: "What ventilation options suit my roof?",
        a: "Options include whirlybirds, ridge vents and eave vents, depending on your roof type and shape. We assess the cavity and recommend what fits — with minimal investment.",
      },
    ],
    image: img("photo-1600047509807-ba8f99d2cdde"),
    imageAlt: "Ventilated modern roof in Sydney",
  },
  {
    slug: "modern-carport-pergola",
    title: "Modern Carport & Pergola",
    metaTitle: "Modern Carport & Pergola Sydney | Prestige Roofing Solutions",
    metaDescription:
      "Modern carport and pergola roofing in Sydney — add shade, greenery and street appeal to your home. Call +61 407 462 014.",
    heroHeading: "Modern Carport & Pergola",
    heroSub:
      "You can add more greenery to your roof area and enjoy an amazing view with our carport and pergola services. Today, it is an aesthetic choice.",
    intro: [
      "From blocking unpleasant views to adding an aesthetic appeal to your home, our carport and pergola services can do more wonders for your roof.",
      "Whether it's shelter for vehicles, a shaded entertaining area, or a green structure that softens the streetscape — we design and roof modern carports and pergolas to suit your home and Sydney conditions.",
    ],
    highlights: [
      "Modern carport design and roofing",
      "Pergolas for shade, greenery and entertaining",
      "Aesthetic appeal plus practical shelter",
      "Built to suit your home and block",
      "Quality roofing materials and finishes",
    ],
    faqs: [
      {
        q: "What can a carport or pergola add to my home?",
        a: "Practical shelter for vehicles and outdoor areas, plus real street appeal — a well-designed structure frames the home, blocks unpleasant views and creates usable shaded space.",
      },
      {
        q: "Do you handle both the structure and the roofing?",
        a: "Yes — we design and roof the structure as a complete job, so the roofing integrates properly with drainage and the look of your home.",
      },
      {
        q: "Can a pergola support greenery?",
        a: "Absolutely. Pergolas are ideal for climbing plants and green cover — tell us the look you're after and we'll factor support and durability into the design.",
      },
    ],
    image: img("photo-1580587771525-78b9dba3b914"),
    imageAlt: "Modern Sydney home with carport and outdoor living space",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
