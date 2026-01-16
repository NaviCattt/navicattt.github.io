
/* 1. Navbar */
class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="nav-menu">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="Commissions.html">Commissions</a></li>
                <li><a href="Terms.html">Terms & Conditions</a></li>
            </ul>
        </nav>
        `;
    this.highlightActiveLink();
  }

  highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = this.querySelectorAll("a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (currentPath.includes(href)) {
        link.classList.add("active");
      }
    });
  }
}
customElements.define("app-navbar", AppNavbar);


/* 2. Footer */
class AppFooter extends HTMLElement {
    connectedCallback() {
        const isStartPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
        const isCommissionsOrTerms = window.location.pathname.includes('Commissions.html') || window.location.pathname.includes('Terms.html');

        const twitterIcon = `
            <a href="https://twitter.com/Navicattt" target="_blank" title="Twitter" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#1DA1F2'" onmouseout="this.style.color='inherit'">
                <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: currentColor;"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>`;
            
        const instaIcon = `
            <a href="https://www.instagram.com/navi_catt/" target="_blank" title="Instagram" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#E1306C'" onmouseout="this.style.color='inherit'">
                <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: currentColor;">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>`;

        const kofiIcon = `
            <a href="https://ko-fi.com/navicattt" target="_blank" title="Ko-fi" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#FF5E5B'" onmouseout="this.style.color='inherit'">
                <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; fill: currentColor;"><path d="M509.5,190.9c-16.5-87.2-103.7-98-103.7-98H15.4c-12.9,0-14.5,17-14.5,17s-1.7,156.3-0.4,252.3c3.5,51.6,55.2,57,55.2,57   s176.3-0.5,255.2-1.1c52-9.1,57.3-54.8,56.7-79.7C460.5,343.5,525.9,278,509.5,190.9L509.5,190.9z M273.5,265.8   c-26.6,30.9-85.6,84.8-85.6,84.8s-2.6,2.6-6.7,0.5c-1.6-1.2-2.2-1.9-2.2-1.9c-9.5-9.4-71.8-65-86.1-84.3   c-15.1-20.6-22.2-57.6-1.9-79.2c20.2-21.5,64.1-23.2,93.1,8.7c0,0,33.3-38,74-20.5C298.6,191.3,297.2,238,273.5,265.8z M405.2,276   c-19.8,2.5-35.9,0.6-35.9,0.6V155.4H407c0,0,42.1,11.8,42.1,56.3C449.1,252.5,428.1,268.6,405.2,276L405.2,276z"/></svg>
            </a>`;
            const vgenIcon = `
            <a href="https://vgen.co/NaviCattt" target="_blank" title="VGen" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#23C55E'" onmouseout="this.style.color='inherit'">
                <svg viewBox="0 0 32 32" style="width: 24px; height: 24px; fill: none;" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0188 7.53476C18.4405 4.45385 23.7119 4.73011 26.7928 8.15181L27.0405 8.42694C28.4499 9.954 29.7068 12.1583 29.6527 14.3321L29.6527 14.3315C29.6351 15.1011 29.4176 15.8877 28.9881 16.584L28.9059 16.7152C28.8606 16.7867 28.7977 16.8848 28.7185 17.0061C28.5603 17.248 28.3357 17.5839 28.0555 17.9829C27.5006 18.7729 26.7012 19.8475 25.7449 20.942C24.8071 22.0153 23.6107 23.2326 22.2478 24.2147C20.9659 25.1385 19.018 26.234 16.6735 26.234C14.3766 26.234 12.4059 25.1755 11.1012 24.3002C9.69402 23.3561 8.41251 22.1779 7.3833 21.1239C6.33573 20.0513 5.44163 18.9955 4.81472 18.2169C4.4986 17.8243 4.24392 17.4942 4.06461 17.257C3.97482 17.1383 3.90354 17.0424 3.85248 16.9731L3.76168 16.8488C2.32119 14.8469 2.7743 12.054 4.77822 10.612C6.78056 9.17118 9.57188 9.62628 11.0135 11.6278L11.014 11.6285L11.0467 11.6731C11.0769 11.7141 11.1257 11.7799 11.1916 11.867C11.3236 12.0415 11.5223 12.2995 11.7745 12.6126C11.9256 12.8003 12.0937 13.005 12.2759 13.2212C12.4046 11.1158 13.3274 9.05766 15.0188 7.53476Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3169 9.04793C18.562 7.0264 22.0209 7.20767 24.0424 9.4528L24.3013 9.74033L24.3044 9.74376C25.4787 11.012 26.2005 12.5351 26.1665 13.6574L26.1664 13.6599C26.1601 13.9341 26.083 14.2108 25.9282 14.4619L25.9094 14.4921C25.8988 14.5091 25.8838 14.533 25.8646 14.5632C25.826 14.6242 25.7702 14.7113 25.6987 14.8207C25.5557 15.0395 25.3492 15.3486 25.0897 15.7179C24.5728 16.4538 23.8364 17.4427 22.9661 18.4387C22.1026 19.427 21.0687 20.467 19.9518 21.2718C18.864 22.0557 17.5143 22.7501 16.0535 22.7501C14.6095 22.7501 13.2205 22.0687 12.0783 21.3024C10.899 20.5113 9.77254 19.4852 8.81417 18.5039C7.84915 17.5157 7.01671 16.5336 6.42743 15.8018C6.13184 15.4347 5.89511 15.1277 5.73097 14.9107C5.64885 14.8021 5.58475 14.7158 5.5404 14.6556C5.51821 14.6255 5.50096 14.6019 5.48883 14.5853L5.4685 14.5572C5.32642 14.3333 5.23504 14.174 5.18637 13.8666C5.11436 13.4118 5.22672 12.8309 5.73339 12.3933C6.16365 12.0266 6.72663 11.96 7.09996 12.0533C7.57996 12.16 7.85933 12.4066 8.067 12.6856L8.06747 12.6862L8.06824 12.6873L8.07798 12.7007C8.08659 12.7125 8.10022 12.7312 8.11865 12.7562C8.15553 12.8063 8.21159 12.8817 8.28514 12.979C8.43233 13.1736 8.64901 13.4547 8.92168 13.7933C9.46893 14.4729 10.2325 15.3727 11.1053 16.2664C11.9847 17.1669 12.9378 18.0228 13.8624 18.6431C14.8237 19.288 15.5628 19.5477 16.0535 19.5477C16.4161 19.5477 16.8947 19.4034 17.4769 19.0666L17.8826 18.8319L17.5277 18.5257C17.4156 18.429 17.3083 18.3241 17.2065 18.211L15.912 16.7734C13.8905 14.5283 14.0718 11.0695 16.3169 9.04793ZM22.3879 13.9925C21.92 14.6524 21.2854 15.4953 20.5545 16.3317L20.5377 16.3509L20.3046 16.6171L18.2985 14.6379L18.2919 14.6306C17.4538 13.6998 17.5289 12.2658 18.4597 11.4278C19.3905 10.5897 20.8245 10.6648 21.6626 11.5956L21.9214 11.8831C22.1723 12.1618 22.387 12.4709 22.4936 12.8159C22.6035 13.1715 22.5928 13.5476 22.4206 13.9351L22.4071 13.9654L22.3879 13.9925Z" fill="var(--bg-color)"/>
                </svg>
            </a>`;

        const extraIcons = isCommissionsOrTerms ? (twitterIcon + instaIcon + kofiIcon + vgenIcon) : '';

        this.innerHTML = `
        <footer style="text-align: center; font-weight: 600; padding: 2rem; margin-top: 3rem; border-top: 1px dashed var(--accent-color); color: var(--text-secondary);">
            <p>
            
            </p>
            <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; opacity: 0.8;">
                 <!-- Discord Icon -->
                <div style="display: flex; align-items: center; gap: 5px;">
                     <svg viewBox="0 0 512 512" style="width: 20px; height: 20px; fill: currentColor;"><path d="M433.44,93.26c-33.2-15.24-68.23-26.11-104.22-32.35l-1.66,0.8c-4.51,8-9.5,18.46-12.99,26.66   c-38.8-5.89-78.26-5.89-117.05,0c-3.89-9.13-8.29-18.02-13.18-26.66l-1.66-0.8c-36,6.21-71.04,17.09-104.22,32.35l-0.67,0.58   C11.4,193-6.81,289.74,2.12,385.26l0.67,1.18c38.65,28.63,81.87,50.48,127.84,64.64l1.79-0.61c9.86-13.44,18.62-27.62,26.18-42.53   l-0.32-1.89l-0.58-0.35c-13.79-5.3-27.14-11.66-39.94-19.04l-0.64-2.11l0.48-0.61l7.94-6.24l1.63-0.22   c83.81,38.27,174.53,38.27,257.31,0l1.7,0.22l7.94,6.24l0.35,2.28l-0.48,0.44c-12.77,7.44-26.14,13.8-39.97,19.01l-0.96,0.96   l0.1,1.31c7.68,14.88,16.48,29.09,26.14,42.53l1.79,0.61c46.04-14.11,89.34-35.97,128.03-64.64l0.67-1.18   c10.69-110.43-17.89-206.37-75.71-291.39L433.44,93.26z M171.11,327.08c-25.25,0-46.02-23.17-46.02-51.58   c0-28.45,20.38-51.62,46.02-51.62c25.82,0,46.4,23.36,46.02,51.62C217.12,303.91,196.74,327.08,171.11,327.08z M341.22,327.08   c-25.22,0-46.02-23.17-46.02-51.58c0-28.45,20.38-51.62,46.02-51.62c25.82,0,46.43,23.36,46.02,51.62   C387.23,303.91,367.04,327.08,341.22,327.08z"/></svg>
                    <span>naviowo</span>
                </div>
                 <!-- Email Icon -->
                <div style="display: flex; align-items: center; gap: 5px;">
                     <svg viewBox="0 0 512 512" style="width: 20px; height: 20px; fill: currentColor;"><path d="M460.2,51.4H50.9C22.8,51.4,0,74.2,0,102.3v307.4c0,28.1,22.8,50.9,50.9,50.9h410.1   c28.1,0,50.9-22.8,50.9-50.9V102.3C512,74.2,489.2,51.4,460.2,51.4z M460.2,409.7H50.9V153.2l204.6,128.2l204.6-128.2V409.7z    M255.6,230.5L50.9,102.3h410.1L255.6,230.5z"/></svg>
                    <span>n4vi874@gmail.com</span>
                </div>
            </div>

            <div style="display: flex; justify-content: center; gap: 1.5rem; margin-top: 1.5rem;">
                ${extraIcons}
                <!-- GameJolt -->
                <a href="https://gamejolt.com/@NaviCattt" target="_blank" title="GameJolt" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#2f7f6f'" onmouseout="this.style.color='inherit'">
                    <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: currentColor;">
                        <path d="M6.353 0v2.824H4.94v2.823H3.53v2.824H2.118v2.823H.706v2.824h8.47v2.823H7.765v2.824H6.353v2.823h1.412v-1.412h1.411v-1.411h1.412v-1.412H12V16.94h1.412v-1.41h1.412v-1.411h1.411v-1.412h1.412v-1.412h1.412V9.882h1.412V8.471h1.411V7.059h-4.235V5.647h1.412V4.235h1.412V2.824h1.411V1.412h1.412V0zm0 22.588H4.94V24h1.412zM7.765 2.824h9.882v1.411h-1.412v1.412h-1.411V7.06h-1.412v1.41H12v1.411h1.412v1.412H12V9.882h-1.412v1.412H9.176V9.882H7.765v1.412H6.353V9.882H4.94V8.471h1.412V5.647h1.412zM6.353 8.47v1.411h1.412v-1.41zm2.823 1.411h1.412v-1.41H9.176zm5.648 0h1.411v1.412h-1.411z"/>
                    </svg>
                </a>
                

                <!-- Butterfly -->
                <a href="https://bsky.app/profile/navicattt.bsky.social" target="_blank" title="Bluesky" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#0085ff'" onmouseout="this.style.color='inherit'">
                    <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; fill: currentColor;">
                    	<path class="st0" d="M243.695,179.339c0.703,4.906,5.813,7.438,7.719,1.406c1.891-6.031-4.828-17.219-22.219-36.531   c-14.828-16.484-35.625-39.391-23.844-51.578c14.609-10.078,8.469-27.75-4.172-29.469c-11.313-1.516-21.609,13.578-15.031,38.703   C192.711,126.964,241.695,165.292,243.695,179.339z"/>
                    	<path class="st0" d="M445.898,83.886c-74.469,0-160.703,89.859-174.516,111.078c-3.594-4.578-9.109-7.578-15.375-7.578   c-6.281,0-11.797,3-15.391,7.578C226.805,173.73,140.57,83.886,66.102,83.886c-76.828,0-70.547,68.984-59.578,112.891   c10.969,43.922,56.453,92.516,106.609,94.094c-56.438,25.078-61.141,89.375-43.891,119.156   c16.359,28.25,103.266,92.016,167.156-50.296v29.141c0,10.813,8.781,19.593,19.609,19.593c10.813,0,19.594-8.781,19.594-19.593   v-29.156c63.891,142.328,150.813,78.562,167.156,50.312c17.25-29.781,12.547-94.078-43.891-119.156   c50.172-1.578,95.641-50.172,106.609-94.094C516.445,152.871,522.727,83.886,445.898,83.886z"/>
                    	<path class="st0" d="M268.305,179.339c2-14.047,50.984-52.375,57.563-77.469c6.563-25.125-3.734-40.219-15.047-38.703   c-12.641,1.719-18.766,19.391-4.172,29.469c11.781,12.188-9.016,35.094-23.844,51.578c-17.391,19.313-24.109,30.5-22.219,36.531   C262.492,186.777,267.602,184.246,268.305,179.339z"/>
                    </svg>
                </a>

                <!-- 
                Steam
                <a href="https://steamcommunity.com/id/NAVI874/" target="_blank" title="Steam" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#171a21'" onmouseout="this.style.color='inherit'">
                    <svg viewBox="0 0 16 16" style="width: 24px; height: 24px; fill: currentColor;">
                        <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"/>
                    </svg>
                </a>
                --!>
                <!-- Fur Affinity -->
                <a href="https://www.furaffinity.net/user/navicaat" target="_blank" title="Fur Affinity" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#F59200'" onmouseout="this.style.color='inherit'">
                     <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; fill: currentColor;">
                        <!-- Wavy Background (Scaled to match) -->
                        <path d="M240,128c0,10.44238-7.51074,18.27441-14.1377,25.18457-3.77246,3.93359-7.67285,8-9.14648,11.56348-1.35449,3.27343-1.43652,8.69629-1.51562,13.93945-.14747,9.75879-.31446,20.81934-8.0044,28.50879-7.68945,7.68945-18.75,7.85644-28.5083,8.00391-5.24414.0791-10.667.16113-13.94043,1.51562-3.5625,1.47363-7.62988,5.374-11.5625,9.14648C146.27441,232.48926,138.44238,240,127.99951,240c-10.44238,0-18.27392-7.51074-25.18408-14.1377-3.93311-3.77246-8-7.67285-11.56348-9.14648-3.27295-1.35449-8.69531-1.43652-13.93945-1.51562-9.75879-.14747-20.81934-.31446-28.50879-8.00391s-7.85644-18.75-8.00391-28.50879c-.0791-5.24316-.16113-10.666-1.51562-13.93945-1.47363-3.56348-5.374-7.62989-9.14648-11.56348C23.51074,146.27441,16,138.44238,16,128s7.51074-18.27441,14.1377-25.18457c3.77246-3.93359,7.67285-8,9.14648-11.56348,1.35449-3.27343,1.43652-8.69629,1.51562-13.93945.14747-9.75879.31446-20.81934,8.0044-28.50879,7.68945-7.68945,18.75-7.85644,28.5083-8.00391,5.24414-.0791,10.667-.16113,13.94043-1.51562,3.5625-1.47363,7.62988-5.374,11.5625-9.14648C109.72559,23.51074,117.55762,16,128.00049,16c10.44238,0,18.27392,7.51074,25.18408,14.1377,3.93311,3.77246,8,7.67285,11.56348,9.14648,3.27295,1.35449,8.69531,1.43652,13.93945,1.51562,9.75879.14747,20.81934.31446,28.50879,8.00391s7.85644,18.75,8.00391,28.50879c.0791,5.24316.16113,10.666,1.51562,13.93945,1.47363,3.56348,5.374,7.62989,9.14648,11.56348C232.48926,109.72559,240,117.55762,240,128Z" transform="scale(2)" fill="currentColor" opacity="0.1"/>
                        <!-- Fur Affinity Icon Paths -->
                        <g>
                            <path fill="currentColor" d="M205.116,153.078c31.534,11.546,69.397-12.726,84.58-54.209c15.174-41.484,1.915-84.462-29.614-96.001   c-31.541-11.53-69.4,12.735-84.582,54.218C160.325,98.57,173.584,141.548,205.116,153.078z"/>
                            <path fill="currentColor" d="M85.296,219.239c32.987-2.86,56.678-40.344,52.929-83.75c-3.757-43.391-33.545-76.253-66.532-73.409   c-32.984,2.869-56.674,40.36-52.921,83.759C22.53,189.23,52.313,222.091,85.296,219.239z"/>
                            <path fill="currentColor" d="M342.196,217.768c28.952,17.017,70.552-0.073,92.926-38.154c22.374-38.106,17.041-82.758-11.915-99.774   c-28.951-17.001-70.56,0.097-92.93,38.178C307.905,156.117,313.245,200.768,342.196,217.768z"/>
                            <path fill="currentColor" d="M497.259,262.912c-18.771-27.271-63.07-29.379-98.954-4.694c-35.892,24.701-49.762,66.822-30.996,94.101   c18.766,27.27,63.069,29.38,98.954,4.686C502.143,332.312,516.021,290.191,497.259,262.912z"/>
                            <path fill="currentColor" d="M304.511,268.059c-3.58-24.773-18.766-47.366-43.039-58.824c-24.268-11.45-51.365-8.807-72.758,4.169   c-23.646,14.35-38.772,33.096-59.138,41.29c-20.363,8.193-77.4-16.209-112.912,48.278c-25.081,45.548-2.057,103.128,44.962,125.315   c35.738,16.864,64.023,14.981,84.788,24.774c20.762,9.793,37.29,32.83,73.025,49.692c47.018,22.188,106.1,3.362,125.315-44.957   c27.206-68.407-27.897-96.922-34.522-117.85C303.613,319.021,308.47,295.426,304.511,268.059z"/>
                        </g>
                     </svg>
                </a>
            </div>
        </footer>
        `;
    }
}
customElements.define("app-footer", AppFooter);


