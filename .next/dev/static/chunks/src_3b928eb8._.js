(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/nav.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/*
  Konfigurasi animasi yang dipake di beberapa elemen,
  dipisah biar gampang maintain dan konsisten.
*/ const MOTION_CONFIG = {
    navContainer: {
        duration: 0.4,
        ease: "easeInOut"
    },
    iconToggle: {
        duration: 0.6,
        ease: "easeInOut"
    },
    drawer: {
        type: "spring",
        stiffness: 260,
        damping: 25
    },
    fadeIcon: {
        duration: 0.3
    }
};
/*
  Helper untuk styling yang berubah tergantung posisi nav
  (lagi di hero section atau enggak) dan mode terang/gelap.
*/ const getNavTextColor = (inHero, darkMode)=>{
    if (inHero) return "text-white";
    return darkMode ? "text-white" : "text-text-primary";
};
const getNavButtonStyles = (inHero, darkMode)=>{
    const base = "rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center";
    if (inHero) return `${base} bg-white/20 text-white`;
    if (darkMode) return `${base} bg-bg-soft text-white`;
    return `${base} bg-bg-base text-text-primary`;
};
const getMenuIconColor = (inHero, darkMode)=>{
    if (inHero) return "text-white";
    return darkMode ? "text-white" : "text-text-primary";
};
const getBlurFilterStyle = (blurLevel)=>({
        backdropFilter: `blur(${blurLevel}px)`,
        WebkitBackdropFilter: `blur(${blurLevel}px)`
    });
/*
  Komponen tombol toggle mode gelap/terang.
  Dipisah biar lebih modular dan enak dipakai di manapun.
*/ const IconToggle = ({ darkMode, rotation, onToggle, inHero })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: onToggle,
        className: getNavButtonStyles(inHero, darkMode),
        animate: {
            rotate: rotation
        },
        transition: MOTION_CONFIG.iconToggle,
        "aria-label": darkMode ? "Switch to light mode" : "Switch to dark mode",
        type: "button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: 90
                },
                animate: {
                    opacity: 1,
                    rotate: 0
                },
                exit: {
                    opacity: 0,
                    rotate: -90
                },
                transition: MOTION_CONFIG.fadeIcon,
                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/nav.jsx",
                    lineNumber: 79,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/nav.jsx",
                    lineNumber: 79,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            }, darkMode ? "sun" : "moon", false, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/nav.jsx",
            lineNumber: 71,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconToggle;
