let updateList = document.querySelector("#update-list");

fetch("https://newsdata.io/api/1/latest?country=np&apikey=pub_471566d46c842cf1c462443fce4e704016015&size=5").then(response => {
    return response.json();
}).then(data => {
    data.results.forEach(data => {
        let image_url = data["image_url"];
        let title = data["title"];
        let link = data["link"];
        let pubDateAndTime = data["pubDate"];
        let publisher = date["source_id"];

        let pubDateAndTimeSeparate = pubDateAndTime.split(" ");
        let [pubDateOnly, pubTimeOnly] = pubDateAndTimeSeparate;


        let html = `<a href="${link}" target="_blank">
                       <button type="button" class="list-group-item list-group-item-action" id="update">
                        <div class="update-image">
                            <img src="${image_url}" alt="This article has no thumbnail" id="image">
                        </div>
                        <div class="update-detail">
                            <div class="headline" id="hedline" style="font-family: Tiro Devanagari Sanskrit;">
                                ${title}
                            </div>
                            <div class="publish-detail">
                              <div class="published-date"><i class="fa-solid fa-calendar-days"></i> ${pubDateOnly}</div>
                              <div class="publisher"><i class="fa-solid fa-newspaper"></i> ${data["source_id"]}</div>
                            </div>
                        </div>
                    </button>
                    </a>`;
        updateList.innerHTML += html;
    });
})