/* 3. Gallery */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.art-card');
    if(cards.length === 0) return; // Exit if no gallery present


    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <button class="lightbox-nav prev">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <img src="" alt="Full view">
        <button class="lightbox-nav next">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.prev');
    const nextBtn = lightbox.querySelector('.next');

    let currentImages = []; 
    let currentIndex = 0;

    // Navigation Functions
    const showImage = (index) => {
        if (index < 0) index = currentImages.length - 1;
        if (index >= currentImages.length) index = 0;
        currentIndex = index;
        lightboxImg.src = currentImages[currentIndex];
    };

    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });

    // Close Lightbox functions
    const closeLightbox = () => lightbox.classList.remove('active');
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    cards.forEach(card => {
        const mainImage = card.querySelector('.card-image-container img');
        const imageContainer = card.querySelector('.card-image-container');
        const thumbnails = card.querySelectorAll('.thumbnail');

        if (!mainImage || thumbnails.length === 0) return;

        // Open Lightbox on Main Image Click
        mainImage.parentElement.addEventListener('click', () => {
            currentImages = Array.from(thumbnails).map(thumb => thumb.getAttribute('src'));
            /* Fallback if no thumbnails: use main image */
            if(currentImages.length === 0) currentImages = [mainImage.src];

            const currentSrc = mainImage.getAttribute('src');
            currentIndex = currentImages.findIndex(src => mainImage.src.includes(src)) || 0;
            if (currentIndex === -1) currentIndex = 0;

            showImage(currentIndex);
            lightbox.classList.add('active');
        });

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const newSrc = thumb.getAttribute('src');
                const newAlt = thumb.getAttribute('alt');
                const newBg = thumb.getAttribute('data-bg') || '#ede4da';
                
                mainImage.style.opacity = '0';
                
                setTimeout(() => {
                    mainImage.setAttribute('src', newSrc);
                    if (newAlt) mainImage.setAttribute('alt', newAlt);
                    if (imageContainer) {
                         imageContainer.style.backgroundColor = newBg;
                    }
                    mainImage.style.opacity = '1';
                }, 200);

                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    });
});
/* 4. Dynamic Status Check */
document.addEventListener('DOMContentLoaded', () => {
    fetch('status.json')
        .then(response => response.json())
        .then(data => {
            const isOpen = data.commissionsOpen;
            const statusText = isOpen ? data.statusTextOpen : data.statusTextClosed;
            const statusClass = isOpen ? 'open' : 'closed';

            // 1. Update Index Badge (if present)
            const indexBadge = document.getElementById('index-status-badge');
            if (indexBadge) {
                indexBadge.textContent = ` Commissions ${statusText} `;
                indexBadge.classList.add(statusClass);
            }

            // 2. Update Commissions Page Text (if present)
            const commPageStatus = document.getElementById('commissions-page-status');
            if (commPageStatus) {
                commPageStatus.textContent = statusText;
                commPageStatus.classList.add(statusClass);
            }
        })
        .catch(error => console.error('Error loading status:', error));
});
