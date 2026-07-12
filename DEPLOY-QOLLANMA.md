# 🚀 reyesagency.uz — Serverga Joylash Qo'llanmasi

## Kerakli narsalar
- Kompyuterda: **Node.js** (https://nodejs.org dan yuklab oling, LTS versiya)
- Kompyuterda: **Git** (https://git-scm.com dan yuklab oling)
- **GitHub** akkaunt (https://github.com — bepul ro'yxatdan o'ting)
- **Vercel** akkaunt (https://vercel.com — GitHub bilan kiring)
- **ahost.uz** panelga kirish (domen DNS uchun)

---

## 1-QADAM: Node.js va Git o'rnatilganini tekshirish (2 daqiqa)

Terminal (Windows: PowerShell, Mac: Terminal) oching:

```bash
node --version
# v18.x.x yoki v20.x.x chiqishi kerak

git --version
# git version 2.x.x chiqishi kerak
```

Agar chiqmasa:
- Node.js: https://nodejs.org → LTS yuklab o'rnating
- Git: https://git-scm.com → yuklab o'rnating

---

## 2-QADAM: ZIP faylni ochish va paketlarni o'rnatish (3 daqiqa)

```bash
# 1. ZIP faylni oching (masalan Desktop ga)
# 2. Terminal da papkaga kiring:

cd Desktop/reyes-site
# yoki ZIP ochilgan boshqa joy

# 3. Paketlarni o'rnating:
npm install

# 4. Lokal da tekshiring:
npm run dev

# 5. Brauzerda oching: http://localhost:3000
# Sayt ko'rinsa — hammasi ishlayapti!
# Ctrl+C bosib to'xtating
```

---

## 3-QADAM: GitHub'ga yuklash (5 daqiqa)

### 3.1 GitHub'da yangi repo yarating:
1. https://github.com ga kiring
2. Yuqori o'ngda **"+"** → **"New repository"**
3. Sozlamalar:
   - Repository name: **reyesagency-website**
   - Visibility: **Private** (tavsiya)
   - README, .gitignore QO'SHMANG
4. **"Create repository"** bosing

### 3.2 Loyihani yuklang:
```bash
# Terminal da reyes-site papkasida turganingizda:

git init
git add .
git commit -m "Reyes Digital Marketing Agency - first release"

# Quyidagi qatordagi YOUR_USERNAME ni GitHub username'ingizga almashtiring:
git remote add origin https://github.com/YOUR_USERNAME/reyesagency-website.git
git branch -M main
git push -u origin main
```

GitHub parol so'rasa → GitHub Settings → Developer Settings → Personal Access Tokens → token yarating va parol o'rniga yozing.

---

## 4-QADAM: Vercel'ga deploy qilish (3 daqiqa)

### 4.1 Vercel'ga kiring:
1. https://vercel.com → **"Sign Up"** → **"Continue with GitHub"**
2. GitHub akkountingiz bilan kiring
3. GitHub repo'lariga ruxsat bering

### 4.2 Loyihani import qiling:
1. Vercel dashboard → **"Add New..."** → **"Project"**
2. **"Import Git Repository"** → **reyesagency-website** ni toping
3. **"Import"** bosing

### 4.3 Sozlamalar:
Vercel avtomatik aniqlaydi. Tekshiring:
```
Framework Preset:  Next.js     ← avtomatik
Root Directory:    ./          ← o'zgartirmang
Build Command:     next build  ← avtomatik
Output Directory:  .next       ← avtomatik
```

**Environment Variables** (ixtiyoriy, keyin ham qo'shsa bo'ladi):
```
NEXT_PUBLIC_SITE_URL = https://reyesagency.uz
```

4. **"Deploy"** bosing
5. ⏳ 1-2 daqiqa kutasiz...
6. ✅ Tayyor! Vercel sizga URL beradi: `reyesagency-website.vercel.app`
7. Shu URL'ni brauzerda oching — sayt ishlayaptimi tekshiring

---

## 5-QADAM: reyesagency.uz domenini ulash (10 daqiqa)

### 5.1 Vercel'da domen qo'shish:
1. Vercel dashboard → loyihangiz → **"Settings"** → **"Domains"**
2. Yozing: **reyesagency.uz**
3. **"Add"** bosing
4. Yana qo'shing: **www.reyesagency.uz**
5. Vercel DNS sozlamalarni ko'rsatadi

### 5.2 ahost.uz panelda DNS o'zgartirish:

1. https://ahost.uz ga kiring → **Panelga kirish**
2. **reyesagency.uz** domenini toping
3. **DNS boshqaruv** (yoki "DNS sozlamalari") bo'limiga kiring
4. **ESKI barcha A record'larni o'chiring** (odatda ahost serveriga yo'naltirilgan)
5. Yangi record'lar qo'shing:

**Record 1 — Asosiy domen:**
```
Turi (Type):     A
Nomi (Name):     @    (yoki bo'sh qoldiring)
Qiymati (Value): 76.76.21.21
TTL:             300  (yoki Auto)
```

**Record 2 — www subdomen:**
```
Turi (Type):     CNAME
Nomi (Name):     www
Qiymati (Value): cname.vercel-dns.com
TTL:             300  (yoki Auto)
```

6. **Saqlang**

### 5.3 Tekshirish:
- DNS o'zgarishlar 5-30 daqiqa ichida ishlaydi (ba'zan 24 soatgacha)
- Brauzerda oching: **https://reyesagency.uz**
- SSL sertifikat Vercel tomonidan **avtomatik** o'rnatiladi

### 5.4 Agar ishlamasa:
```bash
# Terminal da tekshiring:
nslookup reyesagency.uz
# Javob: 76.76.21.21 chiqishi kerak

# Online tekshirish:
# https://dnschecker.org da reyesagency.uz yozing
```

---

## 6-QADAM: SEO sozlash (deploy'dan keyin)

### 6.1 Google Search Console:
1. https://search.google.com/search-console
2. **"Add Property"** → **"URL prefix"** → `https://reyesagency.uz`
3. **"HTML tag"** usulida tasdiqlang:
   - Berilgan meta tag'ni nusxalang
   - Vercel → Settings → Environment Variables:
     ```
     NEXT_PUBLIC_GOOGLE_VERIFICATION = sizga_berilgan_kod
     ```
   - Redeploy qiling (git push yoki Vercel'da "Redeploy")
4. Tasdiqlagandan keyin → **"Sitemaps"** → qo'shing:
   ```
   https://reyesagency.uz/sitemap.xml
   ```

### 6.2 Yandex Webmaster:
1. https://webmaster.yandex.com
2. Sayt qo'shing: `https://reyesagency.uz`
3. Tasdiqlang
4. Sitemap: `https://reyesagency.uz/sitemap.xml`

### 6.3 Google My Business:
1. https://business.google.com
2. Biznes qo'shing:
   - Nomi: **Reyes Digital Marketing Agency**
   - Kategoriya: **Marketing agency** (yoki Digital marketing agency)
   - Manzil: **Toshkent, Yunusobod tumani, Kozitoron ko'chasi 9**
   - Telefon: **+998 77 007 76 56**
   - Web-sayt: **https://reyesagency.uz**
3. Pochta yoki telefon orqali tasdiqlang

---

## 7-QADAM: Ijtimoiy tarmoq linklarini yangilash

Sayt kodida hozir ijtimoiy tarmoq linklari `#` bilan belgilangan.
Real linklar tayyor bo'lganda, quyidagi fayllarni yangilang:

```
src/components/sections/ContactSection.tsx  — Contact bo'limidagi Instagram, YouTube, Telegram
src/components/layout/Footer.tsx            — Footerdagi ijtimoiy tarmoqlar
```

Har bir faylda `href="#"` ni real URL ga almashtiring:
```tsx
// O'zgartirish: href="#" → href="https://instagram.com/sizning_account"
```

Keyin:
```bash
git add .
git commit -m "update: social media links"
git push
# Vercel avtomatik deploy qiladi!
```

---

## Yangilik kiritish (keyinchalik)

Har safar saytni yangilaganingizda:

```bash
# 1. O'zgarishlarni saqlang
git add .
git commit -m "yangilik: blog maqola qo'shildi"
git push

# 2. Tamom! Vercel avtomatik 1-2 daqiqada deploy qiladi
```

---

## Xarajatlar

| Xizmat | Narx |
|---|---|
| Vercel hosting | **BEPUL** (Hobby plan) |
| SSL sertifikat | **BEPUL** (Vercel avtomatik) |
| GitHub | **BEPUL** |
| reyesagency.uz domen (ahost) | allaqachon bor |
| Google Search Console | **BEPUL** |
| Google My Business | **BEPUL** |
| Google Analytics | **BEPUL** |
| **JAMI** | **$0/oy** |

---

## Yordam kerak bo'lsa

- **Vercel docs:** https://vercel.com/docs
- **Next.js docs:** https://nextjs.org/docs
- **ahost support:** https://ahost.uz (DNS savollari uchun)
- **DNS tekshirish:** https://dnschecker.org

---

## Checklist

- [ ] Node.js va Git o'rnatildi
- [ ] `npm install` va `npm run dev` ishladi
- [ ] GitHub'ga push qilindi
- [ ] Vercel'da deploy bo'ldi
- [ ] Vercel'da reyesagency.uz domeni qo'shildi
- [ ] ahost'da DNS o'zgartirildi (A → 76.76.21.21, CNAME www → cname.vercel-dns.com)
- [ ] https://reyesagency.uz ishlayapti
- [ ] Google Search Console'da sitemap yuklandi
- [ ] Yandex Webmaster'da sayt qo'shildi
- [ ] Google My Business yaratildi
- [ ] Ijtimoiy tarmoq linklari yangilandi
