

fetchSheet
  .fetch({
    gSheetId: "1kumk_vYJEM9_nVW_rOD63XF9t3GIVre_5t4DH1V74nY",
    wSheetName: "header",
  })
  .then((rows) => {
    /*let imageUrl = 'rows[0].imageUrl || "assets/images/header_app.png";'*/
    let imageUrld = ''
    rows.forEach((row, i) => {
      imageUrld += `
        <div
          class="image wow fadeInRightBig"
          data-wow-duration="1.3s"
          data-wow-delay="1.8s"
        >
          <img src="${row.imageUrl}" alt="header App" />
          <img src="assets/images/dots.svg" alt="dots" class="dots" />
        </div>
`;
    })
    document.querySelector("#header-app").innerHTML = imageUrld
  });

fetchSheet
  .fetch({
    gSheetId: "1kumk_vYJEM9_nVW_rOD63XF9t3GIVre_5t4DH1V74nY",
    wSheetName: "gallery",
  })
  .then((rows) => {
    let galleryHtml = "";

    rows.forEach((row) => {
      galleryHtml += `
        <div class="single_slider">
          <img src="${row.imageUrl}" alt="Screen Shot" />
        </div>
      `;
    });

    document.querySelector("#gallery").innerHTML = galleryHtml;

    $(".screenshot_active").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      pauseOnHover: false,
      prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
      nextArrow:
        '<span class="next"><i class="lni lni-arrow-right"></i></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

fetchSheet
  .fetch({
    gSheetId: "1kumk_vYJEM9_nVW_rOD63XF9t3GIVre_5t4DH1V74nY",
    wSheetName: "timeline",
  })
  .then((rows) => {
    let timelineHtml = "";
    rows.forEach((row) => {
      timelineHtml += `
      <div class="col-lg-4 col-md-8">
      <div class="single_blog blog_1 mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s" style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.2s; animation-name: fadeInUp;">
        <div class="blog_image" data-content="${row.row5}">
          <img src="${row.row3}" alt="blog">
        </div>
        <div class="blog_content">
          <div class="blog_meta d-flex justify-content-between">
            <div class="meta_date">
              <span>Giá: ${row.row1}</span>
            </div>
            <div class="meta_like"></div>
          </div>
          <h4 class="blog_title">
          <a>${row.row4}</a>
          </h4>
          <p style="display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: justify">${row.row2}</p>
          <a class="onclick">Đăng ký</a>
        </div>
      </div>
    </div>`;
    });

    document.querySelector("#timeline").innerHTML = timelineHtml;
    document.querySelectorAll('.blog_title').forEach(t => {
      document.querySelector('#mota').innerText = document.querySelector('.blog_image').getAttribute('data-content')
      document.querySelector('#titleDetail').innerText = document.querySelector('.blog_title').innerText
      t.onclick = () => {
        document.querySelector('#detailJoject').setAttribute('style', 'display:block')
        document.querySelector('#detailJoject>.backgrounds').onclick = () => {
          document.querySelector('#detailJoject').setAttribute('style', 'display:none')
        }
      }
    })
    $("#timeline").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      pauseOnHover: false,
      prevArrow: '<span class="prevv"><i class="bi bi-arrow-left-short"></i></span>',
      nextArrow:
        '<span class="nextt"><i class="bi bi-arrow-right-short"></i></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

  });
fetchSheet
  .fetch({
    gSheetId: "1kumk_vYJEM9_nVW_rOD63XF9t3GIVre_5t4DH1V74nY",
    wSheetName: "bienca",
  })
  .then((rows) => {
    let timelineHtmle = "";
    rows.forEach((row) => {
      timelineHtmle += `
      <div class="col-lg-4 col-md-8">
      <div class="single_blog blog_1 mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s" style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.2s; animation-name: fadeInUp;">
        <div class="blog_image">
          <img src="${row.row3}" alt="blog">
        </div>
        <div class="blog_content">
          <div class="blog_meta d-flex justify-content-between">
            <div class="meta_date">
              <span>Giá: ${row.row1}</span>
            </div>
            <div class="meta_like"></div>
          </div>
          <h4 class="blog_title">
          <a>${row.row4}</a>
          </h4>
          <p style="display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: justify">${row.row2}</p>
          <a class="onclick">Đăng ký</a>
        </div>
      </div>
    </div>`;
    });

    document.querySelector("#timeline1").innerHTML = timelineHtmle;



    $("#timeline1").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      pauseOnHover: false,
      prevArrow: '<span class="prevv"><i class="bi bi-arrow-left-short"></i></span>',
      nextArrow:
        '<span class="nextt"><i class="bi bi-arrow-right-short"></i></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    document.querySelectorAll('.blog_title').forEach(t => {
      t.onclick = () => {
        document.querySelector('#detailJoject').setAttribute('style', 'display:block')
        document.querySelector('#detailJoject>.backgrounds').onclick = () => {
          document.querySelector('#detailJoject').setAttribute('style', 'display:none')
        }
      }
    })
  });

