/* ============================================================
   CHICAGO GUIDE — V24 Thrift Stores
   Spots data, filtering, map routing
   ============================================================ */

/* ── Spots Data ──────────────────────────────────────────── */
const SPOTS = [
  {
    id: "reckless-records",
    name: "Reckless Records",
    address: "1532 N Milwaukee Ave, Wicker Park",
    lat: 41.9088, lng: -87.6741,
    tags: ["records"],
    description: "Chicago's most revered used vinyl shop. Three floors of obsessively curated LPs — jazz, punk, soul, electronic. The staff picks section is consistently sharper than most critics.",
    tip: "Check the dollar bins in back. Regulars find first pressings in there.",
    color: "var(--color-teal)"
  },
  {
    id: "dusty-groove",
    name: "Dusty Groove",
    address: "1120 N Ashland Ave, Noble Square",
    lat: 41.9029, lng: -87.6697,
    tags: ["records"],
    description: "A global authority on rare funk, soul, and world music on vinyl and CD. Ships internationally, but the in-store experience — walls of Japanese pressings, Brazilian funk, spiritual jazz — is irreplaceable.",
    tip: "They grade honestly. A 'VG+' here plays like new.",
    color: "var(--color-teal)"
  },
  {
    id: "daves-records",
    name: "Dave's Records",
    address: "2604 N Clark St, Lincoln Park",
    lat: 41.9307, lng: -87.6494,
    tags: ["records", "nightlife"],
    description: "A neighborhood institution since 1990. Tight selection, deep rock and pop inventory, and a staff that actually argues about music in the best possible way.",
    tip: "Open daily until 9pm — good for an after-dinner dig.",
    color: "var(--color-teal)"
  },
  {
    id: "ragstock-wicker",
    name: "Ragstock",
    address: "1433 N Milwaukee Ave, Wicker Park",
    lat: 41.9078, lng: -87.6738,
    tags: ["clothing", "nightlife"],
    description: "Chain thrift with a loyal following. Bulk vintage by the pound alongside curated racks of '80s and '90s pieces. The Wicker Park location pulls the best sourcing.",
    tip: "Pound sale days are posted on Instagram — prices drop dramatically.",
    color: "var(--color-magenta)"
  },
  {
    id: "knee-deep-vintage",
    name: "Knee Deep Vintage",
    address: "1425 N Milwaukee Ave, Wicker Park",
    lat: 41.9076, lng: -87.6737,
    tags: ["clothing", "nightlife"],
    description: "High-end curated vintage — the kind of place where a 1971 Levi's trucker costs what it's worth. Impeccable condition, honest pricing, deeply knowledgeable staff.",
    tip: "New drops hit Thursday mornings. Follow on Instagram for first look.",
    color: "var(--color-magenta)"
  },
  {
    id: "crossroads-trading",
    name: "Crossroads Trading Co.",
    address: "1519 N Damen Ave, Wicker Park",
    lat: 41.9090, lng: -87.6779,
    tags: ["clothing", "nightlife"],
    description: "Buy-sell-trade boutique with tightly edited contemporary and vintage. Less random than thrift — more like a well-curated resale rack. Good for designer finds at 60% off.",
    tip: "Bring pieces to sell on weekdays — weekend lines can be long.",
    color: "var(--color-magenta)"
  },
  {
    id: "hollywood-mirror",
    name: "Hollywood Mirror",
    address: "812 W Belmont Ave, Lakeview",
    lat: 41.9399, lng: -87.6520,
    tags: ["clothing"],
    description: "Vintage costume, rockabilly, and retro clothing in a jam-packed storefront on Belmont. A Chicago institution for theatrical finds — rhinestone belts, 1950s housedresses, platform boots.",
    tip: "The back wall has the deepest costume inventory. Good for Halloween all year.",
    color: "var(--color-magenta)"
  },
  {
    id: "strange-cargo",
    name: "Strange Cargo",
    address: "3448 N Clark St, Lakeview",
    lat: 41.9495, lng: -87.6498,
    tags: ["clothing", "nightlife"],
    description: "Custom screen-printing, vintage, and novelty tees since 1989. They'll print anything on vintage blanks. The selection of '80s and '90s band and sports tees is genuinely deep.",
    tip: "Custom orders take a week. Walk-ins for vintage are welcome anytime.",
    color: "var(--color-magenta)"
  },
  {
    id: "village-discount",
    name: "Village Discount Outlet",
    address: "2855 N Kedzie Ave, Avondale",
    lat: 41.9347, lng: -87.7069,
    tags: ["vintage", "antiques"],
    description: "Chicago's mega-thrift. Immense, slightly chaotic, and endlessly rewarding. Priced by weight in some sections. The furniture and housewares floor can yield mid-century finds at 1990s prices.",
    tip: "Go on a Tuesday — new stock rolls out Monday nights.",
    color: "var(--color-marigold)"
  },
  {
    id: "unique-thrift",
    name: "Unique Thrift Store",
    address: "3000 N Milwaukee Ave, Logan Square",
    lat: 41.9400, lng: -87.7147,
    tags: ["vintage", "nightlife"],
    description: "Massive thrift warehouse on the Logan Square stretch of Milwaukee. Better organized than most — furniture, housewares, and clothing all clearly sectioned. Rotating color tag sales.",
    tip: "The blue tag 50%-off rotation happens every two weeks. Check the sign at checkout.",
    color: "var(--color-marigold)"
  },
  {
    id: "brown-elephant",
    name: "The Brown Elephant",
    address: "5012 N Clark St, Andersonville",
    lat: 41.9734, lng: -87.6680,
    tags: ["vintage", "cafe"],
    description: "Upscale resale shop benefiting Howard Brown Health. The Clark Street location has particularly good furniture and home goods. Donations come from the neighborhood — quality is consistently high.",
    tip: "Pair with coffee at Kopi Café a block away. Good afternoon loop.",
    color: "var(--color-marigold)"
  },
  {
    id: "wooly-mammoth",
    name: "Wooly Mammoth",
    address: "4306 N Milwaukee Ave, Jefferson Park",
    lat: 41.9599, lng: -87.7283,
    tags: ["vintage", "antiques"],
    description: "Hidden gem on the far northwest stretch of Milwaukee. Vintage furniture, art, and housewares at pre-gentrification prices. Worth the Blue Line trip — regulars treat this like their secret.",
    tip: "Cash or Venmo only. The owner is there most days and knows the provenance of everything.",
    color: "var(--color-marigold)"
  },
  {
    id: "antique-resources",
    name: "Antique Resources",
    address: "1741 W Belmont Ave, Roscoe Village",
    lat: 41.9399, lng: -87.6715,
    tags: ["antiques"],
    description: "Multi-dealer antique mall in a converted space — 50+ dealers under one roof, organized by booth. Mid-century modern furniture, art deco lamps, vintage jewelry, Depression glass.",
    tip: "Individual dealer prices are often negotiable. Ask at checkout.",
    color: "var(--color-cobalt)"
  },
  {
    id: "broadway-antique-market",
    name: "Broadway Antique Market",
    address: "6130 N Broadway, Edgewater",
    lat: 41.9926, lng: -87.6597,
    tags: ["antiques", "vintage"],
    description: "One of Chicago's largest antique markets — 75+ dealers across two floors. Especially strong on 20th-century decorative arts, architectural salvage, and vintage lighting. A serious destination.",
    tip: "First Sunday of each month dealers often bring new inventory. Arrive early.",
    color: "var(--color-cobalt)"
  },
  {
    id: "posh-chicago",
    name: "P.O.S.H.",
    address: "613 N State St, River North",
    lat: 41.8939, lng: -87.6285,
    tags: ["antiques"],
    description: "Estate antiques and vintage hotel silver in a beautifully curated River North shop. Specializes in European tableware, monogrammed linens, and old-world hospitality objects. Aspirational browsing.",
    tip: "They rotate hotel silver from estate sales — check the back shelves for new arrivals.",
    color: "var(--color-cobalt)"
  },
  {
    id: "lost-eras",
    name: "Lost Eras",
    address: "1511 W Howard St, Rogers Park",
    lat: 42.0186, lng: -87.6762,
    tags: ["antiques", "vintage"],
    description: "A theatrical costume and prop warehouse in Rogers Park — one of Chicago's most distinctive shops. Floor-to-ceiling Victorian furniture, medical antiques, armor, taxidermy. Surreal and magnificent.",
    tip: "Rentals available for film and theater productions. Ask at the desk.",
    color: "var(--color-cobalt)"
  },
  {
    id: "randolph-street-market",
    name: "Randolph Street Market",
    address: "1340 W Washington Blvd, West Loop",
    lat: 41.8832, lng: -87.6617,
    tags: ["antiques", "vintage"],
    description: "Chicago's best antique and vintage fair, held monthly in the West Loop. 200+ dealers from across the Midwest — furniture, jewelry, art, clothing. Outdoor and indoor sections.",
    tip: "Tickets are $10 at the door. Saturdays have more dealers than Sundays.",
    color: "var(--color-cobalt)"
  },
  {
    id: "quimbys-bookstore",
    name: "Quimby's Bookstore",
    address: "1854 W North Ave, Wicker Park",
    lat: 41.9108, lng: -87.6775,
    tags: ["records", "nightlife"],
    description: "Legendary independent bookstore specializing in underground comics, zines, and alternative press. Not strictly a record shop, but the cultural object next door to vinyl. Essential for anyone who loves physical media.",
    tip: "The zine section is encyclopedic. Grab the free local zines near the door.",
    color: "var(--color-teal)"
  },
  {
    id: "andersonville-thrift",
    name: "Andersonville Thrift Shop",
    address: "5009 N Clark St, Andersonville",
    lat: 41.9726, lng: -87.6680,
    tags: ["vintage", "clothing"],
    description: "Community thrift run by volunteers on Clark Street's main drag. Tight, well-organized selection — donated by Andersonville's creative and academic community. Unusually good book and art selection.",
    tip: "Open Thursday through Sunday only. Gets picked over fast — go on Thursday.",
    color: "var(--color-marigold)"
  },
  {
    id: "green-with-envy",
    name: "Green with Envy",
    address: "5234 N Clark St, Andersonville",
    lat: 41.9768, lng: -87.6676,
    tags: ["clothing", "cafe"],
    description: "Upscale vintage and new sustainable clothing in Andersonville. Small, carefully chosen inventory — the owner sources internationally. Strong on 1960s–70s European fashion.",
    tip: "The new-arrival section near the window changes weekly. Good reason to return.",
    color: "var(--color-magenta)"
  },
  {
    id: "second-hand-tunes",
    name: "Second Hand Tunes",
    address: "2604 N Clark St, Lincoln Park",
    lat: 41.9306, lng: -87.6495,
    tags: ["records"],
    description: "Classic Chicago used music shop — vinyl, CDs, and cassettes all under one roof. Less edited than Reckless but deeper in classic rock, jazz, and pop. Good prices on common titles.",
    tip: "Bring a stack of CDs to sell — they pay on the spot in cash or trade credit.",
    color: "var(--color-teal)"
  },
  {
    id: "intelligentsia-wicker",
    name: "Intelligentsia Coffee",
    address: "1850 W North Ave, Wicker Park",
    lat: 41.9108, lng: -87.6773,
    tags: ["cafe"],
    description: "The Wicker Park outpost of Chicago's most influential specialty roaster. High ceilings, light wood, and espresso pulled with ceremony. A natural base camp before hitting Milwaukee Ave's vintage strip.",
    tip: "Order the Black Cat espresso straight. No room for milk.",
    color: "var(--color-cafe)"
  },
  {
    id: "penelope-boutique",
    name: "Penelope's",
    address: "1913 W Division St, Ukrainian Village",
    lat: 41.9031, lng: -87.6797,
    tags: ["clothing", "nightlife"],
    description: "Eclectic women's boutique with vintage, new independent labels, and accessories. Division Street's answer to the Milwaukee Ave strip — smaller and more curated, with a strong point of view.",
    tip: "The jewelry case near the register has the best vintage finds at the lowest prices.",
    color: "var(--color-magenta)"
  },
  {
    id: "arc-thrift-montrose",
    name: "Arc Thrift Store",
    address: "2101 W Montrose Ave, Ravenswood",
    lat: 41.9607, lng: -87.6843,
    tags: ["vintage"],
    description: "Consistently one of Chicago's best-stocked Arc locations. Wide aisles, organized departments, and good furniture turnover. The Ravenswood neighborhood donations skew artistic and eclectic.",
    tip: "The housewares section on weekday mornings is restocked overnight — best selection before noon.",
    color: "var(--color-marigold)"
  },
  {
    id: "beatnik-chicago",
    name: "Beatnik",
    address: "1604 W Chicago Ave, Ukrainian Village",
    lat: 41.8956, lng: -87.6706,
    tags: ["nightlife", "antiques"],
    description: "A design-forward cocktail lounge furnished entirely with mid-century and vintage pieces — all for sale. Drink surrounded by Eames chairs and Hans Wegner shells, then buy what you're sitting on.",
    tip: "The furniture rotates as pieces sell. Tag on the chair? It's your price.",
    color: "var(--color-cobalt)"
  }
];

