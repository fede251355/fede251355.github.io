function desplazar(){
    shift = document.getElementById("shift");
    d = shift.valueAsNumber;
    entrada = document.getElementById("entrada");
    s = entrada.value;
    resultado = document.getElementById("resultado");
    r = "";

    for (i = 0; i < s.length; i++) {
        if (s[i] < "a" || s[i] > "z") {
            r += s[i];
        } else {
            j = s.charCodeAt(i) + d;
            if (String.fromCharCode(j) > "z") j-= 26;
            r += String.fromCharCode(j);
        }
    }

    resultado.innerHTML = r;
}