# 📁 ASSETS.md — Where each of your photos goes

> ✅ **All photos are already bundled in this version** — nothing to copy. This file is kept only as a reference if you ever want to swap an image.


Copy/rename your original files into **`public/images/`** (and `public/docs/`) with these exact names.
Until a file is added, the site shows a neat labelled placeholder — nothing breaks.

## 1. Your photo (hero)

| Your original file | Rename to | Notes |
|---|---|---|
| `photo_white_bg.jpg` (grey-blazer photo) | `public/images/profile-hero.png` | Run `python scripts/remove_bg.py photo_white_bg.jpg public/images/profile-hero.png` to strip the white background so it blends with the dark site. Using the JPG as-is also works — the frame is designed to look good either way. |

## 2. Project Expo Winner (Achievement)

| Your original file | Rename to |
|---|---|
| `...12_53_10_PM.jpeg` — receiving the "Project Expo Winner" board on stage | `public/images/expo-stage.jpg` |
| `...1_01_12_PM.jpeg` — the motor starter hardware (L&T starter + control box) | `public/images/expo-hardware.jpg` |
| `...12_42_56_PM.jpeg` — BVM Certificate of Achievement (First Rank) | `public/images/expo-certificate.jpg` |

## 3. Research paper certificates

| Your original file | Rename to |
|---|---|
| `...12_34_44_PM.jpeg` — ICAIIE-2026 certificate (Smart Agri Starter paper) | `public/images/paper-agri-certificate.jpg` |
| `...12_34_45_PM.jpeg` — IJSRST Certificate of Publication (KIWI Bot paper) | `public/images/paper-kiwi-certificate.jpg` |

## 4. Robofest 4.0 — Runner Up (Achievement)

| Your original file | Rename to |
|---|---|
| `...12_52_24_PM.jpeg` — Gaurav Puraskar felicitation on stage (team photo) | `public/images/robofest-award-stage.jpg` |
| `...image.png` — BVM Arihant robot on the lawn | `public/images/robofest-auv.jpg` |
| `...1_02_40_PM.jpeg` — you holding the Gaurav Puraskar trophy | `public/images/robofest-trophy.jpg` |
| `...12_44_04_PM.jpeg` — Robofest-Gujarat 4.0 Certificate of Merit | `public/images/robofest-certificate.jpg` |

## 5. Patent

| Your original file | Rename to |
|---|---|
| `...12_50_35_PM.jpeg` — Certificate of Registration of Design (447676-001) | `public/images/patent-design-certificate.jpg` |

## 6. SAUVC 2025, Singapore (Achievement)

| Your original file | Rename to |
|---|---|
| `...image.png` — AUV beside the competition pool | `public/images/sauvc-auv-pool.jpg` |
| `...image.png` — Team India group photo with SAUVC banner | `public/images/sauvc-team.jpg` |
| `...1_37_40_PM.jpeg` — IEEE SAUVC Certificate of Participation | `public/images/sauvc-certificate.jpg` |

## 7. NCC (Achievement)

| Your original file | Rename to |
|---|---|
| `...image.png` — you in NCC uniform | `public/images/ncc-uniform.jpg` |
| `SCAN_...pdf` — NCC Certificate "B" | Export page 1 as an image → `public/images/ncc-certificate.jpg` |

## 8. Internship

| Your original file | Rename to |
|---|---|
| `...12_41_07_PM.jpeg` — Instruments Universal training letter | `public/images/internship-letter.jpg` |

## 9. Course / workshop certificates (from `WhatsApp_Image_...PM.pdf`)

Export each page of that PDF as an image:

| PDF page | Rename to |
|---|---|
| Page 1 — UC Santa Cruz "C for Everyone" (Coursera) | `public/images/cert-coursera-c.jpg` |
| Page 2 — NDLI "Linear Algebra & Fourier Series" | `public/images/cert-ndli-linear-algebra.jpg` |
| Page 3 — NDLI "VLSI Analog IC Design" | `public/images/cert-ndli-vlsi.jpg` |
| Page 4 — NDLI "PCB Design" | `public/images/cert-ndli-pcb.jpg` |

## 10. Project photos (from `smart_car.pdf`)

Export each page as an image:

| PDF page | Rename to | Used by project |
|---|---|---|
| Page 1 — RC car Fritzing circuit | `public/images/project-rc-car.jpg` | Smart RC Car / KIWI Bot |
| Page 2 — 24-hour digital clock (Proteus) | `public/images/project-digital-clock.jpg` | Digital Clock |
| Page 3 — ESP32 + SIM800L GSM board | `public/images/project-dustbin.jpg` | Smart IoT Dustbin |
| Page 4 — water pump + level probe rig | `public/images/project-water-level.jpg` | Water Level Controller |
| Page 5 — phase detector PCB render | `public/images/project-phase-detector.jpg` | Contactless Phase Detector |
| Page 6 — RFID door lock circuit | `public/images/project-door-lock.jpg` | Smart Door Lock |

> Tip to export PDF pages as images: open the PDF → right-click a page → "Save image as", or use
> `pdftoppm -jpeg -r 150 file.pdf out` on any Linux/Mac machine.

## 11. Resume

| Your original file | Rename to |
|---|---|
|  `Resume__1_.pdf` (already bundled) | `public/docs/Akshay_Paghadar_Resume.pdf` |
