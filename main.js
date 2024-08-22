alert("Chào mừng bạn đã đến với hệ thống QT Center\n- Sent by Trần Văn Quyền -")

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};


// Lắng nghe sự kiện 'contextmenu' trên toàn bộ trang
document.addEventListener('contextmenu', function(event) {
    // Ngăn chặn menu chuột phải mặc định
    event.preventDefault();
    // Hiển thị thông báo
    alert('Xin chào ! \nHành động của bạn bị vô hiệu hóa !\n- Sent by Trần Văn Quyền -');
});

// Lắng nghe sự kiện 'keydown' để kiểm tra khi người dùng nhấn phím F12
document.addEventListener('keydown', function(event) {
    // Kiểm tra nếu phím F12 (mã phím 123) được nhấn
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        alert('Xin Chào ! \nBạn không thể mở DevTools bằng F12 ! \n- Sent by Trần Văn Quyền -');
    }
});