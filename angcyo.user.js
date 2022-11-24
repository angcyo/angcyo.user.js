// ==UserScript==
// @name         angcyo
// @namespace    https://github.com/angcyo
// @version      0.3
// @description  2022-11-22
// @author       angcyo
// @license      MIT License
// @homepage     https://github.com/angcyo/angcyo.user.js
// @supportURL   https://github.com/angcyo/angcyo.user.js
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADZ1JREFUeF7tXWuQHFUV/k7PZnqyOxF5FVhCAkFFBBEr7CRVyU7P7GwQiAFjLaEgPKSs4iUI8hTFghJBIIRADCj6B+QhJoARkOfO7swGCTub8JJXQUkSjQpYUiE7m0z3sn2sXhKK7PTMdM/cnunbM/1z95zv3POdb273vX37XkLramoGqKmzbyWPlgCaXAQtAbQE0OQMNHn6rR6gJYAmZ6DJ02/1AC0BNDkDTZ5+qwdoCaDJGWjy9Fs9QEsATc5Ak6cfmB6AB8OnAfT9eteT4npSVExOJCKjodEn7fAUphXt/bk/iYq1Cyc4AsiqdwA4XzRB5fHoRtIKV4mKme+JXQ7GzSXwBqLpXLeoWIESAD8BFR3qOgDfFE1QWTwyZ1F87EVRMUdTsc0MTC+F17E91E7r1u0QFc/CCUQPwGsjCZg8IJIYB1hZ0vSEAztHJnrPnMPG2HyjnLECXNqezt3qCNChUTAEMBi+Ckw3OMxZjJmJCymprxQDBox0x+4kwnkV8DZF07mDRcUMTg+QUR8FYaFIYsp3/TBgtE2nntH3RcXMp2LsBGtKKHSY+sy6t5zYOrGRvgfgAfVLUPA8gH2dJCzGhh8gzVgiBgsYTc4+nhX+ixM8Bt8xLT18gRNbJzbyCyATOR3Ev3eSrDAb4kUUN9aIwsunYtbQ71ineNF0TljdhAE5bbxoO86od6LyvVNk2I2k6TNFAX7YM2uPMIe2TsYj4D3rbwzsXxyLj4umh58S0QapBcCvI4z/qkMgHCWCDEcYhJsprl/pyNaB0Whq9g8YXPQwSYxfTQiAcGERDOOJaH9ugQP4iiZyCyATSYK4v2KWIg3YjFFibFgUZD4Vsx7oDp2Mx8ya9TciytrF6hg39qTMy0U9h9t2SS6A8E9AdL3bpKu2ZzxHCb2rav9JjvnU7CMBfsUGb0s0nTvQ+ns+FfsngAOKBEJ8/rS+4V/X2hbJBaA+BsK3ayXBsT/jIkroKxzbVzDMp2bfAvClNl388mh/7pIJAXTHbgXhR0UCAN6cls59rda2SCuAncM/a/p3n1pJcOg/DgodSPHt/3FoX9Esn4rpAMKTDU0g/rl0bq31922pWJcCDNqCmTgqOpCz60Eqxt5lIK8AspEzAL7Hcaa1GhI9SPHCKbXC7PLf1t25UCF61ObXvynav/tsX747thGEg2xiL42mc1fU0iaJBaBa979za0nelS9xL8WNh135lDEeScUeIWCRk6LmUzHrDeHlNraFaDo3tZY2SSkAXo8pGFVzQJ2Gf4TNFNftfoFVcc/Hde07augf2DmHGKmp/bndRjY7umPd44S0nT0pyokdz75Q3JM4bJmcAqj/8G8ZafplDjmtaDbSHbuA6JNx/qTrnWg69xU7gHwq9jaAL0/+HwEPdaRzJ1UMWsJATgFkwz8F6BfVJu3aTzHnUNfYkGu/Eg75VOwl296L8enT/2TXUqOBT+xo/2h6qKoXU3IKYFB9DFyv4R8/T5oxV1TxP0p1doZA1u3L5io9xZtPdR4LkP1yMcIP2/tydj1KxWZLJwBOq4egjYcA2rtidiIMGJdQQl8uAsrCyHd3LgWR3e3kHYD/VT4OfdHuNgBgQzSdO7qaNsongGzkTIDvribZKnwYpjKdkju2VOFr6zKSim0lYA9ReLtwFDZnt/evL9GzlI4moQDU3wA4RzSB9j0yraZEYbGoWCOp2b0EXi0Kb3ccWhZND7l+UJVKADyANoTU9WB8wxsSJ6EyL6aEIaxgIz2xVcSo+om9Qs4fRtM517dFuQRQ38WfW6Dp02nilXzt1/bE7APMEFsvdjy7FMbi9v6cK8HKJYBs+GqArvOMwc8CE5ZTXJ94ISPiyqc6LwXoFnsszriLQbarkauZE5BLAIPq42AIWQhRmXBlLmk7rLWGQq58qtMaucTswNwu8Sq3gDRE4zOm9m34h9NGSyMAXhuZCdMcBmgvp8lVb8dDpBlzqvff3XP7/DlzTdN8zg6vml9t2SXkRJdH+4ZK9DTFLZBHAPV9+3cZafoyUQIY6Y6tILulXVYAk3uiA8O28/yl4m9LHn2ooii2S8MJGO5I52x7mhICFJWmtzicrePwT6EZ1FVw3I2Wy5wTibbR0HZrHmE/Ed3/LoxSS8ms/4eA+NSd6wkqVUWKHoAZIQyq1jd4R1ZKSMD/HyZN7xWAMwGxoyd26jjjfns8ujuaHjqrmlijPZ3nMdOdtr9qwsqOvlzxYlIbYzkEMBjRwG6flKuhdaJLPoWSxoNVehe5jXR3/pmITrDDU0xlTvvAC1W/ZCrzMPhBx175A2n1G0alPOQQQL3e/hH+jff06bQY45WIc/L/QvesQ8YUmljcaXdN61vvcvi3O8pIz9FlP051gi+JAFTrs6njnZBeo80K0vSLasSQyt33AuBs5GDA3ADQnp4zq1AXdRVsh2uex25QAP8LIDPldJBSh2//aJi0guPhU4PqJTysBAJQ7wLhbOGZTwZkvpISRqntWTwP36gAvhYAMxQMqi8D+Lr3BNFM0gobvY/jrwj+FkA2EgfY9ts4oTQy1lBCt1uiLTSMH8H8LYBMvb794yWkGQ/4sUBet8nfAsiqTwA4zmMS3sf7E2P/ipMmHrejIfC+FQAPRA6Cwtby6c97ygxhJcV1R9OmnrajQeA+FkD4NCh0r+e8ECUoXvD+OcPzRKoL4F8B1Oft34uk6bOqoy4YXr4UAF8LBUnV+uz5CG9p5qtIM270Noa/0f0pgOciXRhn+2/iRfJpkrCNnss1i5KFml76iEx5MpY/BdCInT89YZmvJs2o3xY2VeTgTwFk6/b2rwrKHLownqSEXo83mA4bZG/mOwFwOjIDbRMbJwn/fKomptw5f4Q2nkdzjdfcudXf2n8CyIaXAHRf/akQGvFc0vS7hCJ6BOZDAdR56xfRxBLfS3HjDNGwXuH5SgBsnV+QUV8FeT3884pOvAsKzRO5k5hnLd0J7C8BZCJdoDoM/7xilfgkihsPeQXvBa6/BJAN/xigX3qRaB0wbyNNL9rQsQ5xawrhMwGojwP1+vavJt4mOfMwthkJWojtIlHrgeUbAfDayHSY/KqUwz+mbkoU6n1mkRB9+EcAAxFhBzAVMaOwtZ9w8Z68Qij0/2xfuTR9IwAhtSgBwlnV2njRi3n/J0nz/2xfUwuAs6q1uaK1v7/YmUXCNnxsxql7rKbNmr0UvhPswPcAnA2fDJCwb/0+JZVwHsV1a8Mqqa/gC2BQvQmMmnbULqow832UME6XuvJ+nAjyglDOqM+C0CMQeyPaKElzC5sFYjYMKtA9APdFZmKK4G1lBG8d17DKN0MPwAPhXijkatu0CgW5nTT94kYXTWT8YPcAmcgNIBZzvDvTenBhPiVR80ldIgtYK1awBZBVrcMVv1UrSRP+Js2nZKFPCJaPQAIrAO7D3piivinmTGH+GWlG/c4nqKNAgiuATHgRiB6pmUvCUxTXvf48reZmVgsQXAFkI9cBfHW1xOz0GwGbKZEnhdbYHuHuARaAgJXFjPMpodd8OqfwqgkEDKQAeBVC2E+1Nme0OXnbKXt8P2nGaU6tZbULpgAy6kIQqj5KDcAmAMeQpr8ja2GdtjuYAsiGrwHoWqckFNkpfCp1GX+o2l8ix2AKIKM+CsLCKusQuNm+cjwEVQBbQLBO2HJ50Xq0tS2guXnbUz1dgklhHjgB8NrIPJg8cfJ2FdcC0nRrW5qmuYIngGqPlSG+huLGz5um8jsTDaAAVGv2z+2Wb09jH/0EOrz5NooKngAG1U1gzHDxS85jXDmWunf81YVPYEwDJQAeCB8Bhf7msjoXk6bf7tInMObBEkAmfAWIbnJeHX6ANGOJc/vgWQZLAIPqajCcHffC2Iw2XkDzjNeDV1bnGQVNAH8HY6aj9E06i5KFeh1C7ahJjTAKjAB4YOoBUEynR7PeQZp+QSMI91vM4AggGzkb4MrbshBtwDh9R+SR8H4rqpv2BEkADwJ8csXkiRdR3FhT0a5JDAIkAPVtANZ3gGUuup60Qq2rhAIljUAIgF9BB7aq+QqVeQZb9V46ESOBqmCNyQRDANnwYoD+WIaLUTAtlHUThxprXL5P9BK8XticDd8N0Jkl4zGuoIS+tF7tkSlOQHqAifX/X7UnnlaRVqj8cChT1QS2NSgCYFtOCJvB5iLSxqyTR1qXDQPSC4Az6nwQninx6z+HtMJvW5UvzYD8AhhUl4NR/MUu43eU0L0/cFJydckvgIz6GgiHT6rDS1Col7oK70peH8+bL78AsqrN/Z9PJs1Y5Tl7AQggtQA4M6UTpOR2qwNhKcV1sXsCBaDQpVKQWwCTPwBhZPCx3ks9+F+AayY0NdkFMATQriPft4PwXYrrTwtlKOBgkgvgs/d/ubdsbZTOpBXAzh1ArTeA1jETa/Ce3kuLMd4oImWNK7MALgJwG4AtUMxe6hobkrUIjWy3zAKw7vXHwMSFlNRXNpJEmWPLLAAG+B7SjO/JXIBGt11KAfAA9gGpGTD3UtJ4q9EkyhxfTgFkI2eCzHGKG7KfL9hw7UgqANU6oClQW7Y2SglyCmCw/Qsync3XqOI6iSudAHjA2qwdHztJrmVTmQHpBFA5pZaFGwZaAnDDVgBtWwIIYFHdpNQSgBu2AmjbEkAAi+ompZYA3LAVQNv/A5Lq7a4RYpV/AAAAAElFTkSuQmCC
// @run-at       document-end
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @grant        GM_log
// ==/UserScript==