/* ── Tag color map ───────────────────────────────────────── */
const TAG_COLORS = {
  vintage:   "var(--color-marigold)",
  records:   "var(--color-teal)",
  antiques:  "var(--color-cobalt)",
  cafe:      "var(--color-tag-cafe)",
  clothing:  "var(--color-magenta)",
  nightlife: "var(--color-tag-nightlife)"
};

/* Resolved hex values for Leaflet markers (can't use CSS vars in JS) */
const TAG_COLORS_HEX = {
  vintage:   "#e8900a",
  records:   "#006878",
  antiques:  "#1a4a9e",
  cafe:      "#1a7840",
  clothing:  "#cc2070",
  nightlife: "#8a1060"
};

function resolveSpotColorHex(spot) {
  for (const tag of spot.tags) {
    if (TAG_COLORS_HEX[tag]) return TAG_COLORS_HEX[tag];
  }
  return "#00b4d8";
}

/* ── State ───────────────────────────────────────────────── */
const state = {
  activeTags: new Set(),
  filteredSpots: [],
  markers: {},
  routePolyline: null,
  map: null
};

/* ── Haversine distance (km) ─────────────────────────────── */
function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/* ── Route: nearest-neighbor from Millennium Park ─────────── */
function computeRoute(spots) {
  if (spots.length <= 1) return [...spots];

  const START = { lat: 41.8827, lng: -87.6233 }; // Millennium Park
  const unvisited = [...spots];
  const route = [];
  let current = START;

  while (unvisited.length > 0) {
    let closestIdx = 0;
    let closestDist = Infinity;
    for (let i = 0; i < unvisited.length; i++) {
      const d = haversineDistance(
        current.lat, current.lng,
        unvisited[i].lat, unvisited[i].lng
      );
      if (d < closestDist) { closestDist = d; closestIdx = i; }
    }
    current = unvisited[closestIdx];
    route.push(current);
    unvisited.splice(closestIdx, 1);
  }
  return route;
}

