export interface IMainTabs {
  tabs: { value: string; label: string }[];
  activeTab: string;
  setActiveTab: (key: string) => void;
  disabled?: boolean;
}
