const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const tanggalEl = document.getElementById("tanggal");

// Ambil tanggal hari ini
const today = new Date().toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

tanggalEl.textContent = today;

// Key LocalStorage berdasarkan tanggal
const storageKey = "rokok_" + new Date().toISOString().slice(0, 10);

// Ambil data lama
let count = localStorage.getItem(storageKey);
count = count ? parseInt(count) : 0;
countEl.textContent = count;

// Tambah
plusBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

// Kurang
minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  if (confirm("Yakin mau reset hitungan hari ini?")) {
    count = 0;
    updateCount();
  }
});

// Update tampilan & simpan
function updateCount() {
  countEl.textContent = count;
  localStorage.setItem(storageKey, count);
}
