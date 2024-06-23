let updateList = document.querySelector("#update-list");

fetch("https://karjasewa.com/js/json/updates.json").then(response => {
    return response.json();
}).then(data => {
    data.forEach(data => {
        let { updateImage, updateDetail } = data;
        let { headline, publishedDate } = updateDetail

        let html = `<button type="button" class="list-group-item list-group-item-action" id="update">
                        <div class="update-image">
                            <img src="${updateImage}" alt="" id="image">
                        </div>
                        <div class="update-detail">
                            <div class="headline" id="hedline" style="font-family: Tiro Devanagari Sanskrit;">
                                ${headline}
                            </div>
                            <div class="published-date"><i class="fa-solid fa-calendar-days"></i> ${publishedDate}</div>
                        </div>
                    </button>`;
        updateList.innerHTML += html;
    });
})