/*
  Komponen link yang muncul di navbar versi desktop.
  Ada animasi underline pakai layoutId biar smooth pas pindah.
*/ const NavLink = ({ link, active, inHero, darkMode, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: link.href,
        onClick: onClick,
        className: `relative group transition-colors duration-300 ${getNavTextColor(inHero, darkMode)} ${active === link.id ? "text-primary" : ""}`,
        children: [
            link.label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                layoutId: active === link.id ? "underline" : undefined,
                className: `absolute left-0 right-0 bottom-[-4px] h-[2px] rounded-full ${active === link.id ? "bg-primary" : "bg-primary/0 group-hover:bg-primary/80 transition-all duration-300"}`
            }, void 0, false, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 100,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 90,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = NavLink;
/*
  Drawer navigasi untuk mobile.
  Dibikin terpisah untuk jaga kebersihan komponen utama.
*/ const MobileDrawer = ({ isOpen, onClose, navLinks, active, darkMode, onLinkClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end",
            onClick: onClose,
            role: "presentation",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                initial: {
                    x: "100%"
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: "100%"
                },
                transition: MOTION_CONFIG.drawer,
                className: "w-[80%] sm:w-[400px] bg-bg-base text-text-primary h-full shadow-2xl p-6",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                onClick: onClose,
                                "aria-label": "Go to home",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: darkMode ? "/assets/logo.png" : "/assets/black.png",
                                    alt: "Gelap Nyawang Logo",
                                    className: "h-9 transition-opacity duration-300",
                                    draggable: "false"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav.jsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close navigation menu",
                                type: "button",
                                className: "p-2 rounded-lg hover:bg-bg-soft transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav.jsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-4 mt-6",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>onLinkClick(link.id),
                                className: `text-lg font-medium transition-colors py-2 px-3 rounded-lg ${active === link.id ? "text-primary bg-bg-soft" : "hover:text-primary hover:bg-bg-soft"}`,
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 134,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/nav.jsx",
            lineNumber: 125,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 123,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MobileDrawer;
function Nav() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overlayOpen, setOverlayOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [iconChanging, setIconChanging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [inHero, setInHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bgVisible, setBgVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Referensi ke semua section untuk scroll-spy
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    /*
    Init daftar section yang mau dipantau scroll-nya.
    Dilakukan setelah mount biar aman dari SSR.
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const ids = [
                "hero",
                "tentang",
                "topResto",
                "testimoni",
                "galeri",
                "lokasi"
            ];
            sections.current = ids.map({
                "Nav.useEffect": (id)=>document.getElementById(id)
            }["Nav.useEffect"]).filter(Boolean);
        }
    }["Nav.useEffect"], []);
    /*
    Listener scroll:
    - menentukan apakah masih di hero
    - mengatur background navbar
    - update section aktif berdasarkan posisi scroll
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const handleScroll = {
                "Nav.useEffect.handleScroll": ()=>{
                    const y = window.scrollY;
                    setScrollY(y);
                    const heroHeight = window.innerHeight * 0.8;
                    setInHero(y < heroHeight);
                    setBgVisible(y > heroHeight * 0.6);
                    let current = "hero";
                    sections.current.forEach({
                        "Nav.useEffect.handleScroll": (sec)=>{
                            if (y >= sec.offsetTop - 150) {
                                current = sec.id;
                            }
                        }
                    }["Nav.useEffect.handleScroll"]);
                    setActive(current);
                }
            }["Nav.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    /*
    Sinkronisasi class "dark" di <html> dengan state darkMode.
    Pendekatan standar biar tailwind dark mode jalan.
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const root = document.documentElement;
            darkMode ? root.classList.add("dark") : root.classList.remove("dark");
        }
    }["Nav.useEffect"], [
        darkMode
    ]);
    /*
    Kunci body saat drawer mobile terbuka,
    mencegah halaman ikut scroll.
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            document.body.style.overflow = overlayOpen ? "hidden" : "";
            return ({
                "Nav.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        overlayOpen
    ]);
    /*
    Toggle dark mode dengan animasi rotasi icon.
    Ada guard biar gak spam klik.
  */ const handleToggleMode = ()=>{
        if (iconChanging) return;
        setIconChanging(true);
        setRotation((r)=>r + 360);
        const timer = setTimeout(()=>{
            setDarkMode((prev)=>!prev);
            setIconChanging(false);
        }, 500);
        return ()=>clearTimeout(timer);
    };
    const handleDrawerClose = ()=>setOverlayOpen(false);
    const handleMobileLinkClick = (linkId)=>{
        setActive(linkId);
        setOverlayOpen(false);
    };
    const navLinks = [
        {
            id: "hero",
            label: "Beranda",
            href: "#hero"
        },
        {
            id: "tentang",
            label: "Tentang",
            href: "#tentang"
        },
        {
            id: "topResto",
            label: "Rekomendasi",
            href: "#topResto"
        },
        {
            id: "testimoni",
            label: "Testimoni",
            href: "#testimoni"
        }
    ];
    /*
    Background dan blur navbar dibuat dinamis
    tergantung seberapa jauh user scroll.
  */ const backgroundColor = inHero ? "rgba(0,0,0,0)" : bgVisible ? darkMode ? "rgba(10,10,10,0.75)" : "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.25)";
    const blurLevel = inHero ? 0 : bgVisible ? 14 : 8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        role: "banner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    backgroundColor,
                    ...getBlurFilterStyle(blurLevel),
                    boxShadow: bgVisible && !inHero ? "0 4px 20px rgba(0,0,0,0.08)" : "none"
                },
                transition: MOTION_CONFIG.navContainer,
                className: "flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        className: "flex items-center select-none",
                        "aria-label": "Go to home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: darkMode ? "/assets/logo.png" : "/assets/black.png",
                            alt: "Gelap Nyawang Culinary Logo",
                            className: `h-8 md:h-10 transition-opacity duration-500 ${inHero ? "brightness-0 invert" : ""}`,
                            draggable: "false",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav.jsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8 font-medium relative",
                        role: "navigation",
                        "aria-label": "Main navigation",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                link: link,
                                active: active,
                                inHero: inHero,
                                darkMode: darkMode,
                                onClick: ()=>setActive(link.id)
                            }, link.id, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 md:gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconToggle, {
                                darkMode: darkMode,
                                rotation: rotation,
                                onToggle: handleToggleMode,
                                inHero: inHero
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden p-2 rounded-full ml-1 hover:bg-white/10 transition-colors",
                                onClick: ()=>setOverlayOpen(true),
                                "aria-label": "Open navigation menu",
                                "aria-expanded": overlayOpen,
                                type: "button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 22,
                                    className: getMenuIconColor(inHero, darkMode)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav.jsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileDrawer, {
                isOpen: overlayOpen,
                onClose: handleDrawerClose,
                navLinks: navLinks,
                active: active,
                darkMode: darkMode,
                onLinkClick: handleMobileLinkClick
            }, void 0, false, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 310,
        columnNumber: 5
    }, this);
}
_s(Nav, "6K5K6W2Q+92Ko3S1/srMExMI+hc=");
_c3 = Nav;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "IconToggle");
__turbopack_context__.k.register(_c1, "NavLink");
__turbopack_context__.k.register(_c2, "MobileDrawer");
__turbopack_context__.k.register(_c3, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/*
  Kumpulan konfigurasi animasi dan parallax. 
  Dibuat terstruktur biar gampang diatur ulang nanti tanpa nyari satu-satu di kode.
*/ const ANIMATION_CONFIG = {
    TYPING: {
        INTERVAL: 52,
        COMPLETION_DELAY: 500
    },
    PARALLAX: {
        BASE_SPEED: 0.08,
        TRANSLATE_MULTIPLIER: 30,
        HORIZONTAL_OFFSET: 20,
        VIEWPORT_RATIO_BASE: 0.8
    },
    LAYERS: {
        DURATIONS: [
            16,
            18,
            20,
            17,
            19,
            21
        ],
        OSCILLATE: {
            Y: 18,
            SCALE_MAX: 1.06,
            ROTATE_MAX: 1.2
        },
        BRIGHTNESS: {
            MIN: 0.45,
            MAX: 0.85
        },
        BLUR_MIN: 1,
        BLUR_MAX: 0
    },
    ENTRANCE: {
        H1_DURATION: 1,
        P_DURATION: 1,
        P_DELAY: 0.3,
        BUTTON_DURATION: 1.2,
        BUTTON_DELAY: 0.5
    },
    GLOW: {
        DURATION: 3,
        REPEAT: Infinity,
        EASE: "easeInOut"
    }
};
/*
  Semua layer background hero dengan posisi masing-masing.
  Kode ini cukup panjang, jadi dipisah supaya rapi dan gampang maintain.
*/ const BG_IMAGES = [
    {
        src: "/assets/hero/bg1.webp",
        style: "left-[4%] top-[6%] max-w-[520px] w-[70vw]"
    },
    {
        src: "/assets/hero/bg2.webp",
        style: "left-[30%] top-[12%] max-w-[520px] w-[70vw]"
    },
    {
        src: "/assets/hero/bg3.webp",
        style: "right-[8%] top-[8%] max-w-[520px] w-[70vw]"
    },
    {
        src: "/assets/hero/bg4.webp",
        style: "left-[10%] bottom-[8%] max-w-[520px] w-[70vw]"
    },
    {
        src: "/assets/hero/bg5.webp",
        style: "right-[20%] bottom-[10%] max-w-[520px] w-[70vw]"
    },
    {
        src: "/assets/hero/bg6.webp",
        style: "right-[4%] top-[44%] max-w-[420px] w-[60vw]"
    }
];
/*
  Efek glow halus pada teks "Gelap Nyawang".
  Biar ada nuansa neonsign tanpa pakai filter berat.
*/ const TEXT_GLOW_EFFECT = {
    textShadow: [
        "0px 0px 0px rgb(229, 118, 33)",
        "0px 0px 20px rgba(229, 118, 33, 0.6)",
        "0px 0px 0px rgb(229, 118, 33)"
    ]
};
function Hero() {
    _s();
    const fullText = "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!";
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [typingDone, setTypingDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Menyimpan ref DOM dari setiap layer background
    const layerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    /* ---------------------------
     DETEKSI MOBILE
     --------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const checkMobile = {
                "Hero.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth < 640)
            }["Hero.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    /*
    Callback untuk memasukkan elemen layer ke array refs secara terurut.
    Framer Motion butuh elemen actual DOM, jadi kita ambil satu-satu lewat ref callback.
  */ const setLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[setLayerRef]": (el, index)=>{
            if (el) layerRefs.current[index] = el;
        }
    }["Hero.useCallback[setLayerRef]"], []);
    /* ---------------------------
     TYPING EFFECT
     --------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            let index = 0;
            let interval;
            let timeoutId;
            interval = setInterval({
                "Hero.useEffect": ()=>{
                    setDisplayText(fullText.slice(0, index));
                    index++;
                    if (index > fullText.length) {
                        clearInterval(interval);
                        timeoutId = setTimeout({
                            "Hero.useEffect": ()=>setTypingDone(true)
                        }["Hero.useEffect"], ANIMATION_CONFIG.TYPING.COMPLETION_DELAY);
                    }
                }
            }["Hero.useEffect"], ANIMATION_CONFIG.TYPING.INTERVAL);
            return ({
                "Hero.useEffect": ()=>{
                    clearInterval(interval);
                    if (timeoutId) clearTimeout(timeoutId);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        fullText
    ]);
    /* ---------------------------
     PARALLAX VIA RAF LOOP
     --------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            let rafId = null;
            const handleParallax = {
                "Hero.useEffect.handleParallax": ()=>{
                    const scrollY = window.scrollY || window.pageYOffset;
                    /*
        Batas perhitungan efek parallax, biar gerakan tetap halus saat scroll cepat.
      */ const base = Math.min(window.innerHeight, 1200 / ANIMATION_CONFIG.PARALLAX.VIEWPORT_RATIO_BASE);
                    const visibleRatio = Math.max(0, Math.min(1, scrollY / base));
                    const baseTranslateY = -visibleRatio * ANIMATION_CONFIG.PARALLAX.TRANSLATE_MULTIPLIER;
                    const baseTranslateX = visibleRatio * ANIMATION_CONFIG.PARALLAX.HORIZONTAL_OFFSET;
                    /*
        Mengaplikasikan transform ke masing-masing layer.
        Layer di index genap dan ganjil punya arah horizontal berbeda untuk efek dinamis.
      */ layerRefs.current.forEach({
                        "Hero.useEffect.handleParallax": (el, i)=>{
                            if (!el) return;
                            const speed = (i + 1) * ANIMATION_CONFIG.PARALLAX.BASE_SPEED;
                            const translateY = baseTranslateY * speed;
                            const translateX = baseTranslateX * (i % 2 === 0 ? -1 : 1);
                            el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
                        }
                    }["Hero.useEffect.handleParallax"]);
                    if (document.visibilityState === "visible") {
                        rafId = requestAnimationFrame(handleParallax);
                    }
                }
            }["Hero.useEffect.handleParallax"];
            /*
      Kalau tab jadi visible (misalnya habis switch tab),
      animasi lanjut ulang supaya posisi layer tidak ketinggalan.
    */ const handleVisibilityChange = {
                "Hero.useEffect.handleVisibilityChange": ()=>{
                    if (document.visibilityState === "visible") {
                        rafId = requestAnimationFrame(handleParallax);
                    }
                }
            }["Hero.useEffect.handleVisibilityChange"];
            rafId = requestAnimationFrame(handleParallax);
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "Hero.useEffect": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    /* ============================================================
     RENDER HERO
     ============================================================ */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative flex flex-col justify-center items-center text-center overflow-hidden min-h-screen pt-28 sm:pt-32 md:pt-40 pb-20 px-6 md:px-10 bg-[#0A0A0A] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                "aria-hidden": "true",
                children: [
                    BG_IMAGES.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ref: (el)=>setLayerRef(el, i),
                            className: `absolute rounded-2xl overflow-hidden shadow-2xl ${img.style}`,
                            initial: {
                                opacity: 0,
                                scale: 0.98
                            },
                            animate: {
                                opacity: [
                                    0.9,
                                    1,
                                    0.9
                                ],
                                y: [
                                    0,
                                    i % 2 === 0 ? -18 : 18,
                                    0
                                ],
                                scale: [
                                    1,
                                    ANIMATION_CONFIG.LAYERS.OSCILLATE.SCALE_MAX,
                                    1
                                ],
                                rotate: [
                                    0,
                                    i % 2 === 0 ? ANIMATION_CONFIG.LAYERS.OSCILLATE.ROTATE_MAX : -ANIMATION_CONFIG.LAYERS.OSCILLATE.ROTATE_MAX,
                                    0
                                ]
                            },
                            transition: {
                                duration: ANIMATION_CONFIG.LAYERS.DURATIONS[i],
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "loop"
                            },
                            style: {
                                willChange: "transform, opacity"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                src: img.src,
                                alt: "",
                                loading: i <= 1 ? "eager" : "lazy",
                                decoding: "async",
                                className: "w-full h-full object-cover",
                                animate: {
                                    scale: [
                                        1,
                                        1.08,
                                        1
                                    ],
                                    filter: [
                                        `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MIN}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MIN}px)`,
                                        `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MAX}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MAX}px)`,
                                        `brightness(${ANIMATION_CONFIG.LAYERS.BRIGHTNESS.MIN}) blur(${ANIMATION_CONFIG.LAYERS.BLUR_MIN}px)`
                                    ]
                                },
                                transition: {
                                    duration: ANIMATION_CONFIG.LAYERS.DURATIONS[i] + 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                onError: (e)=>{
                                    // fallback kalau image gagal load
                                    e.target.style.display = "none";
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/sections/hero.jsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        }, `layer-${i}`, false, {
                            fileName: "[project]/src/sections/hero.jsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/hero.jsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto relative z-10 px-3 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: ANIMATION_CONFIG.ENTRANCE.H1_DURATION
                        },
                        className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight",
                        children: [
                            "Ganyang Lapar di",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-primary inline-block",
                                animate: TEXT_GLOW_EFFECT,
                                transition: ANIMATION_CONFIG.GLOW,
                                children: "Gelap Nyawang"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/hero.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: ANIMATION_CONFIG.ENTRANCE.P_DURATION,
                            delay: ANIMATION_CONFIG.ENTRANCE.P_DELAY
                        },
                        className: "text-base sm:text-lg mt-4 max-w-2xl mx-auto font-light tracking-wide leading-relaxed text-white/90",
                        children: [
                            displayText,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: typingDone ? {
                                    opacity: 0
                                } : {
                                    opacity: [
                                        1,
                                        0,
                                        1
                                    ]
                                },
                                transition: typingDone ? {
                                    duration: 0.4,
                                    ease: "easeInOut"
                                } : {
                                    duration: 0.7,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                className: "ml-1 text-white/80",
                                "aria-hidden": "true",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/hero.jsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 25
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: ANIMATION_CONFIG.ENTRANCE.BUTTON_DURATION,
                            delay: ANIMATION_CONFIG.ENTRANCE.BUTTON_DELAY
                        },
                        className: "mt-10 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "/direktori#top-direktori",
                            whileHover: !isMobile ? {
                                scale: 1.05,
                                boxShadow: "0 8px 28px rgba(229, 118, 33, 0.35)"
                            } : {},
                            whileTap: {
                                scale: 0.97
                            },
                            className: "bg-primary hover:bg-primary/90 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-glow focus:ring-4 focus:ring-primary/40 focus:outline-none transition-all cursor-pointer",
                            children: "Jelajahi Sekarang"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/hero.jsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/hero.jsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/sections/hero.jsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/hero.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(Hero, "xusMKv2P1dCPvG+a3XcqQT5lx7w=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/tentang.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tentang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/*
  Konfigurasi animasi yang dipakai untuk section “Tentang”.
  Dibuat terpusat biar gampang maintain dan konsisten.
*/ const ANIMATION_CONFIG = {
    CONTAINER: {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    },
    ITEM: {
        hidden: {
            opacity: 0,
            scale: 0.92,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            }
        }
    },
    CARD_HOVER: {
        scale: 1.01,
        y: -2,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    },
    TEXT_GLOW: {
        textShadow: [
            "0 0 0px rgb(229 118 33 / 0)",
            "0 0 16px rgb(229 118 33 / 0.4)",
            "0 0 0px rgb(229 118 33 / 0)"
        ],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    WAVE: {
        duration: 14,
        ease: "easeInOut"
    },
    BLOB: {
        durations: [
            7,
            8,
            7.5
        ]
    }
};
/*
  Data tetap untuk tiga kartu “Keunggulan Kami”.
  Dipisahkan dari UI biar lebih bersih dan reusable.
*/ const CARDS_DATA = [
    {
        id: "rumahan",
        title: "Rasa Autentik",
        desc: "Cita rasa rumahan Bandung yang hangat dan bikin kangen.",
        img: "/assets/about/t1.jpg"
    },
    {
        id: "lokal",
        title: "Dari Komunitas Lokal",
        desc: "Kuliner yang tumbuh dari komunitas Gelap Nyawang sendiri.",
        img: "/assets/about/t2.jpg"
    },
    {
        id: "cepat",
        title: "Cepat & Nyaman",
        desc: "Tempat singgah yang pas buat makan cepat atau rehat sebentar.",
        img: "/assets/about/t3.jpg"
    }
];
/*
  Komponen kartu individual untuk setiap highlight.
  Dibuat terpisah biar bagian utama tetap ringkas.
*/ const AboutCard = ({ card, isMobile })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        variants: ANIMATION_CONFIG.ITEM,
        whileHover: !isMobile ? ANIMATION_CONFIG.CARD_HOVER : undefined,
        className: "relative rounded-2xl overflow-hidden shadow-card bg-bg-soft dark:bg-bg-warm group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-[3/4] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: card.img,
                    alt: `${card.title} illustration`,
                    loading: "lazy",
                    className: "absolute inset-0 w-full h-full object-cover brightness-75    transition-all duration-500 group-hover:scale-105    group-hover:brightness-90"
                }, void 0, false, {
                    fileName: "[project]/src/sections/tentang.jsx",
                    lineNumber: 100,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 99,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 h-[40%]   bg-gradient-to-t from-primary/90 via-primary-light/70 to-transparent   dark:from-accent/90 dark:via-accent-light/70 dark:to-transparent   flex flex-col justify-end p-6 backdrop-blur-[2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                        animate: ANIMATION_CONFIG.TEXT_GLOW,
                        className: "text-2xl sm:text-2xl md:text-3xl font-bold text-white    drop-shadow-lg mb-1.5 tracking-tight",
                        children: card.title
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 117,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-white/95 leading-relaxed line-clamp-2",
                        children: card.desc
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 125,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 111,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/tentang.jsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = AboutCard;
function Tentang() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Menentukan apakah user sudah scroll sampai section
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        amount: 0.2,
        once: true
    });
    // Controller animasi framer-motion
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* -----------------------------------------------------------
     DETEKSI MOBILE
     ----------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tentang.useEffect": ()=>{
            const checkMobile = {
                "Tentang.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth < 640)
            }["Tentang.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile, {
                passive: true
            });
            return ({
                "Tentang.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["Tentang.useEffect"];
        }
    }["Tentang.useEffect"], []);
    /* -----------------------------------------------------------
     MULAI ANIMASI SAAT MASUK VIEWPORT
     ----------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tentang.useEffect": ()=>{
            if (inView) controls.start("visible");
        }
    }["Tentang.useEffect"], [
        inView,
        controls
    ]);
    /* -----------------------------------------------------------
     RENDER SECTION TENTANG
     ----------------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tentang",
        ref: ref,
        className: "relative overflow-hidden bg-gradient-to-b    from-bg-base via-bg-soft to-bg-warm transition-colors duration-500 pb-[120px] md:pb-[50px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 -top-px z-20 overflow-hidden pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        x: [
                            "0%",
                            "-50%"
                        ]
                    },
                    transition: {
                        duration: ANIMATION_CONFIG.WAVE.duration,
                        repeat: Infinity,
                        ease: ANIMATION_CONFIG.WAVE.ease
                    },
                    className: "w-[200%]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 1440 80",
                        preserveAspectRatio: "none",
                        className: "w-full h-[60px] sm:h-[80px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "waveGradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            className: "[stop-color:theme(colors.primary.DEFAULT)] [stop-opacity:0.4]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/tentang.jsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "50%",
                                            className: "[stop-color:theme(colors.accent.DEFAULT)] [stop-opacity:0.6]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/tentang.jsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            className: "[stop-color:theme(colors.primary.hover)] [stop-opacity:0.5]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/tentang.jsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/sections/tentang.jsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z",
                                fill: "url(#waveGradient)"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/tentang.jsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 pointer-events-none overflow-hidden",
                children: [
                    {
                        class: "left-[5%] top-[8%] w-40 h-40 bg-primary/8",
                        duration: ANIMATION_CONFIG.BLOB.durations[0]
                    },
                    {
                        class: "right-[8%] top-[25%] w-48 h-48 bg-accent/8",
                        duration: ANIMATION_CONFIG.BLOB.durations[1]
                    },
                    {
                        class: "left-1/2 bottom-[15%] -translate-x-1/2 w-44 h-44 bg-secondary/8",
                        duration: ANIMATION_CONFIG.BLOB.durations[2]
                    }
                ].map((blob, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                i % 2 === 0 ? -15 : 15,
                                0
                            ]
                        },
                        transition: {
                            duration: blob.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: `absolute rounded-full blur-3xl ${blob.class}`
                    }, i, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: ANIMATION_CONFIG.CONTAINER,
                        initial: "hidden",
                        animate: controls,
                        className: "text-center max-w-3xl mx-auto mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                variants: ANIMATION_CONFIG.ITEM,
                                className: "inline-block text-primary font-semibold text-sm sm:text-base    tracking-wider uppercase mb-3",
                                children: "Keunggulan Kami"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                variants: ANIMATION_CONFIG.ITEM,
                                className: "text-3xl sm:text-4xl md:text-5xl font-extrabold    text-text-primary leading-tight mb-4",
                                children: [
                                    "Kenapa Makan",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        animate: ANIMATION_CONFIG.TEXT_GLOW,
                                        className: "text-primary inline-block",
                                        children: "di Gelap Nyawang?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/tentang.jsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: ANIMATION_CONFIG.ITEM,
                                className: "text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto",
                                children: "Tiap sudut Gelap Nyawang punya cerita: dari resep keluarga, inovasi anak muda Bandung, sampai rasa hangat yang susah dilupain."
                            }, void 0, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: ANIMATION_CONFIG.CONTAINER,
                        initial: "hidden",
                        animate: controls,
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
                        children: CARDS_DATA.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutCard, {
                                card: card,
                                isMobile: isMobile
                            }, card.id, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2    w-[250%] md:w-[500%] h-[30px] md:h-[70px]   z-40 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "marquee-right flex h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/Banner.svg",
                            alt: "Banner",
                            className: "w-full h-full object-cover inline-block"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/tentang.jsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/Banner.svg",
                            alt: "Banner",
                            className: "w-full h-full object-cover inline-block"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/tentang.jsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/tentang.jsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/tentang.jsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(Tentang, "Dm5Jxld2Qg6CJ4jLWfXRuz6kQMs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c1 = Tentang;
var _c, _c1;
__turbopack_context__.k.register(_c, "AboutCard");
__turbopack_context__.k.register(_c1, "Tentang");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/umkmData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "UMKM_DATA",
    ()=>UMKM_DATA
]);
const UMKM_DATA = [
    {
        id: 1,
        slug: "blackromantic",
        name: "Black Romantic",
        category: "resto",
        img: "/assets/resto/blackromantic.webp",
        short: "Ayam bakar lezat harga mahasiswa",
        rating: 4.5,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.2, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "08972805004",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.5602520815351!2d107.61084726438854!3d-6.894905621259015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7fe78e41551%3A0xe4973528ca9f3a7b!2sBlack%20Romantic!5e0!3m2!1sen!2sid!4v1762228576232!5m2!1sen!2sid"
    },
    {
        id: 2,
        slug: "bwj",
        name: "Kedai BWJ",
        category: "resto",
        img: "/assets/resto/bwj.webp",
        short: "Menu rumahan sederhana dan murah",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "Ruko Bawah, Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40123",
        noTelp: "089601173847",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.6661213293146!2d107.61016129176576!3d-6.895169452449448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e75524c63b47%3A0x17a99e193aa9759b!2sKEDAI%20BWJ%20(%20BUTTERFLY%20WINGS%20JAVA%20)!5e0!3m2!1sen!2sid!4v1762404448819!5m2!1sen!2sid"
    },
    {
        id: 3,
        slug: "stallone",
        name: "Bebek Stallone",
        category: "resto",
        img: "/assets/resto/stallone.jpg",
        short: "Bebek goreng gurih favorit mahasiswa",
        rating: 4.5,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Gelap Nyawang No.12, RW.04, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082126727277",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.481362861835!2d107.60799263849678!3d-6.895062035463128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a62a66d4f%3A0x58578089d8304e1c!2sBebek%20Stallone!5e0!3m2!1sen!2id!4v1762404596242!5m2!1sen!2sid"
    },
    {
        id: 4,
        slug: "cola",
        name: "Ayam Cola Kabita HC",
        category: "resto",
        img: "/assets/resto/cola.webp",
        short: "Ayam cola unik harga terjangkau",
        rating: 4.6,
        rangeHarga: "Rp 1-25.000",
        alamat: "Ruko Bawah, Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "081321885840",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.48178168613!2d107.60994873849678!3d-6.89496183546261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6505e6e0e8b%3A0x490332ec01160892!2sAyam%20Cola%20Kabita%20HC!5e0!3m2!1sen!2sid!4v1762404710431!5m2!1sen!2sid"
    },
    {
        id: 5,
        slug: "besthal",
        name: "Ayam & Bebek Besthal",
        category: "resto",
        img: "/assets/resto/besthal.webp",
        short: "Ayam bebek gurih porsi melimpah",
        rating: 4.9,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.4, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "081394127035",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4820884857124!2d107.60957663849673!3d-6.89488843546219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e70e0f888deb%3A0x53442f97e61eacf!2sAyam%20%26%20Bebek%20Besthal!5e0!3m2!1sen!2sid!4v1762404848172!5m2!1sen!2sid"
    },
    {
        id: 6,
        slug: "datuak",
        name: "Rumah Makan Pak Datuak",
        category: "resto",
        img: "/assets/resto/datuak.webp",
        short: "Masakan Padang murah dan lengkap",
        rating: 4.8,
        rangeHarga: "Rp 1-25.000",
        alamat: "4J46+385, Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "081281731151",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4822356146042!2d107.60958493849677!3d-6.894853235461992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e650616ac425%3A0x39984aa948901187!2sRumah%20Makan%20Pak%20Datuak!5e0!3m2!1sen!2sid!4v1762407586168!5m2!1sen!2sid"
    },
    {
        id: 7,
        slug: "miesan",
        name: "Mie San GK",
        category: "resto",
        img: "/assets/resto/miesan.webp",
        short: "Mie gurih pedas favorit mahasiswa",
        rating: 5.0,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Gelap Nyawang 12, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082230709593",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4817829400858!2d107.60783653849678!3d-6.894961535462591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e71243124505%3A0xa9c9c6f7d71aedf1!2sMie%20San%20GK!5e0!3m2!1sen!2sid!4v1762407928857!5m2!1sen!2sid"
    },
    {
        id: 8,
        slug: "warmindo",
        name: "Warmindo KSC",
        category: "resto",
        img: "/assets/resto/warmindo.webp",
        short: "Warmindo murah dengan menu lengkap",
        rating: 4.8,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "0895354460602",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5208.444372593425!2d107.60734413754822!3d-6.894571055037678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e71abd094ef7%3A0x8ea1fb1ef9fe9014!2sWarmindo%20KSC!5e0!3m2!1sen!2sid!4v1762408017334!5m2!1sen!2sid"
    },
    {
        id: 9,
        slug: "serbasepuluh",
        name: "Serba Sepuluh Cabang ITB Bandung",
        category: "cemilan",
        img: "/assets/resto/serbasepuluh.webp",
        short: "Cemilan serba murah dekat kampus",
        rating: 4.5,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.1, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "085624091877",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964416624359!2d107.60664257479226!3d-6.894859767471667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b4dbdabc93%3A0xeb300b1ce3c42ae3!2sSerba%20Sepuluh%20Cabang%20ITB%20Bandung!5e0!3m2!1sen!2id!4v1762408094030!5m2!1sen!2sid"
    },
    {
        id: 10,
        slug: "angkringan",
        name: "Angkringan Mas Jo",
        category: "resto",
        img: "/assets/resto/angkringan.webp",
        short: "Angkringan murah dengan suasana tenang",
        rating: 4.6,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082219187723",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9636391779395!2d107.60667787479231!3d-6.894952767472645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a86c04d73%3A0x4c1e37cc2374e8f4!2sAngkringan%20Mas%20Jo!5e0!3m2!1sen!2id!4v1762408149763!5m2!1sen!2sid"
    },
    {
        id: 11,
        slug: "dapurlaut",
        name: "Dapur Laut",
        category: "resto",
        img: "/assets/resto/dapurlaut.webp",
        short: "Seafood segar harga mahasiswa",
        rating: 4.6,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "4J45+2Q7, Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "-",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9636481016846!2d107.609416!3d-6.8949517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a80dd32c1%3A0x3e128d97c8a4830d!2sDapur%20Laut!5e0!3m2!1sen!2sid!4v1762265015704!5m2!1sen!2sid"
    },
    {
        id: 12,
        slug: "komawa",
        name: "Kowawa Kedai Kopi",
        category: "cafe",
        img: "/assets/resto/komawa.webp",
        short: "Kedai kopi cozy buat nugas",
        rating: 4.9,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.5, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "087825412628",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9636890641686!2d107.6094552!3d-6.8949468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7abb91e488d%3A0xd9078f02b4ca34dc!2sKowawa%20Kedai%20Kopi!5e0!3m2!1sen!2sid!4v1762265221274!5m2!1sen!2sid"
    },
    {
        id: 13,
        slug: "koboi",
        name: "Kedai Koboi",
        category: "cafe",
        img: "/assets/resto/koboi.webp",
        short: "Kafe santai bergaya western",
        rating: 4.5,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "08156895549",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9631950045164!2d107.60993099999999!3d-6.8950059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6507e51f6eb%3A0xe85958d5d31ad685!2sKedai%20Koboi!5e0!3m2!1sen!2sid!4v1762265737059!5m2!1sen!2sid"
    },
    {
        id: 14,
        slug: "doamande",
        name: "Warnas Doa Mande",
        category: "resto",
        img: "/assets/resto/doamande.webp",
        short: "Masakan Padang lengkap dan murah",
        rating: 4.2,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082113839267",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.1065983985452!2d107.60913518941679!3d-6.894713903293459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6507e848241%3A0x3a81ce613ee84f08!2sWarnas%20Doa%20Mande!5e0!3m2!1sen!2sid!4v1762266059119!5m2!1sen!2sid"
    },
    {
        id: 15,
        slug: "kebab",
        name: "Kebab Lebanon Abu Salman",
        category: "cemilan",
        img: "/assets/resto/kebab.webp",
        short: "Kebab khas Lebanon murah enak",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "081224443929",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63375.42699679064!2d107.5339188486328!3d-6.894887199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e70077fa0f6b%3A0x79995d0c13249014!2sKebab%20Lebanon%20Abu%20Salman!5e0!3m2!1sen!2sid!4v1762266282163!5m2!1sen!2sid"
    },
    {
        id: 16,
        slug: "prancis",
        name: "Warnas Prancis",
        category: "resto",
        img: "/assets/resto/prancis.webp",
        short: "Warung makan santai ala Prancis",
        rating: 4.7,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "081322648365",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9640853120122!2d107.61026079999999!3d-6.894899399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6507c2f92d3%3A0x9c5d4c9e4c4a58fe!2sWarnas%20Prancis!5e0!3m2!1sen!2sid!4v1762267018450!5m2!1sen!2sid"
    },
    {
        id: 17,
        slug: "nasgor",
        name: "Nasi Goreng Baso Sedap Malam",
        category: "resto",
        img: "/assets/resto/nasgor.webp",
        short: "Nasi goreng malam yang legendaris",
        rating: 4.5,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Ganesa, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "081321738834",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9644456109677!2d107.6102896!3d-6.8948563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e650e7b58a09%3A0xeb759abb4ebb693e!2sNasi%20Goreng%20Baso%20Sedap%20Malam!5e0!3m2!1sen!2sid!4v1762268363505!5m2!1sen!2sid"
    },
    {
        id: 19,
        slug: "thaitea",
        name: "Thaitea Ganesha by Babeh",
        category: "minuman",
        img: "/assets/resto/thaitea.webp",
        short: "Minuman thaitea manis segar",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "4J46+25X Sebrang gerbang utama ITB, Jl. Ganesa No.9, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "-",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964262535909!2d107.6105092!3d-6.8948782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c888b08cc7%3A0x5d912f54de631ff4!2sThaitea%20Ganesha%20by%20Babeh!5e0!3m2!1sen!2sid!4v1762268660423!5m2!1sen!2sid"
    },
    {
        id: 21,
        slug: "asmad",
        name: "Asmad Cafe",
        category: "cafe",
        img: "/assets/resto/asmad.webp",
        short: "Kafe tenang cocok untuk nugas",
        rating: 4.6,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082230709593",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9635051507466!2d107.6110633!3d-6.894968800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65060a5c5d1%3A0xab20c3cc5eabbf93!2sAsmad%20Cafe!5e0!3m2!1sen!2sid!4v1762269236273!5m2!1sen!2sid"
    },
    {
        id: 22,
        slug: "sindang",
        name: "Warung Nasi Sindang Heula",
        category: "resto",
        img: "/assets/resto/sindang.webp",
        short: "Masakan Sunda rumahan yang lengkap",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "Ruko Bawah, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082230709593",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.962797750437!2d107.61152638463513!3d-6.89505341963724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6505bc8a123%3A0x16c7b4fa1566be94!2sWarung%20Nasi%20Sindang%20Heula!5e0!3m2!1sid!2sid!4v1762273427013!5m2!1sid!2sid"
    },
    {
        id: 23,
        slug: "bakmi",
        name: "Bakmie Ganyang",
        category: "resto",
        img: "/assets/resto/bakmi.webp",
        short: "Bakmi gurih dengan topping melimpah",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.2, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082230709593",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9636209353807!2d107.60653328500632!3d-6.89495494967616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e70027ba7413%3A0x51cbd10d12267911!2sBakmie%20Ganyang!5e0!3m2!1sid!2sid!4v1762272959794!5m2!1sid!2sid"
    },
    {
        id: 24,
        slug: "kios",
        name: "Kios Erick",
        category: "lain",
        img: "/assets/resto/kios.webp",
        short: "Kios kebutuhan harian dekat kampus",
        rating: 4.9,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Ciungwanara No.12B, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "085222276222",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964774413378!2d107.60897017590636!3d-6.894816967473554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65057623b83%3A0xc688002f0e288887!2sKios%20Erick.!5e0!3m2!1sid!2sid!4v1762273572749!5m2!1sid!2sid"
    },
    {
        id: 25,
        slug: "mocktail",
        name: "Ganesha Mocktail",
        category: "cafe",
        img: "/assets/resto/mocktail.webp",
        short: "Mocktail segar dengan harga terjangkau",
        rating: 4.4,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "08112326966",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964497861024!2d107.60671458500626!3d-6.894850049675375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6505bfffee3%3A0x11cd863241db4d06!2sGanesha%20Mocktail!5e0!3m2!1sid!2sid!4v1762273804191!5m2!1sid!2sid"
    },
    {
        id: 26,
        slug: "ica",
        name: "Warung Ica",
        category: "resto",
        img: "/assets/resto/ica.webp",
        short: "Masakan rumahan enak dan murah",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "4J46+3J4, Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082126133994",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9643606151076!2d107.60901877590625!3d-6.894866467474042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6505e63ad79%3A0x9d483fdc1b56b546!2sWarung%20Ica!5e0!3m2!1sid!2sid!4v1762275000632!5m2!1sid!2sid"
    },
    {
        id: 27,
        slug: "garden",
        name: "Garden Coffee Bandung",
        category: "cafe",
        img: "/assets/resto/garden.webp",
        short: "Kafe taman cozy penuh lampu",
        rating: 4.6,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Ciungwanara No.10 A, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135",
        noTelp: "087764562458",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9618184077262!2d107.60877657590638!3d-6.895170567477188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6fc6d9b2155%3A0x9b228e028efe3e0e!2sGarden%20Coffee%20Bandung!5e0!3m2!1sid!2sid!4v1762275119974!5m2!1sid!2sid"
    },
    {
        id: 28,
        slug: "nuesara",
        name: "Nuesara Coffee & Habitual",
        category: "cafe",
        img: "/assets/resto/nuesara.webp",
        short: "Kopi enak dengan suasana nyaman",
        rating: 5.0,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Ciungwanara No.10A, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135",
        noTelp: "087764562458",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9613017600295!2d107.60873667590636!3d-6.895232367477794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7432d380281%3A0x2f17fa5105c028bc!2sNuesara%20Coffee%20%26%20Habitual!5e0!3m2!1sid!2sid!4v1762275234584!5m2!1sid!2sid"
    },
    {
        id: 29,
        slug: "cacto",
        name: "Two Point One El cacto",
        category: "cemilan",
        img: "/assets/resto/cacto.webp",
        short: "Kebab lezat dengan cita rasa khas",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "4J36+WF Lb. Siliwangi, Kota Bandung, Jawa Barat",
        noTelp: "082230709593",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9612791879376!2d107.60862977590631!3d-6.895235067477838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7bbfcfa4c0f%3A0x1680716a936ff857!2sTwo%20Point%20One%20El%20cacto!5e0!3m2!1sid!2sid!4v1762276715058!5m2!1sid!2sid"
    },
    {
        id: 30,
        slug: "elvindo",
        name: "PT.ELVINDO ANUGERAH PERKASA",
        category: "lain",
        img: "/assets/resto/elvindo.webp",
        short: "Toko motor elektrik terpercaya",
        rating: 5.0,
        rangeHarga: "Rp 2.000.000-5.000.000",
        alamat: "Jl. Ciungwanara No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082230709593",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.961922907105!2d107.60878137590636!3d-6.895158067477038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7fc81d63f2b%3A0x675d774d951cd1e0!2sPT.ELVINDO%20ANUGERAH%20PERKASA!5e0!3m2!1sid!2sid!4v1762276934794!5m2!1sid!2sid"
    },
    {
        id: 31,
        slug: "sembilan",
        name: "Angka Sembilan Coffee",
        category: "cafe",
        img: "/assets/resto/sembilan.webp",
        short: "Kafe nyaman dengan kopi nikmat",
        rating: 4.8,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Ciungwanara No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "081264282072",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9599515990644!2d107.60881487590635!3d-6.895393867479502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7ca1067a681%3A0xcafa9caeca18b54c!2sAngka%20Sembilan%20Coffee!5e0!3m2!1sid!2sid!4v1762275644944!5m2!1sid!2sid"
    },
    {
        id: 32,
        slug: "kita",
        name: "Warung Nasi Kita | Wanaki",
        category: "resto",
        img: "/assets/resto/kita.webp",
        short: "Warung prasmanan murah dan lengkap",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Ciungwanara No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "085703952428",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.959473392092!2d107.60882847590626!3d-6.8954510674800655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7140b9b583f%3A0x40dc15c61e097cee!2sWarung%20Nasi%20Kita%20%7C%20Wanaki!5e0!3m2!1sid!2sid!4v1762275718984!5m2!1sid!2sid"
    }
];
const CATEGORIES = [
    {
        id: "all",
        label: "Semua",
        icon: "🍽️"
    },
    {
        id: "resto",
        label: "Resto",
        icon: "🍜"
    },
    {
        id: "cafe",
        label: "Kafe",
        icon: "☕"
    },
    {
        id: "cemilan",
        label: "Cemilan",
        icon: "🍪"
    },
    {
        id: "minuman",
        label: "Minuman",
        icon: "🥤"
    },
    {
        id: "lain",
        label: "Lain-lain",
        icon: "🛍️"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/topResto.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopResto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/umkmData.js [app-client] (ecmascript)");
"use client";
;
;
;
;
/*
  Konfigurasi animasi standar untuk fade + slide-up.
  Dipakai untuk item yang muncul satu per satu.
*/ const ANIMATION_CONFIG = {
    ITEM: {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (custom = 0)=>({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.55,
                    delay: custom * 0.05,
                    ease: "easeOut"
                }
            })
    }
};
/*
  Efek glow lembut pada teks — dipakai untuk highlight nama “Paijo”.
*/ const TEXT_GLOW = {
    textShadow: [
        "0 0 0px rgba(229,118,33,0)",
        "0 0 12px rgba(229,118,33,0.35)",
        "0 0 0px rgba(229,118,33,0)"
    ],
    transition: {
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};
/*
  Cek prefensi accessibility user.
  Jika reduce motion aktif, animasi dibuat minimal.
*/ const prefersReducedMotion = ()=>{
    return ("TURBOPACK compile-time truthy", 1) ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : "TURBOPACK unreachable";
};
/*
  Slug UMKM rekomendasi yang ditampilkan di section ini.
  Urutannya menentukan layout kartu.
*/ const FEATURED_SLUGS = [
    "bwj",
    "blackromantic",
    "stallone",
    "cola",
    "besthal",
    "datuak"
];
/*
  Ambil data UMKM berdasarkan slug dan filter yang kosong.
*/ const RESTOS_DATA = FEATURED_SLUGS.map((slug)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMKM_DATA"].find((item)=>item.slug === slug)).filter(Boolean);
_c = RESTOS_DATA;
/*
  Satu kartu resto individual dalam berbagai ukuran:
  - large (utama)
  - medium (kanan atas)
  - small (grid kecil)
*/ const RestoCard = ({ resto, variant = "large", index = 0 })=>{
    const isLarge = variant === "large";
    const isMedium = variant === "medium";
    const reduceMotion = prefersReducedMotion();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: reduceMotion ? 0.2 : 0.5,
            delay: reduceMotion ? 0 : index * 0.08
        },
        className: `relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${isLarge ? "h-[360px] md:h-[420px]" : isMedium ? "h-[220px] md:h-[240px]" : "h-[170px] md:h-[180px]"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/direktori/${resto.slug}`,
            className: "block h-full group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: resto.img,
                        alt: `${resto.name} - ${resto.short}`,
                        loading: "lazy",
                        onError: (e)=>{
                            // fallback jika gambar gagal load
                            e.target.style.backgroundColor = "#f5f5f5";
                        },
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/topResto.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/sections/topResto.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/sections/topResto.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex flex-col justify-end p-5 md:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `font-semibold text-white mb-2 transition-all duration-300 ${isLarge ? "text-2xl md:text-3xl" : isMedium ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`,
                            children: resto.name
                        }, void 0, false, {
                            fileName: "[project]/src/sections/topResto.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 ${reduceMotion ? "!duration-200" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-white/90 mb-3 ${isLarge ? "text-sm md:text-base line-clamp-3" : "text-xs md:text-sm line-clamp-2"}`,
                                    children: resto.short
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/topResto.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "inline-flex items-center gap-1 text-primary font-medium text-sm hover:text-primary/80 transition-colors",
                                    whileHover: reduceMotion ? {} : {
                                        x: 4
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    "aria-label": `Lihat detail ${resto.name}`,
                                    children: "Lihat Detail →"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/topResto.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/topResto.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/topResto.jsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/topResto.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/sections/topResto.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = RestoCard;
function TopResto() {
    const mainResto = RESTOS_DATA[0];
    const topResto = RESTOS_DATA[1];
    const gridRestos = RESTOS_DATA.slice(2, 6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "topResto",
        className: "relative pt-20 md:pt-20 pb-20 md:pb-28 overflow-hidden   bg-gradient-to-b from-bg-warm via-bg-soft to-bg-base   dark:from-bg-warm dark:via-bg-soft dark:to-bg-base   transition-colors duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 flex flex-col gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.35
                            },
                            transition: {
                                duration: 0.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-primary font-semibold mb-2 tracking-wide uppercase text-sm",
                                    children: "Tempat Andalan"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/topResto.jsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold leading-tight mb-4 text-text-primary dark:text-text-secondary",
                                    children: [
                                        "Rekomendasi",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "text-primary inline-block",
                                            animate: TEXT_GLOW,
                                            children: "Paijo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/topResto.jsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/sections/topResto.jsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-muted dark:text-text-secondary/80 text-base md:text-lg max-w-md leading-relaxed",
                                    children: "Kumpulan tempat makan terbaik di Gelap Nyawang yang telah teruji kelezatannya. Pilihan yang tepat untuk memuaskan selera kuliner kamu!"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/topResto.jsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/topResto.jsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RestoCard, {
                            resto: mainResto,
                            variant: "large",
                            index: 1
                        }, void 0, false, {
                            fileName: "[project]/src/sections/topResto.jsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/topResto.jsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 flex flex-col gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RestoCard, {
                            resto: topResto,
                            variant: "medium",
                            index: 2
                        }, void 0, false, {
                            fileName: "[project]/src/sections/topResto.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: gridRestos.map((resto, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RestoCard, {
                                    resto: resto,
                                    variant: "small",
                                    index: 3 + i
                                }, resto.slug, false, {
                                    fileName: "[project]/src/sections/topResto.jsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/sections/topResto.jsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/topResto.jsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/topResto.jsx",
            lineNumber: 176,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/topResto.jsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c2 = TopResto;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RESTOS_DATA");
__turbopack_context__.k.register(_c1, "RestoCard");
__turbopack_context__.k.register(_c2, "TopResto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/caraMakan.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaraMakan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const FADE_UP = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const STAGGER = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};
const STEPS = [
    {
        number: 1,
        title: "Jelajahi Rekomendasi",
        subtitle: "Cari tempat makan"
    },
    {
        number: 2,
        title: "Lihat Detail UMKM",
        subtitle: "Cek menu & harga"
    },
    {
        number: 3,
        title: "Datang ke Lokasi",
        subtitle: "Navigate via Maps"
    }
];
const StepItem = ({ step })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        variants: FADE_UP,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "   bg-primary text-white font-bold   w-10 h-10 sm:w-12 sm:h-12   rounded-full flex items-center justify-center   text-sm sm:text-base md:text-xl shadow-lg   ",
                    "aria-label": `Step ${step.number}`,
                    children: step.number
                }, void 0, false, {
                    fileName: "[project]/src/sections/caraMakan.jsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/sections/caraMakan.jsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   bg-white text-black   dark:bg-bg-base dark:text-text-secondary   pl-14 sm:pl-16 pr-6   py-4 sm:py-5 md:py-6   rounded-full shadow-xl w-full   flex items-center justify-between   text-base sm:text-xl md:text-2xl   transition-colors duration-300   ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-primary whitespace-nowrap mr-4 sm:mr-10",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/src/sections/caraMakan.jsx",
                        lineNumber: 55,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-black/90 dark:text-white/80 whitespace-nowrap",
                        children: step.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/sections/caraMakan.jsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/caraMakan.jsx",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/caraMakan.jsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = StepItem;
function CaraMakan() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "caraMakan",
        className: "   w-full    bg-bg-warm    dark:bg-bg-warm   text-text-primary dark:text-text-secondary    transition-colors duration-500   ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 relative min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    variants: FADE_UP,
                    className: "flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-primary text-6xl sm:text-8xl md:text-9xl mb-10 md:mb-20",
                            "aria-hidden": "true",
                            children: "❝"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/caraMakan.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "   text-2xl sm:text-3xl md:text-4xl   leading-relaxed font-semibold   max-w-full sm:max-w-xl md:max-w-2xl   ",
                            children: "Makan di Gelap Nyawang itu bukan cuma soal rasa. Ini soal suasana malam, obrolan, dan cerita yang selalu berulang."
                        }, void 0, false, {
                            fileName: "[project]/src/sections/caraMakan.jsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/black.png",
                            alt: "Gelap Nyawang Logo",
                            className: "w-24 sm:w-28 md:w-32 mt-12 md:mt-20 opacity-90 block dark:hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/caraMakan.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/logo.png",
                            alt: "Gelap Nyawang Logo Dark",
                            className: "w-24 sm:w-28 md:w-32 mt-12 md:mt-20 opacity-90 hidden dark:block"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/caraMakan.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/caraMakan.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[600px] md:h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/about/t1.jpg",
                            alt: "Background",
                            className: "absolute inset-0 w-full h-full object-cover",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/caraMakan.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   relative z-10 h-full w-full    flex flex-col items-center justify-center    px-4 sm:px-6 md:px-12 py-10    bg-black/40 backdrop-blur-sm    text-white   ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                                    initial: "hidden",
                                    whileInView: "show",
                                    viewport: {
                                        once: true
                                    },
                                    variants: FADE_UP,
                                    className: "w-full max-w-2xl mb-8 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl sm:text-5xl md:text-7xl font-extrabold mb-2",
                                            children: "Cara Explore"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/caraMakan.jsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base sm:text-lg md:text-2xl text-white/90",
                                            children: "Biar gak bingung, ikutin alurnya ya!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/caraMakan.jsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/sections/caraMakan.jsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: STAGGER,
                                    initial: "hidden",
                                    whileInView: "show",
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    className: "space-y-6 w-full max-w-2xl",
                                    children: STEPS.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepItem, {
                                            step: step
                                        }, step.number, false, {
                                            fileName: "[project]/src/sections/caraMakan.jsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/caraMakan.jsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/caraMakan.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/caraMakan.jsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/caraMakan.jsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/caraMakan.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c1 = CaraMakan;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepItem");
__turbopack_context__.k.register(_c1, "CaraMakan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/testimoni.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimoni
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/*
  Dua set testimoni yang dibagi jadi baris atas dan baris bawah.
  Dipisah untuk bikin efek marquee lebih variatif (arah berbeda).
*/ const TESTIMONIALS_TOP = [
    {
        text: "Tempat terbaik buat ngobrol santai abis kelas. Makanannya murah tapi enak banget!",
        name: "Ibnas"
    },
    {
        text: "Memorable banget — tiap hari ke Tamgan, kalau rame ya lanjut ke Ganyang. Hehe.",
        name: "Fira"
    },
    {
        text: "Suasananya khas banget, apalagi pas malam. Lampu-lampunya bikin nyaman.",
        name: "Apay"
    }
];
const TESTIMONIALS_BOTTOM = [
    {
        text: "Tempat yang gak pernah gagal buat nongkrong dan curhat random.",
        name: "Raharjo"
    },
    {
        text: "Makanannya enak, pelayannya ramah. Feels like home!",
        name: "Paijo"
    },
    {
        text: "Tempat favorit buat nugas bareng temen. Kopinya mantap!",
        name: "Athan"
    }
];
/*
  Animasi dasar: fade + slide-up.
  Dipakai di heading dan tiap baris marquee.
*/ const ANIMATION = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
/*
  Hook kecil untuk menyuntikkan style global marquee secara
  dinamis. Tujuannya supaya CSS animation gak ditulis manual
  di file global dan tetap tree-shake friendly.
*/ const useMarqueeStyles = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarqueeStyles.useEffect": ()=>{
            if (typeof document === "undefined") return;
            const existing = document.getElementById("testimoni-styles");
            if (existing) return;
            const style = document.createElement("style");
            style.id = "testimoni-styles";
            style.textContent = `
        @keyframes marquee-left { 0% {transform:translateX(0%)} 100% {transform:translateX(-50%)} }
        @keyframes marquee-right { 0% {transform:translateX(-50%)} 100% {transform:translateX(0%)} }

        .marquee-left { animation: marquee-left 55s linear infinite; }
        .marquee-right { animation: marquee-right 60s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .marquee-left, .marquee-right { animation: none; }
        }
      `;
            document.head.appendChild(style);
        }
    }["useMarqueeStyles.useEffect"], []);
};
_s(useMarqueeStyles, "OD7bBpZva5O2jO+Puf00hKivP7c=");
/*
  Kartu testimoni individual.
  Dibikin reusable dan responsif, plus animasi hover kecil.
*/ const TestimonialCard = ({ text, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-bg-soft dark:bg-bg-warm rounded-2xl p-6 md:p-8 shadow-card    w-[85vw] sm:w-[400px] md:w-[480px] min-h-[260px]   flex flex-col justify-between transition-all duration-300    hover:shadow-xl hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-primary text-4xl mb-4",
                        "aria-hidden": "true",
                        children: "❝"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 76,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base md:text-lg leading-relaxed text-text-primary    dark:text-text-secondary text-center",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 77,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-3 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-primary/15 flex items-center    justify-center text-primary font-bold",
                        "aria-hidden": "true",
                        children: name[0]
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 87,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-text-muted dark:text-text-secondary/80",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 94,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/testimoni.jsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = TestimonialCard;
/*
  Row untuk marquee testimoni.
  Struktur flex dibuat dua kali untuk looping seamless.
*/ const MarqueeRow = ({ testimonials, direction })=>{
    const marqueeClass = direction === "left" ? "marquee-left" : "marquee-right";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-6 w-max ${marqueeClass}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6",
                    children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                            text: t.text,
                            name: t.name
                        }, `${direction}-${i}`, false, {
                            fileName: "[project]/src/sections/testimoni.jsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/sections/testimoni.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6",
                    "aria-hidden": "true",
                    children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                            text: t.text,
                            name: t.name
                        }, `${direction}-dup-${i}`, false, {
                            fileName: "[project]/src/sections/testimoni.jsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/sections/testimoni.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/testimoni.jsx",
            lineNumber: 110,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/sections/testimoni.jsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = MarqueeRow;
function Testimoni() {
    _s1();
    useMarqueeStyles();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimoni",
        className: "relative w-full py-20 md:py-28 overflow-hidden   bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold   dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5 pointer-events-none",
                style: {
                    backgroundImage: "radial-gradient(circle at 20% 50%, rgba(229, 118, 33, 0.1) 0%, transparent 50%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                        variants: ANIMATION,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary font-semibold mb-2 tracking-wide uppercase text-sm",
                                children: "Apa Kata Mereka?"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/testimoni.jsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary",
                                children: [
                                    "Testimoni dari ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "Mahasiswa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/testimoni.jsx",
                                        lineNumber: 175,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/testimoni.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: ANIMATION,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true,
                            amount: 0.15
                        },
                        className: "mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                            testimonials: TESTIMONIALS_TOP,
                            direction: "left"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/testimoni.jsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: ANIMATION,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true,
                            amount: 0.15
                        },
                        className: "mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                            testimonials: TESTIMONIALS_BOTTOM,
                            direction: "right"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/testimoni.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: ANIMATION,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true
                        },
                        className: "w-full h-[1px] bg-gradient-to-r from-transparent    via-primary/40 to-transparent mt-16",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/testimoni.jsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s1(Testimoni, "n9MGITUxERGJbyQ/k7OdQAP3OpA=", false, function() {
    return [
        useMarqueeStyles
    ];
});
_c2 = Testimoni;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TestimonialCard");
__turbopack_context__.k.register(_c1, "MarqueeRow");
__turbopack_context__.k.register(_c2, "Testimoni");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/galeri.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Galeri
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
/*
  Kumpulan foto yang ditampilkan di grid Galeri.
  Masing-masing item punya deskripsi singkat untuk overlay hover.
*/ const GALERI_PHOTOS = [
    {
        src: "/assets/galeri/1.jpeg",
        text: "Warung kecil yang nyimpen cerita anak kos tiap malam."
    },
    {
        src: "/assets/galeri/2.jpeg",
        text: "Dari gelas kopi sampai suara gerobak, semuanya punya nostalgia."
    },
    {
        src: "/assets/galeri/3.jpeg",
        text: "Setiap foto punya suasana; meriah, hangat, dan penuh tawa."
    },
    {
        src: "/assets/galeri/4.jpeg",
        text: "Dapur sederhana yang hidup dari obrolan dan pesanan yang gak pernah berhenti."
    },
    {
        src: "/assets/galeri/5.jpeg",
        text: "Rasa yang nempel karena dibuat pelan-pelan, bukan buru-buru."
    },
    {
        src: "/assets/galeri/6.jpeg",
        text: "Suasana malam Gelap Nyawang itu beda—hangat, riuh, dan ngangenin."
    }
];
/*
  Kartu individual untuk satu item galeri.
  Ada animasi fade-up saat masuk viewport, dan overlay saat hover.
*/ const GalleryCard = ({ item, index })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.7,
            delay: index * 0.05
        },
        className: "group relative overflow-hidden rounded-xl cursor-pointer   transition-all duration-500 ease-in-out will-change-transform   aspect-square",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: item.src,
                alt: `Foto ${index + 1} Gelap Nyawang`,
                fill: true,
                className: "object-cover transition-transform duration-500 ease-in-out   group-hover:scale-105",
                sizes: "(max-width: 768px) 50vw, 33vw",
                loading: index < 2 ? "eager" : "lazy"
            }, void 0, false, {
                fileName: "[project]/src/sections/galeri.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100   bg-primary/70 flex flex-col justify-center items-center    text-white text-center px-4 transition-opacity duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/assets/logo.png",
                        alt: "",
                        width: 112,
                        height: 112,
                        className: "w-20 md:w-28 mb-3",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-sm md:text-lg leading-relaxed",
                        children: item.text
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/galeri.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/galeri.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = GalleryCard;
function Galeri() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "galeri",
        className: "w-full pt-0 pb-32 md:pb-40 relative overflow-visible   bg-gradient-to-b from-bg-gold via-bg-warm to-bg-soft   dark:from-bg-gold dark:via-bg-warm dark:to-bg-soft   transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center mb-12 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h4, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-primary font-semibold mb-3 text-sm tracking-wide uppercase",
                        children: "Dibalik Dapur Gelap Nyawang"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 26
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.1
                        },
                        className: "text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary",
                        children: [
                            "Cerita dari ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Dapur Kami"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/galeri.jsx",
                                lineNumber: 117,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/galeri.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-16",
                children: GALERI_PHOTOS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryCard, {
                        item: item,
                        index: i
                    }, i, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/sections/galeri.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-24 md:h-32   bg-gradient-to-b from-bg-soft via-bg-warm to-bg-gold   dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold   pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/sections/galeri.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/galeri.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c1 = Galeri;
var _c, _c1;
__turbopack_context__.k.register(_c, "GalleryCard");
__turbopack_context__.k.register(_c1, "Galeri");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/lokasi.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lokasi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/*
  Lokasi default Gelap Nyawang ditulis dalam format query Google Maps.
  Dipisah supaya lebih mudah dipakai dan tidak hardcode di iframe.
*/ const MAPS_LOCATION = "Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132";
/*
  Link langsung menuju aplikasi Google Maps (Android/iOS).
  Berbeda dengan iframe embed yang hanya menampilkan peta.
*/ const MAPS_DIRECT_URL = "https://maps.app.goo.gl/kAUnsipvPasm7YzT9";
function Lokasi() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // kontrol loading spinner peta
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "lokasi",
        className: "   w-full    pt-10 md:pt-12    pb-20 md:pb-28    px-6 md:px-10   relative overflow-hidden   bg-gradient-to-b    from-bg-soft via-bg-warm to-bg-gold   dark:from-bg-soft dark:via-bg-warm dark:to-bg-gold   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute top-0 left-0 w-full h-20 md:h-24   bg-gradient-to-b from-bg-gold via-bg-warm to-bg-soft   dark:from-bg-gold dark:via-bg-warm dark:to-bg-soft   pointer-events-none   z-0   ",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative z-10 text-center pt-20 md:pt-24 mb-10 md:mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h4, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-primary font-semibold mb-3 tracking-wide uppercase text-sm",
                        children: "Lokasi Kami"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 26
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.1
                        },
                        className: "   text-3xl sm:text-4xl md:text-5xl font-bold    text-text-primary dark:text-text-secondary   ",
                        children: [
                            "Kunjungi ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Gelap Nyawang"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/lokasi.jsx",
                                lineNumber: 75,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.97
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8
                },
                className: "   relative    w-full    h-[400px] md:h-[500px]    rounded-2xl    overflow-hidden    shadow-xl    bg-bg-soft    dark:bg-bg-base   ",
                children: [
                    !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   absolute inset-0    flex items-center justify-center    bg-bg-soft dark:bg-bg-base    z-10   ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin",
                            role: "status",
                            "aria-label": "Loading map"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/lokasi.jsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: `https://www.google.com/maps?q=${MAPS_LOCATION}&output=embed`,
                        width: "100%",
                        height: "100%",
                        style: {
                            border: 0
                        },
                        loading: "lazy",
                        onLoad: ()=>setLoaded(true),
                        className: "w-full h-full",
                        title: "Lokasi Gelap Nyawang di Google Maps",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 18
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8,
                    delay: 0.2
                },
                className: "mt-8 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: MAPS_DIRECT_URL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "   inline-flex items-center gap-2   px-6 md:px-8 py-3   bg-primary text-white   font-semibold text-base md:text-lg   rounded-full shadow-lg   hover:bg-primary/90 transition-colors   ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/sections/lokasi.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        "Buka di Google Maps"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/lokasi.jsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute bottom-0 left-0 w-full    h-24 md:h-32   bg-gradient-to-b    from-transparent via-bg-warm/50 to-bg-gold    dark:via-bg-warm/50 dark:to-bg-gold   pointer-events-none   ",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/lokasi.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Lokasi, "5HkI/FtSFoHY/ZszUPbNWJy51d0=");
_c = Lokasi;
var _c;
__turbopack_context__.k.register(_c, "Lokasi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/banner.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerDirektori
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function BannerDirektori() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "   w-full pt-6 pb-32 md:pb-40 px-10    bg-bg-gold dark:bg-bg-gold    relative overflow-hidden   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8
                },
                className: "   relative z-10    bg-primary text-white    rounded-2xl p-10 md:p-16    overflow-hidden    min-h-[500px]    flex items-center justify-center   ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                        src: "/assets/banner/left.png",
                        alt: "",
                        initial: {
                            opacity: 0,
                            x: -40
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "   absolute -left-[100px] bottom-0    w-[460px] md:w-[500px] lg:w-[540px]    object-contain pointer-events-none   ",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/banner.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                        src: "/assets/banner/right.png",
                        alt: "",
                        initial: {
                            opacity: 0,
                            x: 40
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "   absolute -right-[100px] bottom-0    w-[460px] md:w-[500px] lg:w-[540px]    object-contain pointer-events-none   ",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/banner.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 text-center w-full max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.75
                                },
                                className: "text-4xl md:text-5xl font-bold mb-6 leading-tight",
                                children: [
                                    "Nikmati Rekomendasi Kuliner",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/sections/banner.jsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    "di ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/95",
                                        children: "Gelap Nyawang"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/banner.jsx",
                                        lineNumber: 90,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/banner.jsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.85,
                                    delay: 0.1
                                },
                                className: "   text-base md:text-xl    text-white/90 mb-8    max-w-4xl mx-auto leading-relaxed   ",
                                children: "Cari tempat makan yang pas, lihat detail UMKM, dan temukan suasana khas Gelap Nyawang yang nggak bakal lu temuin di tempat lain."
                            }, void 0, false, {
                                fileName: "[project]/src/sections/banner.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: "/direktori",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.96
                                },
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.85,
                                    delay: 0.2
                                },
                                className: "   inline-block bg-white text-primary    font-semibold text-base md:text-lg    px-8 py-3 rounded-full    hover:bg-white/90 transition-colors   ",
                                children: "Lihat Direktori"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/banner.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/banner.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/banner.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute bottom-0 left-0 w-full    h-40 md:h-56    bg-gradient-to-b    from-transparent via-bg-warm/70 to-bg-gold    dark:via-bg-warm/70 dark:to-bg-gold    pointer-events-none z-0   ",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/sections/banner.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/banner.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = BannerDirektori;
var _c;
__turbopack_context__.k.register(_c, "BannerDirektori");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
/*
  Footer website menampilkan informasi lokasi, jam buka, sosial media,
  navigasi internal, dan CTA scroll-to-top.
  Struktur dibuat responsif dengan kombinasi grid dan flex.
*/ const FADE_UP = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
/* 
  Navigasi sederhana untuk footer.
  Link merujuk ke bagian dalam halaman utama.
*/ const NAV_LINKS = [
    {
        name: "Beranda",
        link: "#"
    },
    {
        name: "Rekomendasi",
        link: "#topResto"
    }
];
/*
  Kumpulan link sosial media. Dipisah biar mudah dirapikan atau diganti nantinya.
*/ const SOCIAL_LINKS = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/gelapnyawang.culinary/"
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com"
    },
    {
        name: "Tiktok",
        link: "https://www.tiktok.com"
    }
];
/*
  Tombol kembali ke atas halaman dengan efek smooth scroll native.
*/ const scrollToTop = ()=>window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full bg-[#E57621] dark:bg-[#B55610] text-white py-16 px-6 md:px-20 font-sans relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-10 pointer-events-none",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: FADE_UP,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 flex flex-col items-center md:items-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/logo.png",
                                            alt: "Gelap Nyawang Logo",
                                            className: "w-28 md:w-36 object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-2/4 flex flex-col items-center md:items-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base md:text-lg leading-relaxed text-center md:text-left max-w-md text-white/90",
                                            children: "Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. Dari warkop sederhana sampai kafe ber-wifi, semua hadir buat nemenin ngobrol, nugas, atau sekadar nyari suasana tenang."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 flex flex-col items-center md:items-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/mia2025.png",
                                            alt: "MIA 2025 Logo",
                                            className: "w-32 md:w-40 object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer.jsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-white/30 mb-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 text-base md:text-lg mb-12 text-center md:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Lokasi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                className: "not-italic",
                                                children: [
                                                    "Jl. Gelap Nyawang, Lb. Siliwangi,",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 50
                                                    }, this),
                                                    "Kecamatan Coblong, Kota Bandung,",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 49
                                                    }, this),
                                                    "Jawa Barat 40132"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Jam Buka"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "06.00 AM - 01.00 AM"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-label": "Footer navigation",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Navigasi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            NAV_LINKS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item.link,
                                                        className: "hover:underline",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/components/footer.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-label": "Social media",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Media Sosial"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            SOCIAL_LINKS.map((sos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: sos.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "hover:underline",
                                                        children: sos.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this)
                                                }, sos.name, false, {
                                                    fileName: "[project]/src/components/footer.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Kontak"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/6289656054453",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "hover:underline",
                                                    children: "Whatsapp"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-white/30 mb-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto text-center text-sm md:text-base text-white/80 leading-relaxed",
                                children: [
                                    "© 2025 Gelap Nyawang. Website ini dibuat untuk Web Development Competition MIA 2025.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    "Desain & konten dikembangkan oleh tim Gelap Nyawang Creative."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute bottom-0 left-0 w-full h-[6px] bg-white/50 blur-sm opacity-70",
                        animate: {
                            x: [
                                "0%",
                                "20%",
                                "0%"
                            ]
                        },
                        transition: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: scrollToTop,
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.95
                },
                className: "   fixed bottom-6 right-6 z-40    bg-white/25 backdrop-blur-md hover:bg-white/40    text-white p-3 rounded-full shadow-lg    transition-all duration-300   ",
                title: "Kembali ke atas",
                "aria-label": "Scroll to top",
                children: "↑"
            }, void 0, false, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3b928eb8._.js.map