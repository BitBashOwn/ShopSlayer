import { FileText, Folder, Home, Upload, User } from "lucide-react";

export type AffiliateNavItem = {
  label: string;
  href: string;
  icon: typeof Home;
  paths: string[];
};

export const affiliateNavItems: AffiliateNavItem[] = [
  {
    label: "Home",
    href: "/affiliate/Mobile_page/mobile",
    icon: Home,
    paths: ["/affiliate/Mobile_page/mobile"],
  },
  {
    label: "Campaigns",
    href: "/affiliate/Mobile_page/mobile",
    icon: FileText,
    paths: ["/affiliate/Mobile_page/mobile/campaign-detail"],
  },
  {
    label: "My Campaigns",
    href: "/affiliate/Mobile_page/mobile/my-campaigns",
    icon: Folder,
    paths: [
      "/affiliate/Mobile_page/mobile/my-campaigns",
      "/affiliate/Mobile_page/mobile/content-brief",
    ],
  },
  {
    label: "Submissions",
    href: "/affiliate/Mobile_page/mobile/submissions",
    icon: Upload,
    paths: [
      "/affiliate/Mobile_page/mobile/campaign-confirmation",
      "/affiliate/Mobile_page/mobile/video-submission",
      "/affiliate/Mobile_page/mobile/submissions",
    ],
  },
  {
    label: "Profile",
    href: "/affiliate/Mobile_page/mobile/profile",
    icon: User,
    paths: ["/affiliate/Mobile_page/mobile/profile"],
  },
];
