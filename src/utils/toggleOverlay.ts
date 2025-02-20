export function showOverlay() {
  const overlay = document.getElementById('overlay'); // DOM에서 id가 'overlay'인 요소를 찾음
  if (overlay) overlay.classList.remove('hidden'); // 요소가 있으면 'hidden' 클래스를 제거함
}

export function hideOverlay() {
  const overlay = document.getElementById('overlay'); // DOM에서 id가 'overlay'인 요소를 찾음
  if (overlay) overlay.classList.add('hidden'); // 요소가 있으면 'hidden' 클래스를 추가함
}
