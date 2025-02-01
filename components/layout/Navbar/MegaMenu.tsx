"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const MENU_ITEMS = {
  products: {
    title: "Products & Services",
    width: "lg:w-[800px]",
    items: [
      {
        title: "Enterprise Transformation",
        href: "/services/enterprise-transformation",
        subItems: [
          "Customer Loyalty & Rewards Management",
          "AI Driven Credit LifeCycle Automation for Financial Institutions",
          "AI Based Credit Scoring & Modeling",
          "eCommerce & Marketplace",
          "Counseling Management for Educational Institutions",
          "Branding & Marketing",
        ],
      },
      {
        title: "Strategy & Consulting",
        href: "/services/strategy-consulting",
        subItems: [
          "Strategy Formulation & Implementation",
          "Process Re-Engineering & Automation",
          "Business Performance & Growth",
          "Data Analytics",
          "Business Advisory",
        ],
      },
      {
        title: "Learning & Development",
        href: "/services/learning-development",
        subItems: {
          "For Corporates": [
            "Sales, Customer Service & Experience",
            "HR & Communication",
            "Team Building",
            "Strategy Formulation",
          ],
          "For Institutions": [
            "Lean, Six Sigma Training & Certification",
            "Faculty Development Programs",
            "Employability Skills",
          ],
        },
      },
    ],
  },
  industries: {
    title: "Industries",
    width: "lg:w-[600px]",
    items: [
      {
        title: "Financial Services",
        href: "/industries/financial-services",
        subItems: [
          "Banking",
          "Insurance",
          "Investment Services",
          "Fintech Solutions",
        ],
      },
      {
        title: "Retail & Consumer",
        href: "/industries/retail-consumer",
        subItems: [
          "Retail FMCG",
          "E-commerce",
          "Consumer Goods",
          "Luxury & Fashion",
        ],
      },
      {
        title: "Industrial & Manufacturing",
        href: "/industries/industrial-manufacturing",
        subItems: ["Manufacturing", "Automotive", "Oil & Gas", "Gem & Jewelry"],
      },
      {
        title: "Services & Others",
        href: "/industries/services",
        subItems: ["Education", "Healthcare", "Telecom", "Travel & Logistics"],
      },
    ],
  },
  insights: {
    title: "Insights",
    width: "lg:w-[500px]",
    items: [
      {
        title: "Research & Publications",
        href: "/insights/research",
        subItems: [
          "Industry Reports",
          "White Papers",
          "Case Studies",
          "Market Analysis",
        ],
      },
      {
        title: "Knowledge Center",
        href: "/insights/knowledge",
        subItems: [
          "Blog Articles",
          "Webinars",
          "Newsletters",
          "Success Stories",
        ],
      },
    ],
  },
  management: {
    title: "Management Team",
    href: "/management-team",
  },
  contact: {
    title: "Contact us",
    href: "/contact",
  },
};

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <nav className="flex items-center gap-8">
      {Object.entries(MENU_ITEMS).map(([key, menu]) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => menu.items && setActiveMenu(key)}
          onMouseLeave={() => {
            setActiveMenu(null);
            setActiveSubMenu(null);
          }}
        >
          {menu.href ? (
            <Link
              href={menu.href}
              className="py-4 px-2 font-medium text-[15px] text-heading/80 hover:text-heading transition-colors"
            >
              {menu.title}
            </Link>
          ) : (
            <button
              className="flex items-center gap-2 py-4 px-2 font-medium text-[15px] text-heading/80 hover:text-heading transition-colors"
              aria-expanded={activeMenu === key}
            >
              {menu.title}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xs transition-transform duration-300 ${
                  activeMenu === key ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {menu.items && (
            <AnimatePresence>
              {activeMenu === key && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/5 z-40"
                    onClick={() => {
                      setActiveMenu(null);
                      setActiveSubMenu(null);
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full -left-4 bg-white shadow-lg rounded-2xl py-8 ${menu.width} z-50`}
                  >
                    <div className="px-8">
                      <div className="text-xs font-medium text-muted uppercase tracking-wider mb-4">
                        {key === "products"
                          ? "SOLUTIONS FOR BANKING"
                          : "SOLUTIONS"}
                      </div>

                      <div className="flex">
                        {/* Main Menu Column */}
                        <div className="w-64 border-r border-gray-100">
                          {menu.items?.map((item: any) => (
                            <div
                              key={item.title || item.name}
                              onMouseEnter={() =>
                                setActiveSubMenu(item.title || item.name)
                              }
                              className={`group px-4 py-3 cursor-pointer rounded-lg transition-colors ${
                                activeSubMenu === (item.title || item.name)
                                  ? "bg-primary/5 text-primary"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">
                                  {item.title || item.name}
                                </span>
                                {item.subItems && (
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className="text-xs opacity-50"
                                  />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Sub Menu Column */}
                        <div className="flex-1 pl-8">
                          <AnimatePresence mode="wait">
                            {activeSubMenu &&
                              menu.items?.find(
                                (item) =>
                                  (item.title || item.name) === activeSubMenu
                              )?.subItems && (
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 20 }}
                                  transition={{ duration: 0.2 }}
                                  className="py-3"
                                >
                                  {(() => {
                                    const activeItem = menu.items.find(
                                      (item) =>
                                        (item.title || item.name) ===
                                        activeSubMenu
                                    );

                                    if (!activeItem?.subItems) return null;

                                    if (
                                      typeof activeItem.subItems === "object" &&
                                      !Array.isArray(activeItem.subItems)
                                    ) {
                                      return Object.entries(
                                        activeItem.subItems
                                      ).map(([category, items]) => (
                                        <div key={category} className="mb-6">
                                          <h3 className="font-medium text-heading mb-2">
                                            {category}
                                          </h3>
                                          <div className="space-y-2">
                                            {(items as string[]).map(
                                              (subItem) => (
                                                <Link
                                                  key={subItem}
                                                  href={`${
                                                    activeItem.href
                                                  }/${subItem
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")}`}
                                                  className="block text-sm text-muted hover:text-primary transition-colors"
                                                >
                                                  • {subItem}
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      ));
                                    }

                                    return (
                                      <div className="space-y-2">
                                        {(activeItem.subItems as string[]).map(
                                          (subItem) => (
                                            <Link
                                              key={subItem}
                                              href={`${
                                                activeItem.href
                                              }/${subItem
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                              className="block text-sm text-muted hover:text-primary transition-colors"
                                            >
                                              ○ {subItem}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    );
                                  })()}
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
}
