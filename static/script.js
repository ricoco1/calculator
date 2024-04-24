$(document).ready(function () {
  $('#hitung_pengurangan').click(function () {
      hitungPengurangan();
  });
  $('#hitung_penjumlahan').click(function () {
    hitungPenjumlahan();
});
$('#hitung_perkalian').click(function () {
  hitungPerkalian();
});
$('#hitung_pembagian').click(function () {
  hitungPembagian();
});

  $('#tambah').click(function () {
      window.location.href = "/";
  });

  $('#perkalian').click(function () {
      window.location.href = "/perkalian";
  });

  $('#pembagian').click(function () {
      window.location.href = "/pembagian";
  });

  $('#pengurangan').click(function () {
      window.location.href = "/pengurangan";
  });

  function hitungPengurangan() {
      var number1 = $('#number1').val();
      var number2 = $('#number2').val();

      $.ajax({
          type: 'POST',
          url: '/pengurangan',
          data: {
              number1: number1,
              number2: number2
          },
          success: function (response) {
              Swal.fire({
                  icon: 'success',
                  title: 'Hasil Pengurangan',
                  text: 'Pengurangan: ' + number1 + ' - ' + number2 + ' = ' + response.hasil
              });
          },
          error: function () {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops',
                  text: 'Terjadi kesalahan saat menghitung pengurangan'
              });
          }
      });
  }

  function hitungPenjumlahan() {
      var number1 = $('#number1').val();
      var number2 = $('#number2').val();

      $.ajax({
          type: 'POST',
          url: '/penjumlahan',
          data: {
              number1: number1,
              number2: number2
          },
          success: function (response) {
              Swal.fire({
                  icon: 'success',
                  title: 'Hasil Penjumlahan',
                  text: 'Penjumlahan: ' + number1 + ' + ' + number2 + ' = ' + response.hasil
              });
          },
          error: function () {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops',
                  text: 'Terjadi kesalahan saat menghitung penjumlahan'
              });
          }
      });
  }
  function hitungPerkalian() {
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();

    $.ajax({
        type: 'POST',
        url: '/perkalian',
        data: {
            number1: number1,
            number2: number2
        },
        success: function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Hasil Perkalian',
                text: 'Perkalian: ' + number1 + ' x ' + number2 + ' = ' + response.hasil
            });
        },
        error: function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: 'Terjadi kesalahan saat menghitung pengurangan'
            });
        }
    });
}
function hitungPembagian() {
  var number1 = $('#number1').val();
  var number2 = $('#number2').val();

  $.ajax({
      type: 'POST',
      url: '/pembagian',
      data: {
          number1: number1,
          number2: number2
      },
      success: function (response) {
          Swal.fire({
              icon: 'success',
              title: 'Hasil Pembagian',
              text: 'Pembagian: ' + number1 + ' / ' + number2 + ' = ' + response.hasil
          });
      },
      error: function () {
          Swal.fire({
              icon: 'error',
              title: 'Oops',
              text: 'Terjadi kesalahan saat menghitung pengurangan'
          });
      }
  });
}
});
