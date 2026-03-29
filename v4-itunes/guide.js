/* ============================================================
   CHICAGO GUIDE — guide.js  (V4 iTunes / Aqua 2003)
   Spots data, filtering, map routing
   ============================================================ */

/* ── Spots Data ──────────────────────────────────────────── */
const SPOTS = [
  {
    id: "willis-tower",
    name: "Willis Tower",
    address: "233 S Wacker Dr",
    lat: 41.8789, lng: -87.6359,
    tags: ["architecture"],
    description: "Once the world's tallest building. The Skydeck on the 103rd floor cantilevers over the city in glass boxes. Brutalist anchor of the Loop.",
    tip: "Go at dusk — the city lights up beneath you.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "cloud-gate",
    name: "Cloud Gate",
    address: "201 E Randolph St, Millennium Park",
    lat: 41.8827, lng: -87.6233,
    tags: ["architecture"],
    description: "Anish Kapoor's 110-ton liquid-mercury bean. Millennium Park's gravitational center — every angle gives a different skyline reflection.",
    tip: "Shoot your reflection at the umbilicus — the curved pinch point underneath.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "chicago-theatre",
    name: "Chicago Theatre",
    address: "175 N State St",
    lat: 41.8856, lng: -87.6274,
    tags: ["architecture", "music"],
    description: "1921 French Baroque revival landmark. The vertical CHICAGO marquee sign is one of the most photographed in the world.",
    tip: "Book a show and walk the ornate lobby — the detail is extraordinary.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "wrigley-building",
    name: "Wrigley Building",
    address: "400 N Michigan Ave",
    lat: 41.8892, lng: -87.6244,
    tags: ["architecture"],
    description: "Twin white terracotta towers (1921–1924) that glow at night along the Magnificent Mile. A beacon of Beaux-Arts Chicago.",
    tip: "Best photographed from the Michigan Ave bridge at night.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "tribune-tower",
    name: "Tribune Tower",
    address: "435 N Michigan Ave",
    lat: 41.8904, lng: -87.6241,
    tags: ["architecture", "doors"],
    description: "Gothic Revival skyscraper with stones from 120+ world landmarks embedded in its base — the Great Wall, Taj Mahal, even moon rock.",
    tip: "Walk the base slowly and read the embedded stone plaques.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "rookery-building",
    name: "Rookery Building",
    address: "209 S LaSalle St",
    lat: 41.8782, lng: -87.6330,
    tags: ["architecture", "doors"],
    description: "1888 Burnham & Root landmark. Frank Lloyd Wright redesigned the interior light court in 1905. Ornate iron staircase, glass ceiling — pure Chicago.",
    tip: "Step inside the atrium — it's free during business hours and the light court is breathtaking.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "chicago-cultural-center",
    name: "Chicago Cultural Center",
    address: "78 E Washington St",
    lat: 41.8835, lng: -87.6249,
    tags: ["architecture", "doors"],
    description: "1897 Beaux-Arts former library. Two massive Tiffany glass domes (38 ft and 40 ft) and bronze entrance doors that are spectacles in themselves.",
    tip: "Free admission always. Climb to the Preston Bradley Hall dome.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "monadnock-building",
    name: "Monadnock Building",
    address: "53 W Jackson Blvd",
    lat: 41.8777, lng: -87.6306,
    tags: ["architecture", "doors"],
    description: "Half Romanesque (1891), half proto-Modern (1893). The north half has the most ornate original entrance doors in the Loop — a study in contrasts.",
    tip: "Compare both halves side by side — you can see Chicago architecture evolving in real time.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "sullivan-center",
    name: "Sullivan Center",
    address: "1 S State St",
    lat: 41.8818, lng: -87.6279,
    tags: ["architecture", "doors"],
    description: "Louis Sullivan's 1899 ornamental ironwork on the entrance and cornice is some of the most intricate metalwork in American architecture.",
    tip: "Get close — the botanical cast-iron details reward inspection with your nose an inch from the metal.",
    color: "var(--color-tag-arch)"
  },
  {
    id: "green-mill",
    name: "Green Mill Cocktail Lounge",
    address: "4802 N Broadway",
    lat: 41.9657, lng: -87.6573,
    tags: ["music", "jazz", "nightlife"],
    description: "Al Capone's old haunt (1907). One of Chicago's last authentic jazz clubs — original booths, pressed tin ceiling, live jazz 7 nights a week.",
    tip: "Sunday night is the Uptown Poetry Slam — Chicago's longest-running spoken word event.",
    color: "var(--color-tag-jazz)"
  },
  {
    id: "andys-jazz",
    name: "Andy's Jazz Club",
    address: "11 E Hubbard St",
    lat: 41.8906, lng: -87.6278,
    tags: ["music", "jazz"],
    description: "Downtown jazz institution since 1951. Two sets nightly. Relaxed neighborhood feel despite being steps from the Magnificent Mile.",
    tip: "The after-work Happy Hour jazz set starts at 5pm — best deal in Chicago.",
    color: "var(--color-tag-jazz)"
  },
  {
    id: "jazz-showcase",
    name: "Jazz Showcase",
    address: "806 S Plymouth Ct",
    lat: 41.8703, lng: -87.6318,
    tags: ["jazz"],
    description: "Chicago's oldest jazz club (est. 1947). A pilgrimage site for serious listeners — every major jazz name has played this room.",
    tip: "Sunday matinee shows often have no cover for kids — a rare intergenerational jazz moment.",
    color: "var(--color-tag-jazz)"
  },
  {
    id: "constellation",
    name: "Constellation",
    address: "3111 N Western Ave",
    lat: 41.9383, lng: -87.6884,
    tags: ["jazz", "music"],
    description: "Experimental jazz and avant-garde. Intimate room, no bad seats. The beating heart of Chicago's progressive music underground.",
    tip: "Check their calendar — they often host free or low-cost experimental sets on weeknights.",
    color: "var(--color-tag-jazz)"
  },
  {
    id: "metro-chicago",
    name: "Metro Chicago",
    address: "3730 N Clark St",
    lat: 41.9490, lng: -87.6577,
    tags: ["music", "nightlife"],
    description: "Legendary 1,100-cap rock venue in Wrigleyville. Nirvana, Smashing Pumpkins, R.E.M. all played here before they were stadium acts.",
    tip: "The balcony has perfect sightlines and less crowd crush — worth the climb.",
    color: "var(--color-tag-music)"
  },
  {
    id: "house-of-blues",
    name: "House of Blues Chicago",
    address: "329 N Dearborn St",
    lat: 41.8878, lng: -87.6356,
    tags: ["music"],
    description: "3-room music complex in the Marina City block. Blues roots but books everything. The Delta Blues Museum inside is worth seeing on its own.",
    tip: "The Sunday Gospel Brunch sells out weeks ahead — book early, it's an experience.",
    color: "var(--color-tag-music)"
  },
  {
    id: "empty-bottle",
    name: "Empty Bottle",
    address: "1035 N Western Ave",
    lat: 41.9007, lng: -87.6882,
    tags: ["music", "nightlife"],
    description: "Ukrainian Village indie/punk/experimental institution since 1992. Cheap beers, no pretension, impeccable booking.",
    tip: "Monday Night Jazz is one of Chicago's best-kept secrets and it's completely free.",
    color: "var(--color-tag-music)"
  },
  {
    id: "violet-hour",
    name: "The Violet Hour",
    address: "1520 N Damen Ave",
    lat: 41.9094, lng: -87.6775,
    tags: ["nightlife"],
    description: "Wicker Park cocktail temple that helped define craft cocktail culture nationally. No sign outside — just the mural. Strict no-phone etiquette.",
    tip: "Order anything with their house-made bitters. Come before 9pm — it fills up fast.",
    color: "var(--color-tag-nightlife)"
  },
  {
    id: "lost-lake",
    name: "Lost Lake",
    address: "3154 W Diversey Ave",
    lat: 41.9322, lng: -87.7021,
    tags: ["nightlife"],
    description: "Logan Square tiki bar done without irony — handcrafted rum drinks in a dark, lush jungle interior. Exceptional execution.",
    tip: "The rum flights are an education in terroir. Sit at the bar and ask questions.",
    color: "var(--color-tag-nightlife)"
  },
  {
    id: "delilahs",
    name: "Delilah's",
    address: "2771 N Lincoln Ave",
    lat: 41.9307, lng: -87.6548,
    tags: ["nightlife", "music"],
    description: "Punk/metal bar with the largest whiskey selection in Chicago (700+). Been here since 1993. Loud, unashamed, beloved.",
    tip: "The jukebox is immaculate — every genre of outsider music represented perfectly.",
    color: "var(--color-tag-nightlife)"
  },
  {
    id: "berlin",
    name: "Berlin Nightclub",
    address: "954 W Belmont Ave",
    lat: 41.9399, lng: -87.6531,
    tags: ["nightlife"],
    description: "Chicago's oldest continuously operating LGBTQ+ club (1983). Diverse, inclusive, sweaty dancing to electronic and pop. Zero attitude.",
    tip: "Thursday night 80s dance nights are legendary — arrive before midnight.",
    color: "var(--color-tag-nightlife)"
  },
  {
    id: "smart-bar",
    name: "Smart Bar",
    address: "3730 N Clark St (below Metro)",
    lat: 41.9491, lng: -87.6576,
    tags: ["nightlife", "music"],
    description: "Chicago's premier underground dance music club, downstairs from Metro. Resident DJs shaped house music culture here. Intimate and dark.",
    tip: "Check their online calendar — touring DJs from Berlin and NYC show up unannounced.",
    color: "var(--color-tag-nightlife)"
  },
  {
    id: "intelligentsia",
    name: "Intelligentsia Coffee",
    address: "53 E Randolph St, Millennium Park",
    lat: 41.8823, lng: -87.6264,
    tags: ["cafe"],
    description: "Chicago's coffee institution since 1995. Direct-trade sourcing before it was a trend. The Millennium Park outpost has soaring ceilings and park views.",
    tip: "The black cat espresso is the benchmark — try it straight before adding milk.",
    color: "var(--color-tag-cafe)"
  },
  {
    id: "sawada-coffee",
    name: "Sawada Coffee",
    address: "112 N Green St, Fulton Market",
    lat: 41.8838, lng: -87.6491,
    tags: ["cafe"],
    description: "World Latte Art Champion Hiroshi Sawada's Fulton Market café. The Military Latte (matcha + espresso) is the signature. Minimal Japanese aesthetic.",
    tip: "Order the Military Latte — it sounds wrong but it's transcendent.",
    color: "var(--color-tag-cafe)"
  },
  {
    id: "metric-coffee",
    name: "Metric Coffee",
    address: "2021 W Fulton St",
    lat: 41.8856, lng: -87.6738,
    tags: ["cafe"],
    description: "Roaster and café in a converted Fulton Market warehouse. Industrial-scale roasting done with Swiss-watchmaker precision.",
    tip: "Watch the roasters work while you drink — single-origin pour-overs only.",
    color: "var(--color-tag-cafe)"
  },
  {
    id: "dark-matter",
    name: "Dark Matter Coffee",
    address: "2521 N Milwaukee Ave, Logan Square",
    lat: 41.9276, lng: -87.7021,
    tags: ["cafe"],
    description: "Chicago indie roaster with a galaxy-brained brand and uncompromising sourcing. The Logan Square café is the most atmospheric outpost.",
    tip: "The nitro cold brew needs no ice — get it large.",
    color: "var(--color-tag-cafe)"
  }
];

