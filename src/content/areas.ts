/**
 * Service areas — content preserved from the original `/area-we-serve/` page.
 *
 * NOTE — source inconsistency flagged for client approval: the original page
 * repeats the "North Sydney" section twice, word for word. It is preserved
 * here ONCE (deduplicated), which is noted in the README audit appendix.
 */

export interface ServiceArea {
  area: string;
  suburbs: string;
  body: string[];
}

export const areasIntro: string[] = [
  "Prestige Roofing Solutions is based in Doonside, but the work doesn't stop at the western suburbs. Our crews are out most weeks in the Hills Shire, the Inner West, North Sydney, Sutherland Shire, the lower Blue Mountains, and the Hawkesbury, doing roof restorations, repairs, painting, and guttering on everything from 1930s terraces to brand new Colorbond builds.",
  "The roof gets treated the same way no matter which council area it sits in: properly inspected, properly quoted, and fixed by someone who's licensed and insured to do the job.",
  "Below is a breakdown of the areas we cover most, what kind of roofs we typically see in each one, and the jobs local homeowners tend to call us about. If your suburb is listed below, what you read is a fair description of what we'd expect to find on your roof.",
];

export const serviceAreas: ServiceArea[] = [
  {
    area: "Hills Shire",
    suburbs: "Castle Hill · Baulkham Hills · Kellyville · Rouse Hill",
    body: [
      "Castle Hill, Baulkham Hills, Kellyville, Rouse Hill, and the rest of the Hills Shire keep us busy with a real mix of roof types. There's a lot of established tile roofing out this way — houses built in the 80s and 90s that are due for a restoration — alongside a growing number of newer Colorbond homes in the newer estates. Tile jobs usually mean re-bedding and re-pointing ridge capping, replacing cracked or slipped tiles, and applying a protective coating once everything's sound. Colorbond jobs are more about repairs to fixings, flashing, and gutters.",
      "If a Hills Shire roof hasn't been looked at in five or more years, a full inspection is worth booking even if nothing looks obviously wrong from the ground. Loose ridge caps and worn pointing don't always show themselves until a storm finds the gap.",
      "Hail is worth mentioning too, since parts of the Hills Shire cop it harder than other areas we cover. Tile roofs can crack in ways that aren't visible from the ground, and Colorbond sheeting can dent enough to affect drainage without looking obviously damaged from the street. If there's been a hailstorm through your area recently and you haven't had the roof checked, that's usually the first thing we'd recommend booking.",
    ],
  },
  {
    area: "Inner West",
    suburbs: "Leichhardt · Balmain · Newtown · Marrickville",
    body: [
      "Inner West work is a different job altogether. Leichhardt, Balmain, Newtown, Marrickville, and the surrounding suburbs are full of older terraces and character homes where the roof has history — narrow access, shared walls, and original detailing that a straight rip-and-replace job would ruin. Restoration is almost always the better call here over a full re-roof, and it costs a lot less too.",
      "That means careful work: re-pointing ridge capping by hand, repairing valleys and box gutters built to standards nobody uses anymore, matching old terracotta or slate where possible, and sorting out fascia and gutter runs patched many times by previous owners. Tight terrace access is normal for us. If you've got a heritage overlay on the property, we'll factor that into how we approach the job as well.",
      "Slate roofs come up more often in the Inner West than anywhere else we work, and they need a different skill set to tile or metal. Sourcing matching slate for a small repair can take longer than the repair itself, so we'll talk through realistic timeframes upfront rather than promise a same-week fix on something that depends on material availability.",
    ],
  },
  {
    area: "North Sydney & Lower North Shore",
    suburbs: "North Sydney · Crows Nest · Surrounds",
    body: [
      "North Sydney, Crows Nest, and the surrounding Lower North Shore throw a bit of everything at us: apartment blocks, townhouses, and standalone homes, often on the same street. Strata roofs need sign-off and scheduling worked around a body corporate, while a standalone home gives more flexibility on timing and materials.",
      "We do roof repairs, painting, and restoration across the area, plus guttering and skylight installation for owners wanting more natural light or better attic ventilation. Skylights are a common request here, particularly in renovated terraces and townhouses where adding a window isn't an option but a roof opening is.",
      "Strata approval is the part most owners underestimate — getting sign-off can take longer than the physical work. If you're on a body corporate, start that conversation early and get a written quote from us to take to the meeting. We're used to providing the documentation strata managers ask for: scope of works, timeframes and insurance details.",
    ],
  },
  {
    area: "Sutherland Shire",
    suburbs: "Cronulla · Miranda · Sylvania",
    body: [
      "Cronulla, Miranda, Sylvania, and the rest of the Sutherland Shire come with one thing most other areas don't deal with as much: salt air. Roofs closer to the coast weather faster than roofs fifteen kilometres inland. Fixings corrode sooner, coatings break down faster, and metal roofing in particular needs a closer eye kept on it.",
      "Our Sutherland Shire jobs are mostly roof restoration, roof cleaning, and gutter replacement, and we'll usually recommend a protective coating on tile roofs here even if the tiles themselves are still structurally fine, since it buys years of extra life against coastal exposure. If you're within a few kilometres of the water, mention it when you call — it changes what we look for during inspection.",
      "Metal roofing in the Sutherland Shire needs a shorter recoat cycle than the same roof would need further inland, and screws and fixings are usually the first thing to go rather than the sheeting itself.",
    ],
  },
  {
    area: "Blue Mountains",
    suburbs: "Wentworth Falls · Lower Blue Mountains",
    body: [
      "Wentworth Falls and the surrounding lower Blue Mountains suburbs deal with a climate most of Sydney doesn't: colder winters, more rainfall, and roofs that need to shed water properly. Ventilation matters more here too — a roof cavity that doesn't breathe properly in a cooler, wetter climate ends up with moisture problems that don't show up in drier parts of Sydney until they're already serious.",
      "We do roof repair, restoration, and painting for Blue Mountains properties, and we pay particular attention to guttering capacity and roof ventilation on these jobs, since undersized gutters and blocked airflow cause more damage here than almost anywhere else on our list.",
      "Timber and older fibro roofing still turns up on some older Blue Mountains homes, and both need a different approach to inspection and repair than a standard tile or Colorbond job. If your property has either, mention it when you book so we can plan the visit properly.",
    ],
  },
  {
    area: "Richmond",
    suburbs: "Richmond · Hawkesbury surrounds",
    body: [
      "Richmond has a genuine mix of housing: long-established homes that need a roof repair or full restoration, and newer builds where owners are after Colorbond installation or a gutter upgrade. Older Richmond roofs often have accumulated small issues — loose flashing around chimneys and vents, sealant that's dried out and cracked, gutters sagged slightly out of fall — none urgent on their own but adding up over time.",
      "We'll do a straightforward on-site inspection and give you a quote before anything gets touched, so there's no guessing at cost before we've actually seen the roof.",
      "Richmond properties on larger blocks sometimes have outbuildings — sheds, garages, granny flats — that get overlooked. If you want those included in the same visit, let us know when you book and we'll quote the whole property rather than just the main house.",
    ],
  },
  {
    area: "Windsor",
    suburbs: "Windsor · Wider Hawkesbury",
    body: [
      "Windsor and the wider Hawkesbury region are similar to Richmond in a lot of ways — older housing stock, a mix of tile and metal roofing, and homes where a full roof health check tends to turn up more than the homeowner expected. Loose flashing, worn sealant around penetrations, and gutter joints starting to separate are the usual suspects.",
      "Roof repairs, restoration, painting, and guttering are all services we provide regularly out in Windsor, and we know the area well enough to give you a realistic idea of what's involved before we've even started.",
      "Flood history is a factor for some Hawkesbury properties, mainly around drainage and gutter capacity rather than the roof structure itself. If your property has had water issues in the past, flag it when you book so we can check gutter fall and downpipe sizing along with the usual roof inspection.",
    ],
  },
];

