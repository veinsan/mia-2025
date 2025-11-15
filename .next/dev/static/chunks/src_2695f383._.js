(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/navDirektori.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavDirektori
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
const MOTION_CONFIG = {
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
const getNavButtonStyles = (darkMode)=>{
    const base = "rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center";
    return darkMode ? `${base} bg-bg-soft text-white` : `${base} bg-bg-base text-text-primary`;
};
const getMenuIconColor = (darkMode)=>darkMode ? "text-white" : "text-text-primary";
const IconToggle = ({ darkMode, rotation, onToggle })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: onToggle,
        className: getNavButtonStyles(darkMode),
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
                    fileName: "[project]/src/components/navDirektori.jsx",
                    lineNumber: 43,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/navDirektori.jsx",
                    lineNumber: 43,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            }, darkMode ? "sun" : "moon", false, {
                fileName: "[project]/src/components/navDirektori.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/navDirektori.jsx",
            lineNumber: 35,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/navDirektori.jsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconToggle;
const MobileDrawer = ({ isOpen, onClose, darkMode, navLinks })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
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
                                href: "/",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: darkMode ? "/assets/logo.png" : "/assets/black.png",
                                    alt: "Logo",
                                    className: "h-9 transition-opacity duration-300",
                                    draggable: "false"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navDirektori.jsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/navDirektori.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-lg hover:bg-bg-soft transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navDirektori.jsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/navDirektori.jsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navDirektori.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-4 mt-6",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: onClose,
                                className: "text-lg font-medium transition-colors py-2 px-3 rounded-lg hover:text-primary hover:bg-bg-soft",
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/src/components/navDirektori.jsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/navDirektori.jsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navDirektori.jsx",
                lineNumber: 61,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/navDirektori.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/navDirektori.jsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = MobileDrawer;
function NavDirektori() {
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [iconChanging, setIconChanging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overlayOpen, setOverlayOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavDirektori.useEffect": ()=>{
            const handleScroll = {
                "NavDirektori.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 32)
            }["NavDirektori.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "NavDirektori.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["NavDirektori.useEffect"];
        }
    }["NavDirektori.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavDirektori.useEffect": ()=>{
            document.documentElement.classList.toggle("dark", darkMode);
        }
    }["NavDirektori.useEffect"], [
        darkMode
    ]);
    const handleToggleMode = ()=>{
        if (iconChanging) return;
        setIconChanging(true);
        setRotation((prev)=>prev + 360);
        setTimeout(()=>{
            setDarkMode((prev)=>!prev);
            setIconChanging(false);
        }, 500);
    };
    const navLinks = [
        {
            id: "home",
            label: "Beranda",
            href: "/"
        },
        {
            id: "kategori",
            label: "Kategori",
            href: "#kategori"
        },
        {
            id: "list",
            label: "Daftar UMKM",
            href: "#list"
        },
        {
            id: "trending",
            label: "Trending",
            href: "#trending"
        }
    ];
    const backgroundColor = scrolled ? darkMode ? "rgba(10,10,10,0.75)" : "rgba(255,255,255,0.75)" : "rgba(0,0,0,0)";
    const blurLevel = scrolled ? 14 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    backgroundColor,
                    backdropFilter: `blur(${blurLevel}px)`,
                    WebkitBackdropFilter: `blur(${blurLevel}px)`,
                    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none"
                },
                transition: MOTION_CONFIG.navContainer,
                className: "flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "flex items-center select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: darkMode ? "/assets/logo.png" : "/assets/black.png",
                            alt: "Logo",
                            className: "h-8 md:h-10 transition-opacity duration-500",
                            draggable: "false"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navDirektori.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navDirektori.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8 font-medium",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: `relative group transition-colors duration-300 ${darkMode ? "text-white" : "text-text-primary"} hover:text-primary`,
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/src/components/navDirektori.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/navDirektori.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 md:gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconToggle, {
                                darkMode: darkMode,
                                rotation: rotation,
                                onToggle: handleToggleMode
                            }, void 0, false, {
                                fileName: "[project]/src/components/navDirektori.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden p-2 rounded-full hover:bg-white/10 transition-colors",
                                onClick: ()=>setOverlayOpen(true),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 22,
                                    className: getMenuIconColor(darkMode)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navDirektori.jsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/navDirektori.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navDirektori.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navDirektori.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileDrawer, {
                isOpen: overlayOpen,
                onClose: ()=>setOverlayOpen(false),
                navLinks: navLinks,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/src/components/navDirektori.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navDirektori.jsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(NavDirektori, "qpqjj8xDutMP86nPctjiOzwOeLA=");
_c2 = NavDirektori;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IconToggle");
__turbopack_context__.k.register(_c1, "MobileDrawer");
__turbopack_context__.k.register(_c2, "NavDirektori");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/footerDirektori.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FooterDirektori
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const FADE_UP = {
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
const NAV_LINKS = [
    {
        name: "Beranda",
        link: "/"
    },
    {
        name: "Direktori",
        link: "/direktori"
    }
];
const SOCIAL_LINKS = [
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
const scrollToTop = ()=>window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
function FooterDirektori() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full bg-[#E57621] dark:bg-[#B55610] text-white py-16 px-6 md:px-20 font-sans relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-10 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footerDirektori.jsx",
                        lineNumber: 30,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/logo.png",
                                        className: "w-28 md:w-36"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "w-full md:w-2/4 text-center md:text-left text-white/90 text-base md:text-lg max-w-md leading-relaxed",
                                        children: "Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. Dari warkop sampai kafe, semua hadir buat nemenin ngobrol, nugas, atau sekadar nyari suasana."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/mia2025.png",
                                        className: "w-32 md:w-40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footerDirektori.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-white/30 mb-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footerDirektori.jsx",
                                lineNumber: 51,
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
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                className: "not-italic",
                                                children: [
                                                    "Jl. Gelap Nyawang, Lb. Siliwangi,",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                                        lineNumber: 58,
                                                        columnNumber: 50
                                                    }, this),
                                                    "Kecamatan Coblong, Bandung",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                                        lineNumber: 59,
                                                        columnNumber: 43
                                                    }, this),
                                                    "Jawa Barat 40132"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Jam Buka"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "06.00 AM - 01.00 AM"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Navigasi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            NAV_LINKS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item.link,
                                                        className: "hover:underline",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/components/footerDirektori.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Media Sosial"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            SOCIAL_LINKS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: s.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "hover:underline",
                                                        children: s.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this)
                                                }, s.name, false, {
                                                    fileName: "[project]/src/components/footerDirektori.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-3",
                                                children: "Kontak"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://wa.me/6289656054453",
                                                target: "_blank",
                                                className: "hover:underline",
                                                children: "Whatsapp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footerDirektori.jsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footerDirektori.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footerDirektori.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-white/30 mb-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footerDirektori.jsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto text-center text-sm md:text-base text-white/80 leading-relaxed",
                                children: "© 2025 Gelap Nyawang. Website ini dibuat untuk Web Development Competition MIA 2025."
                            }, void 0, false, {
                                fileName: "[project]/src/components/footerDirektori.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footerDirektori.jsx",
                        lineNumber: 32,
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
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/footerDirektori.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footerDirektori.jsx",
                lineNumber: 29,
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
                className: "fixed bottom-6 right-6 z-40 bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all",
                children: "↑"
            }, void 0, false, {
                fileName: "[project]/src/components/footerDirektori.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = FooterDirektori;
var _c;
__turbopack_context__.k.register(_c, "FooterDirektori");
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
"[project]/src/app/direktori/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DirektoriPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDirektori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navDirektori.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footerDirektori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footerDirektori.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/umkmData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* =============================
   MOTION VARIANTS
============================= */ const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};
const heroItem = {
    hidden: {
        opacity: 0,
        y: 18
    },
    visible: {
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
const categoriesContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
};
const gridContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08
        }
    }
};
const cardVariant = {
    hidden: {
        opacity: 0,
        y: 18
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
/* =============================
   CARD COMPONENT
============================= */ function UMKMCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/direktori/${item.slug || ""}`,
        className: "block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            variants: cardVariant,
            initial: "hidden",
            animate: "visible",
            className: "   group relative rounded-[14px] overflow-hidden    bg-[var(--bg-base)]   shadow-[0_6px_20px_rgba(0,0,0,0.06)]   hover:shadow-[0_14px_40px_rgba(238,118,13,0.12)]   transition-all duration-300   will-change-transform   ",
            whileHover: {
                y: -6
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-44 md:h-48 lg:h-40 bg-[var(--bg-soft)] overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.img,
                        alt: item.name,
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                        draggable: "false"
                    }, void 0, false, {
                        fileName: "[project]/src/app/direktori/page.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/direktori/page.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base md:text-lg font-semibold text-[var(--text-secondary)] line-clamp-1 group-hover:text-primary",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/direktori/page.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--text-muted)] mt-1 line-clamp-2",
                            children: item.short
                        }, void 0, false, {
                            fileName: "[project]/src/app/direktori/page.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/direktori/page.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/direktori/page.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/direktori/page.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = UMKMCard;
function DirektoriPage() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCat, setActiveCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DirektoriPage.useMemo[filtered]": ()=>{
            const q = query.trim().toLowerCase();
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMKM_DATA"].filter({
                "DirektoriPage.useMemo[filtered]": (u)=>{
                    const matchesCat = activeCat === "all" ? true : u.category === activeCat;
                    const matchesQuery = !q ? true : u.name.toLowerCase().includes(q) || u.short.toLowerCase().includes(q);
                    return matchesCat && matchesQuery;
                }
            }["DirektoriPage.useMemo[filtered]"]);
        }
    }["DirektoriPage.useMemo[filtered]"], [
        query,
        activeCat
    ]);
    const trending = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UMKM_DATA"].slice(0, 4);
    const mainGrid = filtered.slice(0, visibleCount);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-transparent transition-theme",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navDirektori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/direktori/page.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-[var(--bg-gold)] min-h-screen pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: "hidden",
                        animate: "visible",
                        variants: heroContainer,
                        className: "w-full bg-transparent pt-0 pb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: heroItem,
                            className: "   w-full mx-auto   bg-[linear-gradient(180deg,var(--bg-base),#EE760D)]   min-h-[320px]   rounded-b-[50px]   shadow-[inset_0_-25px_40px_rgba(0,0,0,0.06)]   px-6 py-12   flex flex-col items-center    justify-start   overflow-hidden   ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-3xl text-center mt-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight",
                                            children: [
                                                "Temukan Makanan Sehabis Kuliah Favoritmu di",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary",
                                                    children: " Gelap Nyawang"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/direktori/page.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/direktori/page.jsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-base text-[var(--text-secondary)]/90",
                                            children: "Mau cari tempat makan enak? Jelajahi daftar UMKM pilihan di Gelap Nyawang dan temukan menu favoritmu dengan cepat."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/direktori/page.jsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/direktori/page.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-3xl mt-10 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-6 top-1/2 -translate-y-1/2 text-primary",
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/direktori/page.jsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "search",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            placeholder: 'Cari Resto, contoh: "Black Romantic", "Kedai BWJ"...',
                                            className: "   w-full py-4 pl-14 pr-4   rounded-full   bg-[var(--bg-base)]   border border-[var(--border-default)]   text-[var(--text-primary)]   shadow-[0_5px_15px_rgba(0,0,0,0.07)]   focus:shadow-[0_6px_22px_rgba(238,118,13,0.25)]   transition-all outline-none   "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/direktori/page.jsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/direktori/page.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: categoriesContainer,
                                    className: "mt-12 flex flex-wrap justify-center gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>{
                                        const active = cat.id === activeCat;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCat(cat.id),
                                            onMouseMove: (e)=>{
                                                const el = e.currentTarget;
                                                const rect = el.getBoundingClientRect();
                                                const x = e.clientX - rect.left - rect.width / 2;
                                                const y = e.clientY - rect.top - rect.height / 2;
                                                el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) scale(1.08)`;
                                                el.style.boxShadow = `0 25px 45px rgba(238,118,13,0.45)`;
                                            },
                                            onMouseLeave: (e)=>{
                                                const el = e.currentTarget;
                                                el.style.transform = "translate(0px, 0px) scale(1)";
                                                el.style.boxShadow = "0 6px 12px rgba(0,0,0,0.10)";
                                            },
                                            className: `
                      flex flex-col items-center gap-2 
                      w-[95px] py-4
                      bg-[var(--bg-base)]
                      rounded-2xl border
                      transition-all duration-200
                      ${active ? "border-primary text-primary shadow-md" : "border-[var(--border-light)] text-[var(--text-primary)] shadow-sm"}
                    `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl",
                                                    children: cat.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/direktori/page.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: cat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/direktori/page.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, cat.id, true, {
                                            fileName: "[project]/src/app/direktori/page.jsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/direktori/page.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/direktori/page.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/direktori/page.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        id: "list",
                        variants: gridContainer,
                        initial: "hidden",
                        animate: "visible",
                        className: "px-[5%] md:px-[7%] lg:px-[9%] mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: cardVariant,
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-[var(--text-secondary)]",
                                        children: "Tempat-tempat di Gelap Nyawang"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/direktori/page.jsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--text-muted)]/80",
                                        children: [
                                            "Menampilkan ",
                                            mainGrid.length,
                                            " dari ",
                                            filtered.length,
                                            " hasil"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/direktori/page.jsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/direktori/page.jsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: mainGrid.length ? mainGrid.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UMKMCard, {
                                        item: m
                                    }, m.id, false, {
                                        fileName: "[project]/src/app/direktori/page.jsx",
                                        lineNumber: 220,
                                        columnNumber: 35
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-full py-12 text-center text-[var(--text-muted)]",
                                    children: "Belum ada UMKM yang cocok dengan pencarianmu."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/direktori/page.jsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/direktori/page.jsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            visibleCount < filtered.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    onClick: ()=>setVisibleCount(filtered.length),
                                    className: "bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-[#F9B04E] transition-colors",
                                    children: "See All →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/direktori/page.jsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/direktori/page.jsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/direktori/page.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: "visible",
                        variants: heroContainer,
                        className: "px-[5%] md:px-[7%] lg:px-[9%] mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: heroItem,
                            className: "bg-[var(--bg-base)] rounded-2xl p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6",
                                    children: "Trending di Gelap Nyawang"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/direktori/page.jsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: trending.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UMKMCard, {
                                            item: t
                                        }, t.id, false, {
                                            fileName: "[project]/src/app/direktori/page.jsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/direktori/page.jsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/direktori/page.jsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/direktori/page.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/direktori/page.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footerDirektori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/direktori/page.jsx",
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/direktori/page.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(DirektoriPage, "jd9RtctCm1biJ+FIZ0p1Hnckw4I=");
_c1 = DirektoriPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "UMKMCard");
__turbopack_context__.k.register(_c1, "DirektoriPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2695f383._.js.map