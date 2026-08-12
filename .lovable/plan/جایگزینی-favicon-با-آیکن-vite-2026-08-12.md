# جایگزینی Favicon با آیکن Vite

## هدف
حذف favicon پیش‌فرض Lovable و قرار دادن آیکن رسمی Vite (لوگوی مثلث آبی-بنفش با رعد زرد) به جای آن.

## گام‌ها
1. **حذف favicon قدیمی**: حذف `public/favicon.ico`.
2. **ساخت favicon جدید**: ایجاد `public/favicon.svg` با لوگوی وکتور Vite.
3. **اتصال در HTML**: افزودن تگ `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` به `<head>` در `index.html`.

## نتیجه مورد انتظار
آیکن تب مرورگر به لوگوی Vite تغییر می‌کند و favicon پیش‌فرض Lovable دیگر لود نمی‌شود.