/* ── Map init ────────────────────────────────────────────── */
function initMap() {
  state.map = L.map("map", {
    center: [41.9200, -87.6800],
    zoom: 13,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(state.map);
}

/* ── Build popup HTML ────────────────────────────────────── */
function buildPopupHTML(spot, index) {
  const colorHex = resolveSpotColorHex(spot);
  const tagPills = spot.tags
    .map(t => `<span class="tag-pill" style="color:${TAG_COLORS_HEX[t]||'#00b4d8'}">${t}</span>`)
    .join(" ");
  return `
    <div class="map-popup">
      <div class="map-popup__num" style="background:${colorHex}">${index}</div>
      <h3 class="map-popup__name">${spot.name}</h3>
      <p class="map-popup__address">${spot.address}</p>
      <p class="map-popup__desc">${spot.description}</p>
      <p class="map-popup__tip"><strong>Tip:</strong> ${spot.tip}</p>
      <div class="map-popup__tags">${tagPills}</div>
    </div>
  `;
}

/* ── Update map markers + polyline ──────────────────────── */
function updateMap(orderedSpots) {
  Object.values(state.markers).forEach(m => m.remove());
  state.markers = {};

  if (state.routePolyline) { state.routePolyline.remove(); state.routePolyline = null; }

  if (orderedSpots.length === 0) return;

  orderedSpots.forEach((spot, i) => {
    const colorHex = resolveSpotColorHex(spot);
    const lightTags = new Set(["vintage", "records", "cafe"]);
    const textColor = spot.tags.some(t => lightTags.has(t)) ? "#000" : "#fff";

    const icon = L.divIcon({
      className: "",
      html: `<div class="route-marker" style="background:${colorHex};color:${textColor}">${i + 1}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });

    const marker = L.marker([spot.lat, spot.lng], { icon })
      .addTo(state.map)
      .bindPopup(buildPopupHTML(spot, i + 1), { maxWidth: 280, className: "chicago-popup" });

    marker.on("click", () => highlightCard(spot.id));
    state.markers[spot.id] = marker;
  });

  if (orderedSpots.length > 1) {
    const latlngs = orderedSpots.map(s => [s.lat, s.lng]);
    state.routePolyline = L.polyline(latlngs, {
      color: "#cc2070",
      weight: 2.5,
      opacity: 0.65,
      dashArray: "7 5"
    }).addTo(state.map);
  }

  const group = L.featureGroup(Object.values(state.markers));
  state.map.fitBounds(group.getBounds().pad(0.18));

  const routeInfo = document.getElementById("routeInfo");
  const stopCount = document.getElementById("stopCount");
  if (orderedSpots.length > 1) {
    routeInfo.hidden = false;
    stopCount.textContent = orderedSpots.length;
  } else {
    routeInfo.hidden = true;
  }
}

/* ── Create a card DOM element ───────────────────────────── */
function createCardElement(spot) {
  const colorHex = resolveSpotColorHex(spot);
  const article = document.createElement("article");
  article.className = "spot-card";
  article.dataset.id = spot.id;
  article.style.setProperty("--spot-color", colorHex);

  const tagPills = spot.tags
    .map(t => `<span class="tag-pill" style="color:${TAG_COLORS_HEX[t]||'#00b4d8'}">${t}</span>`)
    .join(" ");

  article.innerHTML = `
    <div class="spot-card__number">1</div>
    <div class="spot-card__body">
      <h3 class="spot-card__name">${spot.name}</h3>
      <p class="spot-card__address">${spot.address}</p>
      <p class="spot-card__desc">${spot.description}</p>
      <p class="spot-card__tip"><span class="tip-label">Tip</span> ${spot.tip}</p>
      <div class="spot-card__tags">${tagPills}</div>
    </div>
  `;

  article.addEventListener("click", () => {
    const marker = state.markers[spot.id];
    if (marker) {
      state.map.panTo(marker.getLatLng(), { animate: true, duration: 0.5 });
      setTimeout(() => marker.openPopup(), 300);
    }
    document.querySelectorAll(".spot-card").forEach(c => c.classList.remove("focused"));
    article.classList.add("focused");
  });

  return article;
}

/* ── Render cards ────────────────────────────────────────── */
function renderCards(orderedSpots) {
  const grid = document.getElementById("spotsGrid");

  const existingCards = {};
  grid.querySelectorAll(".spot-card").forEach(card => {
    existingCards[card.dataset.id] = card;
    card.classList.add("hidden");
    card.classList.remove("focused", "entering");
  });

  orderedSpots.forEach((spot, i) => {
    let card = existingCards[spot.id];
    if (!card) {
      card = createCardElement(spot);
    }
    card.querySelector(".spot-card__number").textContent = i + 1;
    card.classList.remove("hidden");
    card.style.setProperty("--spot-color", resolveSpotColorHex(spot));

    void card.offsetWidth;
    card.classList.add("entering");

    grid.appendChild(card);
  });

  const count = document.getElementById("resultsCount");
  count.textContent = orderedSpots.length === SPOTS.length
    ? `Showing all ${SPOTS.length} spots`
    : `${orderedSpots.length} spot${orderedSpots.length !== 1 ? "s" : ""} · optimized route`;
}

/* ── Highlight a card from map click ────────────────────── */
function highlightCard(spotId) {
  document.querySelectorAll(".spot-card").forEach(c => c.classList.remove("focused"));
  const card = document.querySelector(`[data-id="${spotId}"]`);
  if (card) {
    card.classList.add("focused");
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

/* ── Apply filter & re-render ────────────────────────────── */
function applyFilter() {
  if (state.activeTags.size === 0) {
    state.filteredSpots = [...SPOTS];
  } else {
    state.filteredSpots = SPOTS.filter(spot =>
      spot.tags.some(t => state.activeTags.has(t))
    );
  }
  const ordered = computeRoute(state.filteredSpots);
  renderCards(ordered);
  updateMap(ordered);
}

/* ── Wire tag buttons ────────────────────────────────────── */
function initTagButtons() {
  document.querySelectorAll(".tag-btn").forEach(btn => {
    const tag = btn.dataset.tag;
    btn.style.setProperty("--tag-color", TAG_COLORS_HEX[tag] || "#00b4d8");

    btn.addEventListener("click", () => {
      if (state.activeTags.has(tag)) {
        state.activeTags.delete(tag);
        btn.classList.remove("active");
      } else {
        state.activeTags.add(tag);
        btn.classList.add("active");
      }
      applyFilter();
    });
  });

  document.getElementById("clearTags").addEventListener("click", () => {
    state.activeTags.clear();
    document.querySelectorAll(".tag-btn").forEach(b => b.classList.remove("active"));
    applyFilter();
  });
}

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  initTagButtons();
  applyFilter();
});
