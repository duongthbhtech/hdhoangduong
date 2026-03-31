const form = document.getElementById('printOrderForm');
const formMessage = document.getElementById('formMessage');

function buildTelegramText(data) {
  return [
    'YEU CAU DAT IN MOI',
    `Ho ten: ${data.name || ''}`,
    `So dien thoai: ${data.phone || ''}`,
    `Loai an pham: ${data.product || ''}`,
    `So luong: ${data.quantity || ''}`,
    `Kich thuoc: ${data.size || ''}`,
    `Thoi gian can hang: ${data.deadline || ''}`,
    `Noi dung: ${data.message || ''}`
  ].join('\n');
}

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
  const telegramText = encodeURIComponent(buildTelegramText(data));
  const telegramShareUrl = `https://t.me/share/url?url=&text=${telegramText}`;

  window.location.href = mailtoUrl;
  window.open(telegramShareUrl, '_blank', 'noopener,noreferrer');

  formMessage.textContent = 'Đã mở email và cửa sổ Telegram share để bạn gửi yêu cầu. Nếu muốn gửi thẳng vào Telegram tự động, cần thêm bot token + chat id.';
  formMessage.classList.add('success');
});
