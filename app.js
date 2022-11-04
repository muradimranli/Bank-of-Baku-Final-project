$(document).ready(function () {
  $(".kredit").mouseover(function () {
    $(".kredit-content").fadeIn();
  });
  $(".kredit").mouseout(function () {
    t = setTimeout(function () {
      $(".kredit-content").hide();
    }, 1);
    $(".kredit-content")
      .on("mouseenter", function () {
        $(".kredit-content").fadeIn();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".kredit-content").hide();
      });
  });
});

$(document).ready(function () {
  $(".emanet").mouseover(function () {
    $(".emanet-content").fadeIn();
  });
  $(".emanet").mouseout(function () {
    t = setTimeout(function () {
      $(".emanet-content").hide();
    }, 1);
    $(".emanet-content")
      .on("mouseenter", function () {
        $(".emanet-content").fadeIn();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".emanet-content").hide();
      });
  });
});
$(document).ready(function () {
  $(".kocurme").mouseover(function () {
    $(".kocurme-content").fadeIn();
  });
  $(".kocurme").mouseout(function () {
    t = setTimeout(function () {
      $(".kocurme-content").hide();
    }, 1);
    $(".kocurme-content")
      .on("mouseenter", function () {
        $(".kocurme-content").fadeIn();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".kocurme-content").hide();
      });
  });
});
$(document).ready(function () {
  $(".onlayn").mouseover(function () {
    $(".onlayn-content").fadeIn();
  });
  $(".onlayn").mouseout(function () {
    t = setTimeout(function () {
      $(".onlayn-content").hide();
    }, 1);
    $(".onlayn-content")
      .on("mouseenter", function () {
        $(".onlayn-content").fadeIn();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".onlayn-content").hide();
      });
  });
});
$(document).ready(function () {
  $(".diger").mouseover(function () {
    $(".diger-content").fadeIn();
  });
  $(".diger").mouseout(function () {
    t = setTimeout(function () {
      $(".diger-content").hide();
    }, 1);
    $(".diger-content")
      .on("mouseenter", function () {
        $(".diger-content").fadeIn();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".diger-content").hide();
      });
  });
});
$(document).ready(function () {
  $(".fa-search").click(function () {
    $(".hamisi").fadeOut(500);
    $("#header-closed").fadeIn(500);
  });
});
$(document).ready(function () {
  $(".fa-times").click(function () {
    $("#header-closed").fadeOut(500);
    $(".hamisi").fadeIn(500);
  });
});
$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".accordion-headerr").toggle(500);
    $(".all-main").toggle(500);
  });
});

$(document).ready(function () {
  $(".kart").mouseover(function () {
    $(".kart-content").fadeIn();
  });
  $(".kart").mouseout(function () {
    t = setTimeout(function () {
      $(".kart-content").fadeOut();
    }, 1);
    $(".kart-content")
      .on("mouseenter", function () {
        $(".kart-content").fadeIn();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".kart-content").hide();
        clearTimeout(t);
      });
  });
});

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(document).ready(function () {
  $(".option").click(function () {
    $(".dropdown-form").css("display", "none")
  })
});
$(document).ready(function () {
  $("#drop-btn").click(function () {
    $(".dropdown-form").css("display", "block")
  })
});
$(document).ready(function () {
  $("#drop-btn2").click(function () {
    $(".dropdown-form").css("display", "block")
  })
});
$(document).ready(function () {
  $("#drop-btn3").click(function () {
    $(".dropdown-form").css("display", "block")
  })
});
$(document).ready(function () {
  $("#drop-btn4").click(function () {
    $(".dropdown-form").css("display", "block")
  })
});
$(document).ready(function () {
  $("#drop-btn5").click(function () {
    $(".dropdown-form").css("display", "block")
  })
});


let dropdownLabel = document.getElementById("dropdown-label6");
let dropdownFood = document.getElementById("dropdown-food");
function debetDropdown() {
  dropdownFood.classList.toggle("is-open");
}
document.formFood6.onclick = function () {
  let selectedFood = document.querySelector(
    "input[name = selected-food]:checked"
  );
  if (selectedFood != null) {
    let span = selectedFood.parentNode.querySelector("span").innerHTML;
    dropdownLabel.innerHTML = span;
    dropdownFood.classList.remove("is-open");
  }
};


