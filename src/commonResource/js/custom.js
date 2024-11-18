function toggleSections() {
  if (window.innerWidth <= 768) {
    $(".footer-links-wrapper ul").hide();

    $(
      ".expandable, .Services, .Account, .Store, .For, .Education, .Healthcare, .Apple-Values, .About-Apple"
    ).removeClass("expanded");

    $(
      ".expandable, .Services, .Account, .Store, .For, .Education, .Healthcare, .Apple-Values, .About-Apple"
    )
      .off("click")
      .on("click", function () {
        $(this).toggleClass("expanded");
        $(this).next("ul").slideToggle(500);
      });
  } else {
    $(
      ".expandable, .Services, .Account, .Store, .For, .Education, .Healthcare, .Apple-Values, .About-Apple"
    ).off("click");

    $(".footer-links-wrapper ul").show();
  }
}

toggleSections();

$(window).resize(function () {
  toggleSections();
});
