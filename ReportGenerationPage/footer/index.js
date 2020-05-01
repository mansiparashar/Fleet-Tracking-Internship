<link rel="stylesheet" href="../Themes/Trakzee/css/usercolortheme/user_1.css?v=1588138336076">
<link rel="stylesheet" href="https://static.uffizio.com/4.8.34/Themes/Trakzee/css/main.css?VTSv4.8.34">
<script language="JavaScript" src="https://static.uffizio.com/4.8.34/javascript/jsSet.js"></script>
<script type="text/javascript" src="https://static.uffizio.com/4.8.34/javascript/JQuery/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="https://static.uffizio.com/4.8.34/javascript/JQuery/jquery-ui.min.js"></script>
<script language="javascript" src="https://static.uffizio.com/4.8.34/javascript/datetimepicker.js?VTSv4.8.34"></script>
<script language="javascript" src="https://static.uffizio.com/4.8.34/javascript/overviewutility.js?VTSv4.8.34"></script>
<script language="javascript" src="https://static.uffizio.com/4.8.34/javascript/pamfunctions.js?VTSv4.8.34"></script>
<script language="javascript" src="https://static.uffizio.com/4.8.34/javascript/AllSummary.js?VTSv4.8.34"></script>
<script language="javaScript">
  /*Added by Hiten Patel for temporary solution caused by chrome update 44.0.2403.89*/
  if (top.frames['divframe'].frames['windowframe'].document.getElementById('bottomframe').style.display == "none")
    top.frames['divframe'].frames['windowframe'].document.getElementById('bottomframe').style.display = "block";
  //	else
  //		top.frames['divframe'].frames['windowframe'].document.getElementById('bottomframe').style.display = "none";
  /*Ended by Hiten Patel for temporary solution caused by chrome update 44.0.2403.89*/

  function SetPagingLink() {
    var dialogBox = $(top.frames['divframe'].frames['windowframe'].frames['contentframe'].document.getElementById("detail_showPreview")).closest(".ui-dialog");
    var isDialogOpen = ($(dialogBox).css("display") == "block") ? true : false;
    if (!isDialogOpen) {
      console.log("SetPagingLink*********************************************************");


      if (document.getElementById('pagecounter')) {
        var pagecounter = document.getElementById('pagecounter').value;
        var totalpages = document.getElementById('totpages').innerHTML;

        if (totalpages == pagecounter) {
          //document.getElementById("href_next").href="#";
          //document.getElementById("href_next").removeAttribute("href");
          //document.getElementById("href_last").href="#";
          //document.getElementById("href_last").removeAttribute("href");
          //document.getElementById("F1").src = top.static_resource+ "Themes/Trakzee/images/F1Deactive.png";
          //document.getElementById("F2").src = top.static_resource+"Themes/Trakzee/images/F2Deactive.png";
          //document.getElementById("F2").removeAttribute("onclick");
          //document.getElementById("F2").src = top.static_resource+"Themes/Trakzee/images/rightdeactive.svg" ;
          $('#F2').removeClass("navItem");
          $('#F2').removeAttr("onclick");
          $('#F2').css("filter", "opacity(50%)");
        }
        if (pagecounter == 1) {
          //document.getElementById("href_first").href="#";
          //document.getElementById("href_first").removeAttribute("href");
          //document.getElementById("href_previous").href="#";
          //document.getElementById("href_previous").removeAttribute("href");
          //document.getElementById("B1").src = top.static_resource+"Themes/Trakzee/images/B1Deactive.png" ;
          //document.getElementById("B2").src = top.static_resource+"Themes/Trakzee/images/B2Deactive.png" ;
          //document.getElementById("F1").removeAttribute("onclick");
          //document.getElementById("F1").src = top.static_resource+"Themes/Trakzee/images/leftdeactive.svg" ;
          $('#F1').removeClass("navItem");
          $('#F1').removeAttr("onclick");
          $('#F1').css("filter", "opacity(50%)");
        }
      }
    } else {
      var topObjlocal = top.frames['divframe'].frames['windowframe'].frames['contentframe'].frames['iReportMap'].frames['divframe'].frames['windowframe'].frames['contentframe'];
      var dialogWindowFrame = top.frames['divframe'].frames['windowframe'].frames['contentframe'].frames['iReportMap'].frames['divframe'].frames['windowframe'];

      if (dialogWindowFrame.frames['bottomframe'].document.getElementById('pagecounter')) {
        var pagecounter = dialogWindowFrame.frames['bottomframe'].document.getElementById('pagecounter').value;
        var totalpages = dialogWindowFrame.frames['bottomframe'].document.getElementById('totpages').innerHTML;
        if (totalpages == pagecounter) {
          //document.getElementById("href_next").href="#";
          //dialogWindowFrame.document.getElementById("href_next").removeAttribute("href");
          //document.getElementById("href_last").href="#";
          //dialogWindowFrame.document.getElementById("href_last").removeAttribute("href");
          //dialogWindowFrame.document.getElementById("F1").src = top.static_resource+"Themes/Trakzee/images/F1Deactive.png" ;
          //dialogWindowFrame.document.getElementById("F2").src = top.static_resource+"Themes/Trakzee/images/F2Deactive.png" ;
          //document.getElementById("F2").removeAttribute("onclick");
          //document.getElementById("F2").src = top.static_resource+"Themes/Trakzee/images/rightdeactive.svg" ;
          $('#F2').removeClass("navItem");
          $('#F2').removeAttr("onclick");
          $('#F2').css("filter", "opacity(50%)");
        }
        if (pagecounter == 1) {
          //document.getElementById("href_first").href="#";
          //dialogWindowFrame.document.getElementById("href_first").removeAttribute("href");
          //document.getElementById("href_previous").href="#";
          //dialogWindowFrame.document.getElementById("href_previous").removeAttribute("href");
          //dialogWindowFrame.document.getElementById("B1").src = top.static_resource+"Themes/Trakzee/images/B1Deactive.png" ;
          //dialogWindowFrame.document.getElementById("B2").src = top.static_resource+"Themes/Trakzee/images/B2Deactive.png" ;
          document.getElementById("F1").removeAttribute("onclick");
          document.getElementById("F1").src = top.static_resource + "Themes/Trakzee/images/leftdeactive.svg";
          $('#F1').removeClass("navItem");
          $('#F1').removeAttr("onclick");
          $('#F1').css("filter", "opacity(50%)");
        }
      }
    }
  }


  function searchData() {
    top.frames['divframe'].frames['windowframe'].frames['contentframe'].searchData(document.getElementById('searchData').value, document.getElementById('searchfield').value);
  }

  function NewdoSearchOnEnter(event) {
    if (event.which == 13 || event.keyCode == 13) {
      top.frames['divframe'].frames['windowframe'].frames['contentframe'].searchData(document.getElementById('searchData').value, document.getElementById('searchfield').value);
    }
  }


  $(function() {
    //Auto Complete Off For Search Box >> Manthan Patel >> 23-08-18
    $("input[name='searchterm']").attr("autocomplete", "off");
  });
