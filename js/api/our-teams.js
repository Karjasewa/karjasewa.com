let team = document.querySelector("#team");

fetch("http://karjasewa.com/js/json/our-teams.json").then(response => {
    return response.json();
}).then(data => {
    data.forEach(data => {
        let { teamImage, teamName, teamProfession } = data;

        let html = `<div class="team-box">
                     <div class="team-image">
                       <img src="${teamImage}" alt="">
                     </div>
                     <div class="team-name">${teamName}</div>
                     <div class="team-profession">${teamProfession}</div>
                   </div>`;
        team.innerHTML += html;
    });
})

