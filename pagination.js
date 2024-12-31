document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("#data-table tbody");
  const paginationContainer = document.querySelector(".pagination");
  const rowsPerPageSelect = document.getElementById("rows-per-page");

  const data = generateSampleData(50); // 50 hàng dữ liệu mẫu
  let currentPage = 1;
  let rowsPerPage = parseInt(rowsPerPageSelect.value);

  // Tạo dữ liệu mẫu
  function generateSampleData(count) {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: `Name ${i}`,
        age: Math.floor(Math.random() * 50) + 20,
        country: `Country ${i}`,
      });
    }
    return data;
  }

  // Hiển thị bảng dữ liệu
  function displayTableData(data, page, rowsPerPage) {
    tableBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.country}</td>
            `;
      tableBody.appendChild(tr);
    });
  }

  // Tạo nút phân trang
  function createPaginationButtons(data, rowsPerPage) {
    paginationContainer.innerHTML = "";
    const pageCount = Math.ceil(data.length / rowsPerPage);

    for (let i = 1; i <= pageCount; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.classList.add("page-btn");
      if (i === currentPage) {
        button.classList.add("active");
      }

      button.addEventListener("click", () => {
        currentPage = i;
        updateTable();
      });

      paginationContainer.appendChild(button);
    }
  }

  // Cập nhật bảng và phân trang
  function updateTable() {
    displayTableData(data, currentPage, rowsPerPage);
    createPaginationButtons(data, rowsPerPage);
  }

  // Lắng nghe sự kiện thay đổi số lượng dòng
  rowsPerPageSelect.addEventListener("change", () => {
    rowsPerPage = parseInt(rowsPerPageSelect.value);
    currentPage = 1; // Reset về trang đầu tiên
    updateTable();
  });

  // Khởi tạo
  updateTable();
});
