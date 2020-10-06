$(function () {
  $('#adminTable').DataTable({
    responsive: true,
    autoWidth: false,
  });
  $('#requestTable').DataTable({
    responsive: true,
    autoWidth: false,
  });

  $('#violationTable tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
  });
  $('#example2').DataTable({
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: true,
    info: true,
    autoWidth: false,
    responsive: true,
  });
});
