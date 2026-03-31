const form = document.getElementById('printOrderForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Demo order data:', data);

  formMessage.textContent = `Đã nhận yêu cầu demo của ${data.name || 'khách hàng'}. Bạn có thể tích hợp gửi email/Zalo/API ở bước tiếp theo.`;
  formMessage.classList.add('success');
  form.reset();
});
