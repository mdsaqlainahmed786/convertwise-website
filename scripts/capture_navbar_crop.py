from playwright.sync_api import sync_playwright
from PIL import Image

def capture_navbar(url, output_path, viewport_width=1920, viewport_height=1080, dark_mode=False):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={'width': viewport_width, 'height': viewport_height},
            color_scheme='dark' if dark_mode else 'light',
            device_scale_factor=2  # Retina for sharper crops
        )
        page = context.new_page()
        page.goto(url, wait_until='networkidle')
        page.wait_for_timeout(1000)

        # Get the navbar bounding box
        nav = page.locator('nav').first
        box = nav.bounding_box()
        print(f"Navbar box: {box}")

        # Screenshot full page then crop
        tmp_path = output_path.replace('.png', '_full_tmp.png')
        page.screenshot(path=tmp_path, full_page=False)
        browser.close()

    # Crop to navbar + a bit of padding (using device_scale_factor=2)
    if box:
        scale = 2
        img = Image.open(tmp_path)
        left   = int(box['x'] * scale)
        top    = int(box['y'] * scale)
        right  = int((box['x'] + box['width']) * scale)
        bottom = int((box['y'] + box['height'] + 10) * scale)
        cropped = img.crop((left, top, right, bottom))
        cropped.save(output_path)
        print(f"Saved cropped navbar: {output_path}")
    else:
        print("Could not find nav element, saving full screenshot instead")
        import shutil
        shutil.copy(tmp_path, output_path)

if __name__ == "__main__":
    try:
        from PIL import Image
    except ImportError:
        import subprocess, sys
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "--break-system-packages", "-q"])
        from PIL import Image

    base_url = "http://localhost:5173"

    capture_navbar(base_url,
                   "/Users/nilanshgupta/convertwise-website/screenshots/light_navbar.png",
                   viewport_width=1440, viewport_height=900, dark_mode=False)

    capture_navbar(base_url,
                   "/Users/nilanshgupta/convertwise-website/screenshots/dark_navbar.png",
                   viewport_width=1440, viewport_height=900, dark_mode=True)

    # Mobile navbar
    capture_navbar(base_url,
                   "/Users/nilanshgupta/convertwise-website/screenshots/light_mobile_navbar.png",
                   viewport_width=375, viewport_height=812, dark_mode=False)

    capture_navbar(base_url,
                   "/Users/nilanshgupta/convertwise-website/screenshots/dark_mobile_navbar.png",
                   viewport_width=375, viewport_height=812, dark_mode=True)
