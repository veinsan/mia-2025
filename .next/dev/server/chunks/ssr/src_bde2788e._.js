module.exports = [
"[project]/src/components/nav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* MOTION & ANIMATION CONFIGURATIONS */ const MOTION_CONFIG = {
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
/* STYLE HELPER FUNCTIONS */ const getNavTextColor = (inHero, darkMode)=>{
    if (inHero) return "text-white";
    return darkMode ? "text-white" : "text-text-primary";
};
const getNavButtonStyles = (inHero, darkMode)=>{
    const baseClasses = "rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center";
    if (inHero) return `${baseClasses} bg-white/20 text-white`;
    if (darkMode) return `${baseClasses} bg-bg-soft text-white`;
    return `${baseClasses} bg-bg-base text-text-primary`;
};
const getMenuIconColor = (inHero, darkMode)=>{
    if (inHero) return "text-white";
    return darkMode ? "text-white" : "text-text-primary";
};
const getBlurFilterStyle = (blurLevel)=>({
        backdropFilter: `blur(${blurLevel}px)`,
        WebkitBackdropFilter: `blur(${blurLevel}px)`
    });
/* SUB-COMPONENTS */ const IconToggle = ({ darkMode, rotation, onToggle, inHero })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: onToggle,
        className: getNavButtonStyles(inHero, darkMode),
        animate: {
            rotate: rotation
        },
        transition: MOTION_CONFIG.iconToggle,
        "aria-label": darkMode ? "Switch to light mode" : "Switch to dark mode",
        type: "button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/nav.jsx",
                    lineNumber: 72,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/nav.jsx",
                    lineNumber: 72,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            }, darkMode ? "sun" : "moon", false, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/nav.jsx",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 56,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const NavLink = ({ link, active, inHero, darkMode, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
        href: link.href,
        onClick: onClick,
        className: `relative group transition-colors duration-300 ${getNavTextColor(inHero, darkMode)} ${active === link.id ? "text-primary" : ""}`,
        children: [
            link.label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                layoutId: active === link.id ? "underline" : undefined,
                className: `absolute left-0 right-0 bottom-[-4px] h-[2px] rounded-full ${active === link.id ? "bg-primary" : "bg-primary/0 group-hover:bg-primary/80 transition-all duration-300"}`
            }, void 0, false, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MobileDrawer = ({ isOpen, onClose, navLinks, active, darkMode, onLinkClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                onClick: onClose,
                                "aria-label": "Go to home",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: darkMode ? "/assets/logo.png" : "/assets/black.png",
                                    alt: "Gelap Nyawang Logo",
                                    className: "h-9 transition-opacity duration-300",
                                    draggable: "false"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav.jsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close navigation menu",
                                type: "button",
                                className: "p-2 rounded-lg hover:bg-bg-soft transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav.jsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-4 mt-6",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>onLinkClick(link.id),
                                className: `text-lg font-medium transition-colors py-2 px-3 rounded-lg ${active === link.id ? "text-primary bg-bg-soft" : "hover:text-primary hover:bg-bg-soft"}`,
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 118,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/nav.jsx",
            lineNumber: 109,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Nav() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hero");
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overlayOpen, setOverlayOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [iconChanging, setIconChanging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [inHero, setInHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bgVisible, setBgVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    /* Initialize sections references */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sectionIds = [
            "hero",
            "tentang",
            "topResto",
            "testimoni",
            "galeri",
            "lokasi"
        ];
        sections.current = sectionIds.map((id)=>document.getElementById(id)).filter((el)=>el !== null);
    }, []);
    /* Handle scroll detection */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const y = window.scrollY;
            setScrollY(y);
            const heroHeight = window.innerHeight * 0.8;
            setInHero(y < heroHeight);
            setBgVisible(y > heroHeight * 0.6);
            let current = "hero";
            sections.current.forEach((sec)=>{
                if (sec && y >= sec.offsetTop - 150) {
                    current = sec.id;
                }
            });
            setActive(current);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    /* Handle dark mode class toggle */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [
        darkMode
    ]);
    /* Handle body overflow for mobile drawer */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = overlayOpen ? "hidden" : "";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        overlayOpen
    ]);
    /* Handle dark mode toggle */ const handleToggleMode = ()=>{
        if (iconChanging) return;
        setIconChanging(true);
        setRotation((r)=>r + 360);
        const timer = setTimeout(()=>{
            setDarkMode((prev)=>!prev);
            setIconChanging(false);
        }, 500);
        return ()=>clearTimeout(timer);
    };
    /* Handle mobile menu close */ const handleDrawerClose = ()=>{
        setOverlayOpen(false);
    };
    /* Handle mobile nav link click */ const handleMobileLinkClick = (linkId)=>{
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
        },
        {
            id: "galeri",
            label: "Galeri",
            href: "#galeri"
        },
        {
            id: "lokasi",
            label: "Lokasi",
            href: "#lokasi"
        }
    ];
    /* Compute dynamic background */ const backgroundColor = inHero ? "rgba(0,0,0,0)" : bgVisible ? darkMode ? "rgba(10,10,10,0.75)" : "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.25)";
    const blurLevel = inHero ? 0 : bgVisible ? 14 : 8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        role: "banner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    backgroundColor,
                    ...getBlurFilterStyle(blurLevel),
                    boxShadow: bgVisible && !inHero ? "0 4px 20px rgba(0,0,0,0.08)" : "none"
                },
                transition: MOTION_CONFIG.navContainer,
                className: "flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        className: "flex items-center select-none",
                        "aria-label": "Go to home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
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
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8 font-medium relative",
                        role: "navigation",
                        "aria-label": "Main navigation",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                link: link,
                                active: active,
                                inHero: inHero,
                                darkMode: darkMode,
                                onClick: ()=>setActive(link.id)
                            }, link.id, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 md:gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconToggle, {
                                darkMode: darkMode,
                                rotation: rotation,
                                onToggle: handleToggleMode,
                                inHero: inHero
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden p-2 rounded-full ml-1 hover:bg-white/10 transition-colors",
                                onClick: ()=>setOverlayOpen(true),
                                "aria-label": "Open navigation menu",
                                "aria-expanded": overlayOpen,
                                type: "button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 22,
                                    className: getMenuIconColor(inHero, darkMode)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.jsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav.jsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileDrawer, {
                isOpen: overlayOpen,
                onClose: handleDrawerClose,
                navLinks: navLinks,
                active: active,
                darkMode: darkMode,
                onLinkClick: handleMobileLinkClick
            }, void 0, false, {
                fileName: "[project]/src/components/nav.jsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/nav.jsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/sections/hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ANIMATION & PARALLAX CONFIGURATION */ const ANIMATION_CONFIG = {
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
/* BACKGROUND IMAGES CONFIGURATION */ const BG_IMAGES = [
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
/* GLOW EFFECT CONFIGURATION */ const TEXT_GLOW_EFFECT = {
    textShadow: [
        "0px 0px 0px rgb(229, 118, 33)",
        "0px 0px 20px rgba(229, 118, 33, 0.6)",
        "0px 0px 0px rgb(229, 118, 33)"
    ]
};
function Hero() {
    const fullText = "Wisata kuliner baru di Bandung, mulai dari jajanan sederhana sampai kafe ber-wifi!";
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [typingDone, setTypingDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const layerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    /* SETUP: Mobile Detection */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    /* SETUP: Layer Refs Callback */ const setLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((el, index)=>{
        if (el) layerRefs.current[index] = el;
    }, []);
    /* EFFECT: Typing Animation */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let index = 0;
        let interval;
        let timeoutId;
        interval = setInterval(()=>{
            setDisplayText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                timeoutId = setTimeout(()=>setTypingDone(true), ANIMATION_CONFIG.TYPING.COMPLETION_DELAY);
            }
        }, ANIMATION_CONFIG.TYPING.INTERVAL);
        return ()=>{
            clearInterval(interval);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [
        fullText
    ]);
    /* EFFECT: Parallax on Scroll (RAF) */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let rafId = null;
        const handleParallax = ()=>{
            const scrollY = window.scrollY || window.pageYOffset;
            const base = Math.min(window.innerHeight, 1200 / ANIMATION_CONFIG.PARALLAX.VIEWPORT_RATIO_BASE);
            const visibleRatio = Math.max(0, Math.min(1, scrollY / base));
            // Ngitung dulu di luar loop biar ga ngitung ulang
            const baseTranslateY = -visibleRatio * ANIMATION_CONFIG.PARALLAX.TRANSLATE_MULTIPLIER;
            const baseTranslateX = visibleRatio * ANIMATION_CONFIG.PARALLAX.HORIZONTAL_OFFSET;
            layerRefs.current.forEach((el, i)=>{
                if (!el) return;
                const speed = (i + 1) * ANIMATION_CONFIG.PARALLAX.BASE_SPEED;
                const translateY = baseTranslateY * speed;
                const translateX = baseTranslateX * (i % 2 === 0 ? -1 : 1);
                el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
            });
            if (document.visibilityState === "visible") {
                rafId = requestAnimationFrame(handleParallax);
            }
        };
        const handleVisibilityChange = ()=>{
            if (document.visibilityState === "visible") {
                rafId = requestAnimationFrame(handleParallax);
            }
        };
        rafId = requestAnimationFrame(handleParallax);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>{
            if (rafId) cancelAnimationFrame(rafId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
    /* RENDER: Hero Section */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative flex flex-col justify-center items-center text-center overflow-hidden min-h-screen pt-28 sm:pt-32 md:pt-40 pb-20 px-6 md:px-10 bg-[#0A0A0A] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                "aria-hidden": "true",
                role: "presentation",
                children: [
                    BG_IMAGES.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                src: img.src,
                                alt: "",
                                loading: i === 0 || i === 1 ? "eager" : "lazy",
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
                                    e.target.style.display = "none";
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/sections/hero.jsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        }, `layer-${i}`, false, {
                            fileName: "[project]/src/sections/hero.jsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/hero.jsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto relative z-10 px-3 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-primary inline-block",
                                animate: TEXT_GLOW_EFFECT,
                                transition: ANIMATION_CONFIG.GLOW,
                                children: "Gelap Nyawang"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/hero.jsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "/direktori",
                            whileHover: !isMobile ? {
                                scale: 1.05,
                                boxShadow: "0 8px 28px rgba(229, 118, 33, 0.35)"
                            } : {},
                            whileTap: {
                                scale: 0.97
                            },
                            className: "bg-primary hover:bg-primary/90 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-glow focus:ring-4 focus:ring-primary/40 focus:outline-none transition-all cursor-pointer",
                            "aria-label": "Explore Gelap Nyawang culinary directory",
                            children: "Jelajahi Sekarang"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/hero.jsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/hero.jsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/hero.jsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none",
                "aria-hidden": "true",
                role: "presentation"
            }, void 0, false, {
                fileName: "[project]/src/sections/hero.jsx",
                lineNumber: 341,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/hero.jsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/sections/tentang.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tentang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ANIMATION CONFIGURATION */ const ANIMATION_CONFIG = {
    CONTAINER: {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                when: "beforeChildren"
            }
        }
    },
    ITEM: {
        hidden: {
            opacity: 0,
            y: 12
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: "easeOut"
            }
        }
    },
    WAVE: {
        DURATION: 12
    },
    GLOW_TEXT: {
        DURATION: 3,
        REPEAT: Infinity,
        EASE: "easeInOut"
    },
    BLOB: {
        DURATIONS: [
            6,
            7,
            6.5
        ]
    },
    CARD_HOVER: {
        SCALE: 1.04,
        TRANSLATE_Y: -6
    }
};
/* CARD & VISUAL CONFIGURATION */ const CARDS_DATA = [
    {
        id: "rumahan",
        title: "Rasa Autentik",
        desc: "Setiap sajian di Gelap Nyawang dibuat dengan cita rasa rumahan khas Bandung — sederhana tapi ngangenin.",
        img: "/assets/about/t1.jpg",
        badgeLabel: "Rasa"
    },
    {
        id: "lokal",
        title: "Dari Komunitas Lokal",
        desc: "UMKM di sekitar Gelap Nyawang tumbuh bareng, mendukung satu sama lain demi kuliner yang tetap hidup dan autentik.",
        img: "/assets/about/t2.jpg",
        badgeLabel: "Komunitas"
    },
    {
        id: "cepat",
        title: "Cepat & Nyaman",
        desc: "Mau nongkrong, nugas, atau sekadar makan cepat — suasana di sini selalu bikin betah dan produktif.",
        img: "/assets/about/t3.jpg",
        badgeLabel: "Praktis"
    }
];
const IMAGE_EFFECT = {
    brightness: 0.75,
    hoverBrightness: 1.1
};
const BADGE_COLORS = [
    "bg-primary dark:bg-accent",
    "bg-secondary dark:bg-secondary/80",
    "bg-accent/80 dark:bg-accent"
];
const CARD_SHADOW = [
    "0 6px 20px rgba(229, 118, 33, 0.18)",
    "0 6px 20px rgba(193, 63, 20, 0.14)",
    "0 6px 20px rgba(252, 187, 101, 0.14)"
];
const HOVER_SHADOW = "0 6px 16px rgba(0, 0, 0, 0.12), 0 0 0 2px rgba(229, 118, 33, 0.18)";
/* CARD COMPONENT */ const AboutCard = ({ card, index, isMobile, onHoverChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
        variants: ANIMATION_CONFIG.ITEM,
        whileHover: !isMobile ? {
            scale: ANIMATION_CONFIG.CARD_HOVER.SCALE,
            translateY: -ANIMATION_CONFIG.CARD_HOVER.TRANSLATE_Y,
            boxShadow: HOVER_SHADOW
        } : {},
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 16
        },
        onHoverStart: ()=>!isMobile && onHoverChange(index, true),
        onHoverEnd: ()=>!isMobile && onHoverChange(index, false),
        className: "relative rounded-3xl overflow-hidden shadow-xl bg-bg-base dark:bg-bg-soft transition-all duration-300 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[320px] sm:h-[360px] md:h-[420px] bg-cover bg-center transition-all duration-300 group-hover:brightness-110",
                style: {
                    backgroundImage: `url(${card.img})`,
                    filter: `brightness(${IMAGE_EFFECT.brightness})`
                },
                role: "img",
                "aria-label": `${card.title} image`
            }, void 0, false, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-6 right-6 bottom-6 p-4 rounded-xl bg-gradient-to-t from-black/85 to-transparent backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl md:text-2xl font-semibold text-white mb-1",
                        children: card.title
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-gray-200 mb-3 line-clamp-4",
                        children: card.desc
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-white ${BADGE_COLORS[index]}`,
                        style: {
                            boxShadow: CARD_SHADOW[index]
                        },
                        whileHover: !isMobile ? {
                            scale: 1.08
                        } : {},
                        transition: {
                            duration: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-full bg-white/90"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: card.badgeLabel
                            }, void 0, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/tentang.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function Tentang() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        amount: 0.25,
        once: false
    });
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredCardIndex, setHoveredCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /* Mobile detection */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    /* Reduced motion preference */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mq.matches) {
            controls.set("visible");
        }
    }, [
        controls
    ]);
    /* Animation trigger on scroll */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [
        inView,
        controls
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tentang",
        ref: ref,
        className: "relative overflow-hidden transition-colors duration-500",
        "aria-labelledby": "tentang-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 -top-[2px] pointer-events-none z-20 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        x: [
                            "0%",
                            "-18%",
                            "0%"
                        ]
                    },
                    transition: {
                        duration: ANIMATION_CONFIG.WAVE.DURATION,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    className: "w-[200%]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 1440 80",
                        preserveAspectRatio: "none",
                        className: "w-full h-[80px]",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "waveGradLight",
                                        x1: "0",
                                        x2: "1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#E7C49D",
                                                stopOpacity: "0.4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/tentang.jsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#F5B66E",
                                                stopOpacity: "0.55"
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/tentang.jsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#FFF3E0",
                                                stopOpacity: "0.9"
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/tentang.jsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/tentang.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "waveGradDark",
                                        x1: "0",
                                        x2: "1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#3A0E00",
                                                stopOpacity: "0.45"
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/tentang.jsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#B54B22",
                                                stopOpacity: "0.6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/tentang.jsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#F9B04E",
                                                stopOpacity: "0.75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/tentang.jsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/tentang.jsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,40 C200,80 400,0 720,40 C1040,80 1240,0 1440,40 L1440,0 L0,0 Z",
                                className: "fill-[url(#waveGradLight)] dark:fill-[url(#waveGradDark)]"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/tentang.jsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/tentang.jsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 -z-10 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                -10,
                                0
                            ]
                        },
                        transition: {
                            duration: ANIMATION_CONFIG.BLOB.DURATIONS[0],
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute left-6 top-10 w-36 h-36 rounded-full bg-primary/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                -6,
                                6,
                                -6
                            ]
                        },
                        transition: {
                            duration: ANIMATION_CONFIG.BLOB.DURATIONS[1],
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute right-8 top-24 w-44 h-44 rounded-full bg-accent/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                5,
                                -7,
                                5
                            ]
                        },
                        transition: {
                            duration: ANIMATION_CONFIG.BLOB.DURATIONS[2],
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute left-1/2 -translate-x-1/2 bottom-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/tentang.jsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 bg-gradient-to-b from-bg-base via-bg-soft to-bg-warm dark:from-bg-base dark:via-bg-soft dark:to-bg-warm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 md:px-10 py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: ANIMATION_CONFIG.CONTAINER,
                            initial: "hidden",
                            animate: controls,
                            className: "text-center max-w-3xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h4, {
                                    variants: ANIMATION_CONFIG.ITEM,
                                    className: "text-primary font-semibold tracking-wide mb-2",
                                    children: "Keunggulan Kami"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/tentang.jsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    variants: ANIMATION_CONFIG.ITEM,
                                    id: "tentang-title",
                                    className: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-secondary leading-tight",
                                    children: [
                                        "Kenapa Makan",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "text-primary dark:text-[#F5B66E]",
                                            animate: {
                                                textShadow: [
                                                    "0 0 0 rgb(229, 118, 33)",
                                                    "0 0 10px rgba(229, 118, 33, 0.4)",
                                                    "0 0 0 rgb(229, 118, 33)"
                                                ]
                                            },
                                            transition: {
                                                duration: ANIMATION_CONFIG.GLOW_TEXT.DURATION,
                                                repeat: ANIMATION_CONFIG.GLOW_TEXT.REPEAT,
                                                ease: ANIMATION_CONFIG.GLOW_TEXT.EASE
                                            },
                                            children: "di Gelap Nyawang?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/tentang.jsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/sections/tentang.jsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    variants: ANIMATION_CONFIG.ITEM,
                                    className: "mt-4 text-base md:text-lg text-text-muted dark:text-text-secondary/80 leading-relaxed",
                                    children: "Di kawasan Gelap Nyawang, setiap warung dan kafe punya kisah unik — dari resep turun-temurun sampai inovasi anak muda Bandung yang penuh semangat."
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/tentang.jsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/tentang.jsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: ANIMATION_CONFIG.CONTAINER,
                            initial: "hidden",
                            animate: controls,
                            className: "mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
                            children: CARDS_DATA.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutCard, {
                                    card: card,
                                    index: idx,
                                    isMobile: isMobile,
                                    onHoverChange: setHoveredCardIndex
                                }, card.id, false, {
                                    fileName: "[project]/src/sections/tentang.jsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/sections/tentang.jsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/tentang.jsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/tentang.jsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/tentang.jsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/umkmData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        short: "Black Romantic adalah restoran yang menyediakan berbagai makanan, seperti Iga Bakar, Bebek, Nasgor, dsb.",
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
        short: "lorem ipsum",
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
        img: "/assets/resto/stallone.webp",
        short: "lorem ipsum",
        rating: 4.5,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Gelap Nyawang No.12, RW.04, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082126727277",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.481362861835!2d107.60799263849678!3d-6.895062035463128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a62a66d4f%3A0x58578089d8304e1c!2sBebek%20Stallone!5e0!3m2!1sen!2sid!4v1762404596242!5m2!1sen!2sid"
    },
    {
        id: 4,
        slug: "cola",
        name: "Ayam Cola Kabita HC",
        category: "resto",
        img: "/assets/resto/cola.webp",
        short: "lorem ipsum",
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
        short: "lorem ipsum",
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
        short: "lorem ipsum",
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
        short: "lorem ipsum",
        rating: 5.0,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "Jl. Gelap Nyawang 12, Lb. Siliwangi, Kecamatan Coblong, Jawa, Barat 40132, Kota Bandung, Jawa Barat 40132",
        noTelp: "082230709593",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.4817829400858!2d107.60783653849678!3d-6.894961535462591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e71243124505%3A0xa9c9c6f7d71aedf1!2sMie%20San%20GK!5e0!3m2!1sen!2sid!4v1762407928857!5m2!1sen!2sid"
    },
    {
        id: 8,
        slug: "warmindo",
        name: "Warmindo KSC",
        category: "resto",
        img: "/assets/resto/warmindo.webp",
        short: "lorem ipsum",
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
        img: "/assets/resto/datuak.webp",
        short: "lorem ipsum",
        rating: 4.5,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.1, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "085624091877",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964416624359!2d107.60664257479226!3d-6.894859767471667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b4dbdabc93%3A0xeb300b1ce3c42ae3!2sSerba%20Sepuluh%20Cabang%20ITB%20Bandung!5e0!3m2!1sen!2sid!4v1762408094030!5m2!1sen!2sid"
    },
    {
        id: 10,
        slug: "angkringan",
        name: "Angkringan Mas Jo",
        category: "resto",
        img: "/assets/resto/datuak.webp",
        short: "lorem ipsum",
        rating: 4.6,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.3, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "082219187723",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9636391779395!2d107.60667787479231!3d-6.894952767472645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a86c04d73%3A0x4c1e37cc2374e8f4!2sAngkringan%20Mas%20Jo!5e0!3m2!1sen!2sid!4v1762408149763!5m2!1sen!2sid"
    },
    {
        id: 11,
        slug: "dapurlaut",
        name: "Dapur Laut",
        category: "resto",
        img: "/assets/resto/dapurlaut.webp",
        short: "Dapur Laut adalah restoran seafood di dekat kampus Dago yang terkenal dengan pilihan ikan bakar segar dan harga ramah mahasiswa.",
        rating: 4.6,
        rangeHarga: "Rp 25.000-50.000",
        alamat: "4J45+2Q7, Jl. Gelap Nyawang, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "-",
        mapEmbed: " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9636481016846!2d107.609416!3d-6.8949517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a80dd32c1%3A0x3e128d97c8a4830d!2sDapur%20Laut!5e0!3m2!1sen!2sid!4v1762265015704!5m2!1sen!2sid"
    },
    {
        id: 12,
        slug: "komawa",
        name: "Kowawa Kedai Kopi",
        category: "cafe",
        img: "/assets/resto/komawa.webp",
        short: "Kowawa Kedai Kopi adalah kafe cozy di dekat kampus Dago yang cocok untuk nongkrong santai atau nugas dengan minuman harga ramah dan suasana tenang.",
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
        short: "Kedai Koboi adalah kafe santai bergaya western yang cocok untuk melepas penat sambil menikmati kopi dan camilan ringan dekat area Dago, Bandung.",
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
        short: "Warung Nasi Padang Doa Mande adalah rumah makan Padang yang nyaman di Bandung, menyajikan berbagai pilihan lauk khas dengan harga terjangkau untuk mahasiswa dan pekerja.",
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
        short: "Kebab Lebanon Abu Salman adalah restoran cepat saji di Bandung yang menyajikan kebab dengan resep khas Lebanon, pilihan tepat untuk makan praktis dan nikmat dekat area kampus.",
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
        short: "Warnas Prancis adalah warung makan dengan konsep santai di Dago yang cocok untuk menikmati makanan ala Prancis ringan di suasana kampus.",
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
        short: "Nasi Goreng Baso Sedap Malam adalah warung nasi goreng malam yang populer di area Dago, Bandung—ideal untuk makan malam santai setelah aktivitas kampus.",
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
        short: "Thaitea Ganesha by Babeh adalah kafe bubble tea nyaman di kawasan Ganesha Bandung yang cocok untuk istirahat singkat sambil menikmati minuman kekinian.",
        rating: 5.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "4J46+25X Sebrang gerbang utama ITB, Jl. Ganesa No.9, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "-",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964262535909!2d107.6105092!3d-6.8948782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c888b08cc7%3A0x5d912f54de631ff4!2sThaitea%20Ganesha%20by%20Babeh!5e0!3m2!1sen!2sid!4v1762268660423!5m2!1sen!2sid"
    },
    {
        id: 20,
        slug: "rajawali",
        name: "RAJAWALI STATIONERY",
        category: "lain",
        img: "/assets/resto/rajawali.webp",
        short: "RAJAWALI STATIONERY adalah toko alat tulis yang menyediakan berbagai kebutuhan sekolah dan kampus di Bandung",
        rating: 4.0,
        rangeHarga: "Rp 1-25.000",
        alamat: "Jl. Gelap Nyawang No.2, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
        noTelp: "085714837335",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964405484977!2d107.61070339999999!3d-6.8948611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7ea8d9644ad%3A0xea4b978085a65246!2sRAJAWALI%20STATIONERY!5e0!3m2!1sen!2sid!4v1762268933017!5m2!1sen!2sid"
    },
    {
        id: 21,
        slug: "asmad",
        name: "Asmad Cafe",
        category: "cafe",
        img: "/assets/resto/asmad.webp",
        short: "Asmad Cafe adalah kafe nyaman di Jl. Gelap Nyawang, Bandung yang buka Senin–Sabtu pukul 10.00–19.00 dan menawarkan menu makan dengan harga bersahabat",
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
        short: "Menjual berbagai masakan khas sunda",
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
        short: "Menjual berbagai bakmie dan japanese food",
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
        short: "Sebuah kios yang menjual berbagai kebutuhan dan camilan",
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
        short: "Berbagai macam mocktail dan smoothie menjadi ciri khas cafe ini",
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
        short: "Menjual berbagai makanan khas Indonesia",
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
        short: "Kreasi minuman kopi dan camilan kafe disajikan di tempat penuh lampu dengan taman rindang",
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
        short: "Tempat yang nyaman dan menjual berbagai minuman serta makanan yang terjangkau dan lezat",
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
        short: "Menjual kebab yang khas dan lezat",
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
        short: "Toko Motor Elektrik",
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
        short: "Cafe dengan tempat yang menarik dan nyaman",
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
        short: "Menjual berbagai makanan prasmanan",
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
}),
"[project]/src/sections/topResto.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopResto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/umkmData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ============================================
   ANIMATION CONFIGURATION
   ============================================ */ const ANIMATION_CONFIG = {
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
/* ============================================
   CTA BUTTON COMPONENT
   ============================================ */ const DetailButton = ({ slug, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/direktori/${slug}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: {
                scale: 1.05,
                translateY: -2
            },
            whileTap: {
                scale: 0.95
            },
            className: "mt-3 px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-semibold transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none",
            "aria-label": `Lihat detail ${name}`,
            type: "button",
            children: "Lihat Detail →"
        }, void 0, false, {
            fileName: "[project]/src/sections/topResto.jsx",
            lineNumber: 32,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/sections/topResto.jsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
/* ============================================
   RESTO CARD COMPONENT
   ============================================ */ const RestoCard = ({ resto, variant = "large", custom = 0 })=>{
    const isLarge = variant === "large";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: custom,
        variants: ANIMATION_CONFIG.ITEM,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: false,
            amount: 0.25
        },
        className: `relative group rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${isLarge ? "h-[320px] sm:h-[380px] md:h-[420px]" : variant === "medium" ? "h-[200px] sm:h-[240px] md:h-[280px]" : "h-[140px] sm:h-[160px] md:h-[180px]"}`,
        whileHover: {
            boxShadow: "0 0 30px rgba(229, 118, 33, 0.25)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                src: resto.img,
                alt: resto.name,
                loading: "lazy",
                className: "absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            }, void 0, false, {
                fileName: "[project]/src/sections/topResto.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/sections/topResto.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 p-6 text-white drop-shadow-md ${isLarge ? "sm:p-8" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `font-semibold mb-1.5 line-clamp-2 ${isLarge ? "text-2xl md:text-3xl" : variant === "medium" ? "text-lg md:text-xl" : "text-base md:text-lg"}`,
                        children: resto.name
                    }, void 0, false, {
                        fileName: "[project]/src/sections/topResto.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-white/85 line-clamp-2 mb-3 ${isLarge ? "text-sm md:text-base" : variant === "medium" ? "text-xs md:text-sm" : "text-xs"}`,
                        children: resto.short || resto.desc
                    }, void 0, false, {
                        fileName: "[project]/src/sections/topResto.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm",
                        whileHover: {
                            scale: 1.08
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-300 text-sm",
                                children: "★"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/topResto.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-sm font-semibold",
                                children: resto.rating.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/src/sections/topResto.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/topResto.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailButton, {
                        slug: resto.slug,
                        name: resto.name
                    }, void 0, false, {
                        fileName: "[project]/src/sections/topResto.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/topResto.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/topResto.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function TopResto() {
    // Get top 6 restos sorted by rating
    const topRestos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$umkmData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UMKM_DATA"].filter((item)=>item.category === "resto").sort((a, b)=>b.rating - a.rating).slice(0, 6);
    if (topRestos.length < 6) {
        console.warn("Not enough resto data for TopResto section");
    }
    const mainResto = topRestos[1] || topRestos[0];
    const topResto = topRestos[0];
    const gridRestos = topRestos.slice(2, 6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "topResto",
        className: "relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-bg-warm via-bg-soft to-bg-base dark:from-bg-warm dark:via-bg-soft dark:to-bg-base transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 flex flex-col gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                custom: 0,
                                variants: ANIMATION_CONFIG.ITEM,
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: false,
                                    amount: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary font-semibold mb-2 tracking-wide uppercase text-sm",
                                        children: "Tempat Andalan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/topResto.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl md:text-5xl font-bold leading-tight mb-4 text-text-primary dark:text-text-secondary",
                                        children: [
                                            "Rekomendasi",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
                                                animate: {
                                                    backgroundPosition: [
                                                        "0% 50%",
                                                        "100% 50%",
                                                        "0% 50%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                },
                                                children: "Paijo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/topResto.jsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/topResto.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-text-muted dark:text-text-secondary/80 text-base md:text-lg max-w-md leading-relaxed",
                                        children: "Kumpulan tempat makan terbaik di Gelap Nyawang yang telah teruji kelezatannya. Pilihan yang tepat untuk memuaskan selera kuliner kamu!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/topResto.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/topResto.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            mainResto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RestoCard, {
                                resto: mainResto,
                                variant: "large",
                                custom: 1
                            }, void 0, false, {
                                fileName: "[project]/src/sections/topResto.jsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/topResto.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col gap-10",
                        children: [
                            topResto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RestoCard, {
                                resto: topResto,
                                variant: "medium",
                                custom: 2
                            }, void 0, false, {
                                fileName: "[project]/src/sections/topResto.jsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-6",
                                children: gridRestos.map((resto, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RestoCard, {
                                        resto: resto,
                                        variant: "small",
                                        custom: 3 + i
                                    }, resto.id, false, {
                                        fileName: "[project]/src/sections/topResto.jsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/sections/topResto.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/topResto.jsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/topResto.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-bg-base to-transparent dark:from-bg-base pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/sections/topResto.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/topResto.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/sections/testimoni.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimoni
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Testimoni() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!document.getElementById("testimoni-style")) {
            const style = document.createElement("style");
            style.id = "testimoni-style";
            style.textContent = `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left { animation: marquee-left 55s linear infinite; }
        .animate-marquee-right { animation: marquee-right 60s linear infinite; }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
        .glow { box-shadow: 0 0 25px rgba(229,118,33,0.35); transform: translateY(-4px) scale(1.03); }
        .fade-in { opacity: 0; transform: translateY(30px); transition: all 1s ease-out; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
      `;
            document.head.appendChild(style);
        }
        const section = sectionRef.current;
        const handleGlow = ()=>{
            const cards = section?.querySelectorAll(".review-card");
            if (!cards?.length) return;
            const random = Math.floor(Math.random() * cards.length);
            cards.forEach((c)=>c.classList.remove("glow"));
            cards[random].classList.add("glow");
        };
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                intervalRef.current = setInterval(handleGlow, 6000);
            } else {
                clearInterval(intervalRef.current);
            }
        }, {
            threshold: 0.4
        });
        if (section) observer.observe(section);
        const fadeObserver = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        section?.querySelectorAll(".fade-in").forEach((el)=>fadeObserver.observe(el));
        return ()=>{
            clearInterval(intervalRef.current);
            observer.disconnect();
            fadeObserver.disconnect();
        };
    }, []);
    const reviewsTop = [
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
    const reviewsBottom = [
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
    const Card = ({ text, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "   review-card fade-in bg-bg-soft dark:bg-bg-warm   border border-border-default rounded-2xl p-6 py-8 shadow-card   max-w-[85vw] sm:max-w-[380px] md:max-w-[460px] min-h-[250px]   transform transition-all duration-500 ease-out   hover:-translate-y-1 hover:scale-[1.04] hover:shadow-glow   ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-primary text-4xl mb-3",
                    children: "❝"
                }, void 0, false, {
                    fileName: "[project]/src/sections/testimoni.jsx",
                    lineNumber: 98,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base md:text-lg leading-relaxed text-text-primary dark:text-text-secondary text-center",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/sections/testimoni.jsx",
                    lineNumber: 99,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-3 mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold",
                            children: name[0]
                        }, void 0, false, {
                            fileName: "[project]/src/sections/testimoni.jsx",
                            lineNumber: 103,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-text-muted dark:text-text-secondary/80",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/sections/testimoni.jsx",
                            lineNumber: 106,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/testimoni.jsx",
                    lineNumber: 102,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/testimoni.jsx",
            lineNumber: 89,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "testimoni",
        className: "   relative w-full py-20 overflow-hidden   bg-gradient-to-b from-bg-gold via-bg-soft to-bg-warm   dark:from-bg-base dark:via-bg-soft dark:to-bg-warm   transition-colors duration-500   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-20 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative text-center mb-12 z-10 fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-delius text-xl md:text-2xl font-bold text-primary mb-3",
                        children: "Apa Kata Mereka?"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-3xl md:text-5xl font-bold text-text-primary dark:text-text-secondary",
                        children: [
                            "TESTIMONI DARI",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "MAHASISWA"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/testimoni.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden z-10 fade-in marquee-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex animate-marquee-left w-max space-x-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-6",
                        children: [
                            ...reviewsTop,
                            ...reviewsTop
                        ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                ...r
                            }, i, false, {
                                fileName: "[project]/src/sections/testimoni.jsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/testimoni.jsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden mt-10 z-10 fade-in marquee-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex animate-marquee-right w-max space-x-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-6",
                        children: [
                            ...reviewsBottom,
                            ...reviewsBottom
                        ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                ...r
                            }, i, false, {
                                fileName: "[project]/src/sections/testimoni.jsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/sections/testimoni.jsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/testimoni.jsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fade-in w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-16"
            }, void 0, false, {
                fileName: "[project]/src/sections/testimoni.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/testimoni.jsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/sections/galeri.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Galeri
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Galeri() {
    const photos = [
        {
            src: "/assets/galeri/1.jpeg",
            caption: "Jawa Tidur"
        },
        {
            src: "/assets/galeri/2.jpeg",
            caption: "Orkay Tidur"
        },
        {
            src: "/assets/galeri/3.jpeg",
            caption: "Cepak Tidur"
        },
        {
            src: "/assets/galeri/4.jpeg",
            caption: "Galfish Tidur"
        },
        {
            src: "/assets/galeri/5.jpeg",
            caption: "Kadies Tidur"
        },
        {
            src: "/assets/galeri/6.jpeg",
            caption: "Irgay Tidur"
        }
    ];
    const fadeZoom = (delay = 0)=>({
            hidden: {
                opacity: 0,
                scale: 0.95,
                y: 24
            },
            visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                    delay,
                    duration: 0.7,
                    ease: [
                        0.22,
                        0.8,
                        0.22,
                        1
                    ]
                }
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "galeri",
        className: "   relative py-20 overflow-hidden   bg-gradient-to-b from-bg-gold via-bg-soft to-bg-warm   dark:from-bg-base dark:via-bg-soft dark:to-bg-warm   transition-colors duration-500   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                -16,
                                0
                            ]
                        },
                        transition: {
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute left-[8%] top-[10%] w-40 h-40 bg-primary/10 blur-3xl rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                10,
                                -10,
                                10
                            ]
                        },
                        transition: {
                            duration: 14,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute right-[8%] bottom-[8%] w-48 h-48 bg-accent/10 blur-3xl rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/galeri.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 text-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                        className: "text-4xl md:text-5xl font-heading font-bold text-text-primary dark:text-text-secondary mb-3",
                        children: [
                            "Galeri ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Suasana"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/galeri.jsx",
                                lineNumber: 58,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-muted dark:text-text-secondary/80 mb-12 max-w-xl mx-auto leading-relaxed",
                        children: "Beberapa momen dan sudut favorit pengunjung yang bikin betah berlama-lama di Gelap Nyawang."
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: photos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeZoom(i * 0.1),
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.25
                                },
                                className: "   relative overflow-hidden rounded-2xl shadow-card group    aspect-[4/3] cursor-pointer bg-bg-base dark:bg-bg-soft   hover:shadow-glow transition-all duration-500   ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: p.src,
                                        alt: p.caption,
                                        fill: true,
                                        className: "object-cover transition-transform duration-700 group-hover:scale-110",
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                        loading: "lazy",
                                        placeholder: "blur",
                                        blurDataURL: "/assets/blur-placeholder.jpg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/galeri.jsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute inset-0 flex items-end justify-center p-5   bg-text-primary/70 dark:bg-black/50 opacity-0   group-hover:opacity-100 backdrop-blur-[1px]   transition-opacity duration-500   ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                            initial: {
                                                y: 16,
                                                opacity: 0
                                            },
                                            whileInView: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.1
                                            },
                                            className: "text-white text-lg font-medium tracking-wide",
                                            children: p.caption
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/galeri.jsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/galeri.jsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/sections/galeri.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 0.8
                        },
                        transition: {
                            delay: 0.8,
                            duration: 1
                        },
                        className: "mt-10 text-sm text-text-muted dark:text-text-secondary/70 md:hidden",
                        children: "✦ Tap gambar untuk lihat caption ✦"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/galeri.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/galeri.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/galeri.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/sections/lokasi.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lokasi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Lokasi() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMapLoaded, setIsMapLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                section.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-[1000ms]", "ease-[cubic-bezier(0.22,1,0.36,1)]");
                section.classList.remove("opacity-0", "translate-y-10");
            }
        }, {
            threshold: 0.3
        });
        observer.observe(section);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "lokasi",
        className: "   opacity-0 translate-y-10 py-20 text-center px-8 relative overflow-hidden   bg-gradient-to-b from-bg-gold via-bg-soft to-bg-warm   dark:from-bg-base dark:via-bg-soft dark:to-bg-warm   transition-colors duration-500   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                animate: {
                    opacity: [
                        0.4,
                        0.55,
                        0.4
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "   absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[50%]   bg-gradient-to-b from-bg-gold/60 to-transparent   rounded-full blur-3xl   "
            }, void 0, false, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-4xl font-heading text-primary dark:text-accent mb-6",
                        children: "Kunjungi Lokasi Kami"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0.2
                        },
                        viewport: {
                            once: true
                        },
                        className: "   text-text-muted dark:text-text-secondary/80   text-lg max-w-2xl mx-auto leading-relaxed   ",
                        children: "Langsung datang dan nikmati suasana kuliner khas Gelap Nyawang — tempat nongkrong favorit mahasiswa ITB."
                    }, void 0, false, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto mt-10",
                children: [
                    !isMapLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   absolute inset-0 flex items-center justify-center   bg-bg-soft dark:bg-bg-base   rounded-2xl overflow-hidden shadow-card   ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-pulse text-primary/70 dark:text-accent/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 border-4 border-primary/40 border-t-primary rounded-full animate-spin mx-auto mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/lokasi.jsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    children: "Memuat peta..."
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/lokasi.jsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/lokasi.jsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.96
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        viewport: {
                            once: true
                        },
                        className: "   w-full sm:h-[400px] md:h-[450px]   rounded-2xl overflow-hidden   shadow-card hover:shadow-glow   transition-shadow duration-500   ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: "https://www.google.com/maps?q=Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132&output=embed",
                            width: "100%",
                            height: "100%",
                            style: {
                                border: 0
                            },
                            loading: "lazy",
                            title: "Lokasi Gelap Nyawang Bandung",
                            referrerPolicy: "no-referrer-when-downgrade",
                            onLoad: ()=>setIsMapLoaded(true)
                        }, void 0, false, {
                            fileName: "[project]/src/sections/lokasi.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/lokasi.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                href: "https://maps.app.goo.gl/kAUnsipvPasm7YzT9",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: {
                    scale: 1.06,
                    textShadow: "0 0 8px rgba(229,118,33,0.4)"
                },
                whileTap: {
                    scale: 0.96
                },
                transition: {
                    duration: 0.3
                },
                className: "   inline-block mt-10 text-primary dark:text-accent font-semibold   hover:text-secondary transition-colors text-lg relative z-10   ",
                children: "📍 Buka di Google Maps"
            }, void 0, false, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute bottom-0 left-0 w-full h-[220px]   bg-gradient-to-b from-transparent via-primary/50 to-secondary/70   dark:via-accent/50 dark:to-primary/60   pointer-events-none transition-colors duration-500   "
            }, void 0, false, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute bottom-0 left-0 w-full h-[6px]   bg-gradient-to-r from-transparent via-primary/50 to-transparent   blur-sm opacity-70   "
            }, void 0, false, {
                fileName: "[project]/src/sections/lokasi.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/lokasi.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/sections/banner.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Banner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Banner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "kontak",
        className: "   relative bg-bg-gold dark:bg-bg-soft text-text-primary dark:text-text-secondary   rounded-2xl mx-6 md:mx-16 lg:mx-24 my-20 overflow-hidden shadow-card   transition-colors duration-500   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/assets/banner/left.png",
                alt: "Suasana Gelap Nyawang kiri",
                className: "absolute -left-16 bottom-0 w-[320px] md:w-[420px] lg:w-[480px] object-contain opacity-25 pointer-events-none select-none"
            }, void 0, false, {
                fileName: "[project]/src/sections/banner.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/assets/banner/right.png",
                alt: "Suasana Gelap Nyawang kanan",
                className: "absolute -right-16 bottom-0 w-[320px] md:w-[420px] lg:w-[480px] object-contain opacity-25 pointer-events-none select-none"
            }, void 0, false, {
                fileName: "[project]/src/sections/banner.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 py-20 px-6 md:px-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight",
                        children: [
                            "Nikmati ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Cita Rasa Lokal"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/banner.jsx",
                                lineNumber: 36,
                                columnNumber: 19
                            }, this),
                            " di",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-secondary",
                                children: "Gelap Nyawang"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/banner.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/banner.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "   text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10   leading-relaxed text-text-secondary/90 dark:text-text-secondary   ",
                        children: "Temukan pengalaman kuliner yang memadukan rasa autentik, suasana hangat, dan keramahan khas Bandung — hanya di kawasan legendaris Gelap Nyawang."
                    }, void 0, false, {
                        fileName: "[project]/src/sections/banner.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.1
                        },
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "https://wa.me/6289656054453",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.96
                            },
                            className: "   bg-primary text-white font-semibold px-8 py-3 rounded-full   text-base md:text-lg shadow-glow hover:bg-secondary   transition-all duration-300   ",
                            children: "Hubungi Kami"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/banner.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/banner.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/banner.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute bottom-0 left-0 w-full h-[140px]   bg-gradient-to-b from-transparent via-primary/40 to-secondary/70   dark:via-accent/50 dark:to-primary/60   pointer-events-none transition-colors duration-500   "
            }, void 0, false, {
                fileName: "[project]/src/sections/banner.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/banner.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/footer.jsx
__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Footer() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const footer = document.querySelector("footer");
        const observer = new IntersectionObserver(([entry])=>{
            controls.start(entry.isIntersecting ? "visible" : "hidden");
        }, {
            threshold: 0.2
        });
        observer.observe(footer);
        return ()=>observer.disconnect();
    }, [
        controls
    ]);
    const fadeUp = {
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
    const scrollToTop = ()=>window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "   relative w-full font-sans overflow-hidden   bg-gradient-to-b from-[var(--bg-warm)] via-[var(--bg-gold)] to-[var(--bg-soft)]   dark:from-[var(--bg-soft)] dark:via-[var(--bg-warm)] dark:to-[var(--bg-base)]   text-text-primary dark:text-text-secondary   py-14 px-6 sm:px-10 md:px-20   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/grain-texture.png')] bg-repeat opacity-15 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: fadeUp,
                initial: "hidden",
                animate: controls,
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-12 gap-10 md:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center md:items-start w-full md:w-1/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/logo.png",
                                    alt: "Gelap Nyawang Logo",
                                    className: "w-24 md:w-32 object-contain mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-relaxed text-text-primary/90 dark:text-text-secondary/90 max-w-lg tracking-wide",
                                    children: "Gelap Nyawang Culinary, spot kuliner favorit mahasiswa ITB. Dari warkop sederhana sampai kafe ber-wifi, semua hadir buat nemenin ngobrol, nugas, atau sekadar nyari suasana tenang."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center md:items-end w-full md:w-1/5 mt-4 md:mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/mia2025.png",
                                    alt: "MIA 2025 Logo",
                                    className: "w-28 md:w-36 object-contain mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer.jsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-border-light/50 mb-10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-10 text-sm sm:text-base mb-10 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-2 text-primary",
                                        children: "Lokasi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Jl. Gelap Nyawang, Lb. Siliwangi,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 90,
                                                columnNumber: 48
                                            }, this),
                                            "Kecamatan Coblong, Kota Bandung,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 91,
                                                columnNumber: 47
                                            }, this),
                                            "Jawa Barat 40132"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-2 text-primary",
                                        children: "Jam Buka"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "06.00 AM – 01.00 AM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-2 text-primary",
                                        children: "Navigasi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1",
                                        children: [
                                            {
                                                name: "Beranda",
                                                link: "#"
                                            },
                                            {
                                                name: "Tentang",
                                                link: "#tentang"
                                            },
                                            {
                                                name: "Rekomendasi",
                                                link: "#topResto"
                                            },
                                            {
                                                name: "Suasana",
                                                link: "#galeri"
                                            },
                                            {
                                                name: "Testimoni",
                                                link: "#testimoni"
                                            },
                                            {
                                                name: "Lokasi",
                                                link: "#lokasi"
                                            }
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: item.link,
                                                    className: "relative group hover:text-primary transition-all duration-300 inline-block",
                                                    children: [
                                                        item.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer.jsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-2 text-primary",
                                        children: "Media Sosial"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1",
                                        children: [
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
                                        ].map((sos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: sos.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "relative group hover:text-primary transition-all duration-300 inline-block",
                                                    children: [
                                                        sos.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-2 text-primary",
                                        children: "Kontak"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/6289656054453",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "relative group hover:text-primary transition-all duration-300 inline-block",
                                        children: [
                                            "Whatsapp",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer.jsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-border-light/50 mb-8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto text-center text-xs sm:text-sm md:text-base text-text-muted dark:text-text-secondary/80 tracking-wide leading-relaxed",
                        children: [
                            "© 2025 Gelap Nyawang. Website ini dibuat untuk Web Development Competition MIA 2025.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            "Desain & konten dikembangkan oleh tim Gelap Nyawang Creative."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 blur-sm opacity-80",
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
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: scrollToTop,
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.95
                },
                className: "   fixed bottom-6 right-6 z-40   bg-primary/20 backdrop-blur-md hover:bg-primary/40   text-text-primary dark:text-text-secondary   p-3 rounded-full shadow-lg   transition-all duration-300   ",
                title: "Kembali ke atas",
                children: "↑"
            }, void 0, false, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/footer.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_bde2788e._.js.map