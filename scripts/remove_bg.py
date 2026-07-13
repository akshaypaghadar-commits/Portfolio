"""
Remove the plain white/light background from the hero photo so it blends
with the site's dark theme.

Usage:
    pip install pillow
    python scripts/remove_bg.py path/to/photo_white_bg.jpg public/images/profile-hero.png

Works best when the background is near-white (like a studio shot).
"""
import sys
from PIL import Image

def remove_white_bg(src, dst, threshold=235, soft=25):
    img = Image.open(src).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            brightness = (r + g + b) / 3
            # Fully transparent above the threshold; feather the edge below it
            if brightness >= threshold and max(r, g, b) - min(r, g, b) < 18:
                px[x, y] = (r, g, b, 0)
            elif brightness >= threshold - soft and max(r, g, b) - min(r, g, b) < 18:
                alpha = int(255 * (threshold - brightness) / soft)
                px[x, y] = (r, g, b, alpha)
    img.save(dst, "PNG")
    print(f"saved -> {dst}")

if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "photo_white_bg.jpg"
    dst = sys.argv[2] if len(sys.argv) > 2 else "public/images/profile-hero.png"
    remove_white_bg(src, dst)
