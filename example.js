
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="text/html" charset="UTF-8">
    <meta name="author" content="Gökhan Karaca">
    <meta name="viewport" content="width=width-device, initial-scale=1.0">
    <title>Javascript</title>
</head>

<body>
    <h3>JSON / EXAMPLE</h3>
    <button onclick="ornek()">Açıklama Butonu</button> <br><br>
    <div id="sonuc">Eğitimler ile ilgili açıklamayı okumak için lütfen butona basınız</div>
    <script>
        function ornek() {
            var istek = new XMLHttpRequest();
            istek.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    var jsondegerleri = JSON.parse(this.responseText); // JSON gelen veriyi okumamız için parse komutunu yazmalıyız. Bu satırda verileri 'jsondegerleri' adlı değişkene tanımladık.
                    var metinsonucu = ""; // Genel içeriği yazdırmak için değeri boş bir değişken oluşturuyoruz.
                    var setdegerleri = jsondegerleri.setler; // Yeni değişken oluşturduk. Veriler artık 'jsondegerleri' değişkeninde olduğu için example.json içinde ki anahtarları çağırabiliriz.
                    var setdegerleriuzunlugu = setdegerleri.length; // Set değerlerinin uzunluğunu alıyoruz.

                    for (var baslangic = 0; baslangic < setdegerleriuzunlugu; baslangic++) {
                        metinsonucu += "Eğitim Set Adı :" + setdegerleri[baslangic].icerik + "<br>Eğitmen Adı :" + setdegerleri[baslangic].egitmen + "<br>Eğitim Fiyatı :" + setdegerleri[baslangic].fiyat + "<br>";
                    }
                    document.getElementById("sonuc").innerHTML = metinsonucu;
                } else {
                    document.getElementById("sonuc").innerHTML = "Hata oluştu"
                }
            };
            istek.open("GET", "example.json", true);
            istek.send();
        }
    </script>
</body>

</html>
