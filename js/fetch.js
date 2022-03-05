const showSection = document.querySelector("#showSection");

const placeText = ({ attributes: attr }) => {
  return `
            <h1 id="showTitle" class="text-4xl">${attr.showName}</h1>
            <h2 id="showDate" class="text-xl  m-2">${attr.showDate}</h2>


            <img id="showImage" src="${attr.showImage}" class="mt-2 mb-2 mx-auto w-3/4  object-cover">

            <p id="showDetails" class="text-left mt-4">${attr.showDetails}</p>
        `;
};

const populate = ({ data: shows }) => {
  console.log(shows);
  shows.forEach((show) => {
    const newShow = document.createElement("article");

    const articleClasses = [
      "text-center",
      "show",
      "mx-auto",
      "md:p-5",
      "lg:p-10",
      "mt-10",
      "w-11/12",
      "md:w-8/12",
      "lg:w-1/2",
    ];

    newShow.classList.add(...articleClasses);

    const html = placeText(show);

    newShow.innerHTML = html;

    showSection.append(newShow);
  });
};

const getShows = async () => {
  fetch("https://vast-anchorage-86223.herokuapp.com/api/shows")
    .then((res) => res.json())
    .then((data) => populate(data));
};

window.addEventListener("load", () => {
  getShows();
});
