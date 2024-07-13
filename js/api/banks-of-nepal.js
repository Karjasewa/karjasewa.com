let tbody = document.querySelector("tbody");

fetch("https://karjasewa.com/js/json/banks-of-nepal.json").then(response => {
    return response.json();
}).then(data => {
    data.forEach(data => {
        let { sn, bankName, } = data;

        let html = `<tr>
                    <td data-label="S.N">${sn}</td>
                    <td data-label="Bank Name">${bankName}</td>
                    <td class="empty"></td>
                </tr>`;
        tbody.innerHTML += html;
    });
})

