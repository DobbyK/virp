const check = document.getElementById("check");
const virp = [["VA", "IA", "RA", "PA"],["VB", "IB", "RB", "PB"],["VT", "IT", "RT", "PT"]];
const answer = [[4, 0.4, 10, 1.6],[8, 0.4, 20, 3.2],[12, 0.4, 30, 4.8]]
check.addEventListener("click", function() {
    outloop: while (true) {
        for (let i = 0; i < 2; i++) {
            for (let x = 0; x < 3; x++) {
                let input = virp[i][x];
                if (document.getElementById("${input}").value == answer[i][x]) {
                    continue;
                } else {alert("Wrong!"); break outloop;}
            }
            
        }
        alert("All Good!");
        break;
    }
});

function boot() {
    document.getElementById("VT").value = "12";
    document.getElementById("VT").readOnly = true;
    document.getElementById("RA").value = "10";
    document.getElementById("RA").readOnly = true;
    document.getElementById("RB").value = "20";
    document.getElementById("RB").readOnly = true;
}

boot();