(function () {
  "use strict";
  GM_log("欢迎使用 by angcyo.");

  //console.log(window);
  //console.log(document);

  watchElement(document.getElementsByTagName("body"), () => {
    if (!document.getElementById("whatsApp")) {
      const p = $("h3[aria-label=收货地址]")
        .parent()
        .parent(".Polaris-Card__Section_1b1h1")
        .find("p");
      const list = [...p[0]?.childNodes]?.slice(-3);
      if (list?.length >= 3) {
        let country = $(list[0]).text();
        let phone = $(list[2]).text();
        console.log(country);
        console.log(phone);
        phone = phone.replaceAll(/[\s*()\+]/g, "");
        $(p).append(createWhatsAppLink(phone));
      }
    }
  });

  /**
   * @returns 创建一个whats app链接html
   */
  function createWhatsAppLink(phone) {
    const url = `whatsapp://send/?phone=${phone}`;
    console.log(url);
    return `<a id="whatsApp" href="${url}" target="_blank" style="text-decoration: none;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg></a>`;
  }

  //<h3 aria-label="收货地址" class="Polaris-Subheading_syouu">收货地址</h3>
  /**通过css查询元素 */
  function findElement(selectors) {
    return document.querySelectorAll(selectors);
  }

  /**
   * 观察元素的内容是否改变了
   * https://blog.csdn.net/weixin_42420703/article/details/98334813
   * @param {*} element 需要观察的元素, 如果是数组, 则取最后一个
   * @param {*} action 回调方法, 返回true, 停止监听
   * @param {*} config 观察选项
   */
  function watchElement(
    element,
    action,
    config = {
      attributes: false, //目标节点的属性变化
      childList: true, //目标节点的子节点的新增和删除
      characterData: false, //如果目标节点为characterData节点(一种抽象接口,具体可以为文本节点,注释节点,以及处理指令节点)时,也要观察该节点的文本内容是否发生变化
      subtree: true, //目标节点所有后代节点的attributes、childList、characterData变化
    }
  ) {
    const observe = new MutationObserver((mutationsList, observer) => {
      console.log(mutationsList);
      if (action(mutationsList) == true) {
        observer.disconnect();
      }
    });
    if (
      element instanceof HTMLCollection ||
      element instanceof Array ||
      element instanceof NodeList
    ) {
      observe.observe(element[0], config);
    } else {
      observe.observe(element, config);
    }
    //observe.disconnect();
    return observe;
  }
})();
