let level = 1;
let pinying = [];
let correctOption = [];
let HSK_1;
let HSK_2;
let HSK_3;
let HSK_4;
let HSK_5;
let HSK_6;

$.ajax({
  async: false,
  url: `hsklevels/hsk-level-1.json`,
  success: function (data) {
    HSK_1 = data;
  },
}),
$.ajax({
    async: false,
    url: `hsklevels/hsk-level-2.json`,
    success: function (data) {
      HSK_2 = data;
    },
  }),
$.ajax({
    async: false,
    url: `hsklevels/hsk-level-3.json`,
    success: function (data) {
      HSK_3 = data;
    },
  }),
$.ajax({
    async: false,
    url: `hsklevels/hsk-level-4.json`,
    success: function (data) {
      HSK_4 = data;
    },
  }),
$.ajax({
    async: false,
    url: `hsklevels/hsk-level-5.json`,
    success: function (data) {
      HSK_5 = data;
    },
  }),
$.ajax({
    async: false,
    url: `hsklevels/hsk-level-6.json`,
    success: function (data) {
      HSK_6 = data;
    },
  });
  
RenderCharacter();
$(".select__level").on("change", SetLevel);
$(".button__go").on("click", RenderNewCharacter);
$(".correct__flex--buttons").on("click", CorrectOne);
$(".checkedBox").on("click", DarkTheme);

function DarkTheme() {
  if ($(this).is(":checked")) {
    $(".mainGrid").removeClass("lightTheme");
    $(".mainGrid").addClass("darkTheme");
  } else {
    $(".mainGrid").removeClass("darkTheme");
    $(".mainGrid").addClass("lightTheme");
  }
}

function CorrectOne(e) {
  let option = e.target.innerText;
  if (option == correctOption[0]) {
    e.target.classList.add("correctOption");
    setTimeout(function () {
      e.target.classList.remove("correctOption");
    }, 100);
    $(".correct__flex--buttons").prop("disabled", false);
    RenderCharacter();
  } else {
    for (i = 0; i < 3; i++) {
      $(this).prop("disabled", true);
    }
  }
}
function RenderCharacter() {
  correctOption = [];
  if (level == 1) {
    pinying = [];
    PickRandomsHanzi(HSK_1);
    for (i = 0; i < 3; i++) {
      RandomPusher(HSK_1);
    }
    PickButtonsPinyin();
  } else if (level == 2) {
    pinying = [];
    PickRandomsHanzi(HSK_2);
    for (i = 0; i < 3; i++) {
      RandomPusher(HSK_2);
    }
    PickButtonsPinyin();
  } else if (level == 3) {
    pinying = [];
    PickRandomsHanzi(HSK_3);

    for (i = 0; i < 3; i++) {
      RandomPusher(HSK_3);
    }
    PickButtonsPinyin();
  } else if (level == 4) {
    pinying = [];
    PickRandomsHanzi(HSK_4);

    for (i = 0; i < 3; i++) {
      RandomPusher(HSK_4);
    }
    PickButtonsPinyin();
  } else if (level == 5) {
    pinying = [];
    PickRandomsHanzi(HSK_5);

    for (i = 0; i < 3; i++) {
      RandomPusher(HSK_5);
    }
    PickButtonsPinyin();
  } else if (level == 6) {
    pinying = [];
    PickRandomsHanzi(HSK_6);

    for (i = 0; i < 3; i++) {
      RandomPusher(HSK_6);
    }
    PickButtonsPinyin();
  }
}
function RandomPusher(hsk) {
  randomZi = Math.floor(Math.random() * (hsk.length + 1));
  pinying.push(hsk[randomZi]["pinyin"]);
}
function PickButtonsPinyin() {
  pinying.sort();
  $(".correct__flex--a").text(pinying[0]);
  $(".correct__flex--b").text(pinying[1]);
  $(".correct__flex--c").text(pinying[2]);
  $(".correct__flex--d").text(pinying[3]);
}
function PickRandomsHanzi(hsk) {
  let randomZi = Math.floor(Math.random() * (HSK_1.length + 1));
  $(".caracter__zi").text(hsk[randomZi]["hanzi"]);
  pinying.push(hsk[randomZi]["pinyin"]);
  correctOption.push(hsk[randomZi]["pinyin"]);
}
function SetLevel(e) {
  level = e.target.value;
}
function RenderNewCharacter(e) {
  e.preventdefault;
  RenderCharacter();
}
