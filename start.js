const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesSize = 16; // initial font size for Yes
let noSize = 16; // initial font size for No

noBtn.addEventListener('click', () => {
  // Increase YES
  yesSize += 8;
  yesBtn.style.fontSize = yesSize + 'px';
  yesBtn.style.padding = '20px 35px';

  // Decrease NO
  noSize -= 3;
  if (noSize < 6) noSize = 0; // minimum size
  noBtn.style.fontSize = noSize + 'px';
  noBtn.style.padding = noSize * 0.8 + 'px ' + noSize * 1.5 + 'px';

  // If too small, hide NO
  if (noSize <= 0) {
    noBtn.style.display = 'none';
  }
});

// YES click → go to main site
yesBtn.addEventListener('click', () => {
  window.location.href = 'main.html';
});

// Instead of loading a new page, just hide start and show main section
yesBtn.addEventListener('click', () => {
  startSection.style.display = 'none';
  hiDexterSection.style.display = 'flex'; // show first card
});
