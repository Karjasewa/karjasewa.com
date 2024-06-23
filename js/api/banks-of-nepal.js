let tbody = document.querySelector("tbody");

fetch("http://rajeshthapa69.com.np/js/json/banks-of-nepal.json").then(response => {
    return response.json();
}).then(data => {
    data.forEach(data => {
        let { sn, bankName, loanX, loanY, loanZ } = data;

        let html = `<tr>
                    <td data-label="S.N">${sn}</td>
                    <td data-label="Bank Name">${bankName}</td>
                    <td data-label="Loan X">${loanX}</td>
                    <td data-label="Loan X">${loanY}</td>
                    <td data-label="Loan X">${loanZ}</td>
                    <td class="empty"></td>
                </tr>`;
        tbody.innerHTML += html;
    });
})

