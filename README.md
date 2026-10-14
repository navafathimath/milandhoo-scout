# TrailMark: going live with GitHub and Firebase

TrailMark is a single-page web app. Firebase Hosting serves it, Firebase Authentication handles sign-in and password-reset emails, and Cloud Firestore stores the troop's data and shares it live between leaders. GitHub keeps the code, and a GitHub Action republishes the site each time you push a change.

All of this fits on Firebase's free **Spark** plan. You don't need to add a credit card, and Firebase Storage is not used.

## What's in this folder

| File | Purpose |
|---|---|
| `public/index.html` | The whole portal |
| `public/firebase-config.js` | **You edit this once.** It connects the portal to your Firebase project |
| `public/manifest.webmanifest`, `public/sw.js`, `public/icons/` | Make the portal installable as an app on phones and computers |
| `firestore.rules` | Security rules: who can read and write what |
| `firebase.json`, `.firebaserc` | Firebase Hosting settings. **You edit `.firebaserc` once.** |

If you leave the placeholders in `firebase-config.js`, the portal runs in offline demo mode, the same as the preview.

---

## Step 1: Create the Firebase project

1. Go to <https://console.firebase.google.com> and sign in with a Google account. A school account works well.
2. Click **Create a project**. Name it, for example `trailmark-scouts`. You can turn Google Analytics off.
3. Note the **Project ID** shown under the name (for example `trailmark-scouts` or `trailmark-scouts-4f2a1`). You need it in Step 4.

## Step 2: Turn on sign-in and the database

1. **Authentication → Get started → Sign-in method → Email/Password → Enable → Save.** Leave "Email link" off.
2. **Authentication → Users → Add user.** Enter *your own* email and a password. This becomes the Group Scout Leader (admin) account.
3. **Firestore Database → Create database.** Choose a location close to you, for example `asia-south1 (Mumbai)` for Pakistan, the Maldives or India. You cannot change the location later. Start in **production mode**.
4. Open the **Rules** tab of Firestore. Delete what's there, paste the full contents of `firestore.rules`, and click **Publish**.

## Step 3: Register the web app and copy its config

1. Go to **Project settings** (gear icon) **→ General → Your apps → Web (`</>`)**.
2. Give it a nickname, for example `TrailMark`. Leave "Also set up Firebase Hosting" **unticked**, then click **Register app**.
3. Copy the values from the `firebaseConfig = { … }` block into `public/firebase-config.js`, replacing every `PASTE_…` value.

The API key is safe to publish. Access is protected by sign-in and the security rules.

## Step 4: Set the project ID

Open `.firebaserc` and replace `PASTE_PROJECT_ID` with your Project ID from Step 1.

## Step 5: Put the code on GitHub

**No-install route (website only):**
1. Sign in at <https://github.com>, click **New repository**, name it `trailmark`, choose **Private**, and click **Create repository**.
2. Click **uploading an existing file**. Drag in everything in this folder, including the `public` folder.
3. Click **Commit changes**.

The `.gitignore` and `.firebaserc` files start with a dot, so they can be hidden on your computer. On macOS, press <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> in Finder to show them. On Windows, turn on **View → Hidden items**. Make sure `.firebaserc` is uploaded.

**Git route:**
```bash
cd trailmark-firebase
git init && git add . && git commit -m "TrailMark portal"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/trailmark.git
git push -u origin main
```

## Step 6: Publish with the Firebase CLI (one time, from your computer)

1. Install **Node.js LTS** from <https://nodejs.org>.
2. Open a terminal (Command Prompt or PowerShell on Windows, Terminal on macOS) in this folder and run:

