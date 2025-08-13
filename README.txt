# Admin Pack (Ultra) — Decap CMS + Netlify Identity

This folder contains a robust `/admin` ready for mobile-only workflows:
- **Inline config fallback** in `admin/index.html` so the panel loads even if `config.yml` is cached or blocked.
- `admin/config.yml` with i18n (en/es), editorial workflow, and two collections (Portfolio, Aftercare).
- `admin/health.html` quick diagnostics for config + Identity status.
- `admin/admin.css` dark styling for better mobile UX.
- `netlify.toml` headers to avoid caching admin/config.

## How to deploy
1. Upload the ZIP to Netlify (Deploys → Upload deploy) or place this `admin/` folder in your site and redeploy.
2. Ensure **Identity** and **Git Gateway** are enabled. Invite your admin email.
3. Open `/admin/`. If it hangs, use **Health check** and make sure you're logged in.
