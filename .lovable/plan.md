# Fix WhatsApp "refused to connect" on order submit

## Problem
Clicking "Place order via WhatsApp" builds a URL using `https://api.whatsapp.com/send?phone=...` and navigates the current tab with `window.location.assign(url)`. In the preview (and some browsers) this triggers `api.whatsapp.com refused to connect.` and the order never reaches WhatsApp.

## Plan
1. Reproduce the checkout submit in the live preview to confirm the failure.
2. Update `src/components/CheckoutDialog.tsx`:
   - Build the WhatsApp link with the canonical `https://wa.me/<phone>` format instead of `api.whatsapp.com/send`.
   - Open the link in a new tab (`window.open(url, "_blank", "noopener,noreferrer")`) instead of replacing the current page, so the storefront stays open and the popup/blocker issue is avoided.
   - Keep the existing message text, encoding, and local-storage order-history write unchanged.
3. Verify the new link opens WhatsApp (web or app) with the full order message pre-filled.

## Files to change
- `src/components/CheckoutDialog.tsx` (WhatsApp URL builder + open behavior)

## Out of scope
- No changes to menu data, cart logic, translations, or styling.
- No changes to the WhatsApp phone number in `src/data/config.ts`.
