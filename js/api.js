const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json(res))
    .then((data) => showData(data.data));
};
const togoleLoader = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
const showData = ({ tools }) => {
  const toolContainer = document.getElementById("tool-container");
  tools.map((tool) => {
    const toolDiv = document.createElement("div");
    // toolDiv.classlit.add("col");
    toolDiv.innerHTML = `<div class="card h-100">
      <img src="${tool.image} " class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class=" ${tool.features} "> features  </h5>
        <p class="card-text">${tool.features}</p>

        </br>
        <h5 class=" ">  ${tool.name}  </h5>
        <div class=" text-end ">
        <button onclick="singleToolData(${tool.id})" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#toolDetailsModal" ></button> 
        </div>
        <div class="fa-duotone fa-calendar-days"> ${tool.published_in}</div>
      </div>
    </div>`;
    toolContainer.appendChild(toolDiv);
  });
};
const singleToolData = (id) => {
  console.log(id);
  togoleLoader(true);

  fetch(`https://openapi.programming-hero.com/api/ai/tool/01`)
    .then((res) => res.json(res))
    .then((data) => {
      console.log(data);
      togoleLoader(false);
    });
};

loadData();
