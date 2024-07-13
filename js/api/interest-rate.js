let tbody = document.querySelector("tbody");

fetch("https://karjasewa.com/js/json/interest-rate.json").then(response => {
    return response.json();
}).then(data => {
    data.forEach(data => {
        let { sn, bankName, baseRate, effectiveRate} = data;

        let html = `<tr>
                    <td data-label="S.N">${sn}</td>
                    <td data-label="Bank Name">${bankName}</td>
                    <td data-label="Base Rate">${baseRate}</td>
                    <td data-label="Effective Rate">${effectiveRate}</td>
                    <td class="empty"></td>
                </tr>`;
        tbody.innerHTML += html;
    });
})

