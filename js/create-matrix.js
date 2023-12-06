function onGenerateClick(tableNum) {
  let input1 = document.getElementById("rowDim" + tableNum);
  let row = parseInt(input1.value);

  let errorContainer = document.getElementById("sizeError" + tableNum);
  errorContainer.innerHTML = "";

  if (Number.isNaN(row)) {
    errorContainer.innerHTML =
      '<div class="alert alert-warning" role="alert">Enter valid number of rows</div>';
    return;
  }

  let input2 = document.getElementById("columnsDim" + tableNum);
  let column = parseInt(input2.value);
  if (Number.isNaN(column)) {
    errorContainer.innerHTML =
      '<div class="alert alert-warning" role="alert">Enter valid number of columns</div>';
    return;
  }

  let tb = document.getElementById("tableBody" + tableNum);
  while (tb.firstChild) {
    tb.removeChild(tb.firstChild);
  }
  for (let i = 0; i < row; i++) {
    let tRow = document.createElement("tr");
    for (let j = 0; j < column; j++) {
      let td = document.createElement("td");
      let placeholder = 'placeholder="number" ';
      td.innerHTML =
        '<input type="text" class="form-control input"' + placeholder + "/>";
      tRow.appendChild(td);
    }
    tb.appendChild(tRow);
  }
}