fetchSheet
  .fetch({
    gSheetId: "1kumk_vYJEM9_nVW_rOD63XF9t3GIVre_5t4DH1V74nY",
    wSheetName: "video",
  })
  .then((rows) => {
    document.querySelector("#video iframe").src = rows[0].videoUrl;
  });

window.onload = () => {

  document.querySelectorAll('.onclick').forEach((row) => {
    row.addEventListener('click', () => {
      document.querySelector('.background').setAttribute('style', 'display:block')
      document.querySelector('.box').setAttribute('style', 'display:flex')
      document.querySelector('body').setAttribute('style', 'overflow-y: hidden')
    })
  })
  document.querySelector('.background').addEventListener('click', () => {
    document.querySelector('.background').setAttribute('style', 'display:none')
    document.querySelector('.box').setAttribute('style', 'display:none')
    document.querySelector('body').setAttribute('style', 'overflow-y: auto')

  })
  document.querySelector('.clostttt').addEventListener('click', () => {
    document.querySelector('.background').setAttribute('style', 'display:none')
    document.querySelector('.box').setAttribute('style', 'display:none')
    document.querySelector('body').setAttribute('style', 'overflow-y: auto')
  })
  // $(window).on('scroll', function dsdsd (event) {
  // var scroll = $(window).scrollTop();
  // if (scroll < 300) {
  // } else {
  //   document.querySelector('.background').setAttribute('style','display:block')
  // document.querySelector('.box').setAttribute('style','display:flex')
  //   removeEventListener('scroll', dsdsd)
  // }


  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 500 || popupCount > 0) {
    } else {
      document.querySelector('.background').setAttribute('style', 'display:block')
      document.querySelector('.box').setAttribute('style', 'display:flex')
      document.querySelector('body').setAttribute('style', 'overflow-y: hidden')
      document.querySelector('.background').addEventListener('click', () => {
        document.querySelector('body').setAttribute('style', 'overflow-y: auto')
      })
      // $(window).off('scroll')
      popupCount++;
    }
  });
};

var popupCount = 0;


document.querySelector('.gui').onclick = async () => {
  let name = document.querySelector('#formpay #name').value
  let phone = document.querySelector('#formpay #phone').value
  let email = document.querySelector('#formpay #email').value
  let type = document.querySelector('#formpay #type').value
  let nameh = document.querySelector('#formpay #nameh').value
  let url = `https://script.google.com/macros/s/AKfycbyfWCW9vvmFVYfY2p_4OyeytRSvfWZxXoHUdDwz7nDM1dnAzo6Pe63f1unrVwMPwp2b/exec?name=${name}&phone=${phone}&email=${email}&type=${type}&nameh=${nameh}`
  const responses = await fetch(url, { method: 'GET' })
  if (responses.ok) console.log('hello');
}