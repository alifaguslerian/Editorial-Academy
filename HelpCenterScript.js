//FAQ Accordion 
function toggle(btn) {
    const content = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.accordion-btn.open').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
        btn.classList.add('open');
        content.classList.add('open');
    }
}

// Category 
function expand(btn) {
    const card = btn.closest('.category-card');
    const content = card.querySelector('.card-expand');
    const isOpen = btn.classList.contains('open');
    btn.classList.toggle('open', !isOpen);
    content.classList.toggle('open', !isOpen);
}

document.getElementById('search-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
        console.log('Search:', this.value.trim());
    }
});

const articles = {
    'getting-started': {
        tag: 'Getting Started',
        title: 'How to set up your learner profile from scratch',
        body: `
        <p style="margin-bottom:16px;">Your learner profile is your identity on The Editorial Academy — it ensures your certifications are correctly attributed and lets instructors and the community know who you are. Setting it up takes less than five minutes.</p>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:20px 0 12px; letter-spacing:-0.01em;">Step-by-step guide</h4>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">1</div><div>Sign in and click your avatar in the top-right corner. Select <em>Profile &amp; Settings</em> from the dropdown menu.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">2</div><div>Upload a profile photo. Click the camera icon on your avatar placeholder. We recommend a square image at least 400×400px for the best quality across all devices.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">3</div><div>Fill in your display name and bio. Your name will appear on issued certificates, so make sure it matches exactly how you'd like it to read professionally.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">4</div><div>Add your professional links — LinkedIn, portfolio, or personal website. These will appear on your public learner profile page.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">5</div><div>Set your learning preferences — discipline focus, notification frequency, and language. These help us surface the most relevant curricula for you.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:20px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">6</div><div>Save your changes. You'll see a confirmation banner at the top of the page. Your profile is now live and visible to the community.</div></div>
        <div style="background:#f0edef; padding:14px 18px;"><div style="font-family:'Manrope',sans-serif; font-size:11px; font-weight:700; color:#735c00; letter-spacing:0.05em; text-transform:uppercase; margin-bottom:4px;">Pro tip</div><p style="font-size:13px; color:#45464d; margin:0;">Your display name is used on all issued certifications. If you change it after earning a certificate, previously issued documents will retain the original name.</p></div>
      `
    },
    'billing': {
        tag: 'Billing',
        title: 'Understanding your invoice and payment schedule',
        body: `
        <p style="margin-bottom:16px;">Every purchase you make on The Editorial Academy generates an invoice, accessible immediately from your account dashboard. Here's how our billing system works and what each line item means.</p>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:20px 0 12px; letter-spacing:-0.01em;">Where to find your invoices</h4>
        <p style="margin-bottom:16px;">Navigate to <em>Account → Billing &amp; Payments</em>. You'll find a full history of all transactions, sorted by date. Each invoice can be downloaded as a PDF — useful for expense reporting or VAT reclaim.</p>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:20px 0 12px; letter-spacing:-0.01em;">What appears on your invoice</h4>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">1</div><div><strong>Item description</strong> — the curriculum or Elite Pass you purchased, including the billing period for subscriptions.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">2</div><div><strong>Subtotal, tax, and total.</strong> Tax is calculated based on your billing address. EU learners will see VAT applied at the applicable local rate.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:20px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">3</div><div><strong>Payment method</strong> — the last four digits of the card or the PayPal account used for the transaction.</div></div>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:0 0 12px; letter-spacing:-0.01em;">Elite Pass renewal schedule</h4>
        <p style="margin-bottom:16px;">If you hold an Elite Pass, your subscription renews automatically on the same day each year. You'll receive a reminder email 7 days before renewal. You can cancel anytime before the renewal date from the Billing page.</p>
        <div style="background:#f0edef; padding:14px 18px;"><div style="font-family:'Manrope',sans-serif; font-size:11px; font-weight:700; color:#735c00; letter-spacing:0.05em; text-transform:uppercase; margin-bottom:4px;">Need a custom invoice?</div><p style="font-size:13px; color:#45464d; margin:0;">If you require a company name or VAT number on your invoice, contact support within 48 hours of purchase and we'll issue a revised document.</p></div>
      `
    },
    'certifications': {
        tag: 'Certifications',
        title: 'Sharing your credential on LinkedIn and portfolios',
        body: `
        <p style="margin-bottom:16px;">Once you've earned a certification from The Editorial Academy, you'll want to make it visible to employers, collaborators, and your professional network. Here's the best way to do it across different platforms.</p>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:20px 0 12px; letter-spacing:-0.01em;">Downloading your certificate</h4>
        <p style="margin-bottom:16px;">Go to <em>My Learning → Certifications</em> and click the certificate you'd like to share. You can download it as a high-resolution PDF or PNG, suitable for both digital and print use.</p>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:20px 0 12px; letter-spacing:-0.01em;">Adding it to LinkedIn</h4>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">1</div><div>On your LinkedIn profile, scroll to the <strong>Licenses &amp; Certifications</strong> section and click <em>Add credential</em>.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">2</div><div>Set the <strong>Issuing Organization</strong> to <em>The Editorial Academy</em> and enter the certification name exactly as it appears on your certificate.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:20px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">3</div><div>Paste your unique <strong>Credential ID</strong> and the <strong>Verification URL</strong> — both are available from your certificate detail page. This allows anyone to verify your credential instantly.</div></div>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:0 0 12px; letter-spacing:-0.01em;">Adding it to a portfolio</h4>
        <p style="margin-bottom:16px;">Embed the verification link as a button or hyperlink alongside your work samples. For personal websites, display the certificate image with a visible link to the verification page to establish authenticity.</p>
        <div style="background:#f0edef; padding:14px 18px;"><div style="font-family:'Manrope',sans-serif; font-size:11px; font-weight:700; color:#735c00; letter-spacing:0.05em; text-transform:uppercase; margin-bottom:4px;">Verification</div><p style="font-size:13px; color:#45464d; margin:0;">All Editorial Academy certificates are permanently verifiable. The credential URL will remain active indefinitely — even if you no longer hold an active membership.</p></div>
      `
    },
    'technical': {
        tag: 'Technical',
        title: 'Video not loading? Common fixes for all browsers',
        body: `
        <p style="margin-bottom:16px;">Video playback issues are usually caused by browser settings, extensions, or network conditions rather than the video itself. Work through the steps below to resolve the issue quickly.</p>
        <h4 style="font-family:'Manrope',sans-serif; font-size:14px; font-weight:700; color:#1b1b1d; margin:20px 0 12px; letter-spacing:-0.01em;">Quick fixes to try first</h4>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">1</div><div><strong>Hard-refresh the page.</strong> On Windows press <em>Ctrl + Shift + R</em>, on Mac press <em>Cmd + Shift + R</em>. This clears the cached version of the page.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">2</div><div><strong>Disable browser extensions.</strong> Ad blockers and privacy extensions commonly interfere with video embeds. Try opening the course in an incognito window to test this quickly.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">3</div><div><strong>Check your connection speed.</strong> Our HD video streams require at least 5 Mbps. If slower, click the quality icon on the player and select a lower resolution.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:14px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">4</div><div><strong>Try a different browser.</strong> We fully support Chrome, Firefox, Safari, and Edge. If one browser fails, another usually works while we investigate the issue.</div></div>
        <div style="display:flex; gap:14px; margin-bottom:20px; align-items:flex-start;"><div style="font-family:'Manrope',sans-serif; font-size:12px; font-weight:700; color:#fcf8fa; background:#1b1b1d; width:22px; height:22px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;">5</div><div><strong>Clear cookies and cache</strong> for our domain. In Chrome: Settings → Privacy → Clear browsing data → select <em>Cookies</em> and <em>Cached images</em>.</div></div>
        <div style="background:#f0edef; padding:14px 18px;"><div style="font-family:'Manrope',sans-serif; font-size:11px; font-weight:700; color:#735c00; letter-spacing:0.05em; text-transform:uppercase; margin-bottom:4px;">Still not working?</div><p style="font-size:13px; color:#45464d; margin:0;">Take a screenshot of any error message and contact our support team via Live Chat. Include your browser version and operating system so we can resolve it faster.</p></div>
      `
    }
};

function openArticle(id) {
    const a = articles[id];
    document.getElementById('article-tag').textContent = a.tag;
    document.getElementById('article-title').textContent = a.title;
    document.getElementById('article-body').innerHTML = a.body;
    const overlay = document.getElementById('article-overlay');
    overlay.style.display = 'flex';
    document.getElementById('article-popup').scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

function closeArticle() {
    document.getElementById('article-overlay').style.display = 'none';
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeArticle();
});