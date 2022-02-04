$(document).ready(function () {
  let setler = [
    {
      icerik: "Javascript Eğitim Seti",
      egitmen: "Yazarbir",
      fiyat: "200,00 TL",
      yil: "2020",
    },
    {
      icerik: "HTML Eğitim Seti",
      egitmen: "Yazariki",
      fiyat: "100,00 TL",
      yil: "2017",
    },
    {
      icerik: "CSS Eğitim Seti",
      egitmen: "Yazarüç",
      fiyat: "150,00 TL",
      yil: "2019",
    },
    {
      icerik: "Python Eğitim Seti",
      egitmen: "Yazardört",
      fiyat: "300,00 TL",
      yil: "2021",
    },
    {
      icerik: "MySql Eğitim Seti",
      egitmen: "Yazarbeş",
      fiyat: "250,00 TL",
      yil: "2018",
    },
  ];
  let jsonVeri = JSON.stringify(setler); // String yapısı.
  let veri = JSON.parse(jsonVeri); // JSON veri yapısı.

  for (let egitim = 0; egitim < veri.length; egitim++) {
    let tablo = "<tr>";
    tablo += "<td>" + veri[egitim].icerik + "</td>";
    tablo += "<td>" + veri[egitim].egitmen + "</td>";
    tablo += "<td>" + veri[egitim].fiyat + "</td>";
    tablo += "<td>" + veri[egitim].yil + "</td>";
    tablo += "</tr>";
    $("#setTablo").append(tablo);
  }
});
