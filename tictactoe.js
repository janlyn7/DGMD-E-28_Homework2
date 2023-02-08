function loadBoard() {
    let div = document.getElementById("start");
    div.parentNode.removeChild(div);

    let grid = document.getElementById("board");
    let table = document.createElement('table');
    table.setAttribute("class", "w3-card-4 w3-center w3-animate-zoom");

    // create a 3x3 grid of buttons
    let ii = 0;
    let jj = 0;

    for (ii=0; ii < 3; ii++) {
        let tr = document.createElement('tr');

        for (jj=0; jj < 3; jj++) {
            let td = document.createElement('td');
            let btn = document.createElement( "button");
            let txt = document.createTextNode("");
            btn.className = "tttbtn";
            btn.type = "button";
            let rand = Math.floor(Math.random() * 2);
            btn.textContent = rand ? "X" : "O";
            btn.appendChild(txt);
            td.appendChild(btn);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    grid.appendChild(table);
}
