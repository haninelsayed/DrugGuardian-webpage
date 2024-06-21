// $(document).ready(function(){
//   $('#btn1').hover(
//       function() {
//           $(this).css({'background-color': '#f8f9fa', 'color': 'black', 'border': 'none'});
//           $('#btn2').css({'background-color': 'transparent', 'color': '#f8f9fa', 'border': '1px solid #f8f9fa'});
//       },
//       function() {
//           $(this).css({'background-color': '#f8f9fa', 'color': 'black', 'border': 'none'});
//           $('#btn2').css({'background-color': 'transparent', 'color': '#f8f9fa', 'border': '1px solid #f8f9fa'});
//       }
//   );
//   $('#btn2').hover(
//       function() {
//           $(this).css({'background-color': '#f8f9fa', 'color': 'black', 'border': 'none'});
//           $('#btn1').css({'background-color': 'transparent', 'color': '#f8f9fa', 'border': '1px solid #f8f9fa'});
//       },
//       function() {
//           $(this).css({'background-color': '#f8f9fa', 'color': 'black', 'border': 'none'});
//           $('#btn1').css({'background-color': 'transparent', 'color': '#f8f9fa', 'border': '1px solid #f8f9fa'});
//       }
//   );
// });

$(document).ready(function(){
  $('.download-link').hover(
      function() {
          // On mouse enter, set the text color to white and background color for the hovered link
          $(this).css({'background-color': '#f8f9fa', 'color': 'black', 'border': 'none'});
      },
      function() {
          // On mouse leave, restore the text color and background for non-active links
          if (!$(this).hasClass('btn-light')) {
              $(this).css({'background-color': 'transparent', 'color': '#f8f9fa', 'border': '1px solid #f8f9fa'});
          } else {
              // Restore the active link styles specifically
              $(this).css('color', 'black').css('background-color', '#f8f9fa').css('border', 'none');
          }
      }
  );

  // Ensure the active link color is initially set correctly
  $('.download-link.btn-light').css('color', '#f8f9fa').css('background-color', 'transparent');
});