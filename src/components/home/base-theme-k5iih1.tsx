// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";
import { LayoutMainLal4b } from './layout-main-lal4b';
import { BaseThemeK5iih3 } from './base-theme-k5iih3';

// ============ TYPOGRAPHY STYLE (reusable) ============
const typoStyle = {
  '--typography-color': 'inherit',
  '--typography-font': 'var(--typography-sans-100-medium-font)',
  '--typography-font-sm': 'var(--typography-sans-100-medium-font)',
  '--typography-letter-spacing': 'var(--typography-sans-100-medium-letter-spacing)',
  '--typography-letter-spacing-sm': 'var(--typography-sans-100-medium-letter-spacing)',
} as React.CSSProperties;

// ============ CHEVRON ============
function ChevronIcon() {
  return (
    <span className="globalNavigation_chevron__FLxoW">
      <svg className="chevronDown" viewBox="0 0 30 30"
        style={{ display: 'block', fill: 'inherit', flexShrink: 0, height: '100%', width: '100%' }}>
        <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 " />
      </svg>
    </span>
  );
}

// ============ MAIN COMPONENT ============
export const BaseThemeK5iih1 = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDropdown(id: string) {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }

  function dropdownClass(id: string) {
    return `globalNavigation_dropdown__vn77x ${openDropdown === id ? "" : "globalNavigation_close___eHO3"}`;
  }

  return (
    <>
      <div style={{ display: 'contents' }} className="base_theme__K5IIh theme_theme__XHAvb">
        <div className="globalNavigation_scrollSentinel__gP74N" aria-hidden="true" />
        <div className="globalNavigation_globalNavigationWrapper__dUhMe globalNavigation_stickyWrapper__SYZfy">
          <div style={{ display: 'contents' }} className="base_theme__K5IIh theme_theme__XHAvb">
            <nav ref={navRef} className="globalNavigation_globalNavigation__7c1YP" aria-label="Main">
              <div className="globalNavigation_container__x43sE">

                {/* ===== LOGO ===== */}
                <div className="globalNavigation_logoContainer__BR_e9">
                  <a className="globalNavigation_logo__i44_w" aria-label="Notion – Home" href="https://www.notion.com/product">
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="globalNavigation_logoStickerized__aqGkF">
                      <path d="M3.8051 3.26755L20.5301 2.04319C22.5839 1.86808 23.1124 1.98538 24.4032 2.91756L29.7421 6.64773C30.623 7.28917 30.9165 7.46381 30.9165 8.16307V28.6217C30.9165 29.9038 30.4468 30.6622 28.804 30.7782L9.38138 31.9442C8.14825 32.0027 7.56135 31.8279 6.91556 31.0114L2.98395 25.9405C2.27947 25.0072 1.98651 24.3088 1.98651 23.4918V5.3068C1.98651 4.25826 2.45649 3.38366 3.8051 3.26755Z" fill="#fff" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.64643 1.29903L20.3723 0.0746037C21.3849 -0.0114809 22.3097 -0.0595444 23.1918 0.139197C24.141 0.353054 24.86 0.807308 25.5578 1.31054L30.9002 5.04319L30.9158 5.05461C30.9547 5.08281 30.9968 5.11312 31.0417 5.14536C31.3674 5.37943 31.8354 5.71564 32.1631 6.09295C32.7252 6.73997 32.9031 7.45237 32.9031 8.16303V28.6217C32.9031 29.4467 32.763 30.5442 31.967 31.4425C31.1549 32.3592 30.0175 32.6721 28.9448 32.7479L28.9343 32.7486L9.48857 33.916L9.47602 33.9165C8.79263 33.949 8.01197 33.9383 7.24718 33.6609C6.41395 33.3586 5.82508 32.8277 5.35391 32.2318L5.34799 32.2243L1.40271 27.1359L1.39499 27.1257C0.55231 26.0092 0 24.8994 0 23.4918V5.30675C0 4.51862 0.17342 3.55089 0.82429 2.72219C1.51537 1.84231 2.52546 1.39554 3.6337 1.30013L3.64643 1.29903ZM20.5301 2.04315L3.80509 3.26752C2.45647 3.38361 1.9865 4.25823 1.9865 5.30675V23.4918C1.9865 24.3088 2.27946 25.0072 2.98394 25.9405L6.91553 31.0114C7.56133 31.8279 8.14822 32.0025 9.38137 31.944L28.804 30.7782C30.4468 30.6622 30.9165 29.9039 30.9165 28.6217V8.16303C30.9165 7.50025 30.6529 7.30878 29.8751 6.74438C29.8323 6.71333 29.788 6.68115 29.7421 6.6477L24.4032 2.91752C23.1124 1.98534 22.5839 1.86805 20.5301 2.04315Z" fill="#fff" />
                      <path d="M20.5301 2.04318C22.5838 1.86808 23.1124 1.98541 24.4031 2.91757L29.7421 6.64778C30.623 7.28918 30.9167 7.46383 30.9167 8.16301V28.6217C30.9167 29.9039 30.4468 30.6622 28.804 30.7782L9.38127 31.944C8.14822 32.0025 7.56137 31.8279 6.9156 31.0114L2.98396 25.9405C2.27951 25.0072 1.98647 24.3088 1.98645 23.492V5.30687C1.98645 4.25835 2.45646 3.38365 3.80508 3.26754L20.5301 2.04318ZM28.9214 9.91165C28.9214 9.15462 28.6285 8.74625 27.9818 8.80449L8.91064 9.91165C8.20688 9.97045 7.9722 10.3204 7.9722 11.0779V28.4466C7.97222 29.3801 8.44147 29.7293 9.49759 29.6715L27.7471 28.6217C28.8037 28.5641 28.9214 27.922 28.9214 27.1636V9.91165ZM25.988 12.0096C26.1051 12.5347 25.988 13.0592 25.4588 13.1182L24.5795 13.2926V26.1151C23.816 26.5231 23.1122 26.7563 22.5256 26.7563C21.5863 26.7563 21.351 26.4646 20.6475 25.5908L14.8959 16.6149V25.2992L16.7158 25.7076C16.7158 25.7076 16.7159 26.7563 15.2475 26.7563L11.1994 26.9897C11.0818 26.7563 11.1995 26.1739 11.6101 26.0571L12.6664 25.7662V14.2837L11.1997 14.1668C11.0822 13.6417 11.3751 12.8847 12.1972 12.8259L16.5398 12.5349L22.5256 21.6277V13.5839L20.9993 13.4098C20.8821 12.7679 21.351 12.3018 21.9379 12.244L25.988 12.0096ZM23.816 4.43331C23.2877 4.02552 22.5835 3.55846 21.2343 3.67528L5.15507 4.84121C4.56875 4.89903 4.45158 5.19046 4.68509 5.42409L6.97519 7.23083C7.91323 7.98837 8.26511 7.93069 10.0265 7.81388L26.632 6.82259C26.9842 6.82259 26.6915 6.47348 26.5739 6.41536L23.816 4.43331Z" fill="var(--notion-logo-fill, var(--color-black))" />
                    </svg>
                  </a>
                </div>

                {/* ===== NAV LINKS ===== */}
                <div className="globalNavigation_links__tZquA">

                  {/* ---- PRODUCT ---- */}
                  <div id="product" className="globalNavigation_dropdownContainer__8i441">
                    <button className="globalNavigation_link__ofzIw globalNavigation_dropdownTrigger__Vd0Te" aria-haspopup="true" aria-expanded={openDropdown === "product"} onClick={() => toggleDropdown("product")}>
                      <span className="typography_typography__Exx2D" style={typoStyle}>Product</span>
                      <ChevronIcon />
                    </button>
                    <div className={dropdownClass("product")} aria-hidden={openDropdown !== "product"}>
                      <div>
                        <div className="globalNavigation_dropdownGrid__fmbJC">
                          <div>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/ai">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Notion AI</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">AI tools for work</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/agents">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">
                                <span className="globalNavigation_badgeContainer__p0zES">
                                  Agents
                                  <span className="badge_badgeTertiaryRounded__WR4Ug globalNavigation_badge__Gkix_">New</span>
                                </span>
                              </span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Automate busywork</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/ai-meeting-notes">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">AI Meeting Notes</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Perfectly written by AI</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/enterprise-search">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Enterprise Search</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Find answers instantly</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/wikis">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Knowledge Base</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Centralize your knowledge</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/docs">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Docs</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Simple and powerful</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/projects">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Projects</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Manage any project</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/integrations">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Integrations</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Connect your apps</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/security">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Security</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Safe and scalable</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---- AI ---- */}
                  <div id="ai" className="globalNavigation_dropdownContainer__8i441">
                    <button className="globalNavigation_link__ofzIw globalNavigation_dropdownTrigger__Vd0Te" aria-haspopup="true" aria-expanded={openDropdown === "ai"} onClick={() => toggleDropdown("ai")}>
                      <span className="typography_typography__Exx2D" style={typoStyle}>AI</span>
                      <ChevronIcon />
                    </button>
                    <div className={dropdownClass("ai")} aria-hidden={openDropdown !== "ai"}>
                      <div>
                        <div className="globalNavigation_dropdownGrid__fmbJC">
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">AI features</h2>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/ai">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Notion AI</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">AI tools for work</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/agents">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">
                                <span className="globalNavigation_badgeContainer__p0zES">Agents <span className="badge_badgeTertiaryRounded__WR4Ug globalNavigation_badge__Gkix_">New</span></span>
                              </span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Automate busywork</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/ai-meeting-notes">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">AI Meeting Notes</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Perfectly written by AI</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/enterprise-search">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Enterprise Search</span>
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationCaptionSubtle__wein4 navItem_caption__xLssY">Find answers instantly</span>
                            </a>
                          </div>
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">Explore use cases</h2>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/ai/use-cases?type=work">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">For work</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/ai/use-cases?type=life">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">For life</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---- SOLUTIONS ---- */}
                  <div id="solutions" className="globalNavigation_dropdownContainer__8i441">
                    <button className="globalNavigation_link__ofzIw globalNavigation_dropdownTrigger__Vd0Te" aria-haspopup="true" aria-expanded={openDropdown === "solutions"} onClick={() => toggleDropdown("solutions")}>
                      <span className="typography_typography__Exx2D" style={typoStyle}>Solutions</span>
                      <ChevronIcon />
                    </button>
                    <div className={dropdownClass("solutions")} aria-hidden={openDropdown !== "solutions"}>
                      <div>
                        <div className="globalNavigation_dropdownGrid__fmbJC">
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">Teams</h2>
                            <a className="navItem_navItem__qrlp3 navItem_emphasis__Y6mWY" href="https://www.notion.com/product/notion-for-product-development">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLinkEmphasis__LHUdD navItem_link__q_Otw">Eng &amp; Product</span>
                            </a>
                            <a className="navItem_navItem__qrlp3 navItem_emphasis__Y6mWY" href="https://www.notion.com/product/notion-for-design">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLinkEmphasis__LHUdD navItem_link__q_Otw">Design</span>
                            </a>
                            <a className="navItem_navItem__qrlp3 navItem_emphasis__Y6mWY" href="https://www.notion.com/templates/category/marketing">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLinkEmphasis__LHUdD navItem_link__q_Otw">Marketing</span>
                            </a>
                            <a className="navItem_navItem__qrlp3 navItem_emphasis__Y6mWY" href="https://www.notion.com/templates/category/ticketing">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLinkEmphasis__LHUdD navItem_link__q_Otw">IT</span>
                            </a>
                          </div>
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">Company size</h2>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/startups">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Startups</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/teams">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Small businesses</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/enterprise">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Enterprise</span>
                            </a>
                          </div>
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">Use Cases</h2>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/notion-for-education">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Education</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/personal">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Personal</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/use-case">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Professional</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/ai/use-cases">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">AI use cases</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---- RESOURCES ---- */}
                  <div id="resources" className="globalNavigation_dropdownContainer__8i441">
                    <button className="globalNavigation_link__ofzIw globalNavigation_dropdownTrigger__Vd0Te" aria-haspopup="true" aria-expanded={openDropdown === "resources"} onClick={() => toggleDropdown("resources")}>
                      <span className="typography_typography__Exx2D" style={typoStyle}>Resources</span>
                      <ChevronIcon />
                    </button>
                    <div className={dropdownClass("resources")} aria-hidden={openDropdown !== "resources"}>
                      <div>
                        <div className="globalNavigation_dropdownGrid__fmbJC">
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">Browse</h2>
                            <a className="navItem_navItem__qrlp3 navItem_emphasis__Y6mWY" href="https://www.notion.com/templates">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLinkEmphasis__LHUdD navItem_link__q_Otw">Templates</span>
                            </a>
                            <a className="navItem_navItem__qrlp3 navItem_emphasis__Y6mWY" href="https://www.notion.com/explore-consultants">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLinkEmphasis__LHUdD navItem_link__q_Otw">Consultants</span>
                            </a>
                            <a className="navItem_navItem__qrlp3 navItem_emphasis__Y6mWY" href="https://www.notion.com/integrations">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLinkEmphasis__LHUdD navItem_link__q_Otw">Integrations</span>
                            </a>
                          </div>
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">Discover</h2>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/releases">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">What's New</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/customers">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Customer stories</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/blog">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Blog</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/webinars">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Webinars</span>
                            </a>
                          </div>
                          <div>
                            <h2 className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationHeading__uo7yO globalNavigation_desktopDropDownNavigationHeading__tA_tr">Learn</h2>
                            <a className="navItem_navItem__qrlp3" href="https://academy.notion.com">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Academy</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/product/demos">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Product tours</span>
                            </a>
                            <a className="navItem_navItem__qrlp3" href="https://www.notion.com/help">
                              <span className="semanticTypography_semanticTypography__mWJkv semanticTypography_variantNavigationLink__y_A9_ navItem_link__q_Otw">Help</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---- STATIC LINKS ---- */}
                  <a className="globalNavigation_link__ofzIw" href="https://www.notion.com/enterprise">
                    <span className="typography_typography__Exx2D" style={typoStyle}>Enterprise</span>
                  </a>
                  <a className="globalNavigation_link__ofzIw" href="https://www.notion.com/pricing">
                    <span className="typography_typography__Exx2D" style={typoStyle}>Pricing</span>
                  </a>
                  <a className="globalNavigation_link__ofzIw" href="https://www.notion.com/contact-sales">
                    <span className="typography_typography__Exx2D" style={typoStyle}>Request a demo</span>
                  </a>
                </div>

                {/* ===== ACTIONS ===== */}
                <div className="globalNavigation_actions__hEI1Y">
                  <span className="globalNavigation_primaryCta___fviu">
                    <a
                      className="button_button__atjat button_buttonVariantPrimary__mUFQZ button_buttonSizeM__NexGD"
                      data-analytics-name="desktop_nav_cta"
                      data-analytics-event="click_cta"
                      data-analytics-label="Get Notion free"
                      data-analytics-href="/signup"
                      href="https://www.notion.com/signup?from=marketing&pathname=%2F&tid=6fa789c90f424e859a35613b6ff022f8"
                    >
                      <span className="typography_typography__Exx2D globalNavigation_noWrap__Af_5S" style={typoStyle}>
                        Get Notion free
                      </span>
                    </a>
                  </span>
                  <span className="globalNavigation_secondaryActions__5gLqb">
                    <div
                      id="g_id_onload"
                      data-prompt_parent_id="g_id_onload"
                      data-cancel_on_tap_outside="false"
                      style={{ insetInlineEnd: '18px', position: 'absolute', top: '62px', transform: 'scale(0.9)', transformOrigin: 'right top', zIndex: 100 }}
                    ></div>
                    <a
                      className="globalNavigation_link__ofzIw"
                      data-analytics-name="desktop_nav_cta"
                      data-analytics-event="click_cta"
                      data-analytics-label="Log in"
                      data-analytics-href="/login"
                      href="https://www.notion.com/login?from=marketing&pathname=%2F&tid=6fa789c90f424e859a35613b6ff022f8"
                    >
                      <span className="typography_typography__Exx2D" style={typoStyle}>Log in</span>
                    </a>
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <LayoutMainLal4b />
        <BaseThemeK5iih3 />
        <div className="snackBar_snackBar__IYfOp">
          <div role="status" className="snackBar_snackBarContent__DqGBm">
            <p className="text_text__cG3pf text_textWeightRegular__lAQvj text_textColorWhite__H70dC text_textSizeBody__4q5Cs" />
          </div>
        </div>
      </div>
    </>
  );
};