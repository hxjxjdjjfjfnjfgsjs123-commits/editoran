<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ورود به پنل مدیریت</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Tahoma, Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ffffff, #eef8ef);
    }

    .login-box {
      width: 90%;
      max-width: 400px;
      background: #ffffff;
      padding: 40px 30px;
      border-radius: 24px;
      border: 1px solid #dcebdd;
      box-shadow: 0 15px 40px rgba(80, 120, 80, 0.12);
      text-align: center;
    }

    .logo {
      width: 70px;
      height: 70px;
      margin: 0 auto 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #9ac69a;
      color: white;
      font-size: 25px;
      font-weight: bold;
    }

    h1 {
      color: #527957;
      font-size: 25px;
      margin-bottom: 8px;
    }

    .subtitle {
      color: #7a877d;
      font-size: 13px;
      margin-bottom: 30px;
    }

    .input {
      width: 100%;
      padding: 14px;
      margin-bottom: 15px;
      border: 1px solid #d8e8d9;
      border-radius: 12px;
      outline: none;
      font-size: 14px;
      text-align: right;
    }

    .input:focus {
      border-color: #9ac69a;
      box-shadow: 0 0 0 3px rgba(154, 198, 154, 0.15);
    }

    button {
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 12px;
      background: #9ac69a;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover {
      background: #7fad7f;
    }

    #message {
      margin-top: 18px;
      font-size: 13px;
      color: #d05c5c;
      min-height: 20px;
    }

    .back {
      display: block;
      margin-top: 20px;
      color: #719775;
      text-decoration: none;
      font-size: 13px;
    }
  </style>
</head>

<body>

  <div class="login-box">

    <div class="logo">K</div>

    <h1>پنل مدیریت</h1>
    <p class="subtitle">برای ورود اطلاعات خود را وارد کنید</p>

    <form onsubmit="login(event)">

      <input
        class="input"
        type="text"
        id="username"
        placeholder="نام کاربری"
        required
      >

      <input
        class="input"
        type="password"
        id="password"
        placeholder="رمز عبور"
        required
      >

      <button type="submit">
        ورود به پنل
      </button>

    </form>

    <div id="message"></div>

    <a class="back" href="index.html">
      ← بازگشت به سایت
    </a>

  </div>

  <script>
    function login(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("message");

      /*
        توجه:
        این فقط یک صفحه ورود نمایشی است.
        برای پنل واقعی باید احراز هویت امن به سرور اضافه شود.
      */

      if (username === "admin" && password === "1234") {
        message.style.color = "#6f9f72";
        message.textContent = "ورود موفق بود!";

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 700);

      } else {
        message.style.color = "#d05c5c";
        message.textContent = "نام کاربری یا رمز عبور اشتباه است.";
      }
    }
  </script>

</body>
</html>
