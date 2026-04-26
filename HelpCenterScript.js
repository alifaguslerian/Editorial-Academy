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

//Search functionality

const searchData = [
    { title: "Getting Started", desc: "Create your account, complete your learner profile, and explore the full curriculum library.", target: "cat-getting-started", type: "Category" },
    { title: "Billing & Payments", desc: "View invoices, request refunds, update your card details, or cancel your Elite Pass.", target: "cat-billing", type: "Category" },
    { title: "Certifications", desc: "Download certificates, grab your verification URL, and add it to LinkedIn.", target: "cat-certifications", type: "Category" },
    { title: "Courses & Content", desc: "Access enrolled curricula, download materials and reading lists.", target: "cat-courses", type: "Category" },
    { title: "Account & Profile", desc: "Edit display name, photo, bio, email, password, and notification settings.", target: "cat-account", type: "Category" },
    { title: "Technical Issues", desc: "Hard refresh, supported browsers, connectivity and playback fixes.", target: "cat-technical", type: "Category" },
    { title: "How do I enroll in a curriculum?", desc: "Navigate to the Library, select your curriculum, and click Enroll Now.", target: "faq-1", type: "FAQ" },
    { title: "What is the Elite Pass?", desc: "Annual subscription unlocking every certification and curriculum.", target: "faq-2", type: "FAQ" },
    { title: "Can I get a refund?", desc: "14-day refund window for single courses with less than 20% completion.", target: "faq-3", type: "FAQ" },
    { title: "Do certifications expire?", desc: "No, certifications are permanent and always available for download.", target: "faq-4", type: "FAQ" },
    { title: "Can I access courses on mobile?", desc: "Yes, all content is accessible from any modern mobile browser.", target: "faq-5", type: "FAQ" },
];

const input = document.getElementById('search-input');

// Buat dropdown
const dropdown = document.createElement('div');
dropdown.id = 'search-dropdown';
dropdown.style.cssText = `
  position: absolute; top: calc(100% + 8px); left: 0; right: 0;
  background: white; border: 1px solid #e4e2e4;
  max-height: 320px; overflow-y: auto;
  display: none; z-index: 100; text-align: left;
`;
input.closest('.search-bar').style.position = 'relative';
input.closest('.search-bar').appendChild(dropdown);

input.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    dropdown.innerHTML = '';

    if (!q) { dropdown.style.display = 'none'; return; }

    const results = searchData.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
    );

    if (!results.length) {
        dropdown.innerHTML = `<div style="padding:16px 20px; font-size:13px; color:#76777d; font-family:'Inter',sans-serif;">No results for "<strong style="color:#1b1b1d;">${this.value}</strong>"</div>`;
        dropdown.style.display = 'block';
        return;
    }

    results.forEach(item => {
        const el = document.createElement('div');
        el.style.cssText = 'padding:14px 20px; cursor:pointer; border-bottom:1px solid #f0edef; transition:background 0.15s;';
        el.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:3px;">
        <span style="font-size:10px; font-family:\'Inter\',sans-serif; letter-spacing:0.08em; text-transform:uppercase; background:#f0edef; color:#45464d; padding:2px 8px; font-weight:500;">${item.type}</span>
        <span style="font-size:14px; font-weight:500; color:#1b1b1d; font-family:\'Inter\',sans-serif;">${item.title}</span>
      </div>
      <div style="font-size:12px; color:#76777d; line-height:1.5; padding-left:2px; font-family:\'Inter\',sans-serif;">${item.desc}</div>
    `;
        el.onmouseover = () => el.style.background = '#f6f3f5';
        el.onmouseout = () => el.style.background = 'white';
        el.onclick = () => {
            const target = document.getElementById(item.target);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Kalau FAQ, auto-open accordion-nya
                if (item.type === 'FAQ') {
                    const btn = target.querySelector('.accordion-btn');
                    if (btn && !btn.classList.contains('open')) btn.click();
                }
                // Kalau Category, auto-open expand-nya
                if (item.type === 'Category') {
                    const plusBtn = target.querySelector('.plus-btn');
                    if (plusBtn && !plusBtn.classList.contains('open')) plusBtn.click();
                }
                // Highlight sebentar
                target.style.transition = 'outline 0s';
                target.style.outline = '2px solid #1b1b1d';
                setTimeout(() => target.style.outline = 'none', 1500);
            }
            dropdown.style.display = 'none';
            input.value = item.title;
        };
        dropdown.appendChild(el);
    });

    dropdown.style.display = 'block';
});

// Tutup dropdown kalau klik di luar
document.addEventListener('click', (e) => {
    if (!input.closest('.search-bar').contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

// Enter = pilih hasil pertama
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const first = dropdown.querySelector('div');
        if (first) first.click();
    }
});