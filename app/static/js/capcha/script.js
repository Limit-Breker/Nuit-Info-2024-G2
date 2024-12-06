var puzzle = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
puzzle_shufle();

function clamp(val, min, max)
{
    return val > max ? max : (val < min ? min : val);
}

function puzzle_shufle()
{
    var x = 0;
    var y = 0;
    for (var yy = 0; yy < 3; yy++) {
        for (var xx = 0; xx < 3; xx++) {
            if (puzzle[yy][xx] == 0) {
                x = xx;
                y = yy;
                break;
            }
        }
    }
    for (var i = 0; i < 50; i++) {
        var nx = 0;
        var ny = 0;
        var r = Math.floor(Math.random()*4);
        if (r == 0) {
            nx = 1;
            ny = 0;
        } else if (r == 1) {
            nx = -1;
            ny = 0;
        } else if (r == 2) {
            nx = 0;
            ny = 1;
        } else if (r == 3) {
            nx = 0;
            ny = -1;
        }
        nx = clamp(x+nx, 0, 2);
        ny = clamp(y+ny, 0, 2);
        if (y == ny && x == nx) continue;
        puzzle[y][x] = puzzle[ny][nx];
        puzzle[ny][nx] = 0;
        y = ny;
        x = nx;
    }
}

function big_capcha()
{
    document.getElementById("capcha-popup").hidden = false;
    var puzzle_html = document.getElementById("puzzle");
    puzzle_html.innerHTML = "";

    for (var y = 0; y < 3; y++) {
        for (var i = 0; i < 3; i++) {
            puzzle_html.innerHTML += "<div onclick='puzzle_click(this)' x='"+i+"' y='"+y+"'><img src='/static/images/baleine-capcha-"+puzzle[y][i]+".jpg'></img></div>";
        }
    }
}

function puzzle_click(e)
{
    var x = parseInt(e.getAttribute("x"));
    var y = parseInt(e.getAttribute("y"));
    var puz = puzzle[y][x];
    if (puz == 0)
        return;
    if (puzzle[clamp(y-1, 0, 2)][x] == 0) {
        puzzle[clamp(y-1, 0, 2)][x] = puz;
        puzzle[y][x] = 0;
    }
    else if (puzzle[clamp(y+1, 0, 2)][x] == 0) {
        puzzle[clamp(y+1, 0, 2)][x] = puz;
        puzzle[y][x] = 0;
    }
    else if (puzzle[y][clamp(x-1, 0, 2)] == 0) {
        puzzle[y][clamp(x-1, 0, 2)] = puz;
        puzzle[y][x] = 0;
    }
    else if (puzzle[y][clamp(x+1, 0, 2)] == 0) {
        puzzle[y][clamp(x+1, 0, 2)] = puz;
        puzzle[y][x] = 0;
    }
    big_capcha();
    var puz_case = document.querySelectorAll("#puzzle > *");
    if (JSON.stringify(puzzle) == JSON.stringify([[1, 2, 3], [4, 5, 6], [7, 8, 0]])) {
        for (var i = 0; i < puz_case.length; i++)
            puz_case[i].style.border = "solid green"
    } else {
        for (var i = 0; i < s.length; i++)
            puz_case[i].style.border = "solid white"
    }
}
