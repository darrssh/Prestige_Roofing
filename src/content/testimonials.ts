/**
 * Testimonials — wording and names preserved verbatim from the original
 * website (homepage + testimonials page). No reviews invented.
 */

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  source: "website" | "google";
}

/** On-site testimonials from prestigeroofingsolutions.com.au */
export const siteTestimonials: Testimonial[] = [
  {
    name: "Stef",
    role: "Client",
    quote:
      "Over the years, we were facing many roofing issues like dampness, lost appearance, and so on. But the Prestige Roofing Solutions has saved us from everything. They do exactly what they claim during quotation for their clients. Today, I am enjoying a first-class roof quality with better ventilation. Everyone gives me compliments on my roof quality and look. I must say, this Ajay is really good and has in-depth knowledge about all roofing issues and solutions.",
    source: "website",
  },
  {
    name: "Andrew",
    role: "Client",
    quote:
      "The roof is the main important part of any house and I was having issues in this area. I was so depressed and feeling helpless. Then I found the Prestige roofing solutions online and was contacted instantly. They carefully listened to all my issues and offered me various solutions and also helped me to choose the best one. Thankfully today I am enjoying the best quality roofing solutions and passing days with no worries about the roof. They are good and services what they have claimed. I am recommending this company to people in need for the best roofing service.",
    source: "website",
  },
  {
    name: "Ron",
    role: "Customer",
    quote:
      "The gutter system around the roof was not that good and during the monsoon, I used to face a lot of issues. Then one of my neighbours suggested to me to tap on best roofing company in Sydney — Prestige roofing solutions. Today, I am enjoying a worry-free monsoon and the roof quality has been restored. The longevity and the new look of my roof are adding more aesthetic value to my entire property. And that was really impressive for me.",
    source: "website",
  },
  {
    name: "Sahil",
    role: "Customer",
    quote:
      "I had the pleasure of working with Prestige Roofing Solution for a complete roof replacement in Sydney, and I couldn't be more pleased with the results. Their team of roofing specialists provided impeccable service, transforming my home into something truly remarkable. I'm overjoyed with the outcome. Their solutions were brilliant — fast, efficient, and of the highest quality. They arrived exactly as promised, completed the job they committed to, and left everything clean throughout the entire process. If you require roofing services in Sydney, look no further. Prestige Roofing Solution is the company you can trust.",
    source: "website",
  },
  {
    name: "Chloe",
    role: "Customer",
    quote:
      "Prestige Roofing Solution was a saving grace when we faced a troublesome roof leak in Sydney. Their team of highly skilled roofers approached the repair with precision and expertise. Not only did they arrive on time, but they also completed the job swiftly and effectively. If you are dealing with a leaking roof in Sydney, I wholeheartedly recommend trusting these experts at Prestige Roofing Solution. You can rely on them to get the job done right.",
    source: "website",
  },
  {
    name: "Jack",
    role: "Customer",
    quote:
      "Regarding roofing contractors in Sydney, Prestige Roofing Solution truly stands out. They promptly addressed my roofing needs, providing high-quality services at competitive rates. I am happier about entrusting them with fixing my roof tiles. The expertise of Prestige Roofing's team is evident in their work. I'm so satisfied with the results that I won't hesitate to call them again for future roofing projects. They've become my go-to choice for all things related to roofing.",
    source: "website",
  },
  {
    name: "Charlie",
    role: "CEO",
    quote:
      "Prestige Roofing Solution is the epitome of a full-service Sydney roofing company. They undertook our roof maintenance with impeccable precision and care. Their comprehensive services cover all our needs, from roof repairs to gutter restoration. The results they delivered delighted us, and the entire experience was exceptional. If you're seeking a one-stop solution for your roofing needs in Sydney, look no further than Prestige Roofing Solutions.",
    source: "website",
  },
];

/** Google reviews quoted on the original website (names + text preserved). */
export const googleTestimonials: Testimonial[] = [
  {
    name: "Philip McDaniel",
    role: "Google review",
    quote:
      "Excellent team from quoting to admin to installation. They made many recommendations how to improve our new roof over the old one, which we adopted. After getting service from Prestige roofing service there is no leaking issue. Can't recommend highly enough. We would definitely use them again if needed.",
    source: "google",
  },
  {
    name: "Petersone Evans",
    role: "Google review",
    quote:
      "Another great job by Prestige roofing service. Always very helpful and responsive. The team are professional and get on with the job. From the time we got the quote they were out in the next couple of days to fix a problem with the roof. Their work ethic is commendable. Keep up the job guys!!",
    source: "google",
  },
  {
    name: "Iftear Mahin",
    role: "Google review",
    quote:
      "I am extremely happy with the work Ajay and his team has done. I had my roof fully restored, cleaned and painted. They are experienced and passionate about their work. Work quality was fantastic at a reasonable price. I will surely recommend them. Bonus with 10 year warranty!",
    source: "google",
  },
  {
    name: "Amal Smith",
    role: "Google review",
    quote:
      "Amazing service, best price, honest old fashioned service, they absolutely went out of their way to do all the little extras no one else would touch. I called 6 others, only to waste my time. Even if you have to wait for Prestige Roofing, you will know exactly what to pay and when they will come out. Reliable, cheap, honest and professional. I'm very, very impressed. They even cleaned up after themselves. They found cheap solutions to incorrectly sloping old roofs. Honestly saved me at least $4000 from the next cheapest quote.",
    source: "google",
  },
  {
    name: "Susan Dang Frohling",
    role: "Google review",
    quote:
      "We had Prestige Roofing Solutions come to repair and paint our roof in preparation for solar panels. Ajay and his team worked on our roof with so much care and expertise. We're very happy with the results and are confident that the roof is going to be perfect for many years to come. Highly recommend these guys. They're so good!!!",
    source: "google",
  },
];

export const allTestimonials: Testimonial[] = [
  ...siteTestimonials,
  ...googleTestimonials,
];
