 // Pagination code program

        // Ambil elemen-elemen yang dibutuhkan dari DOM
        const tableBody = document.querySelector('tbody'); // Badan tabel
        const rowsPerPageSelect = document.getElementById('rowsPerPage'); // Dropdown jumlah baris
        const paginationContainer = document.querySelector('.pagination'); // Container untuk tombol pagination
        const allRows = Array.from(tableBody.querySelectorAll('tr')); // Ambil semua baris data produk
        let currentPage = 1; // Halaman saat ini (default: 1)
        let rowsPerPage = parseInt(rowsPerPageSelect.value); // Jumlah baris per halaman

        // Fungsi untuk menampilkan baris tabel sesuai halaman & jumlah baris per halaman
        function renderTable() {
            const start = (currentPage - 1) * rowsPerPage; // Index awal baris
            const end = start + rowsPerPage; // Index akhir baris

            // Tampilkan hanya baris yang masuk dalam range [start, end)
            allRows.forEach((row, index) => {
            row.style.display = index >= start && index < end ? '' : 'none';
            });

            // Render ulang pagination setelah tabel diperbarui
            renderPagination();
        }

        // Fungsi untuk membuat tombol pagination dinamis
        function renderPagination() {
            const totalPages = Math.ceil(allRows.length / rowsPerPage); // Hitung total halaman
            paginationContainer.innerHTML = ''; // Kosongkan isi sebelumnya

            // Tombol Prev
            const prevBtn = document.createElement('button');
            prevBtn.className = 'pagination-button';
            prevBtn.innerHTML = `
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="4.5 0 22 22"
            stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6" />
            </svg>
            <span class="pagination-text">Prev</span>
            `;
            prevBtn.disabled = currentPage === 1;
            prevBtn.onclick = () => {
            currentPage--;
            renderTable();
            };
            paginationContainer.appendChild(prevBtn);

            // Tombol halaman (angka)
            for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'pagination-button';
            if (i === currentPage) pageBtn.classList.add('active'); // Tambahkan style aktif
            pageBtn.textContent = i;
            pageBtn.onclick = () => {
                currentPage = i;
                renderTable();
            };
            paginationContainer.appendChild(pageBtn);
            }

            // Tombol Next
            const nextBtn = document.createElement('button');
            nextBtn.className = 'pagination-button';
            nextBtn.innerHTML = `
            <span class="pagination-text">Next</span>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="-4.5 0 22 22" stroke="currentColor" stroke-width="2">
                <polyline points="9 6 15 12 9 18" />
            </svg>
            `;
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.onclick = () => {
            currentPage++;
            renderTable();
            };
            paginationContainer.appendChild(nextBtn);
        }

        // Event ketika dropdown jumlah baris diubah
        rowsPerPageSelect.addEventListener('change', () => {
            rowsPerPage = parseInt(rowsPerPageSelect.value); // Ambil nilai baru
            currentPage = 1; // Kembali ke halaman 1
            renderTable();
        });

        // Jalankan saat halaman pertama kali dimuat
        renderTable();