let dropdownLabel1 = document.getElementById("dropdown-label1");
let dropdownFood1 = document.getElementById("dropdown-food1");
function kreditDropdown() {
  dropdownFood1.classList.toggle("is-open");
}
document.formFood1.onclick = function () {
  let selectedFood1 = document.querySelector(
    "input[name = selected-food1]:checked"
  );
  if (selectedFood1 != null) {
    let span = selectedFood1.parentNode.querySelector("span").innerHTML;
    dropdownLabel1.innerHTML = span;
    dropdownFood1.classList.remove("is-open");
  }
};

let dropdownLabel2 = document.getElementById("dropdown-label2");
let dropdownFood2 = document.getElementById("dropdown-food2");
function lokalDropdown() {
  dropdownFood2.classList.toggle("is-open");
}
document.formFood2.onclick = function () {
  let selectedFood2 = document.querySelector(
    "input[name = selected-food2]:checked"
  );
  if (selectedFood2 != null) {
    let span = selectedFood2.parentNode.querySelector("span").innerHTML;
    dropdownLabel2.innerHTML = span;
    dropdownFood2.classList.remove("is-open");
  }
};
let dropdownLabel3 = document.getElementById("dropdown-label3");
let dropdownFood3 = document.getElementById("dropdown-food3");
function virtualDropdown() {
  dropdownFood3.classList.toggle("is-open");
}
document.formFood3.onclick = function () {
  let selectedFood3 = document.querySelector(
    "input[name = selected-food3]:checked"
  );
  if (selectedFood3 != null) {
    let span = selectedFood3.parentNode.querySelector("span").innerHTML;
    dropdownLabel3.innerHTML = span;
    dropdownFood3.classList.remove("is-open");
  }
};

