document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const image = document.getElementById('image').files.length;
    const nationality = document.getElementById('nationality').value;
  
    if (!name || !gender || !image || !nationality) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
  
    alert('Đăng ký thành công!');
  });
  