/* ── Tag color map ───────────────────────────────────────── */
const TAG_COLORS = {
  architecture: "var(--color-tag-arch)",
  music:        "var(--color-tag-music)",
  nightlife:    "var(--color-tag-nightlife)",
  jazz:         "var(--color-tag-jazz)",
  doors:        "var(--color-tag-doors)",
  cafe:         "var(--color-tag-cafe)"
};

/* Resolved hex values for Leaflet markers */
const TAG_COLORS_HEX = {
  architecture: "#e07000",
  music:        "#3478f6",
  nightlife:    "#8e44ad",
  jazz:         "#00966d",
  doors:        "#cc3333",
  cafe:         "#5a9e2f"
};

function resolveSpotColorHex(spot) {
  for (const tag of spot.tags) {
    if (TAG_COLORS_HEX[tag]) return TAG_COLORS_HEX[tag];
  }
  return "#3478f6";
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

  const START = { lat: 41.8827, lng: -87.6233 };
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
    center: [41.8827, -87.6233],
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
    .map(t => `<span class="tag-pill" style="background:${TAG_COLORS_HEX[t]||'#3478f6'};color:#fff;border-radius:999px;padding:1px 6px;font-size:9px;font-family:Cabin,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:0.06em">${t}</span>`)
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
    const textColor = "#fff";

    const icon = L.divIcon({
      className: "",
      html: `<div class="route-marker" style="background:${colorHex};color:${textColor}">${i + 1}</div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
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
      color: "#3478f6",
      weight: 2.5,
      opacity: 0.7,
      dashArray: "8 5"
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
    .map(t => `<span class="tag-pill" style="background:${TAG_COLORS_HEX[t]||'#3478f6'}">${t}</span>`)
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
    btn.style.setProperty("--tag-color", TAG_COLORS_HEX[tag] || "#3478f6");

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
