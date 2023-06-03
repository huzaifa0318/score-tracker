document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var urduNumbers = parseInt(document.getElementById('urdu').value);
    var mathsNumbers = parseInt(document.getElementById('maths').value);
    var englishNumbers = parseInt(document.getElementById('english').value);
    var islamyatNumbers = parseInt(document.getElementById('islamyat').value);

    var totalNumbers = urduNumbers + mathsNumbers + englishNumbers + islamyatNumbers;
    var percentage = (totalNumbers / 400) * 100;

    var table = document.getElementById('scoreTable');
    var row = table.insertRow(-1);

    var nameCell = row.insertCell(0);
    nameCell.innerHTML = name;

    var fatherNameCell = row.insertCell(1);
    fatherNameCell.innerHTML = fatherName;

    var urduCell = row.insertCell(2);
    urduCell.innerHTML = urduNumbers;

    var mathsCell = row.insertCell(3);
    mathsCell.innerHTML = mathsNumbers;

    var englishCell = row.insertCell(4);
    englishCell.innerHTML = englishNumbers;

    var islamyatCell = row.insertCell(5);
    islamyatCell.innerHTML = islamyatNumbers;

    var totalCell = row.insertCell(6);
    totalCell.innerHTML = totalNumbers;

    var percentageCell = row.insertCell(7);
    percentageCell.innerHTML = percentage.toFixed(2) + "%";

    if (percentage === Math.max(percentage, ...Array.from(table.querySelectorAll('tr:not(:first-child) td:nth-child(8)')).map(td => parseFloat(td.textContent)))) {
        percentageCell.classList.add('green');
    }

    document.getElementById('scoreForm').reset();
});