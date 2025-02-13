const phonePattern = /^[0-9]{9,10}$/;

document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById('course').value;
  
    if (!name || !email || !phone || !address || !gender || !course) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Email không hợp lệ.");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Số điện thoại không hợp lệ.");
      return;
    }
  
    alert("Bạn đã gửi thông tin thành công!");
    
});
