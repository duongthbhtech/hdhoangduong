const form = document.getElementById('printOrderForm');
const formMessage = document.getElementById('formMessage');
const backToTop = document.getElementById('backToTop');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  const subject = encodeURIComponent(`[HD Hoàng Dương] Yêu cầu đặt in - ${data.name || 'Khách hàng'}`);
  const body = encodeURIComponent([
    `Họ tên: ${data.name || ''}`,
    `Số điện thoại: ${data.phone || ''}`,
    `Loại ấn phẩm: ${data.product || ''}`,
    `Số lượng: ${data.quantity || ''}`,
    `Kích thước: ${data.size || ''}`,
    `Thời gian cần hàng: ${data.deadline || ''}`,
    `Nội dung yêu cầu: ${data.message || ''}`
  ].join('\n'));

  const mailtoUrl = `mailto:duongth.bhtech@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoUrl;

  formMessage.textContent = 'Đã mở ứng dụng email để gửi yêu cầu đặt in. Nếu muốn gửi tự động hoàn toàn, có thể nối thêm API form sau.';
  formMessage.classList.add('success');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
