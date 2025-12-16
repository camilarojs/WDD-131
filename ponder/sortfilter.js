
const hikes = [
  {
    name: "Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river"
  },
  {
    name: "Teton Canyon",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short or long hike through Teton Canyon"
  },
  {
    name: "Denanda Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows"
  },
  {
    name: "Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Easy"],
    description: "Beautiful hike along the Snake River"
  },
  {
    name: "Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description: "A steep climb to a volcanic butte"
  }
];

function getMiles(distance) {
  return parseFloat(distance);
}

function searchHikes(list, query) {
  const q = query.toLowerCase();

  function matches(hike) {
    const inName = hike.name.toLowerCase().includes(q);
    const inDesc = hike.description.toLowerCase().includes(q);

    const inTags = hike.tags.find(tag =>
      tag.toLowerCase().includes(q)
    );

    return inName || inDesc || inTags;
  }

  const filtered = list.filter(matches);

  filtered.sort((a, b) => getMiles(a.distance) - getMiles(b.distance));

  return filtered;
}

function renderHikes(list) {
  const ul = document.getElementById("hikeList");
  ul.innerHTML = "";

  list.forEach(hike => {
    const li = document.createElement("li");
    li.textContent = `${hike.name} – ${hike.distance}`;
    ul.appendChild(li);
  });
}

const input = document.getElementById("searchInput");

input.addEventListener("input", () => {
  const results = searchHikes(hikes, input.value);
  renderHikes(results);
});

renderHikes(hikes);
