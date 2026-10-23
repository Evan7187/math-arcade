# Math Arcade

Offline math facts practice (+ − × ÷) with a timer, skips/misses tracking, and a local leaderboard.

## Files (upload ALL of these, keep the folder layout)

```
index.html              the game
manifest.webmanifest    app name + icon for Add to Home Screen
sw.js                   saves the game on the device so it works offline
icons/icon-192.png
icons/icon-512.png
icons/apple-touch-icon.png
README.md               these instructions
```

## 1. Upload to GitHub

1. Sign in at github.com and click **+ → New repository**.
2. Name it `math-arcade`, set it to **Public**, click **Create repository**.
3. Click **uploading an existing file**.
4. Unzip the package on your computer, open the `math-arcade` folder,
   select everything inside it (including the `icons` folder) and drag it onto the page.
   - On iPhone/iPad the web uploader can't upload folders well; use a computer for this step.
5. Click **Commit changes**.
6. Check the repo shows `index.html` at the top level and an `icons` folder with 3 images.

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait 1–2 minutes and refresh. The address appears at the top:
   `https://YOUR-USERNAME.github.io/math-arcade/`

## 3. Install on iPhone / iPad

1. Open the address in **Safari** (not Brave/Chrome — only Safari installs properly on iOS).
2. Let the page fully load once.
3. Tap **Share → Add to Home Screen → Add**.
4. Open Math Arcade **from the Home Screen icon** from now on.

### Test offline
Open it once from the icon, close it, turn on **Airplane Mode**, open it again.
It should load and play normally.

## Leaderboard: how saving works

- Scores are saved **on each device**, not on GitHub. Each phone/iPad has its own leaderboard.
- The Home Screen app and a Safari tab keep **separate** scores. Always use the icon.
- Scores are lost if the app is deleted from the Home Screen or website data is cleared
  (Settings → Apps → Safari → Advanced → Website Data).
- Use **🏆 → 📷 Save leaderboard as picture** to keep a copy in Photos.

## Updating the game later

1. In the repo, click `index.html` → pencil/upload to replace it with the new version → **Commit**.
2. Wait 1–2 minutes for Pages to republish.
3. On each device, open the app **while online**, close it, and open it again.
   The new version loads; scores are kept.
   The version number is shown at the bottom of the menu screen.

## Troubleshooting

| Problem | Fix |
|---|---|
| 404 page | Wait a few minutes; confirm `index.html` is at the repo root, not inside a subfolder. |
| Icon is a blank/letter tile | Icons folder missing or misnamed; re-upload `icons/`. Delete and re-add the Home Screen icon. |
| Doesn't work offline | Open it once online from the icon first, then try Airplane Mode again. |
| Menu says scores work for this session only | Storage is blocked (usually Private Browsing). Use normal Safari / the Home Screen icon. |
| Old version still showing | Open while online, fully close the app, reopen. |
