function sweetAlert() {
    Swal.fire({
      title: 'BERHASIL LOGIN',
      text: 'Kamu berhasil login',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  function login() {
    sweetAlert();
  }