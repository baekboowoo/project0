//박스 2개만들기
//드랍다운 리스트 만들기
//환율정보 들고오기

//드랍다운 리스트에서 아이템 선택하면 아이템 바뀜
//금액을 입력하면 환전이 된다
//드랍다운 리스트에서 아이템을 선택하면 다시 그 단위로 환전이 됨
//숫자를 한국어로 읽는법
//반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다

let currencyRatio = {
  USD: {
    KRW: 1336.18,
    USD: 1,
    VND: 23470,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00075,
    vnd: 17.57,
    unit: "원",
  },
  VND: {
    VND: 1,
    KRW: 0.057,
    USD: 0.00004259,
    unit: "동",
  },
};
let fromCurrency = "USD";
let toCurrency = "USD";
// currencyratio.USD.unit;
//1.console.log(currencyRatio.VND.unit);
//2.console.log(currencyRatio["VND"]["unit"]);

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1.버튼을 가져온다
    document.getElementById("from-button").textContent = this.textContent;
    //2.버튼에 값을 바꾼다

    //3.선택된currency값을 변수에 저장해준다.
    fromCurrency = this.textContent;
  })
);
document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
  })
);

// // document.querySelectorAll("#to-currency-list a").forEach((menu) =>
// //   menu.addEventListener("click", function () {
// //     document.getElementById("to-button").textContent = this.textContent;
// //     toCurrency = this.textContent;
// //   })
// );
