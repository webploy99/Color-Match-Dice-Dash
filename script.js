// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/kh/app/color-match-dice-dash/id6480505835";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d6/fa/49/d6fa49cc-355f-0f91-d09e-d210a77f1c44/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl ({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8e/60/c6/8e60c635-3a6f-6871-3dd3-668a51c6552a/a60f4568-a01f-4100-99b9-b13dcf5088ef_IOS-Description_12.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/68/c7/f0/68c7f020-10c3-ff45-0922-cc1272453e68/5cd82b95-19c5-42cb-a985-03672588a866_IOS-Description_13.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/da/d7/f2/dad7f23e-035d-0960-9231-d76da2ce61f3/cf8f9ae4-f00b-4d1b-a796-0b5c30eee723_IOS-Description_14.png/434x0w.webp",
})

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}