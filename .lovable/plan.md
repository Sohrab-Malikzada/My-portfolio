# قرار دادن آیکن Vite به‌عنوان favicon.ico

## وضعیت فعلی
- `public/favicon.ico` (آیکن Lovable) حذف شده است.
- `public/favicon.svg` با لوگوی رسمی Vite ساخته شده و در `index.html` ثبت است.

## کاری که انجام می‌شود
1. ساخت `public/favicon.ico` واقعی از روی لوگوی Vite (اندازه‌های 16/32/48 پیکسل) تا مرورگرها و سرویس‌هایی که مستقیماً `/favicon.ico` را درخواست می‌کنند هم آیکن Vite را ببینند.
2. افزودن تگ آیکن در `index.html` در کنار SVG:
   - `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`
   - `<link rel="icon" href="/favicon.ico" sizes="any">`
3. بررسی نهایی: باز کردن `/favicon.ico` و `/favicon.svg` در پیش‌نمایش برای اطمینان از لود شدن.

## نتیجه
آیکن تب مرورگر در همه حالت‌ها لوگوی Vite است و دیگر هیچ اثری از آیکن Lovable باقی نمی‌ماند.
