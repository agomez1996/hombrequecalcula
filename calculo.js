function calculo(){
    var cam = parseInt(document.getElementById("cam").value);
    var ber = parseInt(document.getElementById("ber").value);

    var sum = cam+ber;

    var herm1 = sum * 0.5;

    var herm2 = sum * 0.33333333333;
    var hr2 = herm2.toFixed(0);

    var herm3 = sum * 0.111111111;

    var hr3 = herm3.toFixed(0)

    var t = sum - herm1 - hr2 - hr3;

    document.getElementById("respuesta1").innerHTML="Al hermano mayor le corresponde "+herm1+" camellos."

    document.getElementById("respuesta2").innerHTML="Al hermano del medio le corresponde "+hr2+" camellos."

    document.getElementById("respuesta3").innerHTML="Al hermano menor le corresponde "+hr3+" camellos."

    document.getElementById("respuesta4").innerHTML="Total sobran "+t+" camellos que gano Beremiz por resolver el problema."


}