//debet cards img and texts
$(document).ready(function () {
  $("#gold").click(function () {
    $("#dropdown-label").text("Mastercard Gold")
    $("#vesait").text("Şəxsi vəsaitinizdən istifadə üçün")
    $("#tabimgg").attr("src", "/img/mastercard.png")
    $(".tab-text-header").css("display", "block")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("20, 30, 40 AZN")
    $("#aylar").text("12, 24, 36 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "flex")
    $(".content").css("width", "60.333%")
  });
});
$(document).ready(function () {
  $("#standart").click(function () {
    $("#dropdown-label").text("Mastercard Standart")
    $("#tabimgg").attr("src", "/img/mastercardstandart.png")
    // $(".tab-text-header").css("display","none")
    $("#vesait").text("")
    $("#kartqiymet").text("8, 14, 20 AZN")
    $("#kartqiymetp").text("Kartın qiyməti")
    $("#muddet").text("12, 24, 36 ay")
    $("#aylar").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "60.333%")
  });
});
$(document).ready(function () {
  $("#visa-gold").click(function () {
    $("#dropdown-label").text("Visa Gold")
    $("#tabimgg").attr("src", "/img/visagold.png")
    $("#vesait").text("Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("20, 30, 40 AZN")
    $("#aylar").text("12, 24, 36 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "110.333%")
  });
});
$(document).ready(function () {
  $("#infinite").click(function () {
    $("#dropdown-label").text("Visa infinite")
    $("#tabimgg").attr("src", "/img/visainfinite.png")
    $("#vesait").text("Şəxsi vəsaitdən istifadə üçün nəzərdə tutulmuşdur.")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("100, 300, 400 AZN")
    $("#aylar").text("12, 24, 36 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "110.333%")
  });
});
$(document).ready(function () {
  $("#classic").click(function () {
    $("#dropdown-label").text("Visa Classic")
    $("#tabimgg").attr("src", "/img/visaclassic.png")
    $("#vesait").text("Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("8, 14, 20 AZN")
    $("#aylar").text("12, 24, 36 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "102.333%")
  });
});
$(document).ready(function () {
  $("#virtual").click(function () {
    $("#dropdown-label").text("MC Virtual Card")
    $("#tabimgg").attr("src", "/img/virtualcard.png")
    $("#vesait").text("İnternetdə istifadə üçün ən təhlükəsiz vasitə və virtual məkanda rahat alış-veriş")
    $("#vesait").css("width", "374px")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("2 AZN (hər bir ay üçün əlavə 1 AZN)")
    $("#aylar").text("Nəzərdə tutulmayıb")
    $("#muddet").text("Minimal vəsaitin qoyuluşu")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "102.333%")
  });
});
$(document).ready(function () {
  $("#genc").click(function () {
    $("#dropdown-label").text("Bolkart Gənc debet")
    $("#tabimgg").attr("src", "/img/gencdebet.png")
    $("#vesait").text("Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("7, 12, 16 AZN")
    $("#aylar").text("12, 24, 36 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "102.333%")
  });
});
$(document).ready(function () {
  $("#aile").click(function () {
    $("#dropdown-label").text("Bolkart Ailə debet")
    $("#tabimgg").attr("src", "/img/ailedebet.png")
    $("#vesait").text("Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("8, 14, 18 AZN")
    $("#aylar").text("12, 24, 36 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "102.333%")
  });
});
$(document).ready(function () {
  $("#gold-debet").click(function () {
    $("#dropdown-label").text("Bolkart Gold debet")
    $("#tabimgg").attr("src", "/img/golddebet.png")
    $("#vesait").text("Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("50 AZN")
    $("#aylar").text("24, 36 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "102.333%")
  });
});
$(document).ready(function () {
  $("#diamond").click(function () {
    $("#dropdown-label").text("Bolkart Diamond debet")
    $("#tabimgg").attr("src", "/img/diamonddebet.png")
    $("#vesait").text("Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir")
    $("#kartqiymet").text("Kartın qiyməti")
    $("#kartqiymetp").text("150 AZN")
    $("#aylar").text("24 ay")
    $("#muddet").text("Müddət")
    $(".sigorta").css("display", "none")
    $(".content").css("width", "102.333%")
  });
});
$(document).ready(function () {
  $("#genc-kredit").click(function () {
    $(".dropdown-label1").text("Bolkart Gənc Kredit")
    $("#tabimgg2").attr("src", "/img/bolkart-genc.png")
    $(".tab-text-header2").css("display", "block")
    $(".sigorta2").css("display", "flex")
    $("#aylar2").text("35 ay")
    $("#kartqiymetp2").text("min.200 AZN - maks.5000 AZN")
    $(".content").css("width", "60.333%")
  });
});
$(document).ready(function () {
  $("#umumikredit-meqsedli").click(function () {
    $(".dropdown-label1").text("Ümumi məqsədli kredit kart")
    $("#tabimgg2").attr("src", "/img/umumi.png")
    $(".tab-text-header2").css("display", "none")
    $(".sigorta2").css("display", "none")
    $("#aylar2").text("24 ay")
    $("#kartqiymetp2").text("min.300 AZN - maks.3000 AZN")
  });
});
$(document).ready(function () {
  $("#aile-kredit").click(function () {
    $(".dropdown-label1").text("Bolkart Ailə kredit")
    $("#tabimgg2").attr("src", "/img/bolkart-aile.png")
    $(".tab-text-header2").css("display", "block")
    $(".sigorta2").css("display", "flex")
    $("#aylar2").text("35 ay")
    $("#kartqiymetp2").text("min.200 AZN - maks.5000 AZN")
  });
});
$(document).ready(function () {
  $("#gold-kredit").click(function () {
    $(".dropdown-label1").text("Bolkart Gold kredit")
    $("#tabimgg2").attr("src", "/img/mastercard.png")
    $(".tab-text-header2").css("display", "block")
    $(".sigorta2").css("display", "flex")
    $("#aylar2").text("35 ay")
    $("#gunler").text("45 gün")
    $("#kartqiymetp2").text("min.3000 AZN - maks.7000 AZN")
  });
});
$(document).ready(function () {
  $("#qizil").click(function () {
    $("#tabimgg3").attr("src", "/img/qizil.png")
    $(".dropdown-label2").text("Dostlar klubu Qızıl")
  });
});
$(document).ready(function () {
  $("#gumus").click(function () {
    $("#tabimgg3").attr("src", "/img/gumus.png")
    $(".dropdown-label2").text("Dostlar klubu Gümüş")
  });
});
$(document).ready(function () {
  $("#brilliant").click(function () {
    $("#tabimgg3").attr("src", "/img/brilliant.png")
    $(".dropdown-label2").text("Dostlar klubu Brilliant")
  });
});
// $(document).ready(function () {
//   $("#virtual-kart").click(function () {
//     $(".dropdown-label3").text("Eyniləşdirilə bilən** Virtual kart")
//     $("#vesait4").text("**Bank of Baku ASC-də cari hesabı olan şəxslər üçün.")
//     $("#muddet4").text("Kartın növü")
//     $("#aylar4").text("MC Standard")
//     $("#kartqiymet4").text("Kartın müddəti")
//     $("#kartqiymetp4").text("36 ay")
//     $("#valyutaqiymet").text("Valyuta")
//     $("#yaziazn").text("AZN")
//   });
// });
$(document).ready(function () {
  $("#virtual-kart").click(function () {
    $(".dropdown-label3").text("Eyniləşdirilə bilən** Virtual kart")
    $("#vesait4").text("**Bank of Baku ASC-də cari hesabı olan şəxslər üçün.")
    $("#muddet4").text("Kartın növü")
    $("#aylar4").text("MC Standard")
    $("#kartqiymet4").text("Kartın müddəti")
    $("#kartqiymetp4").text("36 ay")
    $("#valyutaqiymet").text("Valyuta")
    $("#yaziazn").text("AZN")
    $(".content-virtual").css("width", "74.333%")

  });
});
$(document).ready(function () {
  $("#virtuall-kart").click(function () {
    $(".dropdown-label3").text("Eyniləşdirilə bilməyən* Virtual kart")
    $("#vesait4").text("*Bank of Baku ASC-də müştəri kodu olmayan şəxslər üçün.")
    $("#muddet4").text("Kartın müddəti")
    $("#aylar4").text("3 ay")
    $("#kartqiymet4").text("Maksimal məbləğ")
    $("#kartqiymetp4").text("500 AZN (komissiya xaric)")
    $("#valyutaqiymet").text("Komissiya")
    $("#yaziazn").text("3 AZN")
    $(".content-virtual").css("width", "82.333%")

  });
});
$(document).ready(function () {
  $("#pills-virtual-tab").click(function () {
    $(".content-virtual").css("width", "82.333%")
  })
});
$(document).ready(function () {
  $("#pills-kredit-tab").click(function () {
    $(".content").css("width", "60.333%")
  })
});
$(document).ready(function () {
  $("#pills-lokal-tab").click(function () {
    $(".content").css("width", "60.333%")
  })
});
$(document).ready(function () {
  $("#pills-kredit-tab").click(function () {
    $("#pills-kredit").css("display", "flex")
    $("#pills-debet").css("display", "none")
    $('#pills-lokal').css("display", "none")
    $('#pills-virtual').css("display", "none")
    if (window.matchMedia('(max-width: 991px)').matches) {
      $("#pills-kredit").css("display", "inherit")
    }
  })
});
$(document).ready(function () {
  $("#pills-debet-tab").click(function () {
    $("#pills-debet").css("display", "flex")
    $("#pills-kredit").css("display", "none")
    $('#pills-lokal').css("display", "none")
    $('#pills-virtual').css("display", "none")
    if (window.matchMedia('(max-width: 991px)').matches) {
      $("#pills-debet").css("display", "inherit")
    }
  })
});
$(document).ready(function () {
  $("#pills-lokal-tab").click(function () {
    $("#pills-lokal").css("display", "flex")
    $("#pills-kredit").css("display", "none")
    $('#pills-debet').css("display", "none")
    $('#pills-virtual').css("display", "none")
    if (window.matchMedia('(max-width: 991px)').matches) {
      $("#pills-lokal").css("display", "inherit")
    }
  })
});
$(document).ready(function () {
  $("#pills-virtual-tab").click(function () {
    $("#pills-virtual").css("display", "flex")
    $("#pills-kredit").css("display", "none")
    $('#pills-debet').css("display", "none")
    $('#pills-lokal').css("display", "none")
    if (window.matchMedia('(max-width: 991px)').matches) {
      $("#pills-virtual").css("display", "inherit")
    }
  })
});



/////kalkulyator
let dropdownLabel5 = document.getElementById("dropdown-label5");

let dropdownFood5 = document.getElementById("dropdown-food5");

function kalkulyatordropdown() {
  dropdownFood5.classList.toggle("is-open");
}

document.formFood5.onclick = function () {
  let selectedFood5 = document.querySelector(
    "input[name = selected-food5]:checked"
  );
  if (selectedFood5 != null) {
    let span = selectedFood5.parentNode.querySelector("span").innerHTML;
    dropdownLabel5.innerHTML = span;
    dropdownFood5.classList.remove("is-open");
  }
};


$(function () {
  let $document = $(document);
  let selector = '[data-rangeslider]';
  let $element = $(selector);
  // For ie8 support
  let textContent = ('textContent' in document) ? 'textContent' : 'innerText';
  // Example functionality to demonstrate a value feedback
  function valueOutput(element) {
    let value = element.value;
    let input = element.parentElement.firstElementChild
    input.value = value
    let output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
    output[textContent] = value;
  }
  $document.on('input', 'input[type="range"], ' + selector, function (e) {
    let deyer = e.target
    valueOutput(deyer);
  });
  // Basic rangeslider initialization
  $element.rangeslider({
    // Deactivate the feature detection
    polyfill: false,
    // Callback function
    onInit: function () {
      valueOutput(this.$element[0]);
    },
    // Callback function
    onSlide: function (position, value) {
      valueOutput(value)
    },
  });
});
const a = document.getElementById("a")
const b = document.getElementById("b")
const demo1 = document.getElementById("demo1")
const demo2 = document.getElementById("demo2")
function show_value1() {
  if (+b.value === 3) {
    if (+a.value === 300) {
      demo1.innerHTML = (+a.value * 0.0234 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 301 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.023426 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.023423 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.023424 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.023423 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0234236 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.023424 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 4) {
    demo1.innerHTML = (+a.value * 0.029336 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 5) {
    demo1.innerHTML = (+a.value * 0.03527 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 6) {
    demo1.innerHTML = (+a.value * 0.0412285 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 7) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.047214 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.047207 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.0472093333333333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.047207 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0472084 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.047207 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 8) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.053216 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.053208 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.0532106666666667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.053212 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0532096 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.0532106666666667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 9) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.059228 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.059237 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.059234 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.059237 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0592352 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.059234 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 10) {
    if (+a.value >= 300 && +a.value <= 3000) {
      demo1.innerHTML = (+a.value * 0.0652649 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 3001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.06528 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.065285 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.065284 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.06528 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 11) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.071358 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.071356 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.071356 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.0713505 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0713516 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.0713523333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 12) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.077456 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.077444 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.077448 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.077444 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0774464 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.077444 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 13) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.08966 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.089673 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.0896686667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.089673 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0896704 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.089673 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 14) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.096284 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.09627 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.0962746667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.09627 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.0962728 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.09627 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 15) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.10289 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.10289 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.1029 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.1028975 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.102896 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.102895 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 16) {
    if (+a.value >= 300 && +a.value <= 4999) {
      demo1.innerHTML = (+a.value * 0.109553 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value === 5000) {
      demo1.innerHTML = (+a.value * 0.109536 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.109552 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.109546667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.109544 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1095488 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.109546667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 17) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.11622 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.11622 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.11622 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.11622 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1162268 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.116225667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 18) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.122912 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.12293 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.122924 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.12293 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1229264 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.122924 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 19) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.129664 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.129645 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.129651333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.1296545 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1296564 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.129651333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 20) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.1364 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.1364 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.136413333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.13641 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.136408 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.136406667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 21) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.143198 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.143177 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.143184 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.1431875 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1431896 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.143184 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 22) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.149984 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.149984 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.149998667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.149995 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1499968 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.149991333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 23) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.156808 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.156831 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.156823333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.1568195 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1568264 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.156823333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 24) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.163664 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.163688 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.16368 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.163676 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.1636832 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.16368 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 25) {
    demo1.innerHTML = (+a.value * 0.1825 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 26) {
    demo1.innerHTML = (+a.value * 0.189916 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 27) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.197342 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.197369 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.19736 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.1973555 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.197352 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.19736 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 28) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.20484 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.20484 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.204821333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.2048626 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2048288 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.204830667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 29) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.212316 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.212345 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.212337333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.2123305 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2123276 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.212335333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 30) {
    demo1.innerHTML = (+a.value * 0.21986 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 31) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML == (+a.value * 0.227414 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = + (+a.value * 0.227414 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.227414 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.2274295 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2274264 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.227424333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 32) {
    demo1.innerHTML = (+a.value * 0.235008 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 33) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.242648 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.242615 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.242626 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.2426265 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2426216 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.242626 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 34) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.250248 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.250282 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.250270667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.250820 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2502752 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.250270667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 35) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.25797 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.257935 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.257946667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.2579525 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.257956 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.257946667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 36) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.265688 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.265652 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.265664 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.265652 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2656592 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.265652 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 37) {
    demo1.innerHTML = (+a.value * 0.273392 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 38) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.281132 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.281132 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.281157333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.281151 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2811472 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.281144667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 39) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.28895 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.28895 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.28895 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.2889305 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.2889344 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.288937 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 40) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.29672 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.29676 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.296746667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.29675 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.296752 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.29676 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 41) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.30462 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.30462 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.304592667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.3045995 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3046036 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.304606333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 42) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.3125 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.3125 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.312472 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.312479 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3124832 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.312486 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 43) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.320358 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.320401 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.320386667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.3203765 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3203924 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.320386667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 44) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.32836 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.328316 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.328330667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.328316 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3283248 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.328316 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 45) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.33632 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.336275 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.33629 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.336275 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.336284 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.336275 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 46) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.344304 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.344258 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.34427333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.344258 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3442672 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.344273333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 47) {
    demo1.innerHTML = (+a.value * 0.352284 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 48) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.36032 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.36032 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.36032 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.360344 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3603392 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.360336 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 49) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.368374 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.368423 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.368406667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.3683985 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3684132 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.368406667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 50) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.3765 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.3765 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.3765 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.3765 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.37652 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.376516667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 51) {
    demo1.innerHTML = (+a.value * 0.38465 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
  else if (+b.value === 52) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.392768 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.39282 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.392802667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.392794 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.3928096 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.392802667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 53) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.401002 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.401002 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.401002 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.401002 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.4009808 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.400984333 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 54) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.409184 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.409184 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.40922 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.409211 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.4092056 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.409202 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 55) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.41746 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.41746 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.41746 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.41746 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.417438 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.417441667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 56) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.42576 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.425704 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.425722667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.425732 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.4257152 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.425722667 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 57) {
    if (+a.value >= 300 && +a.value <= 5000) {
      demo1.innerHTML = (+a.value * 0.434006 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 5001 && +a.value <= 10000) {
      demo1.innerHTML = (+a.value * 0.434006 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 10001 && +a.value <= 15000) {
      demo1.innerHTML = (+a.value * 0.434006 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 15001 && +a.value <= 20000) {
      demo1.innerHTML = (+a.value * 0.434006 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 20001 && +a.value <= 25000) {
      demo1.innerHTML = (+a.value * 0.4340288 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
    else if (+a.value >= 25001 && +a.value <= 30000) {
      demo1.innerHTML = (+a.value * 0.434025 + +a.value).toFixed(2)
      demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
    }
  }
  else if (+b.value === 58) {
    demo1.innerHTML = (+a.value * 0.442344 + +a.value).toFixed(2)
    demo2.innerHTML = (+demo1.innerHTML / +b.value).toFixed(2)
  }
}


////valyuta
$(document).ready(function () {
  $(".azn-val").click(function () {
    $(".slide-val").slideToggle()
  })
});
$(document).ready(function () {
  $(".azn-val2").click(function () {
    $(".slide-val2").slideToggle()
  })
});
$(document).ready(function () {
  $("#val-opt2").click(function () {
    $(".slide-val").slideToggle()
  })
});
$(document).ready(function () {
  $("#val-opt3").click(function () {
    $(".slide-val").slideToggle()
  })
});
$(document).ready(function () {
  $("#val-opt4").click(function () {
    $(".slide-val").slideToggle()
  })
});
$(document).ready(function () {
  $("#val-opt5").click(function () {
    $(".slide-val").slideToggle()
  })
});
let azspan = document.getElementById("azspan")
let azspan2 = document.getElementById("azspan2")
let valopt1 = document.getElementById("val-opt1")
let valopt2 = document.getElementById("val-opt2")
let valopt3 = document.getElementById("val-opt3")
let valopt4 = document.getElementById("val-opt4")
let valopt5 = document.getElementById("val-opt5")
let slideval = document.querySelectorAll(".slide-val")
valopt1.addEventListener("click", bas)
function bas() {
  azspan.textContent = valopt1.textContent
}
valopt2.addEventListener("click", bas2)
function bas2() {
  azspan.innerHTML = valopt2.innerHTML
}
valopt3.addEventListener("click", bas3)
function bas3() {
  azspan.textContent = valopt3.textContent
}
valopt4.addEventListener("click", bas4)
function bas4() {
  azspan.innerHTML = valopt4.innerHTML
}
valopt5.addEventListener("click", bas5)
function bas5() {
  azspan.innerHTML = valopt5.innerHTML
}
if (azspan.textContent == valopt1.textContent && azspan2.textContent == "GBR") {
  $(document).ready(function () {
    $("#val1,#val2").keyup(function () {
      $("#val2").val($("#val1").val() * 0.532)
    })
  });
}

/////icon
$(document).ready(function () {
  $(".section-5-text").mouseover(function () {
    $(".fa-chevron-right").css("transform", "translateX(5px)")
  })
  $(".section-5-text").mouseout(function () {
    $(".fa-chevron-right").css("transform", "translateX(1px)")
  })
});


//calculator
$(document).ready(function () {
  $("#tekrar-musteri").click(function () {
    $(".dropdown-label5").text("Təkrar müştərilər")
    $('.mebleg-inputs').css("display", "block")
    $('.muddet-inputs').css("display", "block")
    $('.price-bg').css("display", "block")
    $('.output-1').text("300")
    $('.output-2').text("3")
    $('.mebleg-1').text("300")
    $('.muddet-1').text("3")
    $('.mebleg-2').text("30000")
    $('.muddet-2').text("58")
    $('#demo2').text("102.34")
    $('#demo1').text("307.02")
  });
});
$(document).ready(function () {
  $("#tehsil-haqqi").click(function () {
    $(".dropdown-label5").text("Təhsil haqqı krediti")
    $('.output-1').text("300")
    $('.output-2').text("3")
    $('.mebleg-1').text("300")
    $('.muddet-1').text("3")
    $('.mebleg-2').text("20000")
    $('.muddet-2').text("60")
    $('#demo2').text("102.68")
    $('#demo1').text("308.04")
  });
});
$(document).ready(function () {
  $("#avtomobil-krediti").click(function () {
    $(".dropdown-label5").text("Avtomobil krediti")
    $('.output-1').text("500")
    $('.output-2').text("6")
    $('.mebleg-1').text("500")
    $('.muddet-1').text("6")
    $('.mebleg-2').text("50000")
    $('.muddet-2').text("60")
    $('#demo2').text("87.27")
    $('#demo1').text("523.62")
  });
});
$(document).ready(function () {
  $("#dasinmaz-teminatli-kredit").click(function () {
    $(".dropdown-label5").text("Daşınmaz əmlak təminatlı krediti")
    $('.output-1').text("3000")
    $('.output-2').text("3")
    $('.mebleg-1').text("3000")
    $('.muddet-1').text("3")
    $('.mebleg-2').text("70000")
    $('.muddet-2').text("48")
    $('#demo2').text("1025.10")
    $('#demo1').text("3075.30")
  });
});
$(document).ready(function () {
  $("#dasinmaz-kredit").click(function () {
    $(".dropdown-label5").text("Daşınmaz əmlak krediti")
    $('.output-1').text("500")
    $('.output-2').text("3")
    $('.mebleg-1').text("500")
    $('.muddet-1').text("3")
    $('.mebleg-2').text("100000")
    $('.muddet-2').text("36")
    $('#demo2').text("171.41")
    $('#demo1').text("514.23")
  });
});
$(document).ready(function () {
  $("#herkese-kredit").click(function () {
    $(".dropdown-label5").text("Hər kəsə kredit")
    $('.output-1').text("300")
    $('.output-2').text("3")
    $('.mebleg-1').text("300")
    $('.muddet-1').text("3")
    $('.mebleg-2').text("30000")
    $('.muddet-2').text("58")
    $('#demo2').text("102.34")
    $('#demo1').text("307.02")
  });
});
$(document).ready(function () {
  $("#lombard-kredit").click(function () {
    $(".dropdown-label5").text("Lombard krediti")
    $('.output-1').text("300")
    $('.output-2').text("3")
    $('.mebleg-1').text("300")
    $('.muddet-1').text("3")
    $('.mebleg-2').text("20000")
    $('.muddet-2').text("36")
    $('#demo2').text("104.36")
    $('#demo1').text("313.08")
  });
});