export const areasFaqs = [
  {
    q: "Do you charge extra for jobs outside Doonside?",
    a: "Travel gets factored into the quote based on distance and the size of the job — it isn't tacked on as a flat surcharge. Send us your address and we'll give you a straightforward price with nothing hidden in it.",
  },
  {
    q: "How quickly can you get to my property?",
    a: "In most areas we service, we can arrange an inspection within a few days of your call. Leaks and storm damage jump the queue, since those problems get worse the longer they sit.",
  },
  {
    q: "Are you licensed to work in all these areas?",
    a: "Yes. Prestige Roofing Solutions is fully licensed and insured to operate across New South Wales — licensing isn't a barrier anywhere on this list.",
  },
  {
    q: "Do you service apartment buildings or only houses?",
    a: "Both. Apartment roofing and standalone home roofing aren't the same job — different access, different approvals, sometimes different materials — so let us know what kind of property you've got when you get in touch and we'll scope it properly.",
  },
  {
    q: "What suburbs are closest to your typical response time?",
    a: "Doonside and the surrounding Hills Shire and western Sydney suburbs are usually the fastest for us to reach, often within a day or two for a standard inspection. Areas further out like the Blue Mountains or Hawkesbury may take a little longer to schedule, though urgent jobs are still prioritised regardless of location.",
  },
];
