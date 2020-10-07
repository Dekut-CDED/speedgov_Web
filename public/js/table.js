$(function () {
  $('#adminTable').DataTable({
    destroy: true,
    responsive: true,
    autoWidth: false,
  });

  $('#violation').DataTable({
    destroy: true,
    responsive: true,
    autoWidth: true,
    searching: false,
    pagingType: 'simple',
    pageLength: 10,
    blengthChange: 'false',
  });

  $('#requestTable').DataTable({
    responsive: true,
    autoWidth: false,
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