</script>
<script type="text/javascript">
  var topObject = top.frames['divframe'].frames['windowframe'].frames['contentframe'];
  if (topObject.document.getElementById('commonIframe') && $(topObj.document.getElementById('commonIframe')).is(":visible")) {
    var x = topObj.document.getElementById('commonIframe');
    var y = (x.contentWindow || x.contentDocument);
    topObject = y.frames['divframe'].frames['windowframe'].frames['contentframe'];
  }

  $(document).ready(function() {
    var sBack = top.frames['divframe'].frames['windowframe'].jsHT.get("back") == null ? "Back" : top.frames['divframe'].frames['windowframe'].jsHT.get("back");
    var sReset = top.frames['divframe'].frames['windowframe'].jsHT.get("Reset") == null ? "Reset" : top.frames['divframe'].frames['windowframe'].jsHT.get("Reset");
    var sDownloadInExcel = top.frames['divframe'].frames['windowframe'].jsHT.get("Excel Download") == null ? "Excel Download" : top.frames['divframe'].frames['windowframe'].jsHT.get("Excel Download");
    var sDownloadInPDF = top.frames['divframe'].frames['windowframe'].jsHT.get("DownloadinPDFformat") == null ? "Download in PDF format" : top.frames['divframe'].frames['windowframe'].jsHT.get("DownloadinPDFformat");
    var sLast = top.frames['divframe'].frames['windowframe'].jsHT.get("Last") == null ? "Last" : top.frames['divframe'].frames['windowframe'].jsHT.get("Last");
    var sPage = top.frames['divframe'].frames['windowframe'].jsHT.get("Page") == null ? "Page" : top.frames['divframe'].frames['windowframe'].jsHT.get("Page");
    var sPrevious = top.frames['divframe'].frames['windowframe'].jsHT.get("Previous") == null ? "Previous" : top.frames['divframe'].frames['windowframe'].jsHT.get("Previous");
    var sRecordsPerPage = top.frames['divframe'].frames['windowframe'].jsHT.get("recordsperpage") == null ? "Record Per Page" : top.frames['divframe'].frames['windowframe'].jsHT.get("recordsperpage");
    var sLangAll = top.frames['divframe'].frames['windowframe'].jsHT.get("All") == null ? "All" : top.frames['divframe'].frames['windowframe'].jsHT.get("All");
    $(".bottom-icon-box").find(".bt-bs_back").attr("title", sBack);
    $(".bottom-icon-box").find(".bt-bs_reset").attr("title", sReset);
    $(".bottom-icon-box").find(".bt-bs_exceldownload").attr("title", sDownloadInExcel);
    $(".bottom-icon-box").find(".bt-PDF").attr("title", sDownloadInPDF);
    $(".trpagination .bt-recordperpage").attr("title", sRecordsPerPage);
    $(".trpagination #F1").attr("title", sPrevious);
    $(".trpagination .bt-page").attr("title", sPage);
    $(".trpagination .bt-pagenext").attr("title", sLast);
    if ($("select[name='searchfield'] option[value='All']").length > 0) {
      $("select[name='searchfield'] option[value='All']").text(sLangAll);
    }
  });
</script>


<script>
  var iPageCounterHidden = document.getElementById("hcounter").value;
  var objSelect = document.getElementById("pagecounter");
  objSelect.length = 0;
  var iLength = document.getElementById("totpages").innerHTML;
  var k = 0;
  for (var i = 0; i < parseInt(iLength); i++) {
    objSelect[i] = new Option(i + 1, i + 1);
    if (parseInt(iPageCounterHidden) == (i + 1)) {
      k = i;
    }
  }
  objSelect[k].selected = true;
</script>

<script type="text/javascript">
  var totalrow = topObject.getTotalRecords();
  var defaulttotal = "20";
  for (var i = 0; i < document.getElementById("recordsperpages").length; i++) {
    if (document.getElementById("recordsperpages").options[i].value == totalrow) {
      defaulttotal = totalrow;
    }
  }
  document.getElementById("recordsperpages").value = defaulttotal;


  //var iTotalPageLength = document.
</script>
