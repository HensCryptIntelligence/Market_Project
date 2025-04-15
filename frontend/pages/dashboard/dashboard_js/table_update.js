
        // Toggle editing code program

        function toggleDropdown(button) {
            const dropdown = button.nextElementSibling;

            // Tutup semua dropdown lain
            document.querySelectorAll('.edit-dropdown').forEach(drop => {
            if (drop !== dropdown) {
                drop.classList.remove('show');
                setTimeout(() => {
                drop.style.display = 'none';
                }, 200); // waktu tunggu sebelum sembunyi total (sesuai animasi CSS)
            }
            });

            // Toggle dropdown yang ditekan
            if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            setTimeout(() => {
                dropdown.style.display = 'none';
            }, 200);
            } else {
            dropdown.style.display = 'flex'; // atau 'block' tergantung struktur dropdown-mu
            void dropdown.offsetWidth; // trigger reflow untuk animasi
            dropdown.classList.add('show');
            }
        }

        function editEntity() {
            alert('Fitur edit belum diimplementasikan.');
        }

        function deleteEntity() {
            const confirmDelete = confirm('Yakin ingin menghapus produk ini?');
            if (confirmDelete) {
            alert('Produk dihapus (simulasi).');
            }
        }

        // Tutup dropdown saat klik di luar area tombol dan dropdown
        window.addEventListener('click', function (e) {
            if (
            !e.target.matches('.edit-toggle') &&
            !e.target.closest('.edit-dropdown')
            ) {
            document.querySelectorAll('.edit-dropdown').forEach(drop => {
                drop.classList.remove('show');
                setTimeout(() => {
                drop.style.display = 'none';
                }, 200);
            });
            }
        });

       