```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

`firebase deploy` uploads the site and the security rules. When it finishes, it prints your live address:

```
Hosting URL: https://YOUR-PROJECT-ID.web.app
```

## Step 7: Auto-deploy from GitHub on every change

Run this in the same folder:

```bash
firebase init hosting:github
```

Answer the prompts:
- **Repository:** `YOUR-USERNAME/trailmark`
- **Set up the workflow to run a build script before every deploy?** → **No**
- **Set up automatic deployment to your site's live channel when a PR is merged?** → **Yes**, branch `main`

The command signs you in to GitHub, stores a deploy key as a GitHub secret, and adds workflow files in `.github/workflows/`. Push those files to GitHub:

```bash
git add .github && git commit -m "Auto-deploy" && git push
```

If you used the website upload in Step 5, upload the new `.github` folder the same way.

From now on, any change committed to `main`, including edits made on github.com, goes live in about a minute. You can follow each run in the repository's **Actions** tab.

## Step 8: First sign-in

1. Open `https://YOUR-PROJECT-ID.web.app` and sign in with the account from Step 2.2.
2. TrailMark sees an empty project and shows **Set up TrailMark**. Enter your name and the group name, then choose one of these:
   - **Sample troop:** 20 example scouts, registers and photos to explore. Delete them later, or use **Settings → Reset to sample data** and start over.
   - **Empty portal:** keeps the badge catalogue, syllabus and session templates, with no scouts.
3. You are now the Group Scout Leader.

## Step 9: Add your leaders

**Leaders → Add user.** Enter the person's name and email, choose a role (Scout Leader, Assistant Leader or Scout), tick their patrols, and set a temporary password. TrailMark creates their sign-in account immediately. Send them the web address and temporary password. They can change it under **Profile menu → Change password**, or use **Forgot password?** on the sign-in page, which sends a real reset email.

For a **scout account**, choose the Scout role and pick their record under **Linked scout**.

To remove someone's access, open their account and tick **Disable sign-in**.

## Step 10: Install it on phones

- **Android (Chrome):** open the site, then tap **⋮ → Add to Home screen / Install app**.
- **iPhone (Safari):** open the site, then tap **Share → Add to Home Screen**.
- **Desktop Chrome/Edge:** click the install icon in the address bar.

---

## Optional: a custom domain

**Hosting → Add custom domain** (for example `scouts.yourschool.edu`). Then follow the DNS steps the console shows. Firebase sets up HTTPS automatically. After that, add the domain under **Authentication → Settings → Authorized domains**.

## Updating the portal later

Edit files in GitHub, or locally followed by `git push`. The GitHub Action redeploys automatically. If you change `firestore.rules`, also run `firebase deploy --only firestore:rules`, or paste the rules in the console as in Step 2.4.

## How the data is stored and protected

| Firestore document | Holds | Who can read / write |
|---|---|---|
| `portal/access` | email → role list | Admin writes; this list decides who can sign in |
| `portal/private` | guardian, emergency contacts, medical notes | Leaders and assistants only |
| `portal/scouts`, `registers`, `badges`, … | everything else, one document per area | Everyone on the list reads; leaders and assistants write |
| `images/*` | photos, logo, profile pictures | Everyone on the list reads; leaders and assistants write |

- Someone who creates a Firebase account on their own still cannot read anything unless the admin has added their email.
- Each data area can hold up to 1 MB, which is several years of registers for one troop. TrailMark warns you before that limit is reached.
- If two leaders edit the *same* area at the *same moment*, the later save wins. Edits to different areas never clash.
- **Backups:** use **Settings → Download backup** each term. Firestore also offers scheduled backups on paid plans.

## Free-plan limits (Spark)

Hosting: 10 GB storage and 360 MB of downloads per day. Firestore: 1 GiB stored, 50,000 reads and 20,000 writes per day. A troop of 20–60 scouts with a few leaders uses a small fraction of this. The main cost is photos: about 200–400 KB each, so roughly 2,500 photos per GiB.

## Troubleshooting

| You see | Fix |
|---|---|
| The demo accounts appear on the sign-in page | `firebase-config.js` still has `PASTE_…` values, so redo Step 3 and redeploy |
| "Setup was blocked by the database rules" | The rules aren't published yet. Redo Step 2.4 |
| "… is not on the portal yet" | The admin hasn't added that email in **Leaders → Add user** |
| `auth/unauthorized-domain` | Add your domain under **Authentication → Settings → Authorized domains** |
| The GitHub Action fails | Check the **Actions** log. Usually `.firebaserc` still has the placeholder project ID |
| Changes don't show after deploy | Reload the page. An installed app updates the next time it opens |
