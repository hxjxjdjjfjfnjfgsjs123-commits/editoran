<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>استودیو طراحی</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Tahoma, Arial, sans-serif;
    }

    body {
      background: #ffffff;
      color: #26352b;
      line-height: 1.8;
    }

    header {
      background: #f8fff9;
      border-bottom: 1px solid #dcebdd;
      padding: 18px 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #8fbc8f;
    }

    nav a {
      color: #344b3a;
      text-decoration: none;
      margin-right: 22px;
      font-size: 15px;
    }

    nav a:hover {
      color: #7aa87a;
    }

    .hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, #ffffff 55%, #eef8ef);
    }

    .hero-content {
      max-width: 800px;
    }

    .hero h1 {
      font-size: clamp(38px, 7vw, 72px);
      color: #6f9f72;
      margin-bottom: 20px;
    }

    .hero p {
      color: #607064;
      font-size: 18px;
      margin-bottom: 30px;
    }

    .btn {
      display: inline-block;
      background: #9ac69a;
      color: white;
      padding: 12px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
      box-shadow: 0 8px 20px rgba(125, 170, 125, 0.2);
    }

    .btn:hover {
      background: #7fad7f;
      transform: translateY(-2px);
    }

    section {
      padding: 80px 7%;
    }

    .section-title {
      text-align: center;
      color: #6f9f72;
      font-size: 32px;
      margin-bottom: 45px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 25px;
    }

    .card {
      background: #ffffff;
      border: 1px solid #e0eee1;
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      box-shadow: 0 8px 25px rgba(80, 120, 80, 0.07);
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-7px);
      border-color: #a9cfa9;
    }

    .card .icon {
      font-size: 40px;
      margin-bottom: 15px;
    }

    .card h3 {
      color: #6f9f72;
      margin-bottom: 10px;
    }

    .card p {
      color: #69756c;
      font-size: 14px;
    }

    .about {
      background: #f5fbf5;
      text-align: center;
    }

    .about p {
      max-width: 750px;
      margin: auto;
      color: #5f6d62;
      font-size: 17px;
    }

    .contact {
      text-align: center;
      background: #ffffff;
    }

    footer {
      background: #8fbc8f;
      color: white;
      text-align: center;
      padding: 25px;
      font-size: 14px;
    }

    @media (max-width: 600px) {
      header {
        padding: 15px 5%;
      }

      nav a {
        margin-right: 10px;
        font-size: 13px;
      }

      section {
        padding: 60px 5%;
      }

      .hero {
        min-height: 70vh;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="logo">KO OHI</div>

    <nav>
      <a href="#home">خانه</a>
      <a href="#services">خدمات</a>
      <a href="#about">درباره من</a>
      <a href="#contact">تماس</a>
    </nav>
  </header>

  <section class="hero" id="home">
    <div class="hero-content">
      <h1>طراحی خلاقانه</h1>
      <p>
        خلق آثار بصری خاص، مدرن و حرفه‌ای برای برندها و کسب‌وکارها
      </p>
      <a href="#services" class="btn">مشاهده خدمات</a>
    </div>
  </section>

  <section id="services">
    <h2 class="section-title">خدمات من</h2>

    <div class="cards">

      <div class="card">
        <div class="icon">🎨</div>
        <h3>طراحی گرافیک</h3>
        <p>
          طراحی پوستر، بنر، کاور و محتوای بصری حرفه‌ای.
        </p>
      </div>

      <div class="card">
        <div class="icon">✨</div>
        <h3>طراحی لوگو</h3>
        <p>
          طراحی لوگوهای خلاقانه و اختصاصی برای برند شما.
        </p>
      </div>

      <div class="card">
        <div class="icon">🖼️</div>
        <h3>ادیت عکس</h3>
        <p>
          ویرایش و ادیت حرفه‌ای تصاویر با کیفیت بالا.
        </p>
      </div>

    </div>
  </section>

  <section class="about" id="about">
    <h2 class="section-title">درباره من</h2>

    <p>
      من یک طراح گرافیک و ادیتور هستم و هدفم خلق آثار بصری
      خلاقانه، متفاوت و باکیفیت است که پیام شما را به بهترین
      شکل منتقل کند.
    </p>
  </section>

  <section class="contact" id="contact">
    <h2 class="section-title">ارتباط با من</h2>

    <p style="margin-bottom: 25px;">
      برای سفارش طراحی و همکاری با من در ارتباط باشید.
    </p>

    <a href="#" class="btn">تماس با من</a>
  </section>

  <footer>
    © 2026 تمامی حقوق محفوظ است.
  </footer>

</body>